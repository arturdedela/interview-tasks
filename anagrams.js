/**
Напишите функцию, которая найдет все наборы анаграмм в строке. 
Анаграммы - слова, составленные из одного и того же набора букв (рост-сорт-трос)
*/

const str = 'адрес карп кума куст мир мука парк рим среда стук рост сорт трос';

function getAnagrams(str) {
  // код функции здесь
  const words = str.split(' ');
  const wordsSorted = words.map(w => w.split('').sort().join(''));
  const anagramMap = new Map();
  
  wordsSorted.forEach((word, i) => {
    if (anagramMap.has(word)) {
      anagramMap.set(word, anagramMap.get(word).concat(words[i]));
    } else {
      anagramMap.set(word, [words[i]]);
    }
  })
  
  return [...anagramMap.values()];
}