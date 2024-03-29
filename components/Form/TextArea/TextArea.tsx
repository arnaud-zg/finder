import { percent, rem } from 'csx'
import { Field } from 'formik'
import React from 'react'
import { style } from 'typestyle'
import { colors } from '../../../constants/colors'
import { ErrorField } from '../ErrorField'

const className = style({
  borderColor: colors.gray.toHexString(),
  borderRadius: rem(0.25),
  borderStyle: 'solid',
  borderWidth: rem(0.0625),
  fontSize: rem(1),
  marginTop: rem(0.5),
  maxHeight: rem(6),
  minHeight: rem(2),
  padding: rem(0.5),
  resize: 'vertical',
  width: percent(100),
})

export const TextArea = props => (
  <Field name={props.name}>
    {({ field }) => (
      <>
        <textarea {...field} {...props} className={className} />
        <ErrorField fieldName={field.name} />
      </>
    )}
  </Field>
)
