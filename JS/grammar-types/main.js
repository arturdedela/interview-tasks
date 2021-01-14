console.group('Таблица истинных значений');

console.log("Boolean('')", Boolean(''));
console.log("Boolean(NaN)", Boolean(NaN));
console.log("Boolean(undefined)", Boolean(undefined));
console.log("Boolean(null)", Boolean(null));
console.log("Boolean(+0)", Boolean(+0));
console.log("Boolean(-0)", Boolean(-0));

console.groupEnd();

console.group('Что может ввести в заблуждение')

console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log([] !== []); // true

console.groupEnd();