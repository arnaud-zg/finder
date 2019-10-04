import * as Yup from 'yup'
import { IFormSchema, IFormSchemaField } from '../components/AnnouncementCreate'

export const getFormFieldNames = (formSchema: IFormSchema) =>
  Object.keys(formSchema.properties)

export const getFormInitialValues = (formSchema: IFormSchema) =>
  getFormFieldNames(formSchema).reduce(
    (acc, fieldName) => ({
      [fieldName]: '',
      ...acc,
    }),
    {}
  )

export const getFormValidationSchema = (formSchema: IFormSchema) => {
  const { required: requiredFields } = formSchema
  const objectSchema = requiredFields.reduce(
    (acc, fieldName) => ({
      ...acc,
      [fieldName]: getFormFieldSchema(
        formSchema.properties[fieldName]
      ).required(),
    }),
    {}
  )

  return Yup.object().shape(objectSchema)
}

export const getFormFieldSchema = (
  formSchemaField: IFormSchemaField
): Yup.StringSchema<string> => {
  let fieldSchema = Yup.string()

  if (formSchemaField.minLength) {
    fieldSchema = fieldSchema.min(formSchemaField.minLength, 'Too short!')
  } else if (formSchemaField.minLength) {
    fieldSchema = fieldSchema.max(formSchemaField.minLength, 'Too long!')
  }

  return fieldSchema
}
