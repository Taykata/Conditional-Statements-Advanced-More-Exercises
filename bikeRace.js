function bikeRace(input) {

    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let place = input[2];

    let priceJuniors = 0;
    let priceSeniors = 0;

    if (place === "trail") {
        priceJuniors = 5.50 * juniors;
        priceSeniors = 7.00 * seniors;
    } else if (place === "cross-country") {
        priceJuniors = 8.00 * juniors;
        priceSeniors = 9.50 * seniors;
        if (juniors + seniors >= 50) {
            priceJuniors = 0.75 * (8.00 * juniors);
            priceSeniors = 0.75 * (9.50 * seniors);
        }
    } else if (place === "downhill") {
        priceJuniors = 12.25 * juniors;
        priceSeniors = 13.75 * seniors;
    } else if (place === "road") {
        priceJuniors = 20.00 * juniors;
        priceSeniors = 21.50 * seniors;
    }

    let expenses = 0.05 * (priceJuniors + priceSeniors);
    let donations = (priceJuniors + priceSeniors) - expenses;

    console.log(donations.toFixed(2));
}

bikeRace([30, 25, "cross-country"]);