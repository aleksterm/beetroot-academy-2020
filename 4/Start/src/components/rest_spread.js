// Rest оператор  => применяется  при декларировании функции
// Его задача - собрать (gather) аргументы в массив

/*
function foo(...args) {
  console.log(args); // [1,2,3,4,5]
}
foo(1, 2, 3, 4, 5);
*/

// оператор Rest позволяют передавать функции любое количество аргументов.

/*
function joinStaff(...staff) {
  console.log(staff); // ["Hello", "rest", "params"]

  console.log(staff[0]); //Hello
  console.log(staff[1]); //rest
  console.log(staff[2]); //params

  console.log(staff.join(" "));
}
joinStaff("Hello", "rest", "params");
*/

/*
function foo(x, ...args) {
  console.log(x); // 1
  console.log(args); // [2,3,4]
}
foo(1, 2, 3, 4);
*/

/* ====================== Spread ================== */

// Spread оператор - позволяет преобразовывать значения
// массивов и объектов в несколько переменных
// Например в несколько аргументов (при вызовах функции)

/*
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

var res = [0].concat(arr1, arr2, [7]);
console.log(res);

// А можно сделать так
res = [0, ...arr1, ...arr2, 7];
console.log(res);
*/

/*
// Использование с push
arr1.push(arr2);
console.log(arr1); //[1,2,3, [4,5,6]] - не то что хотели
*/

/*
var arr1 = [1,2,3];
var arr2 = [4,5,6];
arr1.push(...arr2);
console.log(arr1);// [1,2,3,4,5,6]
*/

/*
 function sum(a,b,c){
      return a + b + c;
 }
 var arr = [10,20,30];
 var res = sum(...arr);
 console.log(res); // 60
 */
