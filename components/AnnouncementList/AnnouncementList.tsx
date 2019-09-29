import { rem } from 'csx'
import React from 'react'
import { style } from 'typestyle'

const className = style({
  marginTop: rem(1),
})

interface IAnnouncementItem {
  [key: string]: any
}

export interface IProps {
  list: IAnnouncementItem[]
}

export class AnnouncementList extends React.PureComponent<IProps> {
  render() {
    const { list } = this.props
    return (
      <div className={className}>
        {list.map(announcementItem => (
          <div>{JSON.stringify(announcementItem)}</div>
        ))}
      </div>
    )
  }
}
