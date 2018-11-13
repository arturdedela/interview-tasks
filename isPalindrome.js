

function isPalindrome(s) {
    const cleanStr = s.replace(/[^\wа-яА-Я]/g, '').toLowerCase();
    
    return cleanStr === cleanStr.split('').reverse().join('');
}

function isPalindromeRecursion(s) {
    if (s.length === 1) {
        return true;
    }

    if (s[0] === s[s.length - 1]) {
        if (s.length === 2) {
            return true;
        }

        return isPalindromeRecursion(s.substring(1, s.length - 1));
    } else {
        return false;
    }
}


console.log(isPalindromeRecursion('123321'));

module.exports = isPalindrome;