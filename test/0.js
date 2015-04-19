var test = require('tape')
;

test('ctor', function(t) {
    t.doesNotThrow(function() {
        new Function('return function*() { yield 1; }');
    }, 'supports: es6 generators');

    t.end();
});