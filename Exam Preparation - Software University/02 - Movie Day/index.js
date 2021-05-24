function movieDay(arr) {
    const photosTime = Number(arr[0]);
    const scenesCount = Number(arr[1]);
    const sceneTime = Number(arr[2]);

    let preparation = 0.15 * photosTime;
    let allScenesTime = sceneTime * scenesCount;
    let time = allScenesTime + preparation;

    let leftTime = Math.abs(photosTime - time);
    if(time > photosTime) {
        console.log(`Time is up! To complete the movie you need ${Math.ceil(leftTime)} minutes.`);
    } else {
        console.log(`You managed to finish the movie on time! You have ${Math.ceil(leftTime)} minutes left!`);
    }
}

movieDay([120, 10, 11]);
movieDay([60, 15, 3]);
movieDay([135, 5, 20]);
movieDay([89, 9, 2]);