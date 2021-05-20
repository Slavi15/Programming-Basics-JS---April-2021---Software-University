function seriesCalculator(arr) {
    const seriesName = arr[0];
    const seasonsCount = Number(arr[1]);
    const episodeCount = Number(arr[2]);
    const episodeTime = Number(arr[3]);

    let adsTime = 0.2 * episodeTime;
    let episodeTimeWithADS = adsTime + episodeTime;
    let bonusTime = seasonsCount * 10;
    
    let allTime = episodeTimeWithADS * episodeCount * seasonsCount + bonusTime;
    console.log(`Total time needed to watch the ${seriesName} series is ${Math.floor(allTime)} minutes.`);
}

seriesCalculator(['Lucifer', 3, 18, 55]);
seriesCalculator(['Game of Thrones', 7, 10, 50]);
seriesCalculator(['Riverdale', 3, 21, 45]);