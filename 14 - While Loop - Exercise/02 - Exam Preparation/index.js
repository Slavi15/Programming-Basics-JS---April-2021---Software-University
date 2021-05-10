function examPreparation(arr) {
    let badMarks = Number(arr[0]);
    arr.shift();

    let problemsCount = 0;
    let problemName = '';
    let score = 0;
    let badMarksCount = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 'Enough') {
            break;
        }
        
        if(i % 2 == 0) {
            problemName = arr[i];
        } else {
            problemsCount++;
            score += Number(arr[i]);
            if(arr[i] <= 4) {
                badMarksCount++;
            }
        }
    }

    let avgScore = score / problemsCount;
    if(badMarksCount < badMarks) {
        console.log(`Average score: ${avgScore.toFixed(2)}\nNumber of problems: ${problemsCount}\nLast problem: ${problemName}`);
    } else {
        console.log(`You need a break, ${badMarksCount} poor grades.`);
    }
}

examPreparation([3, 'Money', 6, 'Story', 4, 'Spring Time', 5, 'Bus', 6, 'Enough']);
examPreparation([2, 'Income', 3, 'Game Info', 6, 'Best Player', 4]);
examPreparation([4, 'Stone Age', 5, 'Freedom', 5, 'Storage', 3]);