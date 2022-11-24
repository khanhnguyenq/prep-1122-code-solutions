function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log(`addTwoNumbers Result: ${addTwoNumbersResult}.`);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log(`convertHoursToMinutes Result: ${convertHoursToMinutesResult}.`);

function getGreeting(name) {
  return `Hello ${name}!!`;
}
var getGreetingResult = getGreeting('Khanh');
console.log(`getGreeting Result: ${getGreetingResult}`);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log(`addAndMultiplyBy5 Result: ${addAndMultiplyBy5Result}.`);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log(`multiplyAndDivideBy5 Result: ${multiplyAndDivideBy5Result}.`);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log(`subtractTwoNumbers Result: ${subtractTwoNumbersResult}.`);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var getCircleCircumferenceResult = getCircleCircumference(5);
console.log(`getCircleCircumference Result: ${getCircleCircumferenceResult}.`);

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
var getFullNameResult = getFullName('Khanh', 'Nguyen');
console.log(`getFullName Result: ${getFullNameResult}`);

function cube(number) {
  return number * number * number;
}
var cubeResult = cube(5);
console.log(`cube Result: ${cubeResult}`);
