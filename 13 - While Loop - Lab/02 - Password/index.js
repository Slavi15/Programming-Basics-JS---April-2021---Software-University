function passwordFunction(input) {
    let username = input[0];
    let password = input[1];
    let inputData = input[2];
    let i = 2;
    while(inputData !== password) {
        inputData = input[i];
        i++;
    }
    console.log(`Welcome ${username}!`);
}

passwordFunction(['Nakov', '1234', 'Pass', '1324', '1234']);
passwordFunction(['Gosho', 'secret', 'secret']);