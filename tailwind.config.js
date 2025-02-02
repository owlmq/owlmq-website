/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navbar: "rgba(var(--navbar))",
                background: "rgba(var(--background))",
                textcolor: "rgba(var(--textcolor))",
            }
        },
    },
    plugins: [],
    darkMode: "class",
}

