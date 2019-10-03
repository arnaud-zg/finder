import { Formik } from 'formik'
import React from 'react'
import renderer from 'react-test-renderer'
import { TextArea } from '../TextArea'

describe('TextArea', () => {
  it('renders correctly', () => {
    const testRenderer = renderer.create(
      <Formik
        initialValues={{ description: '' }}
        onSubmit={() => {}}
        render={() => <TextArea name="description" />}
      />
    )
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
