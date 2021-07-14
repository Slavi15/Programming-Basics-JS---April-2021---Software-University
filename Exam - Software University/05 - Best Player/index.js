function bestPlayer(arr) {
    let name = '';
    let goals = 0;
    let namesArray = [];
    let goalsArray = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 'END') {
            break;
        }

        name += arr[i];
        i++;
        goals += Number(arr[i]);
        goalsArray.push(goals);

        if(goalsArray.length > 1) {
            for(let j = goalsArray.length - 1; j > 0; j--) {
                if(goalsArray[j] == goalsArray[j - 1]) {
                    break;
                } else if(goalsArray[j] > goalsArray[j - 1]) {
                    namesArray.push(name);
                    break;
                } else if(goalsArray[j] < goalsArray[j - 1]) {
                    break;
                }
            }
        } else if(goalsArray.length == 1) {
            namesArray.push(name);
        }

        goals = 0;
        name = '';
    }

    goalsArray.sort((a, b) => {
        return a - b;
    });
    let bestName = namesArray.pop();
    let mostGoals = goalsArray.pop();

    if(mostGoals >= 3) {
        console.log(`${bestName} is the best player!`);
        console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`${bestName} is the best player!`);
        console.log(`He has scored ${mostGoals} goals.`);
    }
}

bestPlayer(['Neymar', 2, 'Ronaldo', 1, 'Messi', 3, 'END']);
bestPlayer(['Silva', 5, 'Harry Kane', 10]);
bestPlayer(['Rooney', 1, 'Junior', 2, 'Paolinio', 2, 'END']);
bestPlayer(['Petrov', 2, 'Drogba', 11]);
bestPlayer(['Zidane', 1, 'Felipe', 2, 'Johnson', 4, 'END']);