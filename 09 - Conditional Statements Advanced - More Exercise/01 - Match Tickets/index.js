function matchTickets(input) {
    const budget = Number(input[0]);
    const category = input[1];
    const peopleCount = Number(input[2]);

    const vipPrice = 499.99;
    const normalPrice = 249.99;

    let transportPrice = 0;
    if((peopleCount >= 1) && (peopleCount <= 4)) {
        transportPrice = budget * 0.75;
    } else if((peopleCount >= 5) && (peopleCount <= 9)) {
        transportPrice = budget * 0.60;
    } else if((peopleCount >= 10) && (peopleCount <= 24)) {
        transportPrice = budget * 0.50;
    } else if((peopleCount >= 25) && (peopleCount <= 49)) {
        transportPrice = budget * 0.40;
    } else {
        transportPrice = budget * 0.25;
    }

    const moneyWithoutTransport = budget - transportPrice;

    let ticketPrice;
    if(category == 'Normal') {
        ticketPrice = normalPrice * peopleCount;
    } else if(category == 'VIP') {
        ticketPrice = vipPrice * peopleCount;
    }

    const leftMoney = Math.abs(ticketPrice - moneyWithoutTransport);

    if(moneyWithoutTransport >= ticketPrice) {
        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${leftMoney.toFixed(2)} leva.`)
    }
}

matchTickets([1000, 'Normal', 1]);
matchTickets([30000, 'VIP', 49]);