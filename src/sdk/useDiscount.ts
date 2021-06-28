export const useDiscount = ({
  price,
  listPrice,
}: {
  price: number
  listPrice: number
}) => {
  if (typeof price === 'number' && typeof listPrice === 'number') {
    return listPrice - price
  }

  return 0
}
