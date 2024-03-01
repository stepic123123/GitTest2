// let i = 3;

// while (i) {
//   console.log( i-- );
// }

// 1

// Префиксный вариант ++i:
// let i = 0;
// while (++i < 5) console.log( i )

// от 1 до 4

// Постфиксный вариант i++
// let i = 0;
// while (i++ < 5) console.log( i );

// от 1 до 5

// for (let i = 0; i < 5; i++) console.log( i )

// от 0 до 4

// for (let i = 0; i < 5; ++i) console.log( i )

// от 0 до 4

//При помощи цикла for выведите чётные числа от 2 до 10.

// for (let i = 2; i <= 10; i = i + 2) console.log (i);

// for (let i = 0; i < 3; i++) {
//     console.log( `number ${i}!` );
//   }

// let i = 0;
// while (i < 3) {
//     console.log( `number ${i}!` )
//     i++
// }

// функции

let a = 10;
let b = 5;
let c = a + b;

console.log(c);

function sum (a,b) {
    const sum = a + b;
    console.log(sum);
}

sum(a, b);

function min (a,b) {
    const min = a - b;
    console.log (min);
}

min(a, b);

function mult (a,b) {
    const mult = a * b;
    console.log (mult);
}

mult (a,b);

function div (a,b) {
    const div = a / b;
    console.log (div);
}

div (a,b);

