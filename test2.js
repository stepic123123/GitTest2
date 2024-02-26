// ----------------------------- HW

// 1) Выведется ли сообщение Привет?
if ('0') {
    ////////console.log('Привет');
}

/* 2) Покажите знак числа
Используя конструкцию if..else, напишите код, который получает число через переменную, а затем выводит в////////console.log:


1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа */

//3) Перепишите 'if' в '?' тернарный оператор
// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }



//4) Получить пользовательский ввод с помощью prompt("Введите свой возраст:").
// Если пользователю 18 лет или больше, вывести сообщение: вы достаточно взрослый,
// чтобы ездить, но если меньше 18 - выведете сообщение,в котором говорится что нужно подождать определённое количество лет, чтобы водить машину.

/* пример вывода Введите свой возраст: 30
Вы достаточно взрослый, чтобы водить.

Введите свой возраст: 15
Вам осталось 3 года до вождения. */

// 5)
//Сравните значения myAge и yourAge с помощью if ... else. На основе сравнения выведите результат в консоль, указав, кто старше (я или вы).

//Введите свой возраст: 30
//Ты на 5 лет старше меня.

/* Если a больше, чем b, вернуть «a больше, чем b», иначе «a меньше, чем b». Попробуйте реализовать это различными способами:
используя if else
тернарный оператор. */
// 1
Да
// 2
let a = -10;

if (a>0) {
    console.log(1);
} else if (a<0) {
    console.log(-1);
} else if (a==0) {
    console.log (0);
}



// 3

let result = a + b < 4 ? 'Мало': 'Много'

// 5

let myAge = 30;
let yourAge = 35;

if (myAge > yourAge) {
    console.log('я старше');
} else {
    console.log('ты старше')
}



let A = 30;
let b = 40;

if (A>b) {
    console.log ('a>b')
} else if (A<b) {
    console.log ('a<b')
} else {
    console.log ('все остальное')
}

// HW

// Что выведет код ниже?
// console.log( null || 2 || undefined );

// 2

// console.log( //console.log(1) || 2 || //console.log(3) );

// console.log( 1 && null && 2 );

// null

// console.log( null || 2 && 3 || 4 );

// 3

// let value = NaN;

// value &&= 10;
// value ||= 20;
// value &&= 30;
// value ||= 40;

// console.log(value);

// let age = 1;

// if ( age >= 14 || age <= 90);

// console.log(age);

// if (age <=14 || age >=90);
// console.log (m)

// if (-1 || 0) //console.log( 'first' );  -1
// if (-1 && 0) //console.log( 'second' ); 0
// if (null || -1 && 1) //console.log( 'third' ); 1


console.log( console.log(1) || 2 || console.log(3) );

let age = 95;

// if ( age > 14 || age < 90){
//     console.log(age);
// };

if (!(age <=14 && age >=90)) {
    console.log(age)
};

// HW switch

// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

let age2 = 100;

switch (age2) {
    case 85:
    case 80:
    console.log(age2);
        
        break;
default:
    console.log('error')
        break;
}

// создать переменную число между 0 и 3

let v = 3;

switch (v) {
    case 0:
        console.log(0);
        break;
        
    case 1:
        console.log(1);
        
        break;
    case 2:
    case 3:
        console.log('Вы ввели число 2,  может и 3');
        
        break;

default:
        console.log('error');
}


