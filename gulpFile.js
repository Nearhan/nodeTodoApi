var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('webserver', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('watch', function() {
    gulp.watch(['public/index.html', 'appServer.js'], ['webserver']);
});

gulp.task('default', ['webserver']);
