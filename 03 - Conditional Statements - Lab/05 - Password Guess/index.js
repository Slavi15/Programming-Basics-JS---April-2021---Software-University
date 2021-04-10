function passwordGuess(input) {
    const password = input[0];
    const regex = 's3cr3t!P@ssw0rd';

    if(password == regex) {
        console.log('Welcome');
    } else {
        console.log('Wrong password!')
    }
}