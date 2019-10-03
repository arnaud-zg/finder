import React from 'react'
import renderer from 'react-test-renderer'
import { Paragraph } from '../Paragraph'

describe('Paragraph', () => {
  it('renders correctly', () => {
    const testRenderer = renderer.create(<Paragraph content="Hello World" />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })

  it('renders correctly with center props', () => {
    const testRenderer = renderer.create(
      <Paragraph center={true} content="Hello World" />
    )
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
