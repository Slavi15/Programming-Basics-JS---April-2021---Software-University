function leapYears(input) {
    const firstNum = Number(input[0]);
    const secondNum = Number(input[1]);

    for(let i = firstNum; i <= secondNum; i += 4) {
        console.log(i);
    }
}

leapYears([1908, 1919]);
leapYears([2000, 2011]);
leapYears([1584, 1597]);
leapYears([2020, 2032]);