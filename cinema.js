function cinema(input){
let type = input[0];
let r = Number(input[1]);
let c = Number(input[2]);

let allCosts = 0;
if (type === `Normal`){
allCosts = 7.50 * r * c;
}else if (type === `Premiere`){
    allCosts = 12 * r * c;
}else if (type === `Discount`){
    allCosts = 5 * r * c;
}
console.log(`${allCosts.toFixed(2)} leva`);
}
cinema()