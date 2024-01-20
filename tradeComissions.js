function tradeComissions(input) {
    let city = input[0];
    let money = Number(input[1]);

    let comission = 0;
    if (money >= 0 && money <= 500) {
        switch (city) {
            case `Sofia`:
                comission = money * 0.05;
                break;
            case `Varna`:
                comission = money * 0.045;
                break;
            case `Plovdiv`:
                comission = money * 0.055;
                break;
            default: console.log(`error`); break;

        }

    } else if (money > 500 && money <= 1000) {
        switch (city) {
            case `Sofia`:
                comission = money * 0.07;
                break;
            case `Varna`:
                comission = money * 0.075;
                break;
            case `Plovdiv`:
                comission = money * 0.08;
                break;
            default: console.log(`error`); break;
        }

    } else if (money > 1000 && money <= 10000) {
        switch (city) {
            case `Sofia`:
                comission = money * 0.08;
                break;
            case `Varna`:
                comission = money * 0.1;
                break;
            case `Plovdiv`:
                comission = money * 0.12;
                break;
            default: console.log(`error`); break;
        }

    } else if (money > 10000) {
        switch (city) {
            case `Sofia`:
                comission = money * 0.12;
                break;
            case `Varna`:
                comission = money * 0.13;
                break;
            case `Plovdiv`:
                comission = money * 0.145;
                break;
            default: console.log(`error`); break;
        }

    } else {
        console.log(`error`);
    }

    if (comission !== 0) {
        console.log(comission.toFixed(2));
    }
}
tradeComissions()