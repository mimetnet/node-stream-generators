# stream-generators

Pipe ES6 Generators through Node.js [Streams][12].

[![npm version][1]][2]
[![build status][3]][4]
[![dependencies][5]][6]
[![devDependencies][7]][8]

## Usage

```js
var streamify = require('stream-generators'),
    os = require('os')
    gen = function*() {
        yield '1';
        yield '2';
        yield '3';
        yield os.EOL;
    };
;

streamify(gen).pipe(process.stdout);
```

```
123\n
```


## API

#### streamify(function*)
The result of [require][13] is a 'function()' that when invoked, will return a
[Readable][11] [Stream][12].

```
var generator = function*() {
    yield 1;
    yield 2;
};
var streamify = require('stream-generators');
var readable = streamify(generator);
```

This [Stream][12] will [push][14] each element from the generator into the
[piped][15] array.


## Install

```sh
npm install stream-generators
```

  [1]: https://badge.fury.io/js/stream-generators.svg
  [2]: https://badge.fury.io/js/stream-generators
  [3]: https://api.travis-ci.org/mimetnet/node-stream-generators.svg
  [4]: https://travis-ci.org/mimetnet/node-stream-generators
  [5]: https://david-dm.org/mimetnet/node-stream-generators.svg
  [6]: https://david-dm.org/mimetnet/node-stream-generators
  [7]: https://david-dm.org/mimetnet/node-stream-generators/dev-status.svg?#info=devDependencies
  [8]: https://david-dm.org/mimetnet/node-stream-generators/#info=devDependencies
  [9]: http://nodejs.org/api/stream.html#stream_class_stream_readable
  [10]: http://nodejs.org/api/stream.html#stream_stream
  [11]: http://nodejs.org/api/globals.html#globals_require
  [12]: https://nodejs.org/api/stream.html#stream_readable_push_chunk_encoding
  [13]: https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options

## License

[MIT License](https://github.com/mimetnet/node-stream-generators/blob/master/LICENSE)
