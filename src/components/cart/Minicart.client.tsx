import {
  useMinicart,
  useNumberFormat,
  useOrderForm,
  useToast,
  useOrderQueueStatus,
  useOrderItems,
} from '@vtex/gatsby-theme-store'
import { MinicartButton } from '@vtex/store-ui'
import React, { lazy } from 'react'
import type { FC, MouseEventHandler } from 'react'

const onCheckout: MouseEventHandler<HTMLButtonElement> = (e) => {
  e.preventDefault()
  window.location.href = '/checkout/'
}

const MinicartDrawer = lazy(() => import('@vtex/store-ui/src/Minicart/Drawer'))

const Minicart: FC = () => {
  const { removeItem, updateQuantity: updateItem } = useOrderItems()
  const { hideToast, messages } = useToast()
  const queueStatus = useOrderQueueStatus()
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
          disableViewCart={queueStatus === 'Pending'}
          numberFormat={numberFormat}
          hideToast={hideToast}
          messages={messages}
          items={orderForm.items as any}
        />
      )}
    </>
  )
}

export default Minicart
