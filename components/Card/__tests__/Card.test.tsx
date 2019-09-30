import React from 'react'
import renderer from 'react-test-renderer'
import { Card } from '../Card'

describe('Card', () => {
  it('renders correctly', () => {
    const testRenderer = renderer.create(<Card>Hello World</Card>)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
