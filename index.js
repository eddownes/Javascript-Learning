function addsTwoNumbers(num1, num2){
  return num1 + num2;
}

function multiplyTwoNumbers(num1, num2){
  return num1 * num2;
}

function subtractsTwoNumbers(num1, num2){
  return num1 - num2;
}

function dividesTwoNumbers(num1, num2){
  return num1, num2;
}

function calculator(callBackFunction, numberOne, numberTwo){
  return callBackFunction (numberOne, numberTwo)
}

calculator (addsTwoNumbers, 2, 3);