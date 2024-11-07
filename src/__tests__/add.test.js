import { test, expect } from 'vitest';
import { add } from '../utils/add';

test('should return 0 for an empty string', () => {
  expect(add('')).toBe(0); 
});

test('should return the same number for a single number digit',()=>{
    expect(add('1')).toBe(1);
})
