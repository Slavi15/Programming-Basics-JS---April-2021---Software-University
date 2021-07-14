function bestPlayer(arr) {
    let name = '';
    let goals = 0;

    let namesArray = [];
    let goalsArray = [];

    let i = 0;
    while(arr[i] !== 'END') {
        name += arr[i];
        i++;

        goals += Number(arr[i]);
        goalsArray.push(goals);

        if(goalsArray.length > 1) {
            for(let j = 1; j < goalsArray.length; j++) {
                if(goalsArray[j] > goalsArray[j - 1]) {
                    namesArray.push(name);
                }
            }
        }

        if(goals >= 10) {
            break;
        }

        goals = 0;
        name = '';
        i++;
    }

    let bestName = namesArray.pop();
    let mostGoals = goalsArray.pop();

    console.log(`${bestName} is the best player!`);
    if(mostGoals >= 3) {
        console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${mostGoals} goals.`);
    }
}

// bestPlayer(['Neymar', 2, 'Ronaldo', 1, 'Messi', 3, 'END']);
// bestPlayer(['Silva', 5, 'Harry Kane', 10]);
bestPlayer(['Rooney', 1, 'Junior', 2, 'Paolinio', 2, 'END']);
bestPlayer(['Petrov', 2, 'Drogba', 11]);
bestPlayer(['Zidane', 1, 'Felipe', 2, 'Johnson', 4, 'END']);