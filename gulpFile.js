var gulp = require('gulp'),
    connect = require('gulp-connect'),
    nodemon = require('gulp-nodemon'),
    karma = require('karma').server;


// Karma Test Configuration ==================================

var karmaConfig = {
    browsers: ['Chrome'],
    frameworks: ['jasmine', 'mocha', 'chai'],
    files: [
        'public/lib/angular/angular.js',
        'public/lib/angular-route/angular-route.js',
        'public/lib/angular-mocks/angular-mocks.js',
        'public/app/js/*.js',
        'public/test/unit/*.js',
        'tests/**/*.js'
    ],
    autoWatch: true,

    plugins: [
        'karma-chrome-launcher',
        'karma-jasmine',
        'karma-mocha',
        'karma-chai'
    ]

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
    karma.start(karmaConfig);
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
