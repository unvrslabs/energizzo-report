import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

const LETTERS = "ABCDEFGHIJKL";
export function keyFor(i: number): string {
  return LETTERS[i] ?? String(i + 1);
}
