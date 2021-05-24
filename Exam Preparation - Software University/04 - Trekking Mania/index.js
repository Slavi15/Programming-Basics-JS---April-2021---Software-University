function trekkingMania(arr) {
    const groupsCount = Number(arr[0]);
    arr.shift();

    let people = 0;
    let musalaPeople = 0;
    let monblanPeople = 0;
    let kiliPeople = 0;
    let k2People = 0;
    let everestPeople = 0;

    for(let i = 0; i < arr.length; i++) {
        people += Number(arr[i]);
        if(arr[i] <= 5) {
            musalaPeople += Number(arr[i]);
        } else if(arr[i] >= 6 && arr[i] <= 12) {
            monblanPeople += Number(arr[i]);
        } else if(arr[i] >= 13 && arr[i] <= 25) {
            kiliPeople += Number(arr[i]);
        } else if(arr[i] >= 26 && arr[i] <= 40) {
            k2People += Number(arr[i]);
        } else if(arr[i] > 40) {
            everestPeople += Number(arr[i]);
        }
    }

    let musalaPercent = (musalaPeople / people) * 100;
    let monblanPercent = (monblanPeople / people) * 100;
    let kiliPercent = (kiliPeople / people) * 100;
    let k2Percent = (k2People / people) * 100;
    let everestPercent = (everestPeople / people) * 100;

    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${monblanPercent.toFixed(2)}%`);
    console.log(`${kiliPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);
}

trekkingMania([10, 10, 5, 1, 100, 12, 26, 17, 37, 40, 78]);
trekkingMania([5, 25, 41, 31, 250, 6]);