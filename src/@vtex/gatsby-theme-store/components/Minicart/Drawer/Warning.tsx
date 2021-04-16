import React from 'react'
import { Toast, Box } from '@vtex/store-ui'
import { useToast } from '@vtex/gatsby-theme-store'

export const MinicartWarning = () => {
  return (
    <Box variant="minicart.drawer.warning">
      <Toast {...useToast()} type="error" />
    </Box>
  )
}
