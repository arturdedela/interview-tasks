// На входе массив
var arr = [
  {name: 'width', value: 10},
  {name: 'height', value: 20}
];
// На выходе объект {width: 10, height: 20}

function arrToObj(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i].name] = arr[i].value;
  }

  return obj;
}

for (var i = 0; i < 5; i++) {
  const log = k => return () => console.log(k);

  setTimeout(log(i), 300);
}


strjoin('.', 'a', 'b', 'c') //'a.b.c'
strjoin('-', 'a', 'b', 'c', 'd', 'e', 'f') //'a-b-c-d-e-f'


function strjoin(d, ...args) {
  return args.join(d);
}



var b = {};
var c;

b.b = 1;
c = b;
c.b = 2;

console.log('1)', b.b); // ? 2
console.log('2)', c.b); // ? 2

var a = { counter: 1 };
function inc(obj) {
  obj.counter++;
  obj.changed = true;
}

inc(a);
console.log('3)', a);   // ? { counter: 2, changed: true }

var d = 'test';
d.d = 1;
console.log('4)', d.d); // ?




function Book() {
  this.name = 'foo'
}

Book.prototype = {
  getName: function() {
    return this.name;
  }
}

var book = new Book();

Book.prototype.getUpperName = function() {
  return this.getName().toUpperCase();
}

console.log(book.getUpperName()); // FOO



/**
 * Есть функция и объект. Необходимо, чтобы функция в консоли вывела значение 'yandex'.
 * Как добиться желаемого не изменяя тело функции?
 */
function f() { console.log(this.x); }
var obj = {x: 'yandex'};

f.call(obj);

let bindedF = f.bind(obj);
bindedF();

f.apply(obj);



/**
 * Необходимо написать код, асинхронно получающий данные по заданному url
 * Для запроса можно использовать $.get или fetch
 * Если во время запроса произошла ошибка, то пробовать запросить ещё раз
 * Если в итоге информацию получить не удалось, вывести в консоль текст "Не удалось получить данные".
 */

const url = 'http://localhost/api/getData';


async loadData() {

  let data;
  try {
    data = await fetch(url)
  } catch(e) {
    try {
      data = await fetch(url);
    } catch(e) {
      console.log('Не удалось получить данные');
    }
  }
}

loadData() {
  fetch(url).then((data) => {

  })
    .catch(err => {
      fetch(url).then(data => {

      })
        .catch(err => {
          console.log(err);
        })
    })
}


// Код


Какие виды селекторов есть в CSS?
  Какие бывают отношения между селекторами? + div > span
  Какие бывают селекторы атрибутов? [title="asd"]
  Какие есть фильтры по месту среди соседей?
  Какие есть фильтры по месту среди соседей с тем же тегом?
  Какие ещё есть псевдоклассы?
  Как рассчитывается вес селектора?


.one {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}


<body class="one">
  <div class="two">
  Text
  </div>
  </body>



//Дана строка, состоящая из букв A-Z:
// AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB
//Нужно написать функцию RLE, которая на выходе даст строку вида:
// A4B3C2XYZD4E3F3A6B28
function rle(str) {

  const arr = str.split('');

  let prev = arr[0],
    cnt = 0,
    compressed = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (prev === arr[i]) {
      cnt++;
    } else {
      if (cnt) {
        compressed += cnt + arr[i];
      } else {
        compressed += arr[i];
      }

    }
  }



  return compressed;

  // your code
}