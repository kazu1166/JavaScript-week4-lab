// Quiz 1
const number = prompt("Enter a number:");

if (number % 5 == 0) {
  console.log(`${number} is a multiple of 5.`);
} else {
  console.log(`${number} is not a multiple of 5.`);
}

// Quiz2
const grade = prompt("Enter your score:");

if (grade <= 100 && grade >= 90) {
  console.log(`Your score is ${grade}, Your grade is A`);
} else if (grade < 90 && grade >= 70) {
  console.log(`Your score is ${grade}, Your grade is B`);
} else if (grade < 70 && grade >= 60) {
  console.log(`Your score is ${grade}, Your grade is C`);
} else if (grade < 60 && grade >= 50) {
  console.log(`Your score is ${grade}, Your grade is D`);
} else if (grade < 50 && grade >= 0) {
  console.log(`Your score is ${grade}, Your grade is F`);
} else {
  console.log(`${grade} is invalid score`);
}
