import classNames from 'classnames'
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
  position: 'relative',
})

const privateItemClassName = style({
  $nest: {
    '&::after': {
      backgroundColor: colors.lightGray.toHexString(),
      content: `''`,
      height: '100%',
      left: 0,
      opacity: 0.8,
      position: 'absolute',
      top: 0,
      width: '100%',
    },
  },
})

export interface IAnnouncementItemProps extends IAnnouncement {}

export const AnnouncementItem = (props: IAnnouncementItemProps) => {
  const {
    courseDuration,
    description,
    identifier,
    locationIndication,
    price,
    publishTime,
    type,
    visibility,
  } = props
  return (
    <div
      className={classNames(
        className,
        style({
          borderColor: colors[type]
            ? colors[type].toHexString()
            : colors.dark.toHexString(),
          borderLeftStyle: 'solid',
          borderWidth: em(0.5),
        }),
        visibility === 'private' ? privateItemClassName : undefined
      )}
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
