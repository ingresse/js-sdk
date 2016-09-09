var gulp         = require('gulp');
var sourcemaps   = require('gulp-sourcemaps');
var source       = require('vinyl-source-stream');
var buffer       = require('vinyl-buffer');
var browserify   = require('browserify');
var watchify     = require('watchify');
var babelify     = require('babelify');
var config       = require('./config').browser;
var errorHandler = require('./error');


function compile(watch) {
    var bundler = watchify(browserify(config.src, {
            debug: true,
        })
        .transform(['babelify'])
    );

    if (watch) {
        bundler.on('update', function () {
            rebundle(bundler);
        });
    }

    rebundle(bundler);
}

function rebundle(bundler) {
    console.log('-> Bundling...');

    bundler.bundle()
        .on('error', errorHandler)
        .pipe(source(config.output))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.dest));
}

function watch() {
    return compile(true);
};


/**
 * Gulp build task for Browser
 */
gulp.task('build:web', ['build:node'], function () {
    return compile();
});

/**
 * Gulp watch for changes for Browser
 */
gulp.task('watch:web', ['build:node'], function () {
    return watch();
});

