import React, { useState, useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ScrollControlledCamera = ({ scrollRatio }) => {
    const camRef = useRef();

    useFrame(({ camera }) => {
        if (!camRef.current) return;

        camRef.current.position.z = -100;

        camRef.current.position.x = Math.sin(scrollRatio * Math.PI) * 8;
        camRef.current.position.y = scrollRatio * 5;

        camRef.current.lookAt(0, 0, 0);
        camera.copy(camRef.current);
    });

    return <perspectiveCamera ref={camRef} fov={70} position={[0, 0, -100]} />;
};


const generateGalaxyPoints = (count = 12000, branches = 10, radius = 40) => {
    const points = [];

    for (let i = 0; i < count; i++) {
        const branch = i % branches;
        const angle = (i / count) * Math.PI * 10;
        const distance = Math.pow(Math.random(), 0.7) * radius;
        const spin = distance * 5;

        const branchAngle = branch * ((2 * Math.PI) / branches);
        const spinAngle = angle + branchAngle + spin;
        const randomRadius = Math.random() * 3;
        const randomAngle = Math.random() * Math.PI * 2;

        const x = Math.cos(spinAngle) * distance + Math.cos(randomAngle) * randomRadius;
        const y = (Math.random() - 0.5) * Math.pow(1 - distance / radius, 2) * 4;
        const z = Math.sin(spinAngle) * distance + Math.sin(randomAngle) * randomRadius;

        const color = new THREE.Color();
        const distanceRatio = distance / radius;

        const rand = Math.random();

        if (distanceRatio < 0.2) {
            color.setHSL(0.12 + Math.random() * 0.05, 0.8, 0.7 + Math.random() * 0.2);
        } else if (distanceRatio < 0.4) {
            color.setHSL(0.7 + Math.random() * 0.05, 0.7, 0.5 + Math.random() * 0.15);

        } else if (distanceRatio < 0.6) {
            color.setHSL(0.33 + Math.random() * 0.05, 0.7, 0.6 + Math.random() * 0.15);
        } else if (rand < 0.02) {
            color.setHSL(0, 0, 0.9 + Math.random() * 0.1);
        } else {
            color.setHSL(0.55 + Math.random() * 0.05, 0.8, 0.6 + Math.random() * 0.15);

        }


        const size = distanceRatio < 0.3
            ? 0.08 + Math.random() * 0.12
            : 0.04 + Math.random() * 0.06;

        points.push({ position: [x, y, z], color, size });
    }

    return points;
};

const PointGalaxy = ({ scrollRatio }) => {
    const ref = useRef();
    const points = useMemo(() => generateGalaxyPoints(), []);

    useFrame(({ clock }) => {
        if (ref.current) {
            ref.current.rotation.y = clock.getElapsedTime() * 0.15;
            const maxTilt = -Math.PI / 4;
            ref.current.rotation.x = scrollRatio * maxTilt;
        }
    });

    return (
        <group ref={ref}>
            <InstancedPoints points={points} />
            <StarField />
        </group>
    );
};

const InstancedPoints = ({ points }) => {
    const meshRef = useRef();
    const dummy = new THREE.Object3D();

    useEffect(() => {
        if (!meshRef.current) return;
        const colors = [];

        points.forEach((point, i) => {
            dummy.position.set(...point.position);
            dummy.scale.setScalar(point.size);
            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);
            colors.push(point.color.r, point.color.g, point.color.b);
        });

        meshRef.current.instanceMatrix.needsUpdate = true;
        meshRef.current.geometry.setAttribute(
            "color",
            new THREE.InstancedBufferAttribute(new Float32Array(colors), 3)
        );
    }, [points]);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.material.emissiveIntensity = 1.5 + Math.sin(clock.getElapsedTime() * 2) * 0.3;
        }
    });

    return (
        <instancedMesh ref={meshRef} args={[null, null, points.length]}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial
                vertexColors
                transparent
                opacity={0.95}
                depthWrite={false}
            />
        </instancedMesh>
    );

};

const StarField = () => {
    const starsRef = useRef();
    const stars = useMemo(() => {
        const positions = [];
        for (let i = 0; i < 2000; i++) {
            const x = (Math.random() - 0.5) * 300;
            const y = (Math.random() - 0.5) * 300;
            const z = (Math.random() - 0.5) * 300;
            positions.push(x, y, z);
        }
        return new Float32Array(positions);
    }, []);

    useFrame(({ clock }) => {
        if (starsRef.current) {
            starsRef.current.rotation.y = clock.getElapsedTime() * 0.005;
        }
    });

    return (
        <points ref={starsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={stars.length / 3}
                    array={stars}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.15}
                color="#ffffff"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
};

const CosmicBackground = () => {
    const [scrollRatio, setScrollRatio] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
            setScrollRatio(ratio);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="background"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1
            }}>
            <Canvas
                style={{ width: '100%', height: '100%' }}
                gl={{
                    antialias: true,
                    alpha: false,
                    powerPreference: "high-performance"
                }}
                dpr={[1, 2]}
            >
                <color attach="background" args={["#000000"]} />
                <fog attach="fog" args={["#000814", 60, 150]} />
                <ScrollControlledCamera scrollRatio={scrollRatio} />
                <ambientLight intensity={0.3} />
                <pointLight position={[50, 50, 50]} intensity={1} color="#4da6ff" />
                <pointLight position={[-50, -50, -50]} intensity={0.5} color="#b366ff" />
                <PointGalaxy scrollRatio={scrollRatio} />
            </Canvas>
        </div>
    );
};

export default CosmicBackground;