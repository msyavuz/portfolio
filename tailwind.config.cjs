/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
            colors: {
                sqlblue: "#306692",
                reactblue: "#5ccfee",
                windblue: "#00b7d6",
                prismablue: "#0c354b",
            },
        },
    },
    plugins: [],
};
