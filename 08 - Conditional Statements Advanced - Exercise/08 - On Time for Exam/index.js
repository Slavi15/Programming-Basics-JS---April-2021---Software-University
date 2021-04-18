function onTimeForExam(input) {
    const examHour = Number(input[0]);
    const examMinutes = Number(input[1]);
    const arrivalHour = Number(input[2]);
    const arrivalMinutes = Number(input[3]);

    const examTimeInMin = examHour * 60 + examMinutes;
    const arrivalTimeInMin = arrivalHour * 60 + arrivalMinutes;

    let difference = Math.abs(arrivalTimeInMin - examTimeInMin);
    let hourDiff = Math.floor(difference / 60);
    let minDiff = difference % 60;

    if(minDiff == 0 || (minDiff < 10 && hourDiff > 0)) {
        minDiff = `0${minDiff}`;
    }

    if(arrivalTimeInMin == examTimeInMin) {
        console.log('On time');
    } else if(difference <= 30) {
        console.log('On time');
        console.log(`${minDiff} minutes before the start`);
    } else if((arrivalTimeInMin > examTimeInMin) && difference < 60) {
        console.log('Late');
        console.log(`${minDiff} minutes after the start`);
    } else if((arrivalTimeInMin > examTimeInMin) && difference >= 60) {
        console.log('Late');
        console.log(`${hourDiff}:${minDiff} hours after the start`);
    } else if((arrivalTimeInMin < examTimeInMin) && (difference > 30 && difference < 60)) {
        console.log('Early');
        console.log(`${minDiff} minutes before the start`)
    } else if((arrivalTimeInMin < examTimeInMin) && difference >= 60) {
        console.log('Early');
        console.log(`${hourDiff}:${minDiff} hours before the start`);
    }
}

onTimeForExam([9, 30, 9, 50]);
onTimeForExam([9, 00, 10, 30]);
onTimeForExam([10, 00, 10, 00]);
onTimeForExam([9, 00, 8, 30]);
onTimeForExam([14, 00, 13, 55]);
onTimeForExam([11, 30, 10, 55]);
onTimeForExam([16, 00, 15, 00]);
onTimeForExam([11, 30, 8, 12]);
onTimeForExam([11, 30, 12, 29]);