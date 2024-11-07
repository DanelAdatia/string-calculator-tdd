export function add(input) {
    if (input === '') return 0;
  
    let delimiter = ',';
    
    if (input.startsWith('//')) {
      const delimiterEndIndex = input.indexOf('\n');
      delimiter = input.slice(2, delimiterEndIndex);
      input = input.slice(delimiterEndIndex + 1);
    }
  
    const numbers = input.split(new RegExp(`[${delimiter}\\n]`)).map((num) => parseInt(num, 10));
    return numbers.reduce((acc, num) => acc + num, 0);
  }