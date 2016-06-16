// requirements

var gulp = require('gulp');
var gulpBrowser = require("gulp-browser");
var reactify = require('reactify');
var del = require('del');
var size = require('gulp-size');
var rename = require('gulp-rename');


// tasks

gulp.task('transform', function () {
  var stream = gulp.src('./app/static/scripts/jsx/*.jsx')
    .pipe(gulpBrowser.browserify({transform: ['reactify']}))
    .pipe(rename('main.js'))
    .pipe(gulp.dest('./app/static/scripts/js/'))
    .pipe(size());
  return stream;
});

gulp.task('del', function () {
  return del(['./app/static/scripts/js']);
});

gulp.task('default', ['del'], function () {
  gulp.start('transform');
  gulp.watch('./app/static/scripts/jsx/*.jsx', ['transform']);
});
