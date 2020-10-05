import React, { FC } from 'react'
import { Box } from '@vtex/store-ui'

const styles = {}

const AsyncInfoContainer: FC = ({ children }) => (
  <Box sx={styles}>{children}</Box>
)

export default AsyncInfoContainer
