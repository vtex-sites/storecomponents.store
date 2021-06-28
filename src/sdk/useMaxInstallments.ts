import { useMemo } from 'react'

export interface Installment {
  value: number
  numberOfInstallments: number
  interestRate: number
}

export const useMaxInstallments = (installments: Installment[] = []) =>
  useMemo(() => {
    const max = installments?.find((x) => x.interestRate === 0)

    if (!max) {
      return null
    }

    return installments.reduce(
      (acc, curr) =>
        curr.interestRate === 0 &&
        curr.numberOfInstallments > acc.numberOfInstallments
          ? curr
          : acc,
      max
    )
  }, [installments])
