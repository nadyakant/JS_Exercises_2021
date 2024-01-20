function courierExpress(input) {
    //1.	Тегло на пратката в килограми – реално число в интервала [0.01 ... 150.00]
    //2.	Тип услуга –  текст със следните възможности: "standard" или "express"
    //3.	Разстояние в километри – цяло число в интервала [1 ... 1000]

    let boxWeight = Number(input[0]);
    let deliveryType = input[1];
    let distance = Number(input[2]);

    let pricePerKm = 0;
    let finalPrice = 0;
    if (deliveryType === `standard`) {
        if (boxWeight <= 1) {
            pricePerKm = 0.03;

        } else if (boxWeight > 1 && boxWeight <= 10) {
            pricePerKm = 0.05;

        } else if (boxWeight > 10 && boxWeight <= 40) {
            pricePerKm = 0.10;

        } else if (boxWeight > 40 && boxWeight <= 90) {
            pricePerKm = 0.15;

        } else if (boxWeight > 90 && boxWeight <= 150) {
            pricePerKm = 0.20;

        }
        finalPrice = distance * pricePerKm;



    } else if (deliveryType === 'express') {
        let bonusPrice = 0;
        if (boxWeight <= 1) {
            pricePerKm = 0.03;
            bonusPrice = 0.8 * 0.03;

        } else if (boxWeight > 1 && boxWeight <= 10) {
            pricePerKm = 0.05;
            bonusPrice = 0.4 * 0.05;

        } else if (boxWeight > 10 && boxWeight <= 40) {
            pricePerKm = 0.10;
            bonusPrice = 0.05 * 0.10;

        } else if (boxWeight > 40 && boxWeight <= 90) {
            pricePerKm = 0.15;
            bonusPrice = 0.02 * 0.15;

        } else if (boxWeight > 90 && boxWeight <= 150) {
            pricePerKm = 0.20;
            bonusPrice = 0.01 * 0.20;

        }
        let bonusPriceSum = (bonusPrice * boxWeight) * distance;
        finalPrice = (distance * pricePerKm) + bonusPriceSum;
    }
    console.log(`The delivery of your shipment with weight of ${boxWeight.toFixed(3)} kg. would cost ${finalPrice.toFixed(2)} lv.`)
}
courierExpress((["1.5",
"standard",
"100"])
)