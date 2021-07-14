function barcodeGenerator(arr) {
    let start = arr[0].toString();
    let end = arr[1].toString();

    let array = [];
    for(let i = start[0]; i <= end[0]; i++) {
        for(let j = start[1]; j <= end[1]; j++) {
            for(let k = start[2]; k <= end[2]; k++) {
                for(let l = start[3]; l <= end[3]; l++) {
                    if(i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && l % 2 !== 0) {
                        let num = Number(`${i}${j}${k}${l}`);
                        array.push(num);
                        continue;
                    } else {
                        continue;
                    }
                }
            }
        }
    }
    console.log(array.join(' '));
}

barcodeGenerator([2345, 6789]);
barcodeGenerator([3256, 6579]);
barcodeGenerator([1365, 5877]);