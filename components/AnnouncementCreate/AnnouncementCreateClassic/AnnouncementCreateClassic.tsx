import { Formik, FormikProps, FormikValues } from 'formik'
import React from 'react'
import { style } from 'typestyle'
import { FORM_INPUT_FIELD_PLACEHOLDER_MAPPING } from '../../../constants/form'
import {
  getFormFieldNames,
  getFormInitialValues,
  getFormValidationSchema,
} from '../../../utils/form'
import { Button } from '../../Button'
import { Select } from '../../Select'
import { TextArea } from '../../TextArea'
import { TextInput } from '../../TextInput'
import { Title } from '../../Title'
import { IFormSchema } from '../AnnouncementCreate'

const className = style({})

const ctaClassName = style({
  display: 'flex',
  justifyContent: 'center',
})

export interface IFormData {
  [fieldName: string]: string
}

interface IProps {
  formSchema: IFormSchema
  onSubmit: (formData: IFormData) => void
}

export class AnnouncementCreateClassic extends React.PureComponent<IProps> {
  render() {
    const { formSchema, onSubmit } = this.props
    const fieldNames = getFormFieldNames(formSchema)
    const formInitialValues = getFormInitialValues(formSchema)
    const validationSchema = getFormValidationSchema(formSchema)

    return (
      <div className={className}>
        <Title content="Classic" level={2} />
        <Formik
          initialValues={formInitialValues}
          validationSchema={validationSchema}
          onSubmit={values => onSubmit(values)}
          render={(props: FormikProps<FormikValues>) => (
            <form onSubmit={props.handleSubmit}>
              {fieldNames.map(fieldName => {
                const { type, maxLength, enums } = formSchema.properties[
                  fieldName
                ]

                if (type === 'string' && enums) {
                  return (
                    <Select
                      name={fieldName}
                      options={enums.map(optionValue => (
                        <option key={optionValue} value={optionValue}>
                          {optionValue}
                        </option>
                      ))}
                    />
                  )
                }

                if (type === 'string' && maxLength > 50) {
                  return (
                    <TextArea
                      {...formSchema.properties[fieldName]}
                      key={fieldName}
                      placeholder={
                        FORM_INPUT_FIELD_PLACEHOLDER_MAPPING[fieldName]
                      }
                      name={fieldName}
                    />
                  )
                }

                return (
                  <TextInput
                    {...formSchema.properties[fieldName]}
                    key={fieldName}
                    placeholder={
                      FORM_INPUT_FIELD_PLACEHOLDER_MAPPING[fieldName]
                    }
                    name={fieldName}
                  />
                )
              })}
              <div className={ctaClassName}>
                <Button>Submit</Button>
              </div>
            </form>
          )}
        />
      </div>
    )
  }
}
