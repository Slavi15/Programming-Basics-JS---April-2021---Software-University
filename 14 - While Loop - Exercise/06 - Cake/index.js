function cakeFunction(arr) {
    const width = Number(arr[0]);
    const height = Number(arr[1]);
    const cakeArea = width * height;

    let portions = 0;
    for(let i = 2; i < arr.length; i++) {
        if(arr[i] == 'STOP') {
            break;
        }
        portions += Number(arr[i]);
    }

    let leftPortions = Math.abs(cakeArea - portions);
    if(cakeArea > portions) {
        console.log(`${leftPortions} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${leftPortions} pieces more.`);
    }
}

cakeFunction([10, 10, 20, 20, 20, 20, 21]);
cakeFunction([10, 2, 2, 4, 6, 'STOP']);