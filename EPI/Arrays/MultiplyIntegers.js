

/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function multiply(arr1, arr2) {
    let result = [];
    let overage = 0;
    for (let i = arr1.length - 1; i >= 0; i--) {
        for (let j = arr2.length - 1; j >= 0; j--) {
            const mult = arr1[i] * arr2[j] + overage;
            const digit = mult % 10;
            overage = (mult - digit) / 10;

            if (isNaN(result[i + j])) {
                result[i + j] = digit;
            } else {
                result[i + j] = digit;
            }            
        }
    }

    if (overage) {
        result.unshift(overage);
    }

    return result;
}