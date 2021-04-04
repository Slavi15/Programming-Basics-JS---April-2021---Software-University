// Description
// Write a function which gets angle in radians and converts it to degrees. Use the formula.
// Use this formula:    degree = (radian * 180) / PI

// Input
// Angle in radians

// Output
// Angle in degrees

// Input & Output examples
// Input: 3.1416 | Output: 180

function radianToDegree(input) {
    const valueRadian = Number(input[0]);
    const PI = Math.PI;
    let converted = ((valueRadian * 180) / PI);
    console.log(converted.toFixed(0));
};