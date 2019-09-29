import { rem } from 'csx'
import React from 'react'
import { style } from 'typestyle'
import { Title } from '../../Title'

const className = style({
  marginLeft: rem(0.5),
  marginRight: rem(0.5),
})

export interface IProps {
  identifier: string
  name: string
}

export class AnnouncementItem extends React.PureComponent<IProps> {
  render() {
    const { name } = this.props
    return (
      <div className={className}>
        <Title content={name} level={3} />
      </div>
    )
  }
}
