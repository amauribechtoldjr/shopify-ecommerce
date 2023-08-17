export function getFormatedCurrency(currency: string) {
  if (currency === 'BRL') {
    return 'R$'
  }

  return '$'
}
