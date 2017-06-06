module.exports = {
    port: process.env.PORT || 5000,
    open: false,
    files: ['./**/*.{html,htm,css,js}'],
    server:{
        baseDir: "./"
    }
};