const myNew = require('../myNew');


test('myNew - create object as new Operator', () => {
  function Car(mark, speed) {
    this.mark = mark;
    this.speed = speed;
    this.drive = function () {
      console.log(this.speed++);
    }
  }
  const car = myNew(Car, 'BMW', 120);

  expect(car instanceof Car).toBe(true);

  expect({} instanceof Car).toBe(false);
});