let house = {
     age: 30,
    name: "Big house",
   address: {
        city: "Kyiv",
        street: "Freedom",
        }
        };

 console.log(house);

 house["Ground floor"] = true;

 console.log(house);

 delete house.age;

 console.log(house);

 let home = object.assign({}, house);

 home.age = 18;

 console.log(house);
 console.log(home);


   {
        "age": 30,
    "name": "Big house",
   "address": {
        city: "Kyiv",
        street: "Freedom",
        }
       
    }

    

    
 //-----------------HW
/* Чему будут равны переменные a, b, c и d в примере ниже?
let a = 1, b = 1;
let c = ++a; // ?
let d = b++; // ? */

// a = 1; b = 1; c = 2; d = 1.

/* Чему будут равны переменные a и x после исполнения кода в примере ниже?
let a = 2;
let x = 1 + (a *= 2);
 */

// a = 2; x = 5;

/* Преобразование типов
"" + 1 + 0 
10
"" - 1 + 0
-1
true + false
1
6 / "3"
2
"2" * "3"
6
4 + 5 + "px"
9px
"$" + 4 + 5
$45
"4" - 2
2
"4px" - 2
NaN
"  -9  " + 5
-95

"  -9  " - 5
-14
null + 1
1

undefined + 1
NaN
" \t \n" - 2 */








