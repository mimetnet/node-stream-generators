var Readable = require('readable-stream').Readable
    Generator = (function*(){}).constructor
;

function StreamGenerators(g) {
    if (!(g instanceof Generator))
        throw new TypeError('First argument must be a ES6 Generator');

    Readable.call(this, {objectMode:true});

    this._g = g();
}

StreamGenerators.prototype = Object.create(Readable.prototype, {constructor: {value: StreamGenerators}});

StreamGenerators.prototype._read = function(size) {
    try {
        var r = this._g.next();

        if (false === r.done) {
            this.push(r.value);
        } else {
            this.push(null);
        }
    } catch (e) {
        this.emit('error', e);
    }
};

module.exports = function(list) {
    return new StreamGenerators(list);
};
