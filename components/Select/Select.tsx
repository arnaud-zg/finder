import { rem } from 'csx'
import { Field } from 'formik'
import React from 'react'
import { style } from 'typestyle'
import { colors } from '../../constants/colors'

const className = style({
  backgroundColor: colors.light.toHexString(),
  border: 0,
  borderColor: colors.gray.toHexString(),
  borderRadius: rem(0.25),
  borderStyle: 'solid',
  borderWidth: rem(0.0625),
  color: colors.gray.toHexString(),
  fontSize: rem(1),
  marginLeft: rem(0.25),
  marginTop: rem(0.5),
  padding: rem(0.25),
})

interface IProps extends React.HTMLProps<HTMLSelectElement> {
  options: JSX.Element[]
}

export class Select extends React.PureComponent<IProps> {
  render() {
    const { options } = this.props
    return (
      <Field component="select" name={this.props.name} className={className}>
        {options}
      </Field>
    )
  }
}
