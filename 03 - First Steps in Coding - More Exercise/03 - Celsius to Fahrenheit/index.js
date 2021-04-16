function celciusToFahrenheit(input) {
    const temp = Number(input[0]);

    const inFahrenheit = (temp * 1.8) + 32;
    console.log(inFahrenheit.toFixed(2));
}

celciusToFahrenheit([25]);
celciusToFahrenheit([0]);
celciusToFahrenheit([-5.5]);
celciusToFahrenheit([32.3]);