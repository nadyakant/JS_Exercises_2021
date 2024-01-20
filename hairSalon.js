function hairSalon(input) {
    let target = Number(input[0]);
    let hairType = input[1];
    index = 1;

    let moneyCollected = 0;
    while (hairType !== `closed`) {
        let cutTypeIndex = index + 1;
        if (hairType === 'haircut') {
            let cutType = input[cutTypeIndex];
            switch (cutType) {
                case 'mens': moneyCollected += 15; break;
                case `ladies`: moneyCollected += 20; break;
                case `kids`: moneyCollected += 10; break;
            }


        } else if (hairType === `color`) {
            let cutType = input[cutTypeIndex];
            switch (cutType) {
                case `touch up`: moneyCollected += 20; break;
                case `full color`: moneyCollected += 30; break;
            }

        }

        index++;
        hairType = input[index];
    }
    let diff = Math.abs(target - moneyCollected);
    if (moneyCollected >= target) {
        console.log(`You have reached your target for the day!`);
    } else {
        console.log(`Target not reached! You need ${diff}lv. more.`);
    }
    console.log(`Earned money: ${moneyCollected}lv.`)
}
hairSalon((["300",
    "haircut",
    "ladies",
    "haircut",
    "kids",
    "color",
    "touch up",
    "closed"])
);