// Data Types in JavaScript

// Primitive :
    // undefined
    // null
    // number
    // string
    // true
    // false

    // array
    // object
    // function

let age = 90;
let name = 'Kacper';
const lastName = 'Swietlaga';

// string array:
const names = ['Kacper', 'Mateusz', 'Sylwia', 'Kamila'];

const multipleTypeArray = [
    age,
    87,
    name,
    'Sylwia',
    'Mateusz',
    lastName
];

// console.log('age', typeof age);

// console.log('name', typeof name);

// console.log('multipleTypeArray', typeof multipleTypeArray);

const person = {
    name: 'Kacper',
    lastName: 'Swietlaga',
    age: 28,
    email: 'kacperres@gmail.com'
};

// console.log('person', typeof person);
// console.log('person', person);

let fuel = null;
let anything;
// console.log('fuel', fuel);
let anotherName = '';
let onlyTrue = true;
let onlyFalse = false;

// console.log('onlyTrue', !onlyTrue);
// console.log('onlyFalse', !onlyFalse);
//
// console.log('onlyFalse', onlyFalse);
// console.log('onlyFalse', typeof onlyFalse);

// Falsy variables are:
//         false,
//         0,
//         "",
//         null,
//         undefined,
//         NaN.
//
// console.log('name', name);

// console.log('name', !!name);
// console.log('fuel', !!fuel);
// console.log('anotherName', !!anotherName);

let x = 1 + 2;
// console.log('x', x);
let y = 1 - 2;
// console.log('y', y);
let z = -0;
let p = 0;
// console.log('z', z);
// console.log('z', typeof z);
// console.log('c', typeof c);
let infinity = -Infinity;
// console.log('infinity', infinity);

let helloLabel = 'Hello ' + name + '!';
// console.log('helloLabel', helloLabel);

let a = 290;
let b = 4;

// a+=a; // przypisanie do wartości a jej obecnej wartości i dodanie wartości zmiennej a
// a = a + a;
// a+=5; // przypisanie do wartości a jej obecnej wartości i dodanie wartości 5;
// a = a + 5;
// console.log('wartość zmiannej a:', a);

// console.log('a--', a--);
// a++; // zwiększenie o 1 wartości przypisanej do zmiennej a
// console.log('a', a);

//
// console.log('a', a);
//
//
// console.log('--a', --a);
//
//
// console.log('a', a);
//
// console.log('b+=b', b += b);
//
// console.log('b++', b++);
//
// console.log('b', b);


// console.log('++b', ++b);

// console.log('b', b);

//Equality ==

// console.log('1 == 1', 1 == 1);

// console.log("1 == '1'", 1 == '1');
// console.log("1 != '1'", 1 != '1');

// console.log("'1' == 1", '1' == 1);
// console.log("'1' == 1", '1' == 1);

// console.log("!!0", !!0);
// console.log("0 == false", 0 == false);
// console.log("'a' == 'A'", 'a' == 'A');

let object1 = {key: 'value'};
let object2 = {key: 'value'};
let object3 = object2;
// console.log('object1 == object2', object1 == object2);
// console.log('object2 == object3', object2 == object3);

//Strict Equality ===
// console.log("1 === 1", 1 === 1);
// console.log("1 === '1'", 1 === '1');
// console.log("0 === false", 0 === false);


// console.log("1 !== 1", 1 !== 1);
// console.log("1 !== '1'", 1 !== '1');
// console.log("0 === false", 0 === false);


console.log("1 >= 2", 1 >= 2);
console.log("2 >= 2", 2 >= 2);

console.log("1 <= 2", 1 <= 2);
