function harvest(input) {
    const landArea = Number(input[0]);
    const grapesInSquareMeter = Number(input[1]);
    const neededLitresWine = Number(input[2]);
    const workers = Number(input[3]);

    const grapeCount = landArea * grapesInSquareMeter;
    const forWine = grapeCount * 0.4;
    const wineLitres = forWine / 2.5;

    const leftWine = Math.abs(neededLitresWine - wineLitres);
    const winePerPerson = leftWine / workers;

    if(wineLitres < neededLitresWine) {
        console.log(`It will be a tough winter! More ${Math.floor(leftWine)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineLitres)} liters.\n${Math.ceil(leftWine)} liters left -> ${Math.ceil(winePerPerson)} liters per person.`);
    }
}

harvest([650, 2, 175, 3]);
harvest([1020, 1.5, 425, 4]);