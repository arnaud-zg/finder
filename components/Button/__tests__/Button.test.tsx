import React from 'react'
import renderer from 'react-test-renderer'
import * as ButtonIndex from '../'
import { Button } from '../'

describe('Button', () => {
  it('should take a snapshot of ButtonIndex', () => {
    expect(ButtonIndex).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const testRenderer = renderer.create(<Button>Submit</Button>)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
