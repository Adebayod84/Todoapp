const {src, dest, series, parallel} = require('gulp');
const minify = require('gulp-minify');


const scriptTask = () => {
  return src('src/**/*.js')
  .pipe(dest('dist/'));
}

exports.scripts = series(scriptTask);