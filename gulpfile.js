const gulp = require('gulp');
const gih = require("gulp-include-html");
const htmlmin = require('gulp-htmlmin');
const print = require('gulp-print');

gulp.task('html', function() {
    return gulp.src('./src/**/*.html')
    .pipe(gih())
    //.pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('bin'));
});

gulp.task('static', function() {
    return gulp.src(['./static/**/*.*'])
    .pipe(gulp.dest('bin'))
});

gulp.task('js', function() {
    return gulp.src(['./src/**/*.js'])
    .pipe(gulp.dest('bin'))
});

gulp.task('default', [
    'html', 'static', 'js'
]);
