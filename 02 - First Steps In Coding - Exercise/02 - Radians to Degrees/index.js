function radianToDegree(input) {
    const valueRadian = Number(input[0]);
    const PI = Math.PI;
    let converted = ((valueRadian * 180) / PI);
    console.log(converted.toFixed(0));
};

radianToDegree([3.1416]);
radianToDegree([0.7854]);