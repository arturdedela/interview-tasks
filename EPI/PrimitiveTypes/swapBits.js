
const enableBit = (n, i) => n |= (1 << i);
const disableBit = (n, i) => n &= ~(1 << i);

function swapBits(n, i, j) {
    const iBit = (n >> i) & 1;
    const jBit = (n >> j) & 1;
    
    if (iBit !== jBit) {
        if (iBit) {
            n = disableBit(n, i);
            n = enableBit(n, j);
        } else {
            n = disableBit(n, j);
            n = enableBit(n, i);
        }
    }

    return n;
}


//EPI solution
function swapBits(n, i, j) {
    if ((n >> i) & 1 !== (n >> j) & 1) {
        const bitMask = (1 << i) | (1 << j);
        n ^= bitMask;
    }

    return n;
}



function toBinaryDigitString(n) {
    let res = '';

    while (n) {
        res = (n & 1) + res;
        n >>= 1;
    }

    return res;
}

module.exports = {
    swapBits,
    toBinaryDigitString
}