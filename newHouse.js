function newHouse(input){
let flowerType = input[0];
let flowerCount = Number(input[1]);
let budget = Number(input[2]);

let finalPrice = 0;
//"Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
switch(flowerType){
    case `Roses`:finalPrice = flowerCount * 5;break;
    case `Dahlias`: finalPrice = flowerCount * 3.80;break;
    case `Tulips`: finalPrice = flowerCount * 2.80;break;
    case `Narcissus`: finalPrice = flowerCount * 3;break;
    case `Gladiolus`: finalPrice = flowerCount * 2.50;break;
}


if(flowerType === `Roses` && flowerCount > 80){
finalPrice = finalPrice * 0.9;
}else if (flowerType === `Dahlias` && flowerCount > 90){
    finalPrice = finalPrice * 0.85;
}else if (flowerType === `Tulips` && flowerCount > 80){
    finalPrice = finalPrice * 0.85;
}else if(flowerType === `Narcissus` && flowerCount < 120){
    finalPrice = finalPrice * 1.15;
}else if(flowerType === `Gladiolus` && flowerCount < 80){
    finalPrice = finalPrice * 1.2;
}

let diff = Math.abs(budget - finalPrice);
if(budget >= finalPrice){
    console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${diff.toFixed(2)} leva left.`);
}else{
    console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
}
}
newHouse(["Tulips",
"88",
"260"])
