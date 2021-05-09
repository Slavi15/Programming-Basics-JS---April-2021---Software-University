function graduationFunction(input) {
    let name = input[0];
    let i = 1;
    let grade = 0;
    let counter = 0;
    let mark = 0;
    let averageMark = 0;

    while(i < input.length) {
        if(input[i] >= 4.00) {
            mark += Number(input[i]);
            averageMark = mark / i;
        } else {
            counter++;
            if(counter == 2) {
                console.log(`${name} has been excluded at ${grade} grade`);
                break;
            }
        }
        grade++;
        i++;
    }
    
    if(grade == 12) {
        console.log(`${name} graduated. Average grade: ${averageMark.toFixed(2)}`);
    }
}

graduationFunction(['Gosho', 5, 5.5, 6, 5.43, 5.5, 6, 5.55, 5, 6, 6, 5.43, 5]);
graduationFunction(['Mimi', 5, 6, 5, 6, 5, 6, 6, 2, 3]);