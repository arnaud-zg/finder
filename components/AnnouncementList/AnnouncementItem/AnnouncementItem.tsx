import { em, rem } from 'csx'
import React from 'react'
import { style } from 'typestyle'
import { colors } from '../../../constants/colors'
import { Apartment } from '../../Apartment'
import { Learning } from '../../Learning'
import { Request } from '../../Request'

const className = style({
  marginLeft: rem(0.5),
  marginRight: rem(0.5),
})

export interface IProps {
  courseDuration: string
  identifier: string
  locationIndication: string
  name: string
  price: number
  publishTime: string
  type: 'apartment' | 'learning' | 'request'
}

export class AnnouncementItem extends React.PureComponent<IProps> {
  render() {
    const {
      courseDuration,
      identifier,
      locationIndication,
      name,
      price,
      publishTime,
      type,
    } = this.props
    return (
      <div
        className={`${className} ${style({
          borderColor: colors[type]
            ? colors[type].toHexString()
            : colors.dark.toHexString(),
          borderLeftStyle: 'solid',
          borderWidth: em(0.5),
        })}`}
      >
        {type === 'apartment' && (
          <Apartment
            identifier={identifier}
            locationIndication={locationIndication}
            name={name}
            price={price}
            publishTime={publishTime}
          />
        )}
        {type === 'learning' && (
          <Learning
            courseDuration={courseDuration}
            identifier={identifier}
            locationIndication={locationIndication}
            name={name}
            price={price}
            publishTime={publishTime}
          />
        )}
        {type === 'request' && (
          <Request
            identifier={identifier}
            locationIndication={locationIndication}
            name={name}
            publishTime={publishTime}
          />
        )}
      </div>
    )
  }
}
