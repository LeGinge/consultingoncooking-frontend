/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'coc-green': '#22C55E',
                'coc-blue': '#2563EB',
                'coc-green-dark': '#16A34A',
                'coc-blue-dark': '#1D4ED8',
                surface: {
                    primary: '#FAFAFA',
                    elevated: '#FFFFFF',
                    sunken: '#F4F4F5',
                },
                steel: {
                    50: '#FAFAFA',
                    100: '#F4F4F5',
                    200: '#E4E4E7',
                    300: '#D4D4D8',
                    400: '#A1A1AA',
                    500: '#71717A',
                    600: '#52525B',
                    700: '#3F3F46',
                    800: '#27272A',
                    900: '#18181B',
                }
            },
            fontFamily: {
                sans: ['"DM Sans"', 'sans-serif'],
                heading: ['"Outfit"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
