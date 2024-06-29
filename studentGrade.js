const readline = require('readline');

// Create interface for reading data from terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getStudentGrade() {
    rl.question('Enter student marks (0-100): ', (input) => {
        let marks = parseInt(input);

        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log('Invalid input. Please enter a number between 0 and 100');
            rl.close();
            return;
        }

        let grade;
        if (marks > 79) {
            grade = 'A';
        } else if (marks >= 60) {
            grade = 'B';
        } else if (marks >= 50) {
            grade = 'C';
        } else if (marks >= 40) {
            grade = 'D';
        } else {
            grade = 'E';
        }
        console.log(`The grade is: ${grade}`);
        rl.close();
    });
}

getStudentGrade();
