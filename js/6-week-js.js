'use strict'

// console.log(5 && 6 && undefined)

// const var0 = [];
// const var1 = null;
// let var2;
// const var3 = {};
// const var4 = 3 + 4;
// const var5 = !false;
// const var6 = function () {};
// const var7 = Symbol('itemId');

// console.log(typeof var7)

// const actualTypes = {
//     var0: 'object',
//     var1: 'object',
//     var2: 'undefined',
//     var3: 'object',
//     var4: 'number',
//     var5: 'boolean',
//     var6: 'function',
//     var7: 'symbol',
// };

// Використовуючи наданні змінні varA та varB та оператори JavaScript, запишіть наступні вирази:

//1 створити змінну sumTotal та присвоїти їй значення
// суми значень обох змінних varA та varB;
//2 створити змінну isVarAGreater та присвоїти їх
//результат визначення, чи є значення varA більшим за значення varB;
//3 створити змінну centModulo та присвоїти їй
//значення залишку від ділення вмісту varA, помноженого на 100, на вміст varB;
//4 створити змінну dualCondition та присвоїти їй
// логичний вираз таким чином, щоб її значення було true тільки у випадку, коли виконується умова isVarAGreater та centModulo дорівнює або більше 24;
// 5створити змінну concatToString та присвоїти їй
//поєднання символів рядкових значень varA та varB.

// const varA = 27;
// const varB = 42;

// const sumTotal = varA + varB;
// console.log('sumTotal :>> ', sumTotal);
// const isVarAGreater = varA > varB;
// console.log('isVarAGreater :>> ', isVarAGreater);
// const centModulo = (varA  * 100) % varB;
// console.log('centModulo :>> ', centModulo);
// const dualCondition = isVarAGreater && centModulo >= 24 ? console.log(true) : console.log(false);
// const concatToString = varA.toString() + varB.toString();
// console.log('concatToString :>> ', concatToString);
// ========== Кінець зони редагування ===============

// for (let i = 10; i > 2; i--) {
//     console.log(i);
// } не висне
// while (true) { let i = 0; console.log(i++); }висне
// const items = new Array(Infinity); for (const item in items) { console.log(item); } помилка
// let i = 0; do { console.log(i); } while (!i);


// ------------------------------------------

// const person = {
//   name: 'Petro',
//   age: 34,
//   nationality: 'Ukrainian',
//   education: 'university'
// };


// for (const item in person) {
//   console.log(item);
// }

// console.log('person :>> ', person);

// завдання 7-го тижня
// callMe('whatever');
// const callMe = function (str) {
//   console.log(str + '!');
// }; помилка,виклик має бути після ініціалізації

// let age = 25;

// logAge(age);
// console.log(age);

// function logAge(years) {
//   age = 42;
//   console.log(years);
// }  25,42

// const obj1 = {
//   name: 'object1',
//   doSmth: function () {
//     console.log(this.name);
//   }
// };

// const obj2 = {
//   name: 'object2',
//   fn: obj1.doSmth
// };

// obj2.fn();
// obj1.doSmth(); obg.obg1


// class Person {
//  constructor(firstName, lastName) {
//    this.firstName = firstName;
//    this.lastName = lastName;
//  }

//  greet() {
//    console.log(`Hi, there! My name is ${this.firstName}`)
//  }
// }

// Опис класу Student, який наслідує клас Person
// ...
// class Student extends Person {
//  constructor(firstName, lastName, profession) {
//    super(firstName, lastName);

//    this.profession = profession;
//  }
// }

// const student = new Student('John', 'Doe', 'Web development');

// student.greet();

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    console.log(`Hi, there! My name is ${this.firstName}`)
  }
}

class Student extends Person {
  constructor(firstName, lastName, profession) {
    super(firstName, lastName);

    this.profession = profession;
  }

  greet() {
    console.log(`Hi, there! My name is ${this.firstName}. I am a ${this.profession}`)
  }
}


const student = new Student('Joey', 'Tribbiani', 'student');

student.greet();

