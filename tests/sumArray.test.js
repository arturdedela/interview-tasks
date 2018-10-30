const sumArray = require('../sumArray');


test('Sums all items in array, including sub arrays', () => {
    expect(sumArray([1, 2, '3x'])).toBe(6);

    expect(sumArray(['5', 'fsd', [1, 2]])).toBe(8);

    expect(sumArray([3, [5, [1, 3, 1], 2]])).toBe(15);
});
