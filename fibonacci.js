let a = 0, b = 1;
let count = 0;

console.log("Os 10 primeiros números da sequência de Fibonacci são:");

while (count < 10) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
    count++;
}
