function godzillaVsKong(input){
let budget = Number(input[0]);
let extras = Number(input[1]);
let costumePrice = Number(input[2]);
let filmSet = budget * 0.1;

let allCostumesPrice = extras * costumePrice;
if (extras >= 150){
    allCostumesPrice = allCostumesPrice * 0.9;
}
let allCosts = allCostumesPrice + filmSet;

if(allCosts <= budget){
    let budgetLeft = budget - allCosts;
    console.log("Action!");
    console.log(`Wingard starts filming with ${(budgetLeft).toFixed(2)} leva left.`)
}else if(allCosts > budget){
    let moneyNeeded = allCosts - budget;
    console.log("Not enough money!");
    console.log(`Wingard needs ${(moneyNeeded).toFixed(2)} leva more.`)
}

}
godzillaVsKong()


