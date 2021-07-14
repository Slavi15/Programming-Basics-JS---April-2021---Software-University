function gradesFunction(arr) {
    let students = Number(arr[0]);
    arr.shift();

    let topStudents = 0;
    let goodStudents = 0;
    let poorStudents = 0;
    let failStudents = 0;
    let sumOfMarks = 0;

    for(let i = 0; i < arr.length; i++) {
        sumOfMarks += Number(arr[i]);
        if(arr[i] >= 5.00) {
            topStudents += 1;
        } else if(arr[i] >= 4.00 && arr[i] <= 4.99) {
            goodStudents += 1;
        } else if(arr[i] >= 3.00 && arr[i] <= 3.99) {
            poorStudents += 1;
        } else if(arr[i] >= 2.00 && arr[i] <= 2.99) {
            failStudents += 1;
        }
    }

    let topsPercent = (topStudents / students) * 100;
    let goodsPercent = (goodStudents / students) * 100;
    let poorsPercent = (poorStudents / students) * 100;
    let failsPercent = (failStudents / students) * 100;
    let averageMark = sumOfMarks / students;

    console.log(`Top students: ${topsPercent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${goodsPercent.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${poorsPercent.toFixed(2)}%`);
    console.log(`Fail: ${failsPercent.toFixed(2)}%`);
    console.log(`Average: ${averageMark.toFixed(2)}`);
}

gradesFunction([10, 3.00, 2.99, 5.68, 3.01, 4, 4, 6.00, 4.50, 2.44, 5]);
gradesFunction([6, 2, 3, 4, 5, 6, 2.2]);