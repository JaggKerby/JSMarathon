const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getlenght(firstRow, secondRow) {
    if (firstRow.length > secondRow.length) {
        console.log('В этом слове "'+ firstRow + '" больше букв а именно '+ firstRow.length);
    } else {
        console.log('В этом слове "'+ secondRow + '" больше букв а именно '+ secondRow.length);
    };
};

getlenght(firstRow, secondRow);