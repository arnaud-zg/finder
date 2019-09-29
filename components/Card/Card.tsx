import React from 'react'
import { style } from 'typestyle'
import { rem } from 'csx'
import { BoxFunction, BoxUnit } from 'csstips'
import { colors } from '../../constants/colors'

const className = style({
  border: 'solid',
  borderColor: colors.gray.toHexString(),
  borderWidth: rem(0.0625),
  marginTop: rem(1),
})

export class Card extends React.PureComponent {
  render() {
    const { children } = this.props
    return <div className={className}>{children}</div>
  }
}
