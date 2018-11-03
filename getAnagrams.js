

function getAnagrams(...words) {

  const anagrams = [];
  const alreadyAnagram = [];

  words.forEach((word, curWord) => {
    if (alreadyAnagram[curWord]) return;

    const letters = word.split('');
    anagrams.push([word]);

    words.forEach((w, i) => {
      if (i === curWord) return;
      const curLetters = w.split('');

      const isAnagram = letters.every(l => {
        if (curLetters.length === 0) return false;

        const index = curLetters.findIndex(v => v === l);
        if (index === -1) return false;

        curLetters.splice(index, 1);
        return true;
      });

      if (isAnagram && curLetters.length === 0) {
        anagrams[anagrams.length - 1].push(w);
        alreadyAnagram[i] = true;
      }
    });

  });

  return anagrams;
}


module.exports = getAnagrams;