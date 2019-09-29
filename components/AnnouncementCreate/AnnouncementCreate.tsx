import { rem } from 'csx'
import React from 'react'
import { style } from 'typestyle'

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
        {mode === 'classic' && <div>Classic</div>}
        {mode === 'express' && <div>Express</div>}
      </div>
    )
  }
}
