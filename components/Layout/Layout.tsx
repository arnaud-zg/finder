import React from 'react'
import { style } from 'typestyle'
import { rem } from 'csx'
import { Navigation } from '../Navigation'

const className = style({
  padding: `0 ${rem(1.5)}`,
})

export class Layout extends React.PureComponent {
  render() {
    const { children } = this.props
    return (
      <>
        <Navigation />
        <div className={className}>{children}</div>
      </>
    )
  }
}
