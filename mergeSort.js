


function merge(left, right) {
    let merged = [];
    let iLeft = 0;
    let iRight = 0;

    while (iLeft < left.length && iRight < right.length) {
        if (left[iLeft] < right[iRight]) {
            merged.push(left[iLeft++]);
        } else {
            merged.push(right[iRight++]);
        }
    }
    const leftRemaining = left.slice(iLeft);
    const rightRemaining = right.slice(iRight);

    return merged.concat(leftRemaining).concat(rightRemaining);
}

/**
 *
 * @param {Array} arr
 */
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);

    const half1 = arr.slice(0, middle);
    const half2 = arr.slice(middle);

    return merge(mergeSort(half1), mergeSort(half2));
}

module.exports = mergeSort;