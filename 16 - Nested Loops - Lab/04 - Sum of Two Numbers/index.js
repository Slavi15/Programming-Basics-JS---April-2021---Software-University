function sumOfTwoNumbers(input) {
    const startNum = Number(input[0]);
    const endNum = Number(input[1]);
    const magicNum = Number(input[2]);

    let result = 0;
    let combinationCount = 0;
    let combination = '';
    let equals = 0;
    let arr = [];
    let arrIndex = [];

    for(let i = startNum; i <= endNum; i++) {
        for(let j = startNum; j <= endNum; j++) {
            combination = `${i} ${j}`;
            combinationCount += 1;
            result = i + j;
            if(result == magicNum) {
                arr.push(combinationCount);
                arrIndex.push(combination);
                equals += 1;
            }
        }
    }

    if(equals > 0) {
        let count = arr.shift();
        let first = arrIndex.shift();
        let split = first.split(' ');
        console.log(`Combination N:${count} (${split[0]} + ${split[1]} = ${magicNum})`);
    } else {
        console.log(`${combinationCount} combinations - neither equals ${magicNum}`);
    }
}

sumOfTwoNumbers([1, 10, 5]);
sumOfTwoNumbers([88, 888, 1000]);
sumOfTwoNumbers([23, 24, 20]);
sumOfTwoNumbers([88, 888, 2000]);