function numberInRange(input) {
    const num = Number(input[0]);

    if((num >= -100) && (num <= 100)) {
        if(num == 0) {
            console.log('No');
        } else {
            console.log('Yes');
        }
    } else {
        console.log('No');
    }
}

numberInRange([-25]);
numberInRange([0]);
numberInRange([25]);