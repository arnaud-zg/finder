import { rem } from 'csx'
import { ErrorMessage } from 'formik'
import React from 'react'
import { style } from 'typestyle'
import { colors } from '../../../constants/colors'

const className = style({
  color: colors.error.toHexString(),
  display: 'flex',
  fontSize: rem(0.75),
  marginTop: rem(0.25),
  marginBottom: rem(0.5),
})

interface IProps {
  fieldName: string
}

export const ErrorField = (props: IProps) => {
  const { fieldName } = props
  return (
    <ErrorMessage name={fieldName}>
      {message => <span className={className}>{message}</span>}
    </ErrorMessage>
  )
}
