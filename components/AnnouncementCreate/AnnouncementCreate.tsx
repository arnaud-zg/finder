import { rem } from 'csx'
import React from 'react'
import { style } from 'typestyle'
import { Title } from '../Title'

const className = style({
  marginTop: rem(1),
})

export interface IProps {
  mode: 'classic' | 'express'
}

export class AnnouncementCreate extends React.PureComponent<IProps> {
  render() {
    const { mode } = this.props
    return (
      <div className={className}>
        {mode === 'classic' && <Title content="Classic" level={3} />}
        {mode === 'express' && <Title content="Express" level={3} />}
      </div>
    )
  }
}
