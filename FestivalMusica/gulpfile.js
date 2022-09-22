const {src, dest, watch} = require('gulp'); // Importamos gulp
const sass = require('gulp-sass')(require('sass')); // Importamos gulp-sass
const plumber = require('gulp-plumber'); // Importamos gulp-plumber

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

function dev(cb) {
    watch('src/scss/**/*.scss', css); // Vigila los cambios en los archivos scss y ejecuta la tarea css
    cb();
}

exports.css = css;
exports.dev = dev;