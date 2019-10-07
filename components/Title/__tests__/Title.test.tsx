import React from 'react'
import renderer from 'react-test-renderer'
import { Title } from '../'

describe('Title', () => {
  it('renders null', () => {
    expect(
      renderer.create(<Title content="" level={0} />).toJSON()
    ).toMatchSnapshot()
  })

  it('renders correctly with property level 1', () => {
    expect(
      renderer.create(<Title content="Hello World" level={1} />).toJSON()
    ).toMatchSnapshot()

    expect(
      renderer
        .create(<Title center={true} content="Hello World" level={1} />)
        .toJSON()
    ).toMatchSnapshot()
  })

  it('renders correctly with property level 2', () => {
    expect(
      renderer.create(<Title content="Hello World" level={2} />).toJSON()
    ).toMatchSnapshot()

    expect(
      renderer
        .create(<Title center={true} content="Hello World" level={2} />)
        .toJSON()
    ).toMatchSnapshot()
  })

  it('renders correctly with property level 3', () => {
    expect(
      renderer.create(<Title content="Hello World" level={3} />).toJSON()
    ).toMatchSnapshot()

    expect(
      renderer
        .create(<Title center={true} content="Hello World" level={3} />)
        .toJSON()
    ).toMatchSnapshot()
  })
})
