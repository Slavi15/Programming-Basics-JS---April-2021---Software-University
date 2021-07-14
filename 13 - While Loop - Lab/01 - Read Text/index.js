function readText(arr) {
    let i = 0;
    while(true) {
        let str = arr[i];
        if(str == 'Stop') {
            break;
        }
        console.log(str);
        i++;
    }
}

readText(['Nakov', 'SoftUni', 'Sofia', 'Bulgaria', 'SomeText', 'Stop', 'AfterStop', 'Europe', 'HelloWorld']);
readText(['Sofia', 'Berlin', 'Moscow', 'Athens', 'Madrid', 'London', 'Paris', 'Stop', 'AfterStop']);