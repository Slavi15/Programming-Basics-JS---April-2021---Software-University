function firm(input) {
    const neededHours = Number(input[0]);
    const days = Number(input[1]);
    const workersAfterHours = Number(input[2]);

    const daysWithoutTraining = days - (days * 0.1);
    const workingHours = daysWithoutTraining * 8;
    const afterHoursWorking = workersAfterHours * 2 * days;

    const allHours = Math.floor(workingHours + afterHoursWorking);
    const leftHours = Math.abs(neededHours - allHours);

    if(allHours >= neededHours) {
        console.log(`Yes!${leftHours} hours left.`);
    } else {
        console.log(`Not enough time!${leftHours} hours needed.`);
    }
}

firm([90, 7, 3]);
firm([99, 3, 1]);
firm([50, 5, 2]);