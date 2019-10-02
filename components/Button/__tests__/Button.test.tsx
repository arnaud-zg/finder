import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from '../Button'

describe('Button', () => {
  it('renders correctly', () => {
    const testRenderer = renderer.create(<Button>Submit</Button>)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
