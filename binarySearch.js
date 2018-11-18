
// Binary search
function findIndex(arr, val) {

    const calcMid = (l, r) => Math.floor((l + r) / 2);
    let left = 0, right = arr.length;
    let mid = calcMid(left, right);

    while (val !== arr[mid]) {
        if (val > arr[mid]) {
            left = mid;
        } else {
            right = mid;
        }
        const prevMid = mid;
        mid = calcMid(left, right);

        if (prevMid === mid) return -1;
    }

    return mid;
}


//Binary search
function findInsertIndex(arr, val) {

    const calcMid = (l, r) => Math.floor((l + r) / 2);
    let left = 0, right = arr.length;
    let mid = calcMid(left, right);

    while (val !== arr[mid]) {
        if (val > arr[mid]) {
            left = mid;
        } else {
            right = mid;
        }
        const prevMid = mid;
        mid = calcMid(left, right);

        if (prevMid === mid) return right;
    }

    return mid;
}