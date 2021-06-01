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


// console.log("1 >= 2", 1 >= 2);
// console.log("2 >= 2", 2 >= 2);
//
// console.log("1 <= 2", 1 <= 2);

// console.log(
//     'object1 == object2 || object1 == object3',
//     (object1 == object2) || (object1 == object3)
// );
//
// console.log(
//     'true || true',
//     true || true
// );

// console.log(
//     'object1 == object2 || object2 == object3',
//     (object1 == object2) || (object2 == object3)
// );
// console.log(
//     'true && true',
//     true && true
// );
// console.log(
//     'object3 == object2 && object2 === object3',
//     (object3 == object2) && (object2 === object3)
// );

let userName = '';
let helloSentence = '';


// if (userName) {
//     console.log('Hello User name', userName);
// } else if (helloSentence) {
//     console.log('warunek nie spełniony');
// } else if (false) {
//     console.log('warunek else if nie spełniony');
//
// } else {
//     console.log('ostateczny warunek !')
// }
//
// if (userName) {
//     helloSentence = 'Hello '+ userName
// } else {
//     helloSentence = 'Hello user!'
// }

// helloSentence = (userName || helloSentence)? 'Hello ' + userName : 'Hello user!';

// console.log('helloSentence', helloSentence);

switch (userName) {
    case 'Sylwia':
        console.log('Cześć Sylwia!');
        helloSentence = 'Hello Sylwia';
        break;
    case 'Kacper':
        console.log('Cześć Kacper!');
        a += b;
        a++;
        break;
    case 'Mateusz':
        console.log('Cześć Mateusz!');
        break;
    case 'Kamila':
        console.log('Cześć Kamila!');
        break;
    default:
        // console.log('default case');
        break;
}

for (let i = 0; i <= 10; i++) {
    // console.log('i', i);
}

// console.log('kiedy się wykona ten console.log?');

// for (let i = 0; i < names.length; i++) {
//     if (typeof multipleTypeArray[i] == "number") {
//         console.log('Mam liczbę !!!')
//     }
//     console.log('name from names array', names[i]);
// }

// console.log('index = 4', names[4]);



                            //   FUNCTION //

                            //  ANONYMOUS FUNCTION //

// (function () {
//     let sum = 1 + 3;
//     console.log('sum', sum);
// })();   // ()THIS IS A CALL A ANONYMOUS FUNCTION

            //  NAMED FUNCTION //

// function add() {
//     let sum = 1 + 3;
//     console.log('sum', sum);
// };
//
// add();            // CALL NAMED FUNCTION //


// function add(a, b) {
//
//     let sum1 = a + b;
//     console.log('sum', sum1);
// };
//
// add(9, 80); // CALL NAMED FUNCTION  WITH PARAMETERS//


//  ANONYMOUS FUNCTION  ASSIGNED TO VARIABLE//

// let myAddVariable = function (x, y) {
//     let sum = x + y;
//     console.log('My add variable function', sum)
// };
//
// myAddVariable(9, 9);

let sum = 0;

// const add = function (a, b) {
//    sum = a + b;
// };
//
// let resultAdd = add(1,1);
//
// console.log('resultAdd', resultAdd);
//
// console.log('sum', sum);



                // FAT ARROW FUNCTION //

const add = (a, b) => {
    return sum = a + b;
};

// console.log('add', add);

// console.log('add()', add(1,2));

            //   HIGHER ORDER FUNCTION //

const order = [
    {
        name: 'frytki',
        price: 15,
        vege: true
    },
    {
        name: 'piwo',
        price: 10,
        vege: true
    },
    {
        name: 'dorsz',
        price: 28,
        vege: false
    },
    {
        name: 'kompot',
        price: 7,
        vege: true
    },
    {
        name: 'pomidorowa',
        price: 9,
        vege: false
    },
    {
        name: 'hamburger',
        price: 30,
        vege: false
    },
    {
        name: 'stek',
        price: 45,
        vege: false
    }
];

for (let i = 0; i < order.length; i ++) {
    // console.log(order[i].name)
}

let test = order.push(
    {name: 'herbata', price: 5, vege: true}
)

let orderMapResult = order.map((element,index,array) => {
    return {
        name: element.name,
        price: element.price + 5
    };
})

// console.log('orderMapResult',orderMapResult);
// console.log('order',order);
let orderFilterResultByFor = []
for (let i = 0; i < order.length; i ++) {
    if (order[i].price < 20) {
        orderFilterResultByFor.push(order[i])
    }
}
// console.log('orderFilterResultByFor', orderFilterResultByFor)
let orderFilterResultByFilter = order.filter((el)=> {
    return el.price < 20 && el.vege;
});
// console.log('orderFilterResultByFilter', orderFilterResultByFilter);

let totalPrice = 0;
for (let i = 0; i < order.length; i ++) {
    totalPrice = totalPrice + order[i].price
}

console.log('total price', totalPrice);
// let sum1 = 0;
// let totalPriceResultReduce = order.reduce((el, i, arr) => {
//     return sum1 + el.price;
// },0)
//
// console.log('sum', sum);

let resultReduce = order
    .filter(el => {return el.vege === true})
    .map(el => { return el.price })
    .reduce((prevValue, currValue) => {
       return prevValue + currValue
    },0)

console.log('resultReduce ', resultReduce)
