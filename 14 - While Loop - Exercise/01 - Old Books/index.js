function oldBooks(input) {
    let wantedBook = input[0];
    input.shift();
    
    let books = 0;
    for(let i = 0; i < input.length; i++) {
        if(input[i] == wantedBook) {
            console.log(`You checked ${books} books and found it.`);
        } else if(input[i] == 'No More Books') {
            console.log(`The book you search is not here!\nYou checked ${books} books.`);
        }
        books++;
    }
}

oldBooks(['Troy', 'Stronger', 'Life Style', 'Troy']);
oldBooks(['The Spot', 'Hunger Games', 'Harry Potter', 'Torronto', 'Spotify', 'No More Books']);
oldBooks(['Bourne', 'True Story', 'Forever', 'More Space', 'The Girl', 'Spaceship', 'Strongest', 'Profit', 'Tripple', 'Stella', 'The Matrix', 'Bourne']);