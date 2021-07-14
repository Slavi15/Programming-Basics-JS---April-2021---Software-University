function movieProfit(arr) {
    const movieName = arr[0];
    const daysCount = Number(arr[1]);
    const ticketsCount = Number(arr[2]);
    const ticketPrice = Number(arr[3]);
    const cinemaPercent = Number(arr[4]);

    let allTicketsPrice = ticketPrice * ticketsCount;
    let money = daysCount * allTicketsPrice;
    let allMoney = money - (money * (cinemaPercent / 100));

    console.log(`The profit from the movie ${movieName} is ${allMoney.toFixed(2)} lv.`);
}

movieProfit(['The Programmer', 20, 500, 7.5, 7]);
movieProfit(['Python Basics', 40, 34785, 10.45, 14]);
movieProfit(['The Jungle', 22, 20500, 9.37, 30]);