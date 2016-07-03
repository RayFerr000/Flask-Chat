// requirements

var gulp = require('gulp');
var gulpBrowser = require("gulp-browser");
var babelify = require('babelify');
var del = require('del');
var size = require('gulp-size');
var rename = require('gulp-rename');


// tasks

gulp.task('transform', function () {
  var stream = gulp.src('./app/static/scripts/jsx/app.jsx')
    .pipe(gulpBrowser.browserify({transform: ['babelify']}))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('./app/static/scripts/js/'))
    .pipe(size());
  return stream;
});

gulp.task('del', function () {
  return del(['./app/static/scripts/js']);
});

gulp.task('default', ['del'], function () {
  gulp.start('transform');
  gulp.watch(['./app/static/scripts/jsx/*.jsx','./app/static/scripts/jsx/misc-components/*.jsx'], ['transform']);
});
