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

const MinicartDrawer = lazy(
  () => import('@vtex/store-ui/src/deprecated/Minicart/Drawer')
)

const MinicartDrawerWithGenerics = MinicartDrawer as typeof MinicartDrawer['_result']

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
      <MinicartButton
        data-testid="openCart"
        value={orderForm.items.length}
        onClick={openMinicart}
      />
      {displayMinicart && (
        <MinicartDrawerWithGenerics<any>
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
          items={orderForm.items}
        />
      )}
    </>
  )
}

export default Minicart
