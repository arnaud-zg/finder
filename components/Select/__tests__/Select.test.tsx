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
              <option key="1" value="Level 1" />,
              <option key="2" value="Level 2" />,
              <option key="3" value="Level 3" />,
              <option key="4" value="Boss" />,
            ]}
          />
        )}
      />
    )
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })
})
