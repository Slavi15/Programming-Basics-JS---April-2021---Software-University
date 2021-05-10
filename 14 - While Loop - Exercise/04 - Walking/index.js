function walkingFunction(arr) {
    let steps = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 'Going home') {
            continue;
        }
        steps += Number(arr[i]);
    }

    let difference = Math.abs(steps - 10000);
    if(steps >= 10000) {
        console.log(`Goal reached! Good job!\n${difference} steps over the goal!`);
    } else {
        console.log(`${difference} more steps to reach goal.`);
    }
}

walkingFunction([1000, 1500, 2000, 6500]);
walkingFunction([1500, 300, 2500, 3000, 'Going home', 200]);
walkingFunction([1500, 3000, 250, 1548, 2000, 'Going home', 2000]);
walkingFunction([125, 250, 4000, 30, 2678, 4682]);