const {src, dest, watch, parallel} = require('gulp'); // Importamos gulp

// CSS
const sass = require('gulp-sass')(require('sass')); // Importamos gulp-sass
const plumber = require('gulp-plumber'); // Importamos gulp-plumber

// Imagenes
const cache = require('gulp-cache'); // Importamos gulp-cache
const imagemin = require('gulp-imagemin'); // Importamos gulp-imagemin
const webp = require('gulp-webp'); // Importamos gulp-webp
const avif = require('gulp-avif');

function css(cb) {
    // identificamos el archivo scss
    src('src/scss/**/*.scss')
        // compilamos el archivo scss
        .pipe(plumber()) // Evita que se corte la ejecución de gulp en caso de error
        .pipe(sass())
        // guardamos el archivo css
        .pipe(dest('build/css'));

    cb(); // Indica que la tarea ha finalizado
}

function versionWebp(cb) {
    const opciones = {
        quality: 50
    };

    src('src/img/**/*.{jpg,png}') // identificamos las imagenes
        .pipe(webp(opciones)) // convertimos las imagenes a webp
        .pipe(dest('build/img')); // guardamos las imagenes webp

    cb();
}

function versionAvif(cb) {
    const opciones = {
        quality: 50
    };

    src('src/img/**/*.{jpg,png}') // identificamos las imagenes
        .pipe(avif(opciones)) // convertimos las imagenes a avif
        .pipe(dest('build/img')); // guardamos las imagenes avif

    cb();
}

function imagenes(cb) {
    const opciones = {
        optimizationLevel: 3
    };

    src('src/img/**/*.{jpg,png}') // identificamos las imagenes
        .pipe(cache(imagemin(opciones))) // optimizamos las imagenes
        .pipe(dest('build/img')); // guardamos las imagenes optimizadas

    cb();
}

function dev(cb) {
    watch('src/scss/**/*.scss', css); // Vigila los cambios en los archivos scss y ejecuta la tarea css
    cb();
}

exports.css = css;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes, versionWebp, versionAvif, dev); // Ejecuta las tareas en paralelo