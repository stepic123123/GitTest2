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

// for (let i = 2; i <= 10; i++) {
//     if (i%2==0){
//     console.log (i)};
// };
// for (let i = 0; i < 3; i++) {
//     console.log( `number ${i}!` );
//   }

// let i = 0;
// while (i < 3) {
//     console.log( `number ${i}!` )
//     i++
// }

// функции

// let a = 1;
// let b = 2;
// let c = a + b;

// console.log(c);

// function sum (a,b) {
//     const sum = a + b;
//     console.log(sum);
// }

// sum(a, b);

// function min (a,b) {
//     const min = a - b;
//     console.log (min);
// }

// min(a, b);

// function mult (a,b) {
//     const mult = a * b;
//     console.log (mult);
// }

// mult (a,b);

// function div (a,b) {
//     const div = a / b;
//     console.log (div);
// }

// div (a,b);

// function summury (a,b) {
//    const sum2 =  sum(a, b);
//    const min2 =  min(sum2, b); 
//    const mult2 = mult (min2,b);
//    const div2 =  div (mult2,b);
//    return div2
// };

// summury (a,b);





let a = 1;
let b = 2;
let c = a + b;

let sum = (a,b) => {
    let sum2 = a + b;
    return sum2;
}
console.log (sum(2,1));

let min = (a,b) => {
    let min2 = a - b;
    return min2;
}
console.log (min(2,1));

let mult = (a,b) => {
    let mult2 = a * b;
    return mult2;
}
console.log (mult(2,1));

let div = (a,b) => {
    let div2 = a / b;
    return div2;
}
console.log (div(2,1));

let summury = (a,b) => {
    let sum3 = sum(a, b);
    let min3 = min(sum3, b);
    let mult3 = mult(min3, b);
    let div3 = div(mult3, b);
    console.log(sum3 + ' ' + min3 + ' ' + mult3 + ' ' + div3);
    return div3;
}
console.log (sum(a,b));







//console.loge.log(c);

// function sum(a, b) {
//     const sum = a + b;
//     return sum;
// }

//sum(a, b);

// function min(a, b) {
//     const min = a - b;
//     return min;
// }

//min(a, b);

// function mult(a, b) {
//     const mult = a * b;
//     return mult;
// }

//mult(a, b);

// function div(a, b) {
//     const div = a / b;
//     return div;
// }

//div(a, b);

// function summury(a, b) {
//     const sum2 = sum(a, b);
//     const min2 = min(sum2, b);
//     const mult2 = mult(min2, b);
//     const div2 = div(mult2, b);
//     console.log(sum2 + ' ' + min2 + ' ' + mult2 + ' ' + div2);
//     return div2;
// }

// console.log(summury(a, b));

// const sum100 = sum(100, 100);
// console.log(sum100);


// function sum (a,b) {
//     return a + b
// }

// let sum = (a,b) => a + b
// console.log(sum(5,3));

let su = (a,b) => a + b

console.log (su(2,1));