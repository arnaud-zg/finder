import React from 'react'
import renderer from 'react-test-renderer'
import * as ApartmentIndex from '../'
import { Apartment } from '../'

describe('Apartment', () => {
  it('should take a snapshot of ApartmentIndex', () => {
    expect(ApartmentIndex).toMatchSnapshot()
  })

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
