function fishTankVolume(input) {
    const lengthInCM = Number(input[0]);
    const widthInCM = Number(input[1]);
    const heightInCM = Number(input[2]);
    const percentWithSand = Number(input[3]) / 100;

    const tankVolume = (lengthInCM * widthInCM * heightInCM);
    const tankVolumeInLitres = tankVolume / 1000;

    const neededLitres = tankVolumeInLitres - (tankVolumeInLitres * percentWithSand);
    console.log(neededLitres);
};

fishTankVolume([85, 75, 47, 17]);
fishTankVolume([105, 77, 89, 18.5]);