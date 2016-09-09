var gulp         = require('gulp');
var concat       = require('gulp-concat');
var babel        = require('gulp-babel');
var config       = require('./config').node;
var errorHandler = require('./error');


/**
 * Gulp build task for Node
 */
gulp.task('build:node', function () {
    return gulp.src(config.src)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat(config.output))
        .pipe(gulp.dest(config.dest))
});

/**
 * Gulp watch for changes for Node
 */
gulp.task('watch:node', function () {
    return gulp.watch(config.src, ['build:node'])
});

