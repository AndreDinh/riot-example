'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var riot = require('gulp-riot');
var del = require('del');

var src = [
  './src/**/*.spec.js',
  './test/**/*.spec.js',
  'gulpfile.js'
];

gulp.task('jshint', function() {
  return gulp.src(src)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('riot', function() {
  return gulp.src('./src/components/**/*.tag')
    .pipe(riot())
    .pipe(gulp.dest('./dist/components'))
})

gulp.task('copy', function() {
  return gulp.src([
    './src/**/*.css',
    './src/**/*.html',
  ])
  .pipe(gulp.dest('./dist'))
})

gulp.task('test', ['jshint', 'jscs']);
gulp.task('build', ['riot', 'copy']);

gulp.task('default', ['build']);
