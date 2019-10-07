import { Formik } from 'formik'
import React from 'react'
import renderer from 'react-test-renderer'
import { NumberInput } from '../NumberInput'

describe('NumberInput', () => {
  it('renders correctly', () => {
    const testRenderer = renderer.create(
      <Formik
        initialValues={{ phone: '' }}
        onSubmit={() => {}}
        render={() => <NumberInput name="phone" />}
      />
    )
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
