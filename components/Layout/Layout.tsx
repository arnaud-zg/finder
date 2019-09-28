import React from 'react'
import { style } from 'typestyle'
import { Navigation } from '../Navigation'

const className = style({
  padding: '0 32px',
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
