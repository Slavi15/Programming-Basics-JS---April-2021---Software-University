function filmPremiere(arr) {
    const movieName = arr[0];
    const option = arr[1];
    const ticketsCount = Number(arr[2]);

    let prize = 0;
    if(option == 'Drink') {
        switch(movieName) {
            case 'John Wick':
                prize += 12;
                break;
            case 'Star Wars':
                if(ticketsCount >= 4) {
                    prize += (18 - (18 * 0.3));
                } else {
                    prize += 18;
                }
                break;
            case 'Jumanji':
                if(ticketsCount == 2) {
                    prize += (9 - (9 * 0.15));
                } else {
                    prize += 9;
                }
                break;
        }
    } else if(option == 'Popcorn') {
        switch(movieName) {
            case 'John Wick':
                prize += 15;
                break;
            case 'Star Wars':
                if(ticketsCount >= 4) {
                    prize += (25 - (25 * 0.3));
                } else {
                    prize += 25;
                }
                break;
            case 'Jumanji':
                if(ticketsCount == 2) {
                    prize += (11 - (11 * 0.15));
                } else {
                    prize += 11;
                }
                break;
        }
    } else if(option == 'Menu') {
        switch(movieName) {
            case 'John Wick':
                prize += 19;
                break;
            case 'Star Wars':
                if(ticketsCount >= 4) {
                    prize += (30 - (30 * 0.3));
                } else {
                    prize += 30;
                }
                break;
            case 'Jumanji':
                if(ticketsCount == 2) {
                    prize += (14 - (14 * 0.15));
                } else {
                    prize += 14;
                }
                break;
        }
    }
    
    let money = prize * ticketsCount;
    console.log(`Your bill is ${money.toFixed(2)} leva.`);
}

filmPremiere(['John Wick', 'Drink', 6]);
filmPremiere(['Star Wars', 'Popcorn', 4]);
filmPremiere(['Jumanji', 'Menu', 2]);