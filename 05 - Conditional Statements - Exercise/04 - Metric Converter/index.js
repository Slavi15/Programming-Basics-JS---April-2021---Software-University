function metricConverter(input) {
    let num = Number(input[0]);
    const firstMetric = input[1];
    const secondMetric = input[2];

    let result = 0;
    if((firstMetric == 'mm') && (secondMetric == 'cm')) {
        result = num / 10;
    } else if((firstMetric == 'mm') && (secondMetric == 'm')) {
        result = num / 1000;
    } else if((firstMetric == 'cm') && (secondMetric == 'mm')) {
        result = num * 10;
    } else if((firstMetric == 'cm') && (secondMetric == 'm')) {
        result = num / 100;
    } else if((firstMetric == 'm') && (secondMetric == 'mm')) {
        result = num * 1000;
    } else if((firstMetric == 'm') && (secondMetric == 'cm')) {
        result = num * 100;
    }

    console.log(result.toFixed(3));
}