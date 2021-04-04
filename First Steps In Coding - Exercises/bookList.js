// Description
// Write a function which calculates how many hours per day a person has to read, so that he 
// reads every book and in the same time has maximum amount of time for extracurricular activities.

// Input
// 1. Number of pages in the book - whole num [0 - 1000]
// 2. Number of pages a person can read for 1 hour - whole num [0 - 1000]
// 3. Number of days he needs to read a book - whole num [0 - 1000]

// Output
// Number of hours a person has to read every day

// Input & Output examples
// Input: [212, 20, 2] | Output: 5.3

function bookList(input) {
    const numberOfPagesInBook = Number(input[0]);
    const pagesForOneHour = Number(input[1]);
    const numberOfDays = Number(input[2]);

    const timeToReadBook = numberOfPagesInBook / pagesForOneHour;
    const neededHoursForDay = timeToReadBook / numberOfDays;
    console.log(neededHoursForDay);
};