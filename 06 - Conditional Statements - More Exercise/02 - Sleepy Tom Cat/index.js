function sleepyTomCat(input) {
    const freeDays = Number(input[0]);
    const workDays = 365 - freeDays;

    const playHours = (workDays * 63) + (freeDays * 127);
    const leftHours = Math.abs(30000 - playHours);
    const hours = Math.floor(leftHours / 60);
    const minutes = Math.floor(leftHours % 60);

    if(playHours > 30000) {
        console.log(`Tom will run away`);
        console.log(`${hours.toFixed(0)} hours and ${minutes.toFixed(0)} minutes more for play`);
    } else {
        console.log(`Tom sleeps well`)
        console.log(`${hours.toFixed(0)} hours and ${minutes.toFixed(0)} minutes less for play`);
    }
}

sleepyTomCat([20]);
sleepyTomCat([113]);