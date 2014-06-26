var gulp = require('gulp'),
    connect = require('gulp-connect'),
    nodemon = require('gulp-nodemon');


gulp.task('connect', function() {
    connect.server({
        root: 'public',
        livereload: true
    });
});


gulp.task('watchPublic', function() {
    gulp.watch('public/**/*.*', ['publicRelaod']);
});


gulp.task('publicRelaod', function() {
    gulp.src('public/**/*.*')
        .pipe(connect.reload());
});


gulp.task('nodeReload', function() {
    nodemon({
        script: 'appServer.js',
        ext: 'js',
    });
});


gulp.task('default', ['connect','watchPublic', 'nodeReload']);
