function movingFunction(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let space = width * length * height;
    let boxSpace = 0;

    for(let i = 3; i < input.length; i++) {
        if(input[i] == 'Done') {
            break;
        }
        boxSpace += Number(input[i]);
    }

    let leftSpace = Math.abs(space - boxSpace);

    if(space >= boxSpace) {
        console.log(`${leftSpace} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${leftSpace} Cubic meters more.`)
    }
}

movingFunction([10, 10, 2, 20, 20, 20, 20, 122]);
movingFunction([10, 1, 2, 4, 6, 'Done']);