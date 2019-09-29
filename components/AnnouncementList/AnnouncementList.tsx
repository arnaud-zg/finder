import { rem } from 'csx'
import React from 'react'
import { style } from 'typestyle'
import {
  IProps as IAnnouncementItemProps,
  AnnouncementItem,
} from './AnnouncementItem'

const className = style({
  marginTop: rem(1),
})

export interface IProps {
  list: IAnnouncementItemProps[]
}

export class AnnouncementList extends React.PureComponent<IProps> {
  render() {
    const { list } = this.props
    return (
      <div className={className}>
        {list.map(item => (
          <AnnouncementItem key={item.identifier} {...item} />
        ))}
      </div>
    )
  }
}
