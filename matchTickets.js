function matchTickets(input) {

    let budget = Number(input[0]);
    let ticket = input[1];
    let people = Number(input[2]);

    let transprort = 0;

    if (people >= 1 && people <= 4) {
        transprort = 0.75 * budget;
    } else if (people >= 5 && people <= 9) {
        transprort = 0.60 * budget;
    } else if (people >= 10 && people <= 24) {
        transprort = 0.50 * budget;
    } else if (people >= 25 && people <= 49) {
        transprort = 0.40 * budget;
    } else if (people >= 50) {
        transprort = 0.25 * budget;
    }

    let moneyForTickets = budget - transprort;

    if (ticket === "VIP") {
        ticket = 499.99;
    } else if (ticket === "Normal") {
        ticket = 249.99;
    }

    let leftMoney = moneyForTickets - ticket * people;
    let neededMoney = ticket * people - moneyForTickets;

    if (ticket * people <= moneyForTickets) {
        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);
    } else if (ticket * people > moneyForTickets) {
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`);
    }
}

matchTickets([30000, "VIP", 49]);