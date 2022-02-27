function goldMine(arr) {
    const locationsCount = Number(arr.shift());

    let expectedAverageGold = 0;
    let excavateDays = 0;
    let gold = 0;

    for(let i = 0; i < arr.length; i++) {
        expectedAverageGold = Number(arr[i]);
        i++;
        excavateDays = Number(arr[i]);
        i++;

        for(let j = 0; j < excavateDays; j++) {
            gold += Number(arr[i]);
            if(j !== excavateDays - 1){
                i++;
            }
        };

        let averageGold = gold / excavateDays;
        let neededGold = Math.abs(expectedAverageGold - averageGold);
        if(averageGold >= expectedAverageGold){
            console.log(`Good job! Average gold per day: ${averageGold.toFixed(2)}.`)
        } else {
            console.log(`You need ${neededGold.toFixed(2)} gold.`);
        }

        expectedAverageGold = 0;
        excavateDays = 0;
        gold = 0;
    }
}

goldMine(["2", 
"10", 
"3", 
"10", 
"10", 
"11", 
"20", 
"2", 
"20", 
"10"]);
goldMine(["1", 
"5", 
"3", 
"10", 
"1", 
"3"]);