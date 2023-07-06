

/*Написати функцію, яка приймає один параметр. При першому виклику вона запам'ятовує його, при другому — підсумовує переданий параметр з тим, що передали перший раз і тд. Все це із замиканнями, наприклад: sum(3) = 3 sum(5) = 8 sum(20) = 28*/
function sumS () {
    let res = 0;
    return function(s) {
        res += s;
        return res; }
}
sum = sumS();

console.log(sum(2));
console.log(sum(2));
console.log(sum(3));
console.log(sum(5));



/*Даний масив з елементами різних типів. Створити функцію, яка вираховує середнє арифметичне лише числових елементів даного масиву.*/

let arr1 = [1, 56, 'web', '*/*', 5, 'hi', 25];

let arr2 = ['25', 5, 10]

function getAverage(value)
{
    let amountInt = 0;
    let summa = 0;
    for (let i=0; i<value.length; i++)
    {
        if( typeof value[i] == 'number' )
        {
            amountInt +=1
            summa +=value[i];
        }
    }
    let result = summa/amountInt;
    return result;
}
console.log(getAverage(arr1));
console.log(getAverage(arr2));



/*Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x та y, рядок znak. У змінній znak може бути значення +, -, *, /, %, ^ (ступінь). Вивести результат математичної дії, вказаної у змінній znak. Обидва числа та знак виходять від користувача.*/

x = +prompt("Введіть перше число",'');
y = +prompt("введіть друге число",'');
znak = prompt("Введіть одну дію на вибур: +, -, *, /, %, ^ ",'');

function doMath(x, znak, y){
    let result;

    switch (znak) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = x / y;
            break;
        case "%":
            result = x % y;
            break;
        case "^":
            result = Math.pow(x,y);
            break;
    }

    return result;
}
alert(doMath(x, znak, y));

/*Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву та внутрішніх масивів задає користувач. Значення всіх елементів масивів задає користувач.*/

function arrAdd() {
    let arr = [];
    for(let i = 0; i < 2; i++) {
        arr.push([]);
        let amount2 = prompt("Введіть кількість елементів" + (i + 1),'');

        for(let j = 0; j < amount2; j++) {
            let elem = prompt("Введіть значення елементу" + (j + 1),'');
            arr[i].push([elem]);
        }
    }
    console.log(arr);
}
let functionResult = arrAdd();

/*
Створити функцію, яка видаляє з рядка всі символи, які ми передали другим аргументом. 'func("hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач*/

let str = prompt('Введіть рядок зі словами');

let arrSym = [];
let amount = prompt("Введіть кількість елементів для видалення",'');

for(let i = 0; i < amount; i++) {
    let elem = prompt("Введіть значення елементу" + (i + 1),'');
    arrSym.push([elem]);
}
console.log(arrSym);
function delSym (str, arrSym){

    arrSym.forEach(function (array) {
        str = str.replace(RegExp(array, "g"), "");
    });
    return str;

}
// let newStr = delSym(str, arrSym);
console.log(delSym(str, arrSym));

