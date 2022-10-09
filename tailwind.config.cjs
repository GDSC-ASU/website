const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {},
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            blue: "#4285F4",
            red: "#EA4335",
            yellow: "#FBBC04",
            green: "#34A853",
        },
    },
    plugins: [],
}
