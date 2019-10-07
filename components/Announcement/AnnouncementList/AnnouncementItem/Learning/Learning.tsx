import { inlineBlock, padding } from 'csstips'
import { rem } from 'csx'
import { format } from 'date-fns'
import React from 'react'
import { style } from 'typestyle'
import { colors } from '../../../../../constants/colors'
import { Title } from '../../../../Title'

const tagClassname = style(inlineBlock, padding(rem(0.25)), {
  backgroundColor: colors.gray.toHexString(),
  borderRadius: rem(0.25),
  color: colors.light.toHexString(),
  marginLeft: rem(0.25),
  $nest: {
    '&:hover': {
      backgroundColor: colors.lightGray.toHexString(),
      color: colors.dark.toHexString(),
    },
  },
})
interface ILearningProps {
  courseDuration: string
  description: string
  identifier: string
  price: number
  publishTime: string
}

export const Learning = (props: ILearningProps) => {
  const { courseDuration, description, identifier, price, publishTime } = props
  return (
    <div id={identifier}>
      <Title content={description} level={3} />
      {!!courseDuration && <div className={tagClassname}>{courseDuration}</div>}
      {!!price && <div className={tagClassname}>{price / 100} €</div>}
      <div className={tagClassname}>
        {format(new Date(publishTime), "dd/MM/yyyy 'at' HH:mm")}
      </div>
    </div>
  )
}
