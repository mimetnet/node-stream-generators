var test = require('tape')
    , streamify = require('..')
    , concat = require('concat-stream')
;

test('empty array', function(t) {
    var s;

    s = streamify(function*() {});

    s.pipe(concat({encoding: 'object'}, function(res) {
        t.equal(1, arguments.length, 'concat returns 1 arg');
        t.equal(0, res.length, 'result is an empty list');
        t.deepEqual([], res, 'result matches expectation');
        t.end();
    }));
});

test('array of strings', function(t) {
    var s;

    s = streamify(function*() {
        yield '1';
        yield '2';
        yield '3';
        yield 'Four';
    });

    s.pipe(concat(function(res) {
        t.equal(1, arguments.length, 'concat returns 1 arg');
        t.equal('123Four', res.toString(), 'result matches expectation');
        t.end();
    }));
});

test('array of buffers', function(t) {
    var s;

    s = streamify(function*() {
        yield new Buffer('One');
        yield new Buffer('Two');
    });

    s.pipe(concat(function(res) {
        t.equal(1, arguments.length, 'concat returns 1 arg');
        t.equal('OneTwo', res.toString(), 'result matches expectation');
        t.end();
    }));
});
