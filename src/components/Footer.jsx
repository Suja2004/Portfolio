import GradientText from "./GradientText";

const Footer = () => {
    return (
        <footer className="footer">
            <GradientText
                colors={["#3cf", "#cf3", "#3cf", "#cf3"]}
                animationSpeed={10}
                showBorder={false}
                className="custom-class"
            >
                &copy; 2025 Sujan Kumar K. All rights reserved.
            </GradientText>

        </footer>
    );
};

export default Footer;
