/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#D9BCA9",
                "primary-darker": "#9d846b",
                "secondary": "#7C4E29",
                "background": "#4D331F",
                "background-2": "#573921",
                "background-darker":"#533824",
                "accent": "#A44A0C"
            },
            fontFamily: {
                dmsans: ["DM Sans", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
                blackops: ["Black Ops One", "sans-serif"]
            },
            backgroundImage: {
                bgtext: "url('./assets/images/dream-big-high-resolution-logo-transparent.png')"
            }
        },
        screens: {
            xs: "480px",
            sm: "768px",
            md: "1060px"
        }
    },
    plugins: [],
}