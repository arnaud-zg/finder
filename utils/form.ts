import { IFormSchema } from '../components/AnnouncementCreate'

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
