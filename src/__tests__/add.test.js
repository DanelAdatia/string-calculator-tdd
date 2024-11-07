import { test, expect } from 'vitest';

// Add initial failing test for add function with empty string
test('should return 0 for an empty string', () => {
  expect(add('')).toBe(0); 
});
