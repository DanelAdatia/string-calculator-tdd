import { test, expect } from 'vitest';
import { add } from '../utils/add';

test('should return 0 for an empty string', () => {
  expect(add('')).toBe(0); 
});

test('should return the same number for a single number digit',()=>{
    expect(add('1')).toBe(1);
})

test('should return sum of the numbers separated by commas', () => {
  expect(add('1,2,3')).toBe(6);
});

test('should return sum of numbers separated by commas and newLines', ()=>{
    expect(add('1\n2,3')).toBe(6);
})