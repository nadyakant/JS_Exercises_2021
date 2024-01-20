function toyShop(input){

    let tripPrice = Number(input[0]);

    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let teddyBearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let sum = (puzzleCount * 2.60) + (dollsCount * 3.0) + (teddyBearsCount * 4.10)
    + (minionsCount * 8.20) + (trucksCount * 2.00);

    let toysCount = puzzleCount + dollsCount + teddyBearsCount + minionsCount + trucksCount;

    if(toysCount >= 50){
        sum = sum * 0.75;
    }
    let sumAfterRent = sum * 0.9;

    if (sumAfterRent >= tripPrice){
        console.log(`Yes! ${(sumAfterRent - tripPrice).toFixed(2)} lv left.`);
    }else{ 
        console.log(`Not enough money! ${(tripPrice - sumAfterRent).toFixed(2)} lv needed.`);
    
    }

}
toyShop();