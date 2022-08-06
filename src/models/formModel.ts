export const Packages = {
  safe: "safe",
  "super-safe": "super-safe",
  standard: "standard",
} as const;

export type PackageType = keyof typeof Packages;

export const Currencies = {
  USD: "USD",
  HKD: "HKD",
  AUD: "AUD",
} as const;

export type CurrenciesType = keyof typeof Currencies;

export const CurrencyRate: Record<CurrenciesType, number> = {
  AUD: 3,
  USD: 2,
  HKD: 1,
};

export const ExtraFeeRate: Record<PackageType, number> = {
  safe: 0.5,
  "super-safe": 0.75,
  standard: 0,
};

export const Countries: Record<CurrenciesType, string> = {
  AUD: "Australia",
  HKD: "Hong Kong",
  USD: "USA",
};

export const PackageName: Record<PackageType, string> = {
  safe: "Safe",
  "super-safe": "Super Safe",
  standard: "Standard",
};

export const MAXIMUM_AGE = 100;
