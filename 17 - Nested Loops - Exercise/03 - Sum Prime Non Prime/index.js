function sumPrimeNonPrime(input) {
    let primeSum = 0;
    let nonPrimeSum = 0;

    for(let i = 0; i < input.length; i++) {
        if(input[i] == 'stop') {
            break;
        }

        if(input[i] < 0) {
            console.log('Number is negative.');
            continue;
        }

        let isPrime = true;
        for (let j = 2; j < Number(input[i]); j++) {
            if(Number(input[i]) % j == 0) {
                isPrime = false;
                break;
            }
        }

        if(isPrime) {
            primeSum += Number(input[i]);
        } else {
            nonPrimeSum += Number(input[i]);
        }
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`)
}

sumPrimeNonPrime([3, 9, 0, 7, 19, 4, 'stop']);
sumPrimeNonPrime([30, 83, 33, -1, 20, 'stop']);
sumPrimeNonPrime([0, -9, 0, 'stop']);