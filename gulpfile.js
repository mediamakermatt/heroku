'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('default', (done) => {
    console.log("Gulp Working");
    done();
});

gulp.task('tailwind', (done) => {
    const postcss = require('gulp-postcss')
    return gulp.src('assets/scss/app.scss')
    .pipe(postcss([
        require('tailwindcss'),
        require('autoprefixer'),
    ]))
    .pipe(gulp.dest('assets/tailwind/'))
    done();
});

gulp.task('styles', (done) => {
    // compile all scss into css
    gulp.src('assets/scss/master.scss') 
    .pipe(sass().on('error', sass.logError)) 
    .pipe(gulp.dest('assets/css/'))
    // minify all css
    .on('end', function () { 
        return gulp.src('assets/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('assets/css/'));
    });
    done(); 
});

// /*
// Gulp has a watch syntax which allows it to monitor source files and then “watch” for changes made to your code. Just add the syntax to your gulpfile.js by typing:
// */
// compile and watch gulp.task('sass:watch', function() { 
//     gulp.watch('assets/scss/main.scss', ['sass']);
// });