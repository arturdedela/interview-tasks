const isPalindrome = require('../isPalindrome');


test('String is palindrome', () => {
    expect(isPalindrome("Eva, can I see bees in a cave?")).toBe(true);

    expect(isPalindrome('Яндекс')).toBe(false);
})