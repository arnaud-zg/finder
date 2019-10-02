import { Formik } from 'formik'
import React from 'react'
import renderer from 'react-test-renderer'
import { TextInput } from '../TextInput'

describe('TextInput', () => {
  it('renders correctly', () => {
    const testRenderer = renderer.create(
      <Formik
        initialValues={{ name: '' }}
        onSubmit={() => {}}
        render={() => <TextInput name="name" />}
      />
    )
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
