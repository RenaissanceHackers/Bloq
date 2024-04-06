import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateContributionPoints(amount: string): string {
  // return String(Math.round((Math.random() * (10 - 1) + 1) * Number(amount)));
  return String(Math.round((20 * (10 - 1) + 1) * Number(amount)));
}