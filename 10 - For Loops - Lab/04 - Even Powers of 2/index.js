function evenPowersOfTwo(input) {
    const num = Number(input[0]);

    for(let i = 0; i <= num; i += 2) {
        console.log(Math.pow(2, i));
    }
}

evenPowersOfTwo([3]);
evenPowersOfTwo([4]);
evenPowersOfTwo([5]);
evenPowersOfTwo([6]);
evenPowersOfTwo([7]);