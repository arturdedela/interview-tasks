const isPalindrom = require('../isPalindrome');


test('String is palindrome', () => {
    expect(isPalindrom("Eva, can I see bees in a cave?")).toBe(true);

    expect(isPalindrom('Яндекс').toBe(false));
})