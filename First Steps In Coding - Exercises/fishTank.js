// Description
// You're given an aquarium's dimensions - length, width and height.
// Write a function which calculates how many litres of water the aquarium can contain if some of it is full of sand.

// Input
// 1. Length in CM - real num [10 - 500]
// 2. Width in CM - real num [10 - 300]
// 3. Height in CM - real num [10 - 200]
// 4. Percentage of Sand - real num [0 - 100000]

// Output
// Litres of water in the aquarium

// Input & Output examples
// Input: [85, 75, 47, 17] | Output: 248.68875

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