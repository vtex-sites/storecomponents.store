import type { FC } from 'react'
import React from 'react'
import { Box } from '@vtex/store-ui'

const styles = {}

const AsyncContainer: FC = ({ children }) => <Box sx={styles}>{children}</Box>

export default AsyncContainer
