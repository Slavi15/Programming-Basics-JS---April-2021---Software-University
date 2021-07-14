function trainingLab(input) {
    const length = Number(input[0]);
    const width = Number(input[1]);

    const lengthInCM = length * 100;
    const widthInCM = width * 100;

    const widthWithoutHall = widthInCM - 100;
    const workspacesInWidth = Math.floor(widthWithoutHall / 70);
    const workspacesInLength = Math.floor(lengthInCM / 120);

    const allWorkSpaces = (workspacesInWidth * workspacesInLength) - 3;
    console.log(allWorkSpaces);
}

trainingLab([15, 8.9]);
trainingLab([8.4, 5.2]);
