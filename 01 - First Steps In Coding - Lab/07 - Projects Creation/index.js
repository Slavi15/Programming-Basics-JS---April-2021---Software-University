function createProject(input) {
    let firstName = input[0];
    let projectNumber = Number(input[1]);
    let neededHours = (projectNumber * 3);

    console.log(`The architect ${firstName} will need ${neededHours} hours to complete ${projectNumber} project/s.`);
}