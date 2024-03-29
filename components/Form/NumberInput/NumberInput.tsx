import { percent, rem } from 'csx'
import { Field } from 'formik'
import React from 'react'
import { style } from 'typestyle'
import { colors } from '../../../constants/colors'
import { ErrorField } from '../ErrorField'

const INPUT_TYPE_NUMBER = 'number'

const className = style({
  borderColor: colors.gray.toHexString(),
  borderRadius: rem(0.25),
  borderStyle: 'solid',
  borderWidth: rem(0.0625),
  fontSize: rem(1),
  marginTop: rem(0.5),
  padding: rem(0.5),
  width: percent(100),
})

interface INumberInputProps extends React.HTMLProps<HTMLInputElement> {}

export const NumberInput = (props: INumberInputProps) => (
  <Field name={props.name}>
    {({ field }) => (
      <>
        <input
          {...field}
          {...props}
          className={className}
          type={INPUT_TYPE_NUMBER}
        />
        <ErrorField fieldName={field.name} />
      </>
    )}
  </Field>
)
