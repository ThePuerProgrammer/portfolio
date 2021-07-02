module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        backgroundColor: theme => ({
            ...theme('colors'),
            'header': '#1F1A24',
            'body-primary': '#121212',
            'body-secondary': '#BB86FC',
        }),
        textColor: theme => theme('colors'),
        textColor: {
            'primary': '#03DAC6',
            'secondary': '#018786',
            'header': '#A7A7A7',
            'danger': '#e3342f',
            'orange': '#F9AA33'
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}