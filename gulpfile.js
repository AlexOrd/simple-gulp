const { src, dest, parallel, series } = require('gulp');
const pug = require('gulp-pug');
const scss = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

function pugToHtml() {
    return src('*.pug')
        .pipe(pug())
        .pipe(dest('build'));
};

function scssToCss() {
    return src('*.scss')
        .pipe(scss())
        .pipe(dest('build'));
};

function cleanMinCss() {
    return src('build/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('build'));
};


exports.default = parallel(pugToHtml, series(scssToCss, cleanMinCss));
