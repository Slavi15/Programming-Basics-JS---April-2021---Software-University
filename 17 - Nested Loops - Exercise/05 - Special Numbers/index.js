function specialNumbers(input) {
    const num = Number(input[0]);

    let array = [];
    for(let i = 1111; i <= 9999; i++) {
        let stringed = i.toString();
        for(let j = 0; j < stringed.length; j++) {
            if((num % Number(stringed[j]) == 0) && (num % Number(stringed[j + 1]) == 0) && (num % Number(stringed[j + 2]) == 0) && (num % Number(stringed[j + 3]) == 0)) {
                array.push(i);
                continue;
            }
        }
    }
    console.log(array.join(' '));
}

specialNumbers([3]);
specialNumbers([11]);
specialNumbers([16]);