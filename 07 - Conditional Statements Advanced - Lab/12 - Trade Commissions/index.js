function tradeCommissions(input) {
    const city = input[0];
    const sells = Number(input[1]);

    switch(city) {
        case 'Sofia':
            if((sells >= 0) && (sells <= 500)) {
                console.log((sells * 0.05).toFixed(2));
            } else if((sells > 500) && (sells <= 1000)) {
                console.log((sells * 0.07).toFixed(2));
            } else if((sells > 1000) && (sells <= 10000)) {
                console.log((sells * 0.08).toFixed(2));
            } else if(sells > 10000) {
                console.log((sells * 0.12).toFixed(2));
            } else {
                console.log('error');
            }
            break;
        case 'Plovdiv':
            if((sells >= 0) && (sells <= 500)) {
                console.log((sells * 0.055).toFixed(2));
            } else if((sells > 500) && (sells <= 1000)) {
                console.log((sells * 0.08).toFixed(2));
            } else if((sells > 1000) && (sells <= 10000)) {
                console.log((sells * 0.12).toFixed(2));
            } else if(sells > 10000) {
                console.log((sells * 0.145).toFixed(2));
            } else {
                console.log('error');
            }
            break;
        case 'Varna':
            if((sells >= 0) && (sells <= 500)) {
                console.log((sells * 0.045).toFixed(2));
            } else if((sells > 500) && (sells <= 1000)) {
                console.log((sells * 0.075).toFixed(2));
            } else if((sells > 1000) && (sells <= 10000)) {
                console.log((sells * 0.1).toFixed(2));
            } else if(sells > 10000) {
                console.log((sells * 0.13).toFixed(2));
            } else {
                console.log('error');
            }
            break;
        default:
            console.log('error');
            break;
    }
}

tradeCommissions(['Sofia', 1500]);
tradeCommissions(['Plovdiv', 499.99]);
tradeCommissions(['Varna', 3874.50]);
tradeCommissions(['Kaspichan', -50]);