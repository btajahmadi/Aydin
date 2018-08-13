var gulp = require('gulp');

gulp.task('compose-libraries', function() {
    gulp.src('node_modules/bootstrap/dist/**')
    .pipe(gulp.dest('dist/lib/bootstrap-4.1.3'))
    gulp.src('node_modules/popper.js/dist/**')
    .pipe(gulp.dest('dist/lib/popper.js-1.14.4'));
    gulp.src('node_modules/jquery/dist/**')
    .pipe(gulp.dest('dist/lib/jquery-3.3.1'));


})