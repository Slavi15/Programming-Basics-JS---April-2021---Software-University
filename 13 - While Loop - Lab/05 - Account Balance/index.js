function accountBalance(input) {
    let i = 0;
    let money = 0;

    while(input[i] !== 'NoMoreMoney') {
        if(input[i] < 0) {
            console.log('Invalid operation!');
            break;
        }
        money += Number(input[i]);
        console.log(`Increase: ${Number(input[i]).toFixed(2)}`);
        ++i;
    }

    console.log(`Total: ${money.toFixed(2)}`);
}

accountBalance([5.51, 69.42, 100, 'NoMoreMoney']);
accountBalance([120, 45.55, -150]);