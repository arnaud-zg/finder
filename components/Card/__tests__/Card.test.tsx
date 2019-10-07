import React from 'react'
import renderer from 'react-test-renderer'
import * as CardIndex from '../'
import { Card } from '../'

describe('Card', () => {
  it('should take a snapshot of CardIndex', () => {
    expect(CardIndex).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const testRenderer = renderer.create(<Card>Hello World</Card>)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
