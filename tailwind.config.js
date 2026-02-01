/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'coc-green': '#51C878',
                'coc-blue': '#0047FF',
            },
        },
    },
    plugins: [],
}
