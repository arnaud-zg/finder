import { Formik } from 'formik'
import React from 'react'
import renderer from 'react-test-renderer'
import { Select } from '../Select'

describe('TextInput', () => {
  it('renders correctly', () => {
    const testRenderer = renderer.create(
      <Formik
        initialValues={{ mode: '' }}
        onSubmit={() => {}}
        render={() => (
          <Select
            name="mode"
            options={[
              <option value="Level 1" />,
              <option value="Level 2" />,
              <option value="Level 3" />,
              <option value="Boss" />,
            ]}
          />
        )}
      />
    )
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
