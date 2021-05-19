function equalSums(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);

    let even = 0;
    let odd = 0;
    let numbers = '';

    for(let i = firstNum; i <= secondNum; i++) {
        let stringed = i.toString();
        for(let j = 0; j < stringed.length; j++) {
            if(j % 2 === 0) {
                even += Number(stringed[j]);
            } else {
                odd += Number(stringed[j]);
            }
        }
        if(even == odd) {
            numbers += `${i} `;
        }
        even = 0;
        odd = 0;
    }
    
    console.log(numbers);
}

equalSums([100000, 100050]);
equalSums([123456, 124000]);
equalSums([299900, 300000]);
equalSums([100115, 100120]);