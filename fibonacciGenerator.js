
function* fibonacciGenerator() {
    let a = 0, b = 1;

    while (true) {
        yield b;
        [a, b] = [b, a + b];
    }
}

const fib = fibonacciGenerator();

for (let i = 0; i < 10; i++) {
    console.log(fib.next().value);
}