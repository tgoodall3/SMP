import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PHONE_FALLBACK = "(555) 123-4567";
export const EMAIL_FALLBACK = "hello@simplemanplumbing.com";

export function formatPhoneNumber(phone: string) {
  const cleaned = phone.replace(/[^\d]/g, "");
  if (cleaned.length === 11 && cleaned.startsWith("1")) {
    return cleaned.replace(/(\d)(\d{3})(\d{3})(\d{4})/, "$1 ($2) $3-$4");
  }
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  }
  return phone;
}

export function getFallback<T>(value: T | undefined | null, fallback: T) {
  return value ?? fallback;
}

