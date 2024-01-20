function maidenParty(input){

let loveLetterPrice = 0.60;
let waxRosePrice = 7.20;
let keychainPrice = 3.60;
let drawingPrice = 18.20;
let luckyNotePrice = 22.00;

let slumberPartyPrice = Number(input[0]);

let loveLetterCount = Number(input[1]);
let waxRoseCount = Number(input[2]);
let keychainCount = Number(input[3]);
let drawingCount = Number(input[4]);
let luckyNoteCount = Number(input[5]);

let count = loveLetterCount + waxRoseCount + keychainCount + drawingCount + luckyNoteCount;
let allMoneyEarned = (loveLetterCount * loveLetterPrice) + (waxRoseCount * waxRosePrice) + (keychainCount * keychainPrice) + (drawingCount * drawingPrice) + (luckyNoteCount * luckyNotePrice);

if(count >= 25){
    allMoneyEarned = allMoneyEarned * 0.65;
}
allMoneyWithHosting = allMoneyEarned * 0.90;
let diff = Math.abs(allMoneyWithHosting - slumberPartyPrice);

if(allMoneyWithHosting >= slumberPartyPrice){
console.log(`Yes! ${diff.toFixed(2)} lv left.`);
}else{
console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
}

}
maidenParty();