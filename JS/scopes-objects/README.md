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

