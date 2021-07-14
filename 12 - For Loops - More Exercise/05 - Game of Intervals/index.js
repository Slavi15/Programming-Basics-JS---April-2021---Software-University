function gameOfIntervals(arr) {
    let movesCount = Number(arr[0]);
    arr.shift();

    let result = 0;
    let numsToNine = 0;
    let numsTo19 = 0;
    let numsTo29 = 0;
    let numsTo39 = 0;
    let numsTo50 = 0;
    let invalidNumbers = 0

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0 && arr[i] <= 9) {
            numsToNine += 1;
            result += Number(arr[i]) * 0.2;
        } else if(arr[i] >= 10 && arr[i] <= 19) {
            numsTo19 += 1;
            result += Number(arr[i]) * 0.3;
        } else if(arr[i] >= 20 && arr[i] <= 29) {
            numsTo29 += 1;
            result += Number(arr[i]) * 0.4;
        } else if(arr[i] >= 30 && arr[i] <= 39) {
            numsTo39 += 1;
            result += 50;
        } else if(arr[i] >= 40 && arr[i] <= 50) {
            numsTo50 += 1;
            result += 100;
        } else if(arr[i] < 0 || arr[i] > 50) {
            invalidNumbers += 1;
            result /= 2;
        }
    }

    let numsToNinePercent = (numsToNine / movesCount) * 100;
    let numsTo19Percent = (numsTo19 / movesCount) * 100;
    let numsTo29Percent = (numsTo29 / movesCount) * 100;
    let numsTo39Percent = (numsTo39 / movesCount) * 100;
    let numsTo50Percent = (numsTo50 / movesCount) * 100;
    let invalidNumbersPercent = (invalidNumbers / movesCount) * 100;

    console.log(`${result.toFixed(2)}`);
    console.log(`From 0 to 9: ${numsToNinePercent.toFixed(2)}%`);
    console.log(`From 10 to 19: ${numsTo19Percent.toFixed(2)}%`);
    console.log(`From 20 to 29: ${numsTo29Percent.toFixed(2)}%`);
    console.log(`From 30 to 39: ${numsTo39Percent.toFixed(2)}%`);
    console.log(`From 40 to 50: ${numsTo50Percent.toFixed(2)}%`);
    console.log(`Invalid numbers: ${invalidNumbersPercent.toFixed(2)}%`);
}

gameOfIntervals([10, 43, 57, -12, 23, 12, 0, 50, 40, 30, 20]);