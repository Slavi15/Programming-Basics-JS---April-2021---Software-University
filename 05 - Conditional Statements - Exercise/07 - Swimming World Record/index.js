function swimmingRecord(input) {
    let recordInSeconds = Number(input[0]);
    let lengthInMetres = Number(input[1]);
    let secondsNeededForOneMetre = Number(input[2]);

    let swimmingTime = lengthInMetres * secondsNeededForOneMetre;
    let secondsAdded = Math.floor(lengthInMetres / 15) * 12.5;
    let totalTime = swimmingTime + secondsAdded;

    if(totalTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let time = Math.abs(totalTime - recordInSeconds);
        console.log(`No, he failed! He was ${time.toFixed(2)} seconds slower.`);
    }
}