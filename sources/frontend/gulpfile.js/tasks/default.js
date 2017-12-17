var gulp = require('gulp');
var runSequence = require('run-sequence');

var defaultTask = function defaultTask(cb) {
	runSequence('clean', ['data', 'fonts', 'images', 'icons', 'video'], ['scripts', 'styles', 'html'], 'watch', cb);
};

gulp.task('default', defaultTask);
