'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var request = require('request');
var path = require( 'path' );
var criticalcss = require("criticalcss");
var fs = require('fs');
var tmpDir = require('os').tmpdir();

gulp.task('criticalcss', function() {
    var cssUrl = 'http://nickdanieldavidson.com/public/dist/css/app.min.css';
    var cssPath = path.join( tmpDir, 'critical.css' );
    request(cssUrl).pipe(fs.createWriteStream(cssPath)).on('close', function() {
        criticalcss.getRules(cssPath, function(err, output) {
            if (err) {
                throw new Error(err);
            } else {
                criticalcss.findCritical("http://nickdanieldavidson.com", { rules: JSON.parse(output) }, function(err, output) {
                    if (err) {
                        throw new Error(err);
                    } else {
                        fs.writeFileSync('./public/dist/css/critical.css', output);
                        fs.writeFileSync('./views/partials/criticalcss.twig', '<style>' + output + '</style>');
                    }
                });
            }
        });
    });
});

gulp.task('sass', function() {
    return gulp.src('./public/src/scss/app.scss')
        .pipe(sass())
        .pipe(autoprefixer({ browsers: ['last 2 versions', 'ios 7', 'ios 8'] }))
        .pipe(gulp.dest('./public/dist/css'))
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/dist/css'));
});

gulp.task('js', function() {
    return gulp.src('./public/src/js/script.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./public/dist/js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/dist/js'));
});

gulp.task('watch', function() {
    gulp.watch('./public/src/scss/**/*.scss', ['sass']);
    gulp.watch('./public/src/js/script.js', ['js']);
});
