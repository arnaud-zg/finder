import React from 'react'
import renderer from 'react-test-renderer'
import { Title } from '../'

describe('Title', () => {
  it('renders correctly with property level 1', () => {
    const testRenderer = renderer.create(
      <Title content="Hello World" level={1} />
    )
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })

  it('renders correctly with property level 2', () => {
    const testRenderer = renderer.create(
      <Title content="Hello World" level={2} />
    )
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })

  it('renders correctly with property level 3', () => {
    const testRenderer = renderer.create(
      <Title content="Hello World" level={3} />
    )
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
