/**
 * Created by melinamarignale on 03/07/15.
 */

// Include gulp
var gulp = require('gulp');


// SASS watch
var sass = require('gulp-ruby-sass');

gulp.task('sass', function () {
    return sass('source/')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('result'));
});