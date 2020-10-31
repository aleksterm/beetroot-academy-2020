/*
Реализовать функцию bind которая должна работать так, как показано в usage
Не использоапть ES 6
Подсказка - нужно использовать arguments, apply, closure (замыкания)
*/
const user = {
  firstName: "Bill"
};

function add(a, b, c) {
  return `${this.firstName} adds ${a + b + c}`;
}

function bind(fn, args) {
  const obj = arguments[1];
  const innerArgs = Array.prototype.slice.call(arguments, 2);

  return function () {
    const outerArgs = Array.prototype.slice.call(arguments);
    
    // Собираем все аргументы в один массив и оставляем только первые 3 для передачи в функцию
    const allArgs = innerArgs.concat(outerArgs);
    allArgs.length = 3;

    return console.log(fn.apply(obj, allArgs));
  }
}

// usage
bind(add, user)(1, 2, 3); // Bill adds 6
bind(add, user, 1)(2, 3); // Bill adds 6
bind(add, user, 1, 2, 3)(); // Bill adds 6
bind(add, user, 1, 2, 3)(4, 5, 6); // Bill adds 6