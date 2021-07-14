//still not working
function cinemaTickets(arr) {
    let movieName = '';
    let seats = 0;
    let allStandardCount = 0;
    let standardCount = 0;
    let allStudentCount = 0;
    let studentCount = 0;
    let allKidCount = 0;
    let kidCount = 0;
    let percentage = 0;
    let allSeats = 0;
    let tickets = 0;

    let i = 0;
    while(arr[i] !== 'Finish') {
        movieName += arr[i];
        i++;
        seats += Number(arr[i]);
        i++;

        while(arr[i] !== 'End' && arr[i] !== 'Finish') {
            switch(arr[i]) {
                case 'student':
                    studentCount += 1;
                    allStudentCount += 1;
                    break;
                case 'standard':
                    standardCount += 1;
                    allStandardCount += 1;
                    break;
                case 'kid':
                    kidCount += 1;
                    allKidCount += 1;
                    break;
            }
            i++;
        }

        allSeats += kidCount + studentCount + standardCount;
        tickets += allStudentCount + allStandardCount + allKidCount;
        percentage = (allSeats / seats) * 100;
        console.log(`${movieName} - ${percentage.toFixed(2)}% full.`);

        movieName = '';
        studentCount = 0;
        standardCount = 0;
        kidCount = 0;
        seats = 0;
        percentage = 0;
        allSeats = 0;
        i++;
    }

    let allStudentPercentage = (allStudentCount / tickets) * 100;
    let allStandardPercentage = (allStandardCount / tickets) * 100;
    let allKidPercentage = (allKidCount / tickets) * 100;

    console.log(`Total tickets: ${tickets}`);
    console.log(`${allStudentPercentage.toFixed(2)}% student tickets.`);
    console.log(`${allStandardPercentage.toFixed(2)}% standard tickets.`);
    console.log(`${allKidPercentage.toFixed(2)}% kids tickets.`);
}

cinemaTickets(['Taxi', 
                '10',
                'standard',
                'kid',
                'student',
                'student',
                'standard',
                'End',
                'Scary Movie',
                '6',
                'student',
                'student',
                'student',
                'student',
                'student',
                'student',
                'Finish']);
cinemaTickets(['The Matrix',
                '20',
                'student',
                'standard',
                'kid',
                'kid',
                'student',
                'student',
                'standard',
                'student',
                'End',
                'The Green Mile',
                '17',
                'student',
                'standard',
                'standard',
                'student',
                'standard',
                'student',
                'End',
                'Amadeus',
                '3',
                'standard',
                'standard',
                'standard',
                'Finish']);