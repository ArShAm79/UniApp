/**
 * @format
 */

import 'react-native'
import React from 'react'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import Typography from '../src/components/Typography'

// eslint-disable-next-line no-undef
it('renders correctly', () => {
  const data = renderer.create(<Typography>Hi</Typography>)
})
