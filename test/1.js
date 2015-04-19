var test = require('tape')
    , streamify = require('..')
;

test('require', function(t) {
    t.ok(streamify, 'stream-generators exists');
    t.equal(typeof(streamify), 'function', 'require returns an object');
    t.equal(0, Object.keys(streamify).length, 'No hidden exports');
    t.equal(1, streamify.length, 'No hidden arguments');
    t.end();
});