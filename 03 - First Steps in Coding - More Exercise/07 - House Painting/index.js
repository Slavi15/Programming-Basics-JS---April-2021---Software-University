function housePainting(input) {
    const height = Number(input[0]);
    const length = Number(input[1]);
    const heightRoof = Number(input[2]);

    const frontArea = Math.pow(height, 2) - (1.2 * 2);
    const sideAreas = ((height * length) - Math.pow(1.5, 2)) * 2;
    const backArea = Math.pow(height, 2);

    const roofTrianglesArea = ((height * heightRoof) / 2) * 2;
    const topRoofAreas = (height * length) * 2;

    const greenArea = frontArea + sideAreas + backArea;
    const redArea = roofTrianglesArea + topRoofAreas;

    const greenLitres = greenArea / 3.4;
    const redLitres = redArea / 4.3;

    console.log(`${greenLitres.toFixed(2)}\n${redLitres.toFixed(2)}`);
}

housePainting([6, 10, 5.2]);