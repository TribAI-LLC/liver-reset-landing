import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert BRL amounts to USD and format as USD currency string.
export const BRL_TO_USD = 0.2; // 1 BRL = 0.20 USD (adjust as needed)

export function brlToUsd(brl: number) {
  return brl * BRL_TO_USD;
}

export function formatUsdFromBrl(brl: number) {
  const usd = brlToUsd(brl);
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(usd);
}
