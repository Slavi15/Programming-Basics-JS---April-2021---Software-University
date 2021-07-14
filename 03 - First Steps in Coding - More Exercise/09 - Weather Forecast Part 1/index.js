function weatherForecastOne(input) {
    const text = input[0];

    if(text === 'sunny') {
        console.log('It\'s warm outside!');
    } else {
        console.log('It\'s cold outside!');
    }
}

weatherForecastOne(['sunny']);
weatherForecastOne(['cloudy']);
weatherForecastOne(['snowy']);