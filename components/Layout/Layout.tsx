import React from 'react'
import { Navigation } from '../Navigation'

export class Layout extends React.PureComponent {
  render() {
    const { children } = this.props
    return (
      <>
        <Navigation />
        {children}
      </>
    )
  }
}