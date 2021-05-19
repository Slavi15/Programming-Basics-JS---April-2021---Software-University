function trainTheTrainers(arr) {
    let peopleCount = Number(arr[0]);
    arr.shift();

    let presentationName = '';
    let score = 0;
    let allScores = 0;
    let numberOfAllPeople = 0;

    let i = 0;
    while(arr[i] !== 'Finish') {
        presentationName += arr[i];

        let end = i + peopleCount;
        while(i < end) {
            i++;
            score += Number(arr[i]);
            allScores += Number(arr[i]);
            numberOfAllPeople += 1;
        }

        let avgScore = score / peopleCount;
        console.log(`${presentationName} - ${avgScore.toFixed(2)}.`);

        presentationName = '';
        score = 0;
        i++;
    }

    let allAVGScore = allScores / numberOfAllPeople;
    console.log(`Student\'s final assessment is ${allAVGScore.toFixed(2)}.`)
}

trainTheTrainers([2, 'While-Loop', 6, 5.5, 'For-Loop', 5.84, 5.66, 'Finish']);
trainTheTrainers([3, 'Arrays', 4.53, 5.23, 5, 'Lists', 5.83, 6, 5.42, 'Finish']);
trainTheTrainers([2, 'Objects and Classes', 5.77, 4.23, 'Dictionaries', 4.62, 5.02, 'RegEx', 2.88, 3.42, 'Finish']);