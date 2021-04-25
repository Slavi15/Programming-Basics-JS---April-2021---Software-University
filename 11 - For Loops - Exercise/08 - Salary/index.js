function salaryFunction(arr) {
    const numberOfTabs = Number(arr[0]);
    const salaryPrice = Number(arr[1]);
    arr.shift();
    arr.shift();

    let money = 0;
    for(let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case 'Facebook':
                money += 150;
                break;
            case 'Instagram':
                money += 100;
                break;
            case 'Reddit':
                money += 50;
                break;
        }
    }
    
    money >= salaryPrice
    ? console.log('You have lost your salary.')
    : console.log(salaryPrice - money);
}

salaryFunction([10, 750, 'Facebook', 'Dev.bg', 'Instagram', 'Facebook', 'Reddit', 'Facebook', 'Facebook']);
salaryFunction([3, 500, 'Github.com', 'Stackoverflow.com', 'softuni.bg']);
salaryFunction([3, 500, 'Facebook', 'Stackoverflow.com', 'softuni.bg']);