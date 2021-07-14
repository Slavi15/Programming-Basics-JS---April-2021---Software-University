function areaOfFigures(input) {
    const figure = input[0];

    if(figure == 'square') {
        const length = Number(input[1]);
        const area = Math.pow(length, 2);
        console.log(area.toFixed(3));
    } else if(figure == 'rectangle') {
        const a = Number(input[1]);
        const b = Number(input[2]);
        const area = a * b;
        console.log(area.toFixed(3));
    } else if(figure == 'circle') {
        const radius = Number(input[1]);
        const PI = Math.PI;
        const area = (PI * Math.pow(radius, 2));
        console.log(area.toFixed(3));
    } else if(figure == 'triangle') {
        const length = Number(input[1]);
        const height = Number(input[2]);
        const area = (length * height) / 2;
        console.log(area.toFixed(3));
    }
}

areaOfFigures(["square", 5]);
areaOfFigures(["rectangle", 7, 2.5]);
areaOfFigures(["circle", 6]);