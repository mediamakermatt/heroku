'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
    console.log("Gulp Working");
});

gulp.task('sass', function (done) { 
    /*
    The file in gulp.src will be converted, you can also select all .scss files in a directory by using “app/scss/*.scss”. This will select all your .scss files in the folder scss.
    */
    gulp.src('assets/scss/main.scss') 
    .pipe(sass().on('error', sass.logError)) 
    /*
    The gulp.dest is the output. The output will be stored in the CSS folder inside the app folder.
    */
    .pipe(gulp.dest('assets/css/main.css')); 
    done();
});

// /*
// Gulp has a watch syntax which allows it to monitor source files and then “watch” for changes made to your code. Just add the syntax to your gulpfile.js by typing:
// */
// compile and watch gulp.task('sass:watch', function() { 
//     gulp.watch('assets/scss/main.scss', ['sass']);
// });