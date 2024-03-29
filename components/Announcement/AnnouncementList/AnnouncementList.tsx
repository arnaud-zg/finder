import { rem } from 'csx'
import React from 'react'
import { style } from 'typestyle'
import { AnnouncementItem, IAnnouncementItemProps } from './AnnouncementItem'

const className = style({
  marginTop: rem(1),
})

export interface IAnnouncementListProps {
  list: IAnnouncementItemProps[]
}

export const AnnouncementList = (props: IAnnouncementListProps) => {
  const { list } = props
  return (
    <div className={className}>
      {list.map(item => (
        <AnnouncementItem key={item.identifier} {...item} />
      ))}
    </div>
  )
}
