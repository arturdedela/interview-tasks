

function compressArray(arr) {
    const comparer = (a, b) => a - b;
    const sorted = arr.sort(comparer);
    let compressed = sorted[0] + '';
    let isSequence = false;

    arr.sort(comparer).reduce((prev, cur, i) => {
        if (cur - prev === 1) {
            isSequence = true;

            if (i === arr.length - 1) {
                compressed += '-' + cur;
            }

            return cur;
        }

        if (isSequence) {
            compressed += '-' + prev + ',';
            isSequence = false;
        } else {
            compressed += ',';
        }    

        compressed += cur;
        return cur;
    });

    return compressed;
}