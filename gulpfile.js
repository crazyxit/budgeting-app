/**
 * Created by Ani on 9.7.2017 г..
 */
'use strict';

var gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify     = require('gulp-uglify'),
    rename     = require('gulp-rename'),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify'),
    cssnano = require('gulp-cssnano');

gulp.task('styles', function () {
    return gulp.src('prototype/scss/styles.scss')
    //return gulp.src('prototype/scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssnano())
        .pipe(gulp.dest('public_html/assets/css'))
        .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', function () {
    gulp.src('prototype/js/**/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public_html/assets/js'))
        .pipe(notify({ message: 'Scripts task complete' }));
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts');
});

// Watch
gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch('prototype/scss/**/*.scss', ['styles']);

    // Watch .js files
    gulp.watch('prototype/js/**/*.js', ['scripts']);

    // Create LiveReload server
    livereload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch(['public_html/assets/**']).on('change', livereload.changed);
});