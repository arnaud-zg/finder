import React from 'react'
import renderer from 'react-test-renderer'
import { Learning } from '.'

describe('Learning', () => {
  it('renders correctly', () => {
    const testRenderer = renderer.create(
      <Learning
        courseDuration="2h"
        description="Improve your Online Shopify Store with France's Top Shopify Expert"
        identifier="2"
        price={9700}
        publishTime="2019-09-29T13:50:42.926Z"
      />
    )
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
