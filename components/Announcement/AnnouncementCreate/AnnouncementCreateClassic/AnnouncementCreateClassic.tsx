import { Formik, FormikProps, FormikValues } from 'formik'
import React from 'react'
import { style } from 'typestyle'
import { FORM_INPUT_FIELD_PLACEHOLDER_MAPPING } from '../../../../constants/form'
import {
  getFormFieldNames,
  getFormInitialValues,
  getFormValidationSchema,
} from '../../../../utils/form'
import { Button } from '../../../Button'
import { NumberInput, TextArea, TextInput } from '../../../Form'
import { Select } from '../../../Select'
import { Title } from '../../../Title'
import { IFormSchema } from '../AnnouncementCreate'

const className = style({})

const ctaClassName = style({
  display: 'flex',
  justifyContent: 'center',
})

interface IAnnouncementCreateClassicProps {
  formSchema: IFormSchema
  onSubmit: (formData: IFormData) => void
}

export const AnnouncementCreateClassic = (
  props: IAnnouncementCreateClassicProps
) => {
  const { formSchema, onSubmit } = props
  const fieldNames = getFormFieldNames(formSchema)
  const formInitialValues = getFormInitialValues(formSchema)
  const validationSchema = getFormValidationSchema(formSchema)

  return (
    <div className={className}>
      <Title content="Classic" level={2} />
      <Formik
        initialValues={formInitialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        render={(props: FormikProps<FormikValues>) => (
          <form onSubmit={props.handleSubmit}>
            {fieldNames.map(fieldName => {
              const { type, maxLength, enums } = formSchema.properties[
                fieldName
              ]

              if (type === 'number') {
                return (
                  <NumberInput
                    {...formSchema.properties[fieldName]}
                    key={fieldName}
                    placeholder={
                      FORM_INPUT_FIELD_PLACEHOLDER_MAPPING[fieldName]
                    }
                    name={fieldName}
                  />
                )
              }

              if (type === 'string' && enums) {
                return (
                  <Select
                    key={fieldName}
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
                  placeholder={FORM_INPUT_FIELD_PLACEHOLDER_MAPPING[fieldName]}
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
