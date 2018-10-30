

function isMonotonous(arr) {
    let i = 0;
    // Find first two different elements, to determine the direction of monotony
    while (arr[i] == arr[i + 1]) ++i;

    if (i === arr.length - 1) {
        return true; // All elements are the same
    }

    let isNextMonotonous;
    if (arr[i] > arr[i + 1]) {
        isNextMonotonous = (a, b) => a >= b;
    } else {
        isNextMonotonous = (a, b) => a <= b;
    }

    let prev = arr[0];
    return arr.every(v => {
        const isMon = isNextMonotonous(prev, v);
        prev = v;
        return isMon;
    });
}

module.exports = isMonotonous;