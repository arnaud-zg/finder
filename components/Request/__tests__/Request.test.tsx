import React from 'react'
import renderer from 'react-test-renderer'
import { Request } from '../Request'

describe('Request', () => {
  it('renders correctly', () => {
    const testRenderer = renderer.create(
      <Request
        identifier="3"
        locationIndication="Montmartre - Paris"
        name="Native English Speaker Seeking Accomodation"
        publishTime="2019-09-29T13:50:42.926Z"
      />
    )
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
