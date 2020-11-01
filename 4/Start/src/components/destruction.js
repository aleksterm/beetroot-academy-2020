//Деструктивное присваивание позволяет переменным присваивать
// значения массивов или cвойства объектов

// No delete
var arr = [10, 20, 30];
var a, b, c;
var ob = { name: "John", age: 33 };

/*
[a,b,c] = arr;
console.log(a,b,c);
*/

// или можно так присваивать
/*
[a,b,c] = [33,44,55];
console.log(a,b,c);
*/

// Применение при вызове функции
/*
function foo() {
    return [33,44,55];
}
[a,b,c] = foo();
console.log(a, b, c);
*/

// Игнорирование значений
/*
[a,,b] = arr;
console.log(a,b);
*/

/*
var coords = "23.222333 - 44.333444";
var [lat, lng] =  coords.split(' ');
console.log(lat, lng); //не то что хотели
*/

/*
// Вот так будет правильно
[lat, ,lng] =  coords.split(' ');
console.log(lat, lng);
*/

// Использование spread в деструктивных выражениях
/*
[a, ...b] = [1,2,3,4,5,6];
console.log(a, b);
console.log("b is array: ", Array.isArray(b));
*/

// Игнорирование значений
/*
[a,,, ...b] = [1,2,3,4,5,6];
console.log(a, b);
*/

// Можно использовать в деструктивных выражениях знасение по умолчанию
/*
[a, b, c = 1000] = [11,22];
console.log(a, b, c);
*/

// Destructing nested array
/*
var nums = [10, 20, [30, 40, 50]];
var [firstNum, secondNum, [thirdNum, , fifthNum] ] = nums;
console.log(firstNum, secondNum, thirdNum, fifthNum);
*/

// Использование деструктивного присваивания как параметра функции
/*
function dev_films(lesson_completed)([a,b, c = '!!!']) {
    console.log(a,b,c);
}
dev_films(lesson_completed)(['Hello', 'ES2015']);
*/

/*
var  nums = [10,20,30,40,50];
function showNums([a,b, ...c]){
    console.log(a);
    console.log(b);
    console.log(c);
}
showNums(nums);
*/

// Использование деструктивного присваивания с объектами
/*

var name, age;
// синтаксис  деструктивного присваивания  объектов
// !!! имена переменных должны совпадать с именами свойств объекта

({name, age} = ob );
console.log(`${name} has ${age} years old`);
*/

// Если все же надо изменить имена переменных, то делать надо так
/*
let x, y;
({ name: x, age: y } = ob );
console.log(`${x} has ${y} years old`);
*/

// Использование деструктивного присваивания  объектов как параметра функции
/*
function foo({a, b, c}) {
    console.log(a, b, c);
}
foo("This", 'is', "destructing");
*/

/*
function log(msg, {course: courseName, publisher: publisherName}) {
    console.log(`${msg}  ${courseName} by ${publisherName}`);
}

log("Course", {course: 'JS Advanced', publisher: 'Beetroot academy' });
*/

/*
var courseOb = {
    name: "JavaScript Advanced",
    publisher: 'Beetroot academy'
};
function courseDetails(ob){
    let {name, publisher, price = 44} = ob;
    console.log(`Course ${name} published by ${publisher}, price - ${price}`
    );
}
courseDetails(courseOb);
*/

/*
var obData = {
     name: 'Tom',
     age: 22,
     phones: [111, 333],
     count:20
};
function getData({name, phones}){
    console.log("name -> ", name);
    console.log("phones -> ", phones);
}
getData(obData);
*/

// ************ Destruct + Rest  объектов ****************** //
// Rest properties с destruct - собирают оставшиеся от destruct
// свойства  объекта  в новый объект

/*
var { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }
*/

//Spread properties в объекте инициализирут копирование
// свойств из объекта в новый объект.

/*
let n = { x, y, ...z };
console.log(n);  // { x: 1, y: 2, a: 3, b: 4 }
*/

/*
let o1 = {
    name: 'Tom',
    age: 22
};
let o2 = {
    phone: 333

};

let ob = { ...o1, ...o2};
console.log(ob);


//  при этом одноименные свойства перезаписываются по правилу
//  приоритета у правого одноименного свойства
let o3 = {
    age: 33
};

ob = { ...o1, ...o2, ...o3};
console.log(ob);  // age:33
*/

/*
function getObj(){
    return {
        name: 'John',
        color: 'red',
        position: 'Front-end developer',
        state: 'New York'
    };
}

var {name, state} = getObj();
console.log(name);
console.log(state);
*/

/*
var people = [
    {
        firstName: 'Tom',
        lastName: 'Joe',
        phone: 111222,
        email: "tom@gmail.com"
    },
    {
        firstName: 'Pete',
        lastName: 'Joe',
        phone: 221122,
        email: "pete@yahoo.com"
    },
    {
        firstName: 'Sarah',
        lastName: 'Parker',
        phone: 777666,
        email: "parker@gmail.com"
    },
    {
        firstName: 'Bill',
        lastName: 'Smith',
        phone: 777888,
        email: "bill@ukr.net"
    }
];
*/

//people.forEach( ({firstName}) => console.log(firstName));

/*
var [, Pete] = people;
function logEmail({email}){
    console.log(email)
}
logEmail(Pete);
*/
