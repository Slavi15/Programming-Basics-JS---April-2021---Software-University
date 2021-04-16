function greaterNum(input) {
    const num1 = Number(input[0]);
    const num2 = Number(input[1]);
    
    if(num1 > num2) {
        console.log(num1);
    } else if(num2 > num1) {
        console.log(num2);
    } else if(num1 == num2) {
        console.log(num1 || num2);
    }
}

greaterNum([5, 3]);
greaterNum([10, 10]);