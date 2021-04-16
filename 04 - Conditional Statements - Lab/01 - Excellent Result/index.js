function excellentResult(input) {
    const num = Number(input[0]);
    if(num >= 5.5) {
        console.log('Excellent!')
    } else {
        return;
    }
}

excellentResult([6]);
excellentResult([5]);