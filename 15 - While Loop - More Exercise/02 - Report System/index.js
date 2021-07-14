function reportSystem(arr) {
    const sum = Number(arr[0]);

    let cashPayments = 0;
    let cashMoney = 0;
    let cardPayments = 0;
    let cardMoney = 0;
    
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] == 'End') {
            console.log('Failed to collect required money for charity.');
            break;
        }

        if(i % 2 == 0) {
            if(arr[i] < 10) {
                console.log('Error in transaction!');
            } else {
                console.log('Product sold!');
                cardMoney += Number(arr[i]);
                cardPayments += 1;
            }
        } else {
            if(arr[i] > 100) {
                console.log('Error in transaction!');
            } else {
                console.log('Product sold!');
                cashMoney += Number(arr[i]);
                cashPayments += 1;
            }
        }
    }

    let averageCS = cashMoney / cashPayments;
    let averageCC = cardMoney / cardPayments;
    let allMoney = cardMoney + cashMoney;

    if(allMoney >= sum) {
        console.log(`Average CS: ${averageCS.toFixed(2)}\nAverage CC: ${averageCC.toFixed(2)}`);
    }
}

reportSystem([500, 120, 8, 63, 256, 78, 317]);
reportSystem([600, 86, 150, 98, 227, 'End']);