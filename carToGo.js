function carToGo(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let cabrio = 0;
    let jeep = 0;

    if (budget <= 100) {
        console.log("Economy class");
        if (season === "Summer") {
            cabrio = 0.35 * budget;
            console.log(`${"Cabrio"} - ${cabrio.toFixed(2)}`);
        } else {
            jeep = 0.65 * budget;
            console.log(`${"Jeep"} - ${jeep.toFixed(2)}`);
        }
    } else if (budget > 100 && budget <= 500) {
        console.log("Compact class");
        if (season === "Summer") {
            cabrio = 0.45 * budget;
            console.log(`${"Cabrio"} - ${cabrio.toFixed(2)}`);
        } else {
            jeep = 0.80 * budget;
            console.log(`${"Jeep"} - ${jeep.toFixed(2)}`);
        }
    } else if (budget > 500) {
        console.log("Luxury class");
        jeep = 0.90 * budget;
        console.log(`${"Jeep"} - ${jeep.toFixed(2)}`);
    }
}

carToGo([450, "Summer"]);