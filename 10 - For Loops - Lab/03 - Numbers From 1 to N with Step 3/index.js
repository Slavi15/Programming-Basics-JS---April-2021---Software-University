function numbersFromOneToNStep3(input) {
    const num = Number(input[0]);

    for(let i = 1; i <= num; i += 3) {
        console.log(i);
    }
}

numbersFromOneToNStep3([10]);
numbersFromOneToNStep3([7]);
numbersFromOneToNStep3([15]);