const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(done) {

    src('src/scss/app.scss')    // Identificar el archivo .SCSS a compilar
        .pipe(sass())   // Compilarlo 
        .pipe(dest('build/css'));    // Almacenarla en el disco duro

    done();
}

//Agrego un watch para compilacion automatica
function dev(done) {
    watch('src/scss/app.scss', css);
    done();
}

exports.css = css;
exports.dev = dev;

