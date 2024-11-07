import { test, expect } from 'vitest';
import { add } from '../utils/add';

test('should return 0 for an empty string', () => {
  expect(add('')).toBe(0); 
});
