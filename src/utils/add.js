export function add(input){
  if (input === '') return 0;

  const numbers = input.split(/,|\n/).map((num) => parseInt(num, 10));
  return numbers.reduce((acc, num) => acc + num, 0);
}