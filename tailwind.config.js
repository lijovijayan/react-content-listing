module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    theme: {
        extend: {
            gap: {
                '30': '30px',
                '10': '10px',
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}