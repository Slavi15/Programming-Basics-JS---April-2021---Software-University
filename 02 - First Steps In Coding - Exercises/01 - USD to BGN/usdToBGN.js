function usdToBGN(input) {
    const value = Number(input);
    const usdCourse = 1.79549;
    let converted = value * usdCourse;
    console.log(converted);
};