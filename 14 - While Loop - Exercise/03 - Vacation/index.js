function vacationFunction(arr) {
    let neededMoney = Number(arr[0]);
    let money = Number(arr[1]);
    arr.shift();
    arr.shift();

    for(let i = 0; i < arr.length; i++) {
        if(i % 2 == 0) {
            if(arr[i] == 'spend') {
                if(arr[i + 1] > money) {
                    money = 0;
                } else {
                    money -= Number(arr[i + 1]);
                }
            } else if(arr[i] == 'save') {
                money += Number(arr[i + 1]);
            }
        }
    }

    if(money >= neededMoney) {
        console.log(`You saved the money for ${arr.length / 2} days.`);
    } else {
        console.log(`You can't save the money.\n${arr.length / 2}`);
    }
}

vacationFunction([2000, 1000, 'spend', 1200, 'save', 2000]);
vacationFunction([110, 60, 'spend', 10, 'spend', 10, 'spend', 10, 'spend', 10, 'spend', 10]);
vacationFunction([250, 150, 'spend', 50, 'spend', 50, 'save', 100, 'save', 100]);