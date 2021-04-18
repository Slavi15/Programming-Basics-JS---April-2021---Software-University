function schoolCamp(input) {
    const season = input[0];
    const groupType = input[1];
    const studentCount = Number(input[2]);
    const nightsCount = Number(input[3]);

    let price = 0;
    let sport = '';
    switch(season) {
        case 'Winter':
            if(groupType == 'boys') {
                price = studentCount * nightsCount * 9.60;
                sport = 'Judo';
            } else if(groupType == 'girls') {
                price = studentCount * nightsCount * 9.60;
                sport = 'Gymnastics';
            } else if(groupType == 'mixed') {
                price = studentCount * nightsCount * 10;
                sport = 'Ski';
            }
            break;
        case 'Spring':
            if(groupType == 'boys') {
                price = studentCount * nightsCount * 7.20;
                sport = 'Tennis';
            } else if(groupType == 'girls') {
                price = studentCount * nightsCount * 7.20;
                sport = 'Athletics';
            } else if(groupType == 'mixed') {
                price = studentCount * nightsCount * 9.50;
                sport = 'Cycling';
            }
            break;
        case 'Summer':
            if(groupType == 'boys') {
                price = studentCount * nightsCount * 15;
                sport = 'Football';
            } else if(groupType == 'girls') {
                price = studentCount * nightsCount * 15;
                sport = 'Volleyball';
            } else if(groupType == 'mixed') {
                price = studentCount * nightsCount * 20;
                sport = 'Swimming';
            }
            break;
    }

    if((studentCount >= 10) && (studentCount < 20)) {
        price -= price * 0.05;
    } else if((studentCount >= 20) && (studentCount < 50)) {
        price -= price * 0.15;
    } else if(studentCount >= 50) {
        price -= price * 0.5;
    }

    console.log(`${sport} ${price.toFixed(2)} lv.`);
}

schoolCamp(['Spring', 'girls', 20, 7]);
schoolCamp(['Winter', 'mixed', 9, 15]);
schoolCamp(['Summer', 'boys', 60, 7]);
schoolCamp(['Spring', 'mixed', 17, 14]);