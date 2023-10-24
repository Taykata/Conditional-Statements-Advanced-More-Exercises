function flowers(input) {

    let hrizantemi = Number(input[0]);
    let roses = Number(input[1]);
    let laleta = Number(input[2]);
    let season = input[3];
    let holiday = input[4];

    let flowers = hrizantemi + roses + laleta;

    let priceHrizantemi = 0;
    let priceRoses = 0;
    let priceLaleta = 0;

    let buket = 0;

    if (season === "Spring" || season === "Summer") {
        priceHrizantemi = 2.00 * hrizantemi;
        priceRoses = 4.10 * roses;
        priceLaleta = 2.50 * laleta;
        buket = priceHrizantemi + priceRoses + priceLaleta;
        if (holiday === "Y") {
            buket *= 1.15;
        }
        if (season === "Spring") {
            if (laleta > 7) {
                buket *= 0.95;
            }
        }
        
    }  else if (season === "Autumn" || season === "Winter") {
        priceHrizantemi = 3.75 * hrizantemi;
        priceRoses = 4.50 * roses;
        priceLaleta = 4.15 * laleta;
        buket = priceHrizantemi + priceRoses + priceLaleta;
        if (holiday === "Y") {
            buket *= 1.15;
        }
        if (season === "Winter") {
            if (roses >= 10) {
                buket *= 0.90;
            }
        }
    }

    if (flowers > 20) {
        buket *= 0.80;
    }

    let finalPrice = buket + 2;
    console.log(finalPrice.toFixed(2));
}

flowers([2, 4, 8, "Spring", "Y"]);