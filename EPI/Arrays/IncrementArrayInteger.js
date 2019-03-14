


/**
 * 
 * @param {Array} arr 
 */
function increment(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 9) {
            arr[i] = 0;
        } else {
            arr[i] += 1;
            return arr;
        }
    }

    return [1].concat(arr);
}


