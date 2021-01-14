# Замыкания и объекты

## IIFE

Пример объявления:

```js

(function IIFE() {
  console.log('iife');
})();

(function IIFE(){
  console.log('iife');
}());

```

Пример использования:

```js

var a = 2;

(function IIFE(def){
  def( window );
})(function def(global) {
  var a = 3;
  console.log(a); // 3
  console.log(global.a) // 2
});

```

## let и const

Ключевое слово `let` и `const` присоединяет объявление переменной к области видимости того блока, в которой оно содержится. Иначе говоря, `let` и `const` неявно заимствует область видимости любого блока для объявления своей переменной.

Пример:

```js

var foo = true;

if (foo) {
  let bar = foo * 2;
  bar = something( bar );
  console.log( bar );
}

console.log( bar ); // ReferenceError

```
