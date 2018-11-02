const checkBraces = require('../checkBraces');


test('Check braces order', () => {
  expect(checkBraces('({[2, 4]()})()')).toBe(true);

  expect(checkBraces('([})')).toBe(false);

  expect(checkBraces('([])(')).toBe(false);
});