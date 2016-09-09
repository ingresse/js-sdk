function errorHandler(error) {
    console.error('------- ERROR -------');
    console.log('File: %s', error.filename);

    if (error.loc) {
        console.log('Line: %s - Column: %s', error.loc.line, error.loc.column);
    }

    console.error(error.toString());

    console.error('---------------------');

    this.emit('end');
}

module.exports = errorHandler;

