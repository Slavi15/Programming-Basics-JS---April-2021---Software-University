function easterContest(arr) {
    let breadCount = Number(arr[0]);
    arr.shift();

    let cookName = '';
    let points = 0;
    let pointsArray = [];
    let namesArray = [];
    let numberOnes = [];

    let i = 0;
    while(i < arr.length) {
        cookName += arr[i];
        namesArray.push(arr[i]);
        i++;

        while(arr[i] !== 'Stop') {
            points += Number(arr[i]);
            i++;
        }

        pointsArray.push(points);
        console.log(`${cookName} has ${points} points.`);

        for(let j = 0; j < breadCount; j++) {
            if(pointsArray.length == 1) {
                numberOnes.push(cookName);
                console.log(`${cookName} is the new number 1!`);
                break;
            } else if(pointsArray[j] > pointsArray[j - 1]) {
                numberOnes.push(namesArray[j]);
                console.log(`${namesArray[j]} is the new number 1!`);
            }
        }

        cookName = '';
        points = 0;
        i++;
    }

    let sortedPointsArray = pointsArray.sort((a, b) => {
        return a - b;
    });
    console.log(`${numberOnes.pop()} won competition with ${sortedPointsArray.pop()} points!`);
}

easterContest([3, 'Chef Manchev', 10, 10, 10, 10, 'Stop', 'Natalie', 8, 2, 9, 'Stop', 'George', 9, 2, 4, 2, 'Stop']);
easterContest([2, 'Chef Angelov', 9, 9, 9, 'Stop', 'Chef Rowe', 10, 10, 10, 10, 'Stop']);