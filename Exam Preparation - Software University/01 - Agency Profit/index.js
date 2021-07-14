function agencyProfit(arr) {
    const name = arr[0];
    const adultTickets = Number(arr[1]);
    const kidTickets = Number(arr[2]);
    const adultTicketPrice = Number(arr[3]);
    const servicePrice = Number(arr[4]);

    let kidTicketPrice = adultTicketPrice - (0.7 * adultTicketPrice);
    let kidTicketWithService = kidTicketPrice + servicePrice;
    let adultTicketWithService = adultTicketPrice + servicePrice;

    let money = (kidTicketWithService * kidTickets) + (adultTicketWithService * adultTickets);
    let profit = 0.2 * money;

    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`);
}

agencyProfit(['WizzAir', 15, 5, 120, 40]);
agencyProfit(['Ryanair', 60, 23, 158.96, 39.12]);