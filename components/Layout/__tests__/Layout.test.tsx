import React from 'react'
import renderer from 'react-test-renderer'
import * as LayoutIndex from '../'
import { Layout } from '../'

describe('Layout', () => {
  it('should take a snapshot of LayoutIndex', () => {
    expect(LayoutIndex).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const testRenderer = renderer.create(<Layout />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
