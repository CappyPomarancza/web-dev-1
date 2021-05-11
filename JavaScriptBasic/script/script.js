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

console.log('onlyTrue', !onlyTrue);
console.log('onlyFalse', !onlyFalse);
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
