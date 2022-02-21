function test(arr) {
    let K = Number(arr[0]);
    let L = Number(arr[1]);
    let M = Number(arr[2]);
    let N = Number(arr[3]);

    let arrayOne = [];
    let arrayTwo = [];
    let testArray = [];

    for (let i = K; i <= 8; i++) {
        for (let j = 9; j >= L; j--) {
            arrayOne.push(`${i}${j}`);
        }
    }

    for (let i = M; i <= 8; i++) {
        for (let j = 9; j >= N; j--) {
            arrayTwo.push(`${i}${j}`);
        }
    }

    for (let i = 0; i < arrayOne.length; i++) {
        for (let j = 0; j < arrayTwo.length; j++) {
            if ((arrayOne[i][0] % 2 === 0) && (arrayTwo[j][0] % 2 === 0) && (arrayOne[i][1] % 2 !== 0) && (arrayTwo[j][1] % 2 !== 0)) {
                if(testArray.length === 6) {
                    break;
                } else {
                    if (arrayOne[i] !== arrayTwo[j]) {
                        testArray.push(`${arrayOne[i]} - ${arrayTwo[j]}`);
                        console.log(`${arrayOne[i]} - ${arrayTwo[j]}`);
                    } else {
                        console.log('Cannot change the same player');
                    }
                }
            }
        }
    }
}

test(["7", "6", "8", "5"]);
test(["6", "7", "5", "6"]);