// Description
// Write a function which converts USD to BGN. Use fixed currency course between USD and BGN. (1 USD = 1.79549 BGN)

// Input
// 1. Number

// Output
// Converted number in BGN 

// Input & Output examples
// Input: 22 | Output: 39.50078

function usdToBGN(input) {
    const value = Number(input);
    const usdCourse = 1.79549;
    let converted = value * usdCourse;
    console.log(converted);
};