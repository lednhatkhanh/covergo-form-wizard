import {
  CurrencyRate,
  PackageType,
  ExtraFeeRate,
  CurrenciesType,
} from "src/models/formModel";

export function calculateStandardPremiumFee(
  currency: CurrenciesType,
  age: number,
) {
  return 10 * age * CurrencyRate[currency];
}

export function calculatePackageExtraFee(
  p: PackageType,
  currency: CurrenciesType,
  age: number,
) {
  if (!ExtraFeeRate[p]) {
    return 0;
  }

  const standardFee = calculateStandardPremiumFee(currency, age);
  return standardFee * ExtraFeeRate[p];
}

export function calculateTotalFee(
  p: PackageType,
  currency: CurrenciesType,
  age: number,
) {
  return (
    calculateStandardPremiumFee(currency, age) +
    calculatePackageExtraFee(p, currency, age)
  );
}
