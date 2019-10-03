import { rem } from 'csx'
import React from 'react'
import { style } from 'typestyle'
import { colors } from '../../constants/colors'

const className = style({
  border: 0,
  padding: rem(0.5),
  backgroundColor: colors.gray.toHexString(),
  borderRadius: rem(0.25),
  color: colors.light.toHexString(),
  cursor: 'pointer',
  fontSize: rem(1),
  marginTop: rem(0.5),
  $nest: {
    '&:hover': {
      backgroundColor: colors.lightGray.toHexString(),
      color: colors.dark.toHexString(),
    },
  },
})

interface IProps extends React.HTMLProps<HTMLButtonElement> {}

export class Button extends React.PureComponent<IProps> {
  render() {
    const { children } = this.props
    return (
      <button className={className} type="submit">
        {children}
      </button>
    )
  }
}
