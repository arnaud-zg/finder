import { em, rem } from 'csx'
import React from 'react'
import { style } from 'typestyle'
import { colors } from '../../../../constants/colors'
import { Apartment } from './Apartment'
import { Learning } from './Learning'
import { Request } from './Request'

const className = style({
  marginLeft: rem(0.5),
  marginRight: rem(0.5),
})

export interface IAnnouncementItemProps extends IAnnouncement {}

export class AnnouncementItem extends React.PureComponent<
  IAnnouncementItemProps
> {
  render() {
    const {
      courseDuration,
      description,
      identifier,
      locationIndication,
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
            description={description}
            identifier={identifier}
            locationIndication={locationIndication}
            price={price}
            publishTime={publishTime}
          />
        )}
        {type === 'learning' && (
          <Learning
            courseDuration={courseDuration}
            description={description}
            identifier={identifier}
            price={price}
            publishTime={publishTime}
          />
        )}
        {type === 'request' && (
          <Request
            description={description}
            identifier={identifier}
            locationIndication={locationIndication}
            publishTime={publishTime}
          />
        )}
      </div>
    )
  }
}
