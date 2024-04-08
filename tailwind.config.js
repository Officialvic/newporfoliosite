/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./node_modules/tw-elements/js/**/*.js"],
    theme: {
        extend: {
            container: {
                padding: "4rem",
            },
            fontSize: {
                sm: "0.8rem",
                base: "1rem",
                xl: "1.25rem",
                "2xl": "1.563rem",
                "3xl": "1.953rem",
                "4xl": "2.441rem",
                "5xl": "3.052rem",
            },
            fontFamily: {
                sans: ["Montserrat", "sans-serif"],
            },
            colors: {
                primary: "#0D1282",
                secondary: "#5271FF",
                light: "#ffffff",
                action: "#F0DE36",
                texture: "#D71313",
                green: "#2f6410",
                gray: "#EEEDED",
            },
            backgroundImage: {
                "hero-pattern": "url('/img/MILLs_89.jpg')",
                "footer-texture": "url('/img/footer-texture.png')",
            },
        },
    },
    plugins: [require("daisyui"), require("tw-elements/plugin.cjs")],
    darkMode: "class",

    // daisyUI config (optional - here are the default values)
    // daisyui: {
    //     themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    //     darkTheme: "dark", // name of one of the included themes for dark mode
    //     base: true, // applies background color and foreground color for root element by default
    //     styled: true, // include daisyUI colors and design decisions for all components
    //     utils: true, // adds responsive and modifier utility classes
    //     prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    //     logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    //     themeRoot: ":root", // The element that receives theme color CSS variables
    // },
};
