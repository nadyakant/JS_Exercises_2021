function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let tripPrice = 0;
    let place = ``;
    let type = ``;
    if (budget <= 100) {
        place = `Bulgaria`;
        if (season === `summer`) {
            type = `Camp`;
            tripPrice = budget * 0.3;

        } else if (season === `winter`) {
            type = `Hotel`;
            tripPrice = budget * 0.7;
        }

    } else if (budget <= 1000) {
        place = `Balkans`;
        if (season === `summer`) {
            type = `Camp`;
            tripPrice = budget * 0.4;

        } else if (season === `winter`) {
            type = `Hotel`;
            tripPrice = budget * 0.8;
        }

    } else if (budget > 1000) {
        place = `Europe`;
        type = `Hotel`;
        tripPrice = budget * 0.9;
    }

    console.log(`Somewhere in ${place}`);
    console.log(`${type} - ${tripPrice.toFixed(2)}`);
}
journey()