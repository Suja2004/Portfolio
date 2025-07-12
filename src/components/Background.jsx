import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { pointsInner, pointsOuter } from "./utils";

const ScrollControlledCamera = () => {
    const [scrollRatio, setScrollRatio] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            setScrollRatio(window.scrollY / maxScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useFrame(({ camera }) => {
        const angle = scrollRatio * (Math.PI / 2);
        const radius = -10;
        camera.position.x = 0;
        camera.position.y = Math.sin(angle) * radius;
        camera.position.z = Math.cos(angle) * radius;

        camera.lookAt(0, 0, 0);
    });


    return null;
};

const ParticleRing = () => {
    return (
        <div className="relative">
            <Canvas
                camera={{ position: [0, 0, -10] }}
                style={{ height: "100vh" }}
            >
                <ScrollControlledCamera />

                <ambientLight intensity={0.3} />
                <pointLight position={[-30, 0, -30]} intensity={1.0} />
                <PointCircle />
            </Canvas>
        </div>
    );
};

const PointCircle = () => {
    const ref = useRef();
    const allPoints = [...pointsInner, ...pointsOuter];

    useFrame(({ clock }) => {
        if (ref.current) {
            ref.current.rotation.z = clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <group ref={ref}>
            <InstancedPoints points={allPoints} />
        </group>
    );
};

const InstancedPoints = ({ points }) => {
    const meshRef = useRef();
    const dummy = new THREE.Object3D();

    useEffect(() => {
        const color = new THREE.Color();
        const colors = [];

        points.forEach((point, i) => {
            dummy.position.set(...point.position);
            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);

            color.set(point.color);
            colors.push(color.r, color.g, color.b);
        });

        meshRef.current.instanceMatrix.needsUpdate = true;
        meshRef.current.geometry.setAttribute(
            "color",
            new THREE.InstancedBufferAttribute(new Float32Array(colors), 3)
        );
    }, [points]);

    return (
        <instancedMesh ref={meshRef} args={[null, null, points.length]}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshStandardMaterial vertexColors emissiveIntensity={0.5} roughness={0.5} />
            <meshStandardMaterial
                vertexColors
                emissiveIntensity={3}
                emissive="#3cf"
                roughness={0.2}
                metalness={0.5}
            />

        </instancedMesh>
    );
};

export default ParticleRing;
