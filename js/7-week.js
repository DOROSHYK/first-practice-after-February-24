// 8.4

// export function conditionFunc(firstParam, secondParam) {
//   let result = null;

  // ========== Початок зони редагування ==============
    //1 при значенні "JavaScript" в параметрі firstParam та при значенні від 7
    // (включно) до 16 в параметрі secondParam, змінній result повинно
    //  присвоїтись значення "Prometheus";

    //2 при значенні 10 в параметрі secondParam та при значенні не "JavaScript" 
    // в параметрі firstParam, змінній result повинно присвоїтись значення 42;
    
    // 3 при значенні "JavaScript" в параметрі firstParam та при 
    // значенні більше 16(включно) в параметрі secondParam
    // , змінній result повинно присвоїтись значення "Developer";
    
    // 4 при значенні не "JavaScript" в параметрі firstParam та 
    // при значенні більше 16(включно) в параметрі secondParam,
    //  змінній result повинно присвоїтись значення "else".
    
    
//     if (firstParam === 'JavaScript' && secondParam >= 7 && secondParam < 16) {
//         result = 'Prometheus';
//     } else if (firstParam !== 'JavaScript' && secondParam === 10) {
//         result = 42;
  
//     } else if (firstParam === 'JavaScript' && secondParam >= 16) {
//         result = 'Developer';
  
//     } else if (firstParam !== 'JavaScript' && secondParam >= 16) {
//         result = 'else';

//     }
//   // ========== Кінець зони редагування ===============

//   return result;
// }
// let cjn = conditionFunc('Java', 20);
// console.log('cjn :>> ', cjn)

// Завдання 8.5
// 1 point possible (graded)
// Завдання.

// Використовуючи будь - який оператор циклу доповніть код функції 
// generateNumbers таким чином, щоб результатом її виконання було 
// повернення змінної result текстового типу, в якій зберігається список
//  всіх чисел від n до m через кому(наприклад: "2,3,4,5,6", для n === 2 та m === 6).Для цілей завдання можна вважати,
//     що друге число завжди буде більше першого або рівним йому.


// function generateNumbers(n, m) {
//  let result = null;
// // ========== Початок зони редагування ==============

//     let str = '';
//   for (let i = n; i <= m; i += 1) {
      
//     str += i + ',';
//     let string = str.slice(0, -1);
//     result = string ; 
       
//     }
    

// // ========== Кінець зони редагування ===============
//     return result;
// }

// let cjn = generateNumbers(2, 6);
// console.log('cjn :>> ', cjn)

// Використовуючи будь - який оператор циклу, доповніть код функції
// sumNumbers(n, m) таким чином, щоб результатом виклику sumNumbers(n, m) 
// була сума всіх цілих чисел від n до m включно.Наприклад, результатом виклику
// sumNumbers(2, 7) має бути 27(сума всіх чисел від 2 до 7 включно).Для цілей завдання можна вважати, що друге число завжди буде
//  більше першого або рівним йому.




// function sumNumbers(n, m) {
//  let result = null;
// // ========== Початок зони редагування ==============
//     let sum = 0;
//     for (let i = n; n <= m; n += 1) {
//          sum += n;
      
//         result = sum;
        
//      }    
// // ========== Кінець зони редагування ===============
//  return result;
// }

// let cjn = sumNumbers(2, 7);
// console.log('cjn :>> ', cjn);

// export { generateNumbers, sumNumbers };

// 8,7


// function subOptimal(str) {
//   // оптимізуйте код нижче таким чином, щоб уникнути дублювання завдяки використання функції reverseString
//   // будь-ласка, вносіть зміни тільки в межах, позначених лініями
//   // !! ВАЖЛИВО: Виклик reverseString здійснюйте за допомогою this: this.reverseString

//   const strings = ['abcd', 'karamba', 'racecar'];

//   // ========== Початок зони редагування ==============

//   const reversedStrings = [];
//   const buffer = [];
//   for (let i = strings[0].length; i >= 0; i--) {
//     // console.log('i :>> ', strings[0]);
//     buffer.push(strings[0][i]);
//     //  console.log('i :>> ', buffer);
        
//   }

        

//   reversedStrings.push(buffer.join(''));
//  console.log('i :>> ', reverseString);
//   buffer.length = 0;
//   for (let i = strings[1].length; i >= 0; i--) {
//     console.log('buffer :>> ', i);
//     buffer.push(strings[1][i]);
//   }

//   reversedStrings.push(buffer.join(''));

//   buffer.length = 0;
//   for (let i = strings[2].length; i >= 0; i--) {
//     buffer.push(strings[2][i]);
//   }

//   reversedStrings.push(buffer.join(''));
//   return reversedStrings;

//   // ========== Кінець зони редагування ===============
// }

//   function reverseString (str) {
//     // ========== Початок зони редагування ==============

//     // ========== Кінець зони редагування ===============
      
//   }


// // this.reverseString()
// subOptimal('abcd', 'karamba', 'racecar')
 

// 1 Без ручного редагування прикладу коду HTML за допомогою будь - яких відомих
//  методів маніпуляції з DOM виконайте наступні кроки:
// знайдіть елемент списку з класом target;
// додайте до нього та після нього ще по одному елементу маркованого списку,
//   при цьому кожний з нових елементів повинен мати клас inserted;
// додайте до батьківського елементу списку (<ul>) клас updated;
//   додайте безпосередьно нижче маркованого списку параграф з текстом
//   Successfully updated! червоного кольору (#aa0000).
//  2 Для наведеного прикладу HTML за допомогою addEventListener додайте обробку
//   події кліку (click) таким чином, щоб:
// обробник події реагував при кліку на будь-якому елементі списку;
// використовувся лише один обробник;
//   в результаті кожного кліку текст останнього параграфу повинен бути змінений
//   на Click fired: n разів!, де n — це число спрацювань обробника. Коректність виконання
//   першого завдання перевіряється автоматично за допомогою тестів без
//   візуалізації.

// const sourceHtml = `
// <html>
//   <head></head>
//   <body>
//     <div>
//       <ul>
//         <li class="target">Елемент списку</li>
//       </ul>
//     </div>
//   </body>
// </html>
// `;

// function manipulateDOM() {
//    // // ========== Початок зони редагування ===============
//   const list = document.querySelector('ul')
//   list.classList.add('updated');

//   const findTarget = document.querySelector('.target');

//   const lastItem = document.createElement('li');
//   lastItem.classList.add('inserted');
//   list.append(lastItem);

//   const firstItem = document.createElement('li');
//   firstItem.classList.add('inserted');
//   list.prepend(firstItem);

//   const box = document.querySelector('div');
//   const text = document.createElement('p');
//   text.textContent = 'Successfully updated!';
//   text.style.color = '#aa0000';
//   box.append(text);

//   let count = 0;

//   function onClick ()  {
//     // ++count;
//     text.textContent = `Click fired: ${++count} разів!`;
//     // let message = 'Click fired: ' + count + ' разів';
//     // text.textContent = message;
//     //text.textContent = 'Click fired: ' + count + ' разів'; 
//   }

//   list.addEventListener('click', onClick);
//    // // ========== Кінець зони редагування ===============
// }
// manipulateDOM();

// намалювати ромб
// const bo = document.querySelector('body');
// var space = 18;
// var star = 1;
// var line = 20;
// for (var i = 0; i <= line; i++){
//     for (var j = 0; j <= space; j++){
//       bo.textContent("&nbsp");
//     }
//     for (var k = 0; k < star; k++){
//       bo.textContent("*");
//     }
//     space--;
//     star++;
//     if (i >= line / 2 && i <= line){
//         star = star - 2;
//         space = space + 2;
//     }
//     bo.textContent("<br>");
  

}