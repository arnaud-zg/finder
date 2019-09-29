import { rem } from 'csx'
import React from 'react'
import { style } from 'typestyle'
import { Apartment } from '../../Apartment'
import { Learning } from '../../Learning'
import { Request } from '../../Request'

const className = style({
  marginLeft: rem(0.5),
  marginRight: rem(0.5),
})

export interface IProps {
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
      identifier,
      locationIndication,
      name,
      price,
      publishTime,
      type,
    } = this.props
    return (
      <div className={className}>
        {type === 'apartment' && (
          <Apartment
            identifier={identifier}
            locationIndication={locationIndication}
            name={name}
            price={price}
            publishTime={publishTime}
          />
        )}
        {type === 'learning' && <Learning {...this.props} />}
        {type === 'request' && <Request {...this.props} />}
      </div>
    )
  }
}
