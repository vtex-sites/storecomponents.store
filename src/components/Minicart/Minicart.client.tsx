import React, { lazy } from 'react'
import { MinicartButton } from '@vtex/store-ui'
import {
  useMinicart,
  useOrderForm,
  useNumberFormat,
  useToast,
} from '@vtex/gatsby-theme-store'
import { useOrderItems } from '@vtex/gatsby-theme-store/src/sdk/orderForm/useOrderItems'
import type { FC, MouseEventHandler } from 'react'

const onCheckout: MouseEventHandler<HTMLButtonElement> = (e) => {
  e.preventDefault()
  window.location.href = '/checkout/'
}

const MinicartDrawer = lazy(() => import('@vtex/store-ui/src/Minicart/Drawer'))

const Minicart: FC = () => {
  const { removeItem, updateQuantity: updateItem } = useOrderItems()
  const { hideToast, message, type, isVisible } = useToast()
  const { format: numberFormat } = useNumberFormat()
  const { isOpen, toggle } = useMinicart()
  const { orderForm } = useOrderForm()
  const total = orderForm.value / 100

  return (
    <>
      <MinicartButton value={orderForm.items.length} onClick={toggle} />
      {isOpen && (
        <MinicartDrawer
          isOpen
          total={total}
          subTotal={total}
          onClose={toggle}
          removeItem={removeItem}
          updateItem={updateItem}
          onCheckout={onCheckout}
          numberFormat={numberFormat}
          hideToast={hideToast}
          message={message}
          type={type}
          isToastVisible={isVisible}
          items={orderForm.items as any}
        />
      )}
    </>
  )
}

export default Minicart
