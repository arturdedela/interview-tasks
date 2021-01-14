## JavaScript learning

* [Типы и грамматические конструкции](https://github.com/arturdedela/interview-tasks/tree/master/JS/grammar-types)

## Полезные ссылки:
1) [Асинхронный js (Event loop, call stack, message queue, job queue)](https://medium.com/nuances-of-programming/%D0%B0%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9-javascript-%D1%86%D0%B8%D0%BA%D0%BB-%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B9-f47cf28fb130)
2) [this](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this)
3) Hoisting
   1. [MDN](https://developer.mozilla.org/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/%D0%9F%D0%BE%D0%B4%D0%BD%D1%8F%D1%82%D0%B8%D0%B5)
   2. [Medium](https://medium.com/@stasonmars/%D1%80%D0%B0%D0%B7%D0%B1%D0%B8%D1%80%D0%B0%D0%B5%D0%BC%D1%81%D1%8F-%D1%81-%D0%BF%D0%BE%D0%B4%D0%BD%D1%8F%D1%82%D0%B8%D0%B5%D0%BC-hoisting-%D0%B2-javascript-7d2d27bc51f1)
3) [Наследование, prototype](https://developer.mozilla.org/ru/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
4) [Cookies](https://developer.mozilla.org/ru/docs/Web/API/Document/cookie)
5) [Reference Type. this](https://learn.javascript.ru/object-methods#vnutrennyaya-realizatsiya-ssylochnyy-tip)
6) [Required Headers](https://serverfault.com/questions/163511/what-is-the-mandatory-information-a-http-request-header-must-contain)<br/>
7) [CORS](https://developer.mozilla.org/ru/docs/Web/HTTP/CORS)
8) [HTTP Caching](https://www.mnot.net/cache_docs/#DEFINITION)
9) [Ускорение загрузки страницы](https://habr.com/en/company/badoo/blog/320558/)
10) [Как работают браузеры(Как загружается и отрисовывается страница)](https://developer.mozilla.org/ru/docs/Web/Performance/How_browsers_work)
11) [Как работает Mobx](https://habr.com/en/post/340592/)

Важно: 
1) У стрелочных функций контекст неизменяем (bind, call, apply не дадут эффекта).
2) Bounded functions. Повторный вызов bind контекст не изменит, так же как и не будет эфекта от call и apply.
3) Hoisting. Объявление функций перекрывает объявление переменных. Инициализация переменных перекрывает объявление функций.
4) Промисы используют job queue, которая имеет больший приоритет выполнения.
5) Minimal HTTP/1.1 request [RFC](https://tools.ietf.org/html/rfc2616#section-14.23)
   ```
   GET / HTTP/1.1  
   Host: www.w3.org
   ```
6) 
   ```
   '01' == 1 // true
   [1] == 1 // true, происходит конвертация к string 
   ```
