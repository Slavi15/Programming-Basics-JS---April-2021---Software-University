function skeletonFunction(arr) {
    const controlMinutes = Number(arr[0]);
    const controlSeconds = Number(arr[1]);
    const meters = Number(arr[2]);
    const seconds100Metres = Number(arr[3]);

    let controlInSeconds = controlMinutes * 60 + controlSeconds;
    let decrease = meters / 120;
    let allDecreaseTime = decrease * 2.5;
    let allTime = (meters / 100) * seconds100Metres - allDecreaseTime;

    let leftTime = Math.abs(allTime - controlInSeconds);
    if(allTime <= controlInSeconds) {
        console.log(`Marin Bangiev won an Olympic quota!\nHis time is ${allTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${leftTime.toFixed(3)} second slower.`);
    }
}

skeletonFunction([2, 12, 1200, 10]);
skeletonFunction([1, 20, 1546, 12]);