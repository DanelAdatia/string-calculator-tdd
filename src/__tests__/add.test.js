import { test, expect } from 'vitest';
import { add } from '../utils/add';

test('should return 0 for an empty string', () => {
  expect(add('')).toBe(0);
});

test('should return the same number for a single number digit', () => {
  expect(add('1')).toBe(1);
});

test('should return sum of the numbers separated by commas', () => {
  expect(add('1,2,3')).toBe(6);
});

test('should return sum of numbers separated by commas and newLines', () => {
  expect(add('1\n2,3')).toBe(6);
});

test('should handle custom delimiter', () => {
  expect(add('//;\n1;2')).toBe(3);
});

test('should throw error when negative numbers are present', () => {
  expect(() => add('1,-2,3,-4')).toThrowError(
    'Negative numbers not allowed: -2,-4'
  );
});

test('should throw an error if input contains alphabetic characters', () => {
  expect(() => add('1,2,abc,4')).toThrow('Invalid input. Please enter numbers only.');
});