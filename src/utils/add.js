export function add(input) {
  if (input === '') return 0;

  let delimiter = ',';

  if (input.startsWith('//')) {
    const delimiterEndIndex = input.indexOf('\n');
    delimiter = input.slice(2, delimiterEndIndex);
    input = input.slice(delimiterEndIndex + 1);
  }

  const invalidInputPattern = /[a-zA-Z]/;
  if (invalidInputPattern.test(input)) {
    throw new Error('Invalid input. Please enter numbers only.');
  }
  
  const numbers = input
    .split(new RegExp(`[${delimiter}\\n]`))
    .map((num) => num.trim())
    .filter((num) => num !== '')
    .map((num) => parseInt(num, 10));

  const negatives = numbers.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(',')}`);
  }

  return numbers.reduce((acc, num) => acc + num, 0);
}
  