const { src, dest, series } = require('gulp');
const pug = require('gulp-pug');

function pugToHtml() {
    return src('*.pug')
        .pipe(pug({
                pretty: true
            })
            // .pipe(dest('dist/')))
        };


    exports.default = pugToHtml;
