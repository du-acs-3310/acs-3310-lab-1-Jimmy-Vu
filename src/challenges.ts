export function clamp(value: number, min: number, max: number): number {
  if (value < min) { return min }
  else if (value > max) { return max }
  else return value
}

export function isBetween(value: number, min: number, max: number): boolean {
  return value >= min && value <= max
}

export function first<T>(array: T[]): T | undefined {
  return array[0]
}

export function pluckNames(items: { name: string }[]): string[] {
  return items.map(item =>  item.name );
}

export function repeat(text: string, count: number): string {
  let newString = '';

  for (let i = 0; i < count; i++) {
    newString += text;
  }

  return newString;
}
