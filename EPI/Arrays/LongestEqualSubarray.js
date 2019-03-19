

function longestEqualSubarray(arr) {
    let maxLength = 0, curLength = 0, prev = arr[0];

    for (let i = 0; i < arr.length; ++i) {
        if (prev === arr[i]) {
            ++curLength;
            maxLength = Math.max(curLength, maxLength);
        } else {
            curLength = 1;
        }

        prev = arr[i];
    }

    return maxLength;
}