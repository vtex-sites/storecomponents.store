import {
  useNumberFormat,
  useOrderForm,
  useToast,
  useOrderQueueStatus,
  useOrderItems,
} from '@vtex/gatsby-theme-store'
import { useGlobalUIState } from '@vtex/store-sdk'
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
  const { displayMinicart, openMinicart, closeMinicart } = useGlobalUIState()
  const { orderForm } = useOrderForm()
  const total = orderForm.value / 100

  return (
    <>
      <MinicartButton value={orderForm.items.length} onClick={openMinicart} />
      {displayMinicart && (
        <MinicartDrawer
          isOpen
          total={total}
          subTotal={total}
          onClose={closeMinicart}
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
