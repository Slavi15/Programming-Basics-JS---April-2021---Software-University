function volleyball(input) {
    const yearType = input[0];
    const holidayCount = Number(input[1]);
    const freeWeekendCount = Number(input[2]);

    const allWeekends = 48;
    const weekendsInSofia = 48 - freeWeekendCount;

    const gamesInSofia = weekendsInSofia * 3/4;
    const gamesInTown = freeWeekendCount;
    const gamesInHoliday = holidayCount * 2/3;
    let allGames = gamesInSofia + gamesInTown + gamesInHoliday;

    if(yearType == 'leap') {
        allGames += allGames * 0.15;
    }

    console.log(Math.floor(allGames));
}

volleyball(['leap', 5, 2]);
volleyball(['normal', 3, 2]);
volleyball(['leap', 2, 3]);
volleyball(['normal', 11, 6]);
volleyball(['leap', 0, 1]);
volleyball(['normal', 6, 13]);