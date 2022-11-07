export const orderArray = (data, attr) =>
  data.sort((a, b) => {
    if (a[attr] > b[attr]) return -1
    if (a[attr] < b[attr]) return 1
    return 0
  })

export const formatPrice = (number: number, currencyId: string): string => {
  const options2 = {
    style: 'currency',
    currency: currencyId,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }
  const numberFormat2 = new Intl.NumberFormat('es-AR', options2)
  return numberFormat2.format(number)
}
