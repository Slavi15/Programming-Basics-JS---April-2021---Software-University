function circleAreaAndCircumference(input) {
    const radius = Number(input[0]);
    const PI = Math.PI;

    const area = PI * Math.pow(radius, 2);
    const circumference = 2 * PI * radius;

    console.log(`${area.toFixed(2)}\n${circumference.toFixed(2)}`);
}

circleAreaAndCircumference([3]);
circleAreaAndCircumference([4.5]);