function buildingFunction(arr) {
    const floorCount = Number(arr[0]);
    const roomCount = Number(arr[1]);

    for(let i = floorCount; i >= 1; i--) {
        let print = '';
        for(let j = 0; j < roomCount; j++) {
            if(i == floorCount) {
                print += `L${i}${j} `;
            } else if(i % 2 == 0) {
                print += `O${i}${j} `;
            } else if(i % 2 !== 0){
                print += `A${i}${j} `;
            }
        }
        console.log(print)
    }
}

buildingFunction([6, 4]);
buildingFunction([9, 5]);
buildingFunction([4, 4]);