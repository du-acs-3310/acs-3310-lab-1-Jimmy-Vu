import { describe, expect, test } from 'vitest'
import { clamp, isBetween, first, pluckNames, repeat } from '../src/challenges'

describe('clamp', () => {
  test('returns value when in range', () => {
    expect(clamp(3, 1, 5)).toBe(3)
  })

  test('returns min when below range', () => {
    expect(clamp(-1, 0, 5)).toBe(0)
  })

  test('returns max when above range', () => {
    expect(clamp(10, 0, 5)).toBe(5)
  })
})

describe('isBetween (inclusive)', () => {
  test('returns true when inside range', () => {
    expect(isBetween(3, 1, 5)).toBe(true)
  })

  test('returns true at boundaries', () => {
    expect(isBetween(1, 1, 5)).toBe(true)
    expect(isBetween(5, 1, 5)).toBe(true)
  })

  test('returns false when outside range', () => {
    expect(isBetween(0, 1, 5)).toBe(false)
    expect(isBetween(6, 1, 5)).toBe(false)
  })
})

describe('first', () => {
  test('returns first number', () => {
    expect(first([1, 2, 3])).toBe(1)
  })

  test('returns first string', () => {
    expect(first(['a', 'b', 'c'])).toBe('a')
  })

  test('returns undefined for empty array', () => {
    expect(first([])).toBeUndefined()
  })
})

describe('pluckNames', () => {
  test('returns names from objects', () => {
    expect(
      pluckNames([
        { name: 'Ana' },
        { name: 'Ben' },
        { name: 'Cara' }
      ])
    ).toEqual(['Ana', 'Ben', 'Cara'])
  })

  test('returns empty array for empty input', () => {
    expect(pluckNames([])).toEqual([])
  })
})

describe('repeat', () => {
  test('repeats string n times', () => {
    expect(repeat('ha', 3)).toBe('hahaha')
  })

  test('returns empty string when count is 0', () => {
    expect(repeat('ha', 0)).toBe('')
  })

  test('returns original string when count is 1', () => {
    expect(repeat('ha', 1)).toBe('ha')
  })
})