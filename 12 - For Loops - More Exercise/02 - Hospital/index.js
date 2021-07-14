function hospitalFunction(arr) {
    arr.shift();
    let treated = 0;
    let untreated = 0;
    let doctorsCount = 7;
    let days = 0;

    for(let i = 0; i < arr.length; i++) {
        days++;
        if(days % 3 == 0) {
            if(untreated > treated) {
                doctorsCount += 1;
            }
        }

        if(arr[i] >= doctorsCount) {
            treated += doctorsCount;
            untreated += Number(arr[i]) - doctorsCount;
        } else {
            treated += Number(arr[i]);
        }
    }

    console.log(`Treated patients: ${treated}.\nUntreated patients: ${untreated}.`);
}

hospitalFunction([4, 7, 27, 9, 1]);
hospitalFunction([6, 25, 25, 25, 25, 25, 2]);
hospitalFunction([3, 7, 7, 7]);