function usdToBGN(input) {
    const value = Number(input[0]);
    const usdCourse = 1.79549;
    let converted = value * usdCourse;
    console.log(converted);
};

usdToBGN([22]);
usdToBGN([100]);