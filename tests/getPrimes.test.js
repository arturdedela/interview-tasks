const getPrimes = require('../getPrimes');


test('Get prime numbers < n', () => {

  expect(getPrimes(21)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);

});