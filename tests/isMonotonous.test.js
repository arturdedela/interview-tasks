const isMonotonous = require('../isMonotonous');


test('Is array monotonous', () => {
    expect(isMonotonous([1, 5, 6, 7, 10])).toBe(true);

    expect(isMonotonous([3, 0, -4, -200])).toBe(true);

    expect(isMonotonous([1, 6, -6, 20])).toBe(false);

    expect(isMonotonous([0, 0, 0, 0])).toBe(true);
})