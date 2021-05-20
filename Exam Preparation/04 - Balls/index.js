function ballsFunction(arr) {
    const ballsCount = Number(arr[0]);
    arr.shift();
    
    let points = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let otherBalls = 0;
    let dividedCount = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 'red') {
            points += 5;
            redBalls += 1;
        } else if(arr[i] == 'orange') {
            points += 10;
            orangeBalls += 1;
        } else if(arr[i] == 'yellow') {
            points += 15;
            yellowBalls += 1;
        } else if(arr[i] == 'white') {
            points += 20;
            whiteBalls += 1;
        } else if(arr[i] == 'black') {
            points /= 2;
            dividedCount += 1;
        } else {
            otherBalls += 1;
        }
    }

    console.log(`Total points: ${Math.floor(points)}`);
    console.log(`Points from red balls: ${redBalls}`);
    console.log(`Points from orange balls: ${orangeBalls}`);
    console.log(`Points from yellow balls: ${yellowBalls}`);
    console.log(`Points from white balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherBalls}`);
    console.log(`Divides from black balls: ${dividedCount}`);
}

ballsFunction([3, 'white', 'black', 'pink']);
ballsFunction([5, 'red', 'red', 'ddd', 'ddd', 'ddd']);
ballsFunction([10, 'white', 'white', 'ee', 'red', 'orange', 'red', 'black', 'black', 'black', 'black'])