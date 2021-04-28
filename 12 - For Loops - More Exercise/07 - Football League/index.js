function footballLeague(arr) {
    const stadiumCapacity = Number(arr[0]);
    const numberOfFans = Number(arr[1]);
    arr.shift();
    arr.shift();

    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for(let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case 'A':
                sectorA += 1;
                break;
            case 'B':
                sectorB += 1;
                break;
            case 'V':
                sectorV += 1;
                break;
            case 'G':
                sectorG += 1;
                break;
        }
    }

    let sectorAPercent = (sectorA / numberOfFans) * 100;
    let sectorBPercent = (sectorB / numberOfFans) * 100;
    let sectorVPercent = (sectorV / numberOfFans) * 100;
    let sectorGPercent = (sectorG / numberOfFans) * 100;
    let fansPercent = (numberOfFans / stadiumCapacity) * 100;

    console.log(`${sectorAPercent.toFixed(2)}%`);
    console.log(`${sectorBPercent.toFixed(2)}%`);
    console.log(`${sectorVPercent.toFixed(2)}%`);
    console.log(`${sectorGPercent.toFixed(2)}%`);
    console.log(`${fansPercent.toFixed(2)}%`);
}

footballLeague([76, 10, 'A', 'V', 'V', 'V', 'G', 'B', 'A', 'V', 'B', 'B']);
footballLeague([93, 16, 'A', 'V', 'G', 'G', 'B', 'B', 'G', 'B', 'A', 'B', 'B', 'B', 'A', 'B', 'B', 'A']);
footballLeague([1000, 12, 'A', 'A', 'V', 'V', 'A', 'G', 'A', 'A', 'V', 'G', 'V', 'A']);