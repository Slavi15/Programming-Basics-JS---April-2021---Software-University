function squareWithStars(input) {
    const stars = Number(input[0]);

    let string = '';
    for(let i = 0; i < stars; i++) {
        for(let j = 0; j < stars; j++) {
            string += '*';
        }
        string += '\n';
    }
    console.log(string);
}

squareWithStars([3]);
squareWithStars([4]);
squareWithStars([5]);