function fromNto1(input) {
    const num = Number(input[0]);

    for(let i = num; i > 0; i--) {
        console.log(i);
    }
}

fromNto1([2]);
fromNto1([3]);
fromNto1([5]);