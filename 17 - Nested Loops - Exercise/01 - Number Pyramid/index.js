function numberPyramid(input) {
    const num = Number(input[0]);

    let output = '';
    let current = 1;
    let bigger = false;
    for(let i = 1; i <= num; i++) {
        for(let j = 1; j <= i; j++) {
            if(current > num) {
                bigger = true;
                break;
            }
            output += `${current} `;
            current++;
        }
        output += `\n`;
    }
    console.log(output)
}

numberPyramid([7]);
numberPyramid([12]);
numberPyramid([15]);