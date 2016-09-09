var reqDir = require('require-dir');
var gulp   = require('gulp');

reqDir('./tasks');


/**
 * Default task
 */
gulp.task('default', ['watch:node', 'watch:web']);

/**
 * Build task
 */
gulp.task('build', ['build:node', 'build:web']);

