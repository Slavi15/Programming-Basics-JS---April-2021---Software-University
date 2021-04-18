function pointOnRectangleBorder(input) {
    const x1 = Number(input[0]);
    const y1 = Number(input[1]);
    const x2 = Number(input[2]);
    const y2 = Number(input[3]);
    const x = Number(input[4]);
    const y = Number(input[5]);

    let firstCondition = (x == x1 || x == x2) && (y >= y1 && y <= y2);
    let secondCondition = (y == y1 || y == y2) && (x >= x1 && x <= x2);

    const result = firstCondition || secondCondition ? 'Border' : 'Inside / Outside';
    console.log(result);
}

pointOnRectangleBorder([2, -3, 12, 3, 8, -1]);
pointOnRectangleBorder([2, -3, 12, 3, 12, -1]);