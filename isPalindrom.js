

function isPalindrome(s) {
    const cleanStr = s.replace(/[^\Wа-яА-Я]/g, '').toLowerCase();
    
    return cleanStr === cleanStr.split('').reverse().join('');
}