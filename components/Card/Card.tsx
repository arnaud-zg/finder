import { rem } from 'csx'
import React from 'react'
import { style } from 'typestyle'
import { colors } from '../../constants/colors'

const className = style({
  border: 'solid',
  borderColor: colors.gray.toHexString(),
  borderWidth: rem(0.0625),
  borderRadius: rem(0.5),
  marginTop: rem(1),
})

export const Card = props => {
  const { children } = props
  return <div className={className}>{children}</div>
}
