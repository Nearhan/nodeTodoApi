var gulp = require('gulp'),
    connect = require('gulp-connect'),
    nodemon = require('gulp-nodemon'),
    karma = require('karma').server;


// Karma Test Configuration ==================================

var karmaConfig = {
    browsers: ['Chrome'],
    frameworks: ['mocha', 'chai'],
    files: [
        'public/tests/**/*.js',
        'tests/**/*,js'
    ],
};






// Gulp Task Definitions =======================================

gulp.task('connect', function() {
    connect.server({
        root: 'public',
        livereload: true
    });
});


// Test Task ====================================================
gulp.task('tests', function() {
    kara.start(karmaConfig);
});



gulp.task('watchPublic', function() {
    gulp.watch('public/**/*.*', ['publicRelaod', 'test']);
});


gulp.task('publicRelaod', function() {
    gulp.src('public/**/*.*')
        .pipe(connect.reload());
});


gulp.task('nodeReload', function() {
    nodemon({
        script: 'appServer.js',
        ext: 'js',
    })
        .on('change', ['tests']);
});


// Default Task ==============================================

gulp.task('default', ['connect','watchPublic', 'nodeReload']);
