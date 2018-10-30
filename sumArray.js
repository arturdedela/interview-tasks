

function sumArray(arr) {
    return arr.reduce((sum, cur) => {
        if (cur instanceof Array) {
            return sum + sumArray(cur);
        }

        const parsedVal = parseInt(cur);
        if (!isNaN(parsedVal)) {
            sum += parsedVal;
        }

        return sum;
    }, 0)
}

module.exports = sumArray;