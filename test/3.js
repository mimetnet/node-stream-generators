var test = require('tape')
    , streamify = require('..')
;

test('ctor', function(t) {
    t.throws(function() {
        streamify();
    }, 'rejects: no argument');

    [
        null
        , undefined
        , 1
        , NaN
        , 'string'
        , function() {}
        , {}
        , []
    ].forEach(
        function(item) {
            t.throws(function() {
                streamify(item);
            }, 'rejects: ' + JSON.stringify(item));
        }
    );

    t.doesNotThrow(function() {
        streamify(function*(){});
    }, 'supports: es6 generators');

    t.end();
});
