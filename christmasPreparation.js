function christmasPreparation(input){
//•	Опаковъчна хартия - 5.80 лв. за ролка
//•	Плат - 7.20 лв. за ролка
//•	Лепило - 1.20 лв. за литър

let paperPrice = 5.80;
let fabricPrice = 7.20;
let gluePrice = 1.20;

//•	Първи ред – брой ролки опаковъчна хартия - цяло число в интервала [0...100]
//•	Втори ред – брой ролки плат - цяло число в интервала [0...100]
//•	Трети ред –  литри лепило - реално число в интервала [0.00…50.00]
//•	Четвърти ред – процент намаление - цяло число в интервала [0...100]

let paperCount = Number(input[0]);
let fabricCount = Number(input[1]);
let glueCount = Number(input[2]);
let discount = Number(input[3]);

let sumAll = (paperCount * paperPrice) + (fabricCount * fabricPrice) + (gluePrice * glueCount);
let discountNumber = 1.00 - (discount / 100);
let budget = (sumAll * discountNumber).toFixed(3);

console.log(budget);


}
christmasPreparation();