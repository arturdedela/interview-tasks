const getAnagrams = require('../getAnagrams');


test('Get anagrams', () => {

  expect(getAnagrams('нос', 'сон', 'соне', 'осн', 'снедь', 'днесь')).toEqual([
    ['нос', 'сон', 'осн'],
    ['соне'],
    ['снедь', 'днесь'],
  ])
});