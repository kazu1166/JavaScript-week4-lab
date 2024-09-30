const inputNum1 = prompt("Please input num1:");

const inputNum2 = prompt("Please input num2:");

const inputOperator = prompt(
  "Please choose the operator for the two input numbers (You can choose one of the symbols; '+', '-', '*', '/')"
);

/*
function calculator(num1, numb2, operator) {
  if (operator == "+") {
    return num1 + numb2;
  } else if (operator == "-") {
    return num1 - numb2;
  } else if (operator == "*") {
    return num1 * numb2;
  } else if (operator == "/") {
    return num1 / numb2;
  } else {
    return "Invalid input. Please choose one of these symbols; '+', '-', '*', '/' as the operator";
  }
}
*/

function calculator(num1, numb2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + numb2;
      break;
    case "-":
      result = num1 - numb2;
      break;
    case "*":
      result = num1 * numb2;
      break;
    case "/":
      result = num1 / numb2;
      break;
    default:
      result =
        "Invalid input. Please choose one of these symbols; '+', '-', '*', '/' as the operator";
  }
  console.log(result);
}

calculator(inputNum1, inputNum2, inputOperator);
