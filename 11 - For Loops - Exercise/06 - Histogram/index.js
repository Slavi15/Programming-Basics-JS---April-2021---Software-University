function histogramFunction(arr) {
    const countOfNumbers = arr[0];
    arr.shift();
    
    let countUnder200 = 0;
    let countUnder400 = 0;
    let countUnder600 = 0;
    let countUnder800 = 0;
    let countAbove800 = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 200) {
            countUnder200 += 1;
        } else if(arr[i] >= 200 && arr[i] <= 399) {
            countUnder400 += 1;
        } else if(arr[i] >= 400 && arr[i] <= 599) {
            countUnder600 += 1;
        } else if(arr[i] >= 600 && arr[i] <= 799) {
            countUnder800 += 1;
        } else if(arr[i] >= 800) {
            countAbove800 += 1;
        }
    }

    let p1 = countUnder200 / countOfNumbers * 100;
    let p2 = countUnder400 / countOfNumbers * 100;
    let p3 = countUnder600 / countOfNumbers * 100;
    let p4 = countUnder800 / countOfNumbers * 100;
    let p5 = countAbove800 / countOfNumbers * 100;

    console.log(`${p1.toFixed(2)}%\n${p2.toFixed(2)}%\n${p3.toFixed(2)}%\n${p4.toFixed(2)}%\n${p5.toFixed(2)}%`);
}

histogramFunction([3, 1, 2, 999]);
histogramFunction([7, 800, 801, 250, 199, 399, 599, 799]);
histogramFunction([9, 367, 99, 200, 799, 999, 333, 555, 111, 9]);
histogramFunction([14, 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200]);