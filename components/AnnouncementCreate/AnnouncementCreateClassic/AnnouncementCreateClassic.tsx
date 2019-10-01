import { Formik } from 'formik'
import React from 'react'
import { style } from 'typestyle'
import { TextInput } from '../../TextInput'
import { Title } from '../../Title'

const formInitialValues = {
  name: '',
  location: '',
}

const className = style({})

export class AnnouncementCreateClassic extends React.PureComponent {
  render() {
    return (
      <div className={className}>
        <Title content="Classic" level={2} />
        <Formik
          initialValues={formInitialValues}
          onSubmit={() => {}}
          render={() => (
            <>
              <TextInput name="name" placeholder="Name" maxLength={50} />
              <TextInput
                name="location"
                placeholder="Location"
                maxLength={25}
              />
            </>
          )}
        />
      </div>
    )
  }
}
