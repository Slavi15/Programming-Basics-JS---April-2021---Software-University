function computerFirm(arr) {
    const pcCount = Number(arr[0]);
    arr.shift();

    let rating = 0;
    let possibleSells = '';
    let sells = 0;
    let sellsArray = [];
    let ratingArray = [];

    for(let i = 0; i < arr.length; i++) {
        let stringed = arr[i].toString();

        if(stringed[2] == 2) {
            rating += 2;
        } else if(stringed[2] == 3) {
            rating += 3;
        } else if(stringed[2] == 4) {
            rating += 4;
        } else if(stringed[2] == 5) {
            rating += 5;
        } else if(stringed[2] == 6) {
            rating += 6;
        }

        possibleSells += `${stringed[0]}${stringed[1]}`;

        switch(rating) {
            case 3:
                sells = 0.5 * Number(possibleSells);
                break;
            case 4:
                sells = 0.7 * Number(possibleSells);
                break;
            case 5:
                sells = 0.85 * Number(possibleSells);
                break;
            case 6:
                sells = 1 * Number(possibleSells);
                break;
        }

        ratingArray.push(rating);
        sellsArray.push(sells);

        sells = 0;
        rating = 0;
        possibleSells = '';
    }

    let sellsSum = 0;
    for(let j = 0; j < sellsArray.length; j++) {
        sellsSum += Number(sellsArray[j]);
    }

    let ratingSum = 0;
    for(let j = 0; j < ratingArray.length; j++) {
        ratingSum += Number(ratingArray[j]);
    }

    let avgRating = ratingSum / pcCount;

    console.log(`${sellsSum.toFixed(2)}`);
    console.log(`${avgRating.toFixed(2)}`);
}

computerFirm([3, 103, 103, 103]);
computerFirm([5, 122, 156, 202, 214, 185]);
computerFirm([2, 204, 206]);