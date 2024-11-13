export function add(input) {
  if (input === '') return 0;

  let delimiter = ',';

  ({ input, delimiter } = validatingNewFile(input, delimiter));

  validatingNonNumeric(input);
  
  let numbers = passingDelimeters(input, delimiter);

  negativeNumbers(numbers);

  numbers = ignoreThousandAndAbove(numbers)

  return numbers.reduce((acc, num) => acc + num, 0);
}

function ignoreThousandAndAbove(numbers){
  numbers = numbers.filter((number) => (number) < 1000);
  return numbers;
}

function validatingNewFile(input, delimiter) {
  if (input.startsWith('//')) {
    const delimiterEndIndex = input.indexOf('\n');
    delimiter = input.slice(2, delimiterEndIndex);
    input = input.slice(delimiterEndIndex + 1);
  }
  return { input, delimiter };
}

function validatingNonNumeric(input) {
  const invalidInputPattern = /[a-zA-Z]/;
  if (invalidInputPattern.test(input)) {
    throw new Error('Invalid input. Please enter numbers only.');
  }
}

function passingDelimeters(input, delimiter) {
  return input
    .split(new RegExp(`[${delimiter}\\n]`))
    .map((num) => num.trim())
    .filter((num) => num !== '')
    .map((num) => parseInt(num, 10));
}

function negativeNumbers(numbers) {
  const negatives = numbers.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(',')}`);
  }
}

