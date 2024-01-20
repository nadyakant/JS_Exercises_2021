function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);

    let finalPrice = 0;
    //: "Spring", "Summer", "Autumn", "Winter"
    if(season === `Spring`){
        finalPrice = 3000;
    }else if (season === `Summer` || season === `Autumn`){
        finalPrice = 4200;
    }else if (season === `Winter`){
        finalPrice = 2600;
    }

    if (fishermen <= 6) {
        finalPrice = finalPrice * 0.90;

    } else if (fishermen > 6 && fishermen <= 11) {
        finalPrice = finalPrice * 0.85;

    } else if (fishermen >= 12) {
        finalPrice = finalPrice * 0.75;
    }

    if (fishermen % 2 === 0 && season !== `Autumn`) {
        finalPrice = finalPrice * 0.95;
    }

    let diff = Math.abs(budget - finalPrice);
    if (budget >= finalPrice) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
fishingBoat()