import React from 'react'
import renderer from 'react-test-renderer'
import { Navigation } from '../'

describe('Navigation', () => {
  it('renders correctly', () => {
    const testRenderer = renderer.create(<Navigation />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
