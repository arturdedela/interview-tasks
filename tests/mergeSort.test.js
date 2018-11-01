const mergeSort = require('../mergeSort');


test('Merge sort', () => {
    expect(mergeSort([3, 4, 2, 8, 1])).toEqual([1, 2, 3, 4, 8]);

    expect(mergeSort([-10, 15, 4, -44, 5, 5, 5])).toEqual([-44, -10, 4, 5, 5, 5, 15]);
});