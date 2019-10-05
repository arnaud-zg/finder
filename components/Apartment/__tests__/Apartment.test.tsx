import React from 'react'
import renderer from 'react-test-renderer'
import { Apartment } from '../Apartment'

describe('Apartment', () => {
  it('renders correctly', () => {
    const testRenderer = renderer.create(
      <Apartment
        description="Ground floor Studio apartment with Balcony !"
        identifier="1"
        locationIndication="Paris"
        price={75000}
        publishTime="2019-09-29T13:50:42.926Z"
      />
    )
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
