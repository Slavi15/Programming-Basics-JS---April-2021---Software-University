function lunchBreak(arr) {
    const seriesName = arr[0];
    const episodeTime = Number(arr[1]);
    const breakTime = Number(arr[2]);

    let lunchTime = breakTime / 8;
    let relaxTime = breakTime / 4;
    let leftTime = breakTime - (lunchTime + relaxTime);

    let neededTime = Math.abs(leftTime - episodeTime);
    if(leftTime >= episodeTime) {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(neededTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(neededTime)} more minutes.`);
    }
}

lunchBreak(['Game of Thrones', 60, 96]);
lunchBreak(['Teen Wolf', 48, 60]);
lunchBreak(['CW', 45, 51]);
lunchBreak(['Lucifer', 50, 75]);
lunchBreak(['Game of Thrones', 56, 90]);