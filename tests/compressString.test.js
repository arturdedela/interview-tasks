const compressString = require('../compressString');


test('Compress string (RLE)', () => {

  expect(compressString('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')).toBe('A4B3C2XYZD4E3F3A6B28');

  expect(compressString('AAABbbbBcCCC')).toBe('A3Bb3BcC3');
});