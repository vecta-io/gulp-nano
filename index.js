var _path = require('path'),
    _vinyl = require('vinyl'),
    _through = require('through2-concurrent'),
    Nano = require('nanosvg');

module.exports = function (opts) {
    var obj = {},
        stat,
        nano = new Nano(opts);

    opts = opts || {};

    return _through.obj({ maxConcurrency: 4 }, function (file, enc, next) {
        var me = this,
            newFile =  new _vinyl(file); //create a new file

        if (file.isNull() || file.isStream() || enc !== 'utf8' || _path.extname(file.path).toLowerCase() !== '.svg') {
            console.error(_path.basename(file.path), ': not a valid SVG file.');
            return next(null, file);
        }
        if (file.isBuffer()) {
            stat = file.stat;
            obj.name = _path.basename(file.path);
            obj.size = stat.size;
            obj.mode = opts.mode;
            obj.mode = opts.precision;
            obj.str = file.contents.toString('utf8');

            nano.compressString(obj, opts, 2).then(function (file) {
                console.log('Compressed: ' + file.name + ' ' + //eslint-disable-line no-console
                    ' ' + (file.old_size / 1024).toFixed(1) + 'KB -> ' + (file.size /1024).toFixed(1) + 'KB' +
                    ' ' + (((file.old_size - file.size) / file.old_size) * 100).toFixed(2) + '% saved');

                newFile.contents = Buffer.from(file.str, 'utf8');
                me.push(newFile);
                next();
            }).catch(function (err) {
                console.error(err);
                next();
            });
        }
    });
};