const div = require('../../jsDiv');

function isIntPalindrome(x) {
    if (x < 0) {
        return false;
    }
    
    const digitCount = Math.floor(Math.log10(x)) + 1;

    for (let i = 1; i <= Math.ceil(digitCount / 2); i++) {
        const lsd = div(x, 10 ** (i - 1)) % 10;
        const msd = div(x, 10 ** (digitCount - i)) % 10;

        if (lsd !== msd) {
            return false;
        }
    }

    return true;
}