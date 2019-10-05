import { inlineBlock, padding } from 'csstips'
import { rem } from 'csx'
import { format } from 'date-fns'
import React from 'react'
import { style } from 'typestyle'
import { colors } from '../../constants/colors'
import { Paragraph } from '../Paragraph'
import { Title } from '../Title'

interface IProps {
  description: string
  identifier: string
  locationIndication: string
  price: number
  publishTime: string
}

const tagClassname = style(inlineBlock, padding(rem(0.25)), {
  backgroundColor: colors.gray.toHexString(),
  borderRadius: rem(0.25),
  color: colors.light.toHexString(),
  $nest: {
    '&:hover': {
      backgroundColor: colors.lightGray.toHexString(),
      color: colors.dark.toHexString(),
    },
  },
})

export class Apartment extends React.PureComponent<IProps> {
  render() {
    const {
      description,
      identifier,
      locationIndication,
      price,
      publishTime,
    } = this.props
    return (
      <div id={identifier}>
        <Title content={description} level={3} />
        <div
          className={style(inlineBlock, {
            textDecoration: 'underline',
          })}
        >
          <Paragraph content={locationIndication} />
        </div>
        <div className={tagClassname}>{price / 100} €</div>
        <div
          className={`${tagClassname} ${style({
            marginLeft: rem(0.25),
          })}`}
        >
          {format(new Date(publishTime), "dd/MM/yyyy 'at' HH:mm")}
        </div>
      </div>
    )
  }
}
