import { describe, expect, test } from 'vitest';
import { add, isEven, first, makeUser, printLength } from '../src/challenges';
describe('add', () => {
    test('adds two numbers', () => {
        expect(add(2, 3)).toBe(5);
    });
});
describe('isEven', () => {
    test('returns true for even numbers', () => {
        expect(isEven(4)).toBe(true);
    });
    test('returns false for odd numbers', () => {
        expect(isEven(5)).toBe(false);
    });
});
describe('first', () => {
    test('returns first number', () => {
        expect(first([1, 2, 3])).toBe(1);
    });
    test('returns first string', () => {
        expect(first(['a', 'b', 'c'])).toBe('a');
    });
});
describe('makeUser', () => {
    test('creates a user object', () => {
        expect(makeUser('Ana', 22)).toEqual({ name: 'Ana', age: 22 });
    });
});
describe('printLength', () => {
    test('returns string length', () => {
        expect(printLength('hello')).toBe(5);
    });
});
