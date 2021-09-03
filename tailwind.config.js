module.exports = {
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                default: [
                    "Poppins",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Helvetica Neue",
                    "Arial",
                    "sans-serif",
                ],
            },
            colors: {
                monokai: {
                    default: "#f1f1eb",
                },
                "monokai-background": {
                    default: "#272822",
                },
                "monokai-icon-background": {
                    default: "#e28905",
                },
                "monokai-title": {
                    default: "#eb1f6a",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};