/** @type {import('tailwindcss').Config} */
const configs = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                "fade-in": "fadeIn 0.5s ease both",
                "fade-in-down": "fadeInDown 0.5s ease both",
                "zoom-in": "zoomIn 0.5s ease both",
            },
            keyframes: {
                zoomIn: {
                    from: { opacity: 0, transform: "scale(0.1)" },
                    to: { opacity: 1, transform: "scale(1)" },
                },
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
                fadeInDown: {
                    from: { opacity: 0, transform: "translateY(20px)" },
                    to: { opacity: 1, transform: "translateY(0px)" },
                },
            },
            fontFamily: {
                serif: ["Georgia", "Times New Roman", "serif"],
                darleston: ['"Darleston"', "cursive"],
                itim: ['"Itim"', "cursive"],
            },
            colors: {
                pink: "#FFC0CB",
                white: "#FFFFFF",
            },
        },
    },
};
export default configs;
