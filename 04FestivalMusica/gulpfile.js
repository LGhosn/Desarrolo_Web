const {src, dest, watch, parallel} = require('gulp'); // Importamos gulp

// CSS
const sass = require('gulp-sass')(require('sass')); // Importamos gulp-sass
const plumber = require('gulp-plumber'); // Importamos gulp-plumber
const autoprefixer = require('autoprefixer'); // Importamos autoprefixer
const cssnano = require('cssnano'); // Importamos cssnano
const postcss = require('gulp-postcss'); // Importamos gulp-postcss
const sourcemaps = require('gulp-sourcemaps'); // Importamos gulp-sourcemaps

// Imagenes
const cache = require('gulp-cache'); // Importamos gulp-cache
const imagemin = require('gulp-imagemin'); // Importamos gulp-imagemin
const webp = require('gulp-webp'); // Importamos gulp-webp
const avif = require('gulp-avif');

// JS
const terser = require('gulp-terser-js'); // Importamos gulp-terser-js

function css(cb) {
    // identificamos el archivo scss
    src('src/scss/**/*.scss')
        // compilamos el archivo scss
        .pipe(sourcemaps.init()) // Inicializamos sourcemaps para poder ver los errores en el archivo scss
        .pipe(plumber()) // Evita que se corte la ejecución de gulp en caso de error
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()])) // Agregamos los prefijos y minificamos el css
        .pipe(sourcemaps.write('.')) // Guardamos el sourcemap
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

function javascript(cb) {
    src('src/js/**/*.js') // identificamos los archivos js
        .pipe(sourcemaps.init()) // Inicializamos sourcemaps para poder ver los errores en el archivo js
        .pipe(terser()) // minificamos los archivos js
        .pipe(sourcemaps.write('.')) // Guardamos el sourcemap
        .pipe(dest('build/js')); // guardamos los archivos js    
    cb();
}

function dev(cb) {
    watch('src/scss/**/*.scss', css); // Vigila los cambios en los archivos scss y ejecuta la tarea css
    watch('src/js/**/*.js', javascript); // Vigila los cambios en los archivos js y ejecuta la tarea javascript
    cb();
}

exports.css = css;
exports.javascript = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes, versionWebp, versionAvif, javascript, dev); // Ejecuta las tareas en paralelo