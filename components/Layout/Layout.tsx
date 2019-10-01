import React from 'react'
import { style } from 'typestyle'
import { rem } from 'csx'
import { Navigation } from '../Navigation'

const className = style({
  padding: `0 ${rem(1.5)}`,
})

interface IState {
  isDomRendered: boolean
}

export class Layout extends React.PureComponent<{}, IState> {
  public state = {
    isDomRendered: false,
  }

  componentDidMount() {
    this.setState({
      isDomRendered: true,
    })
  }

  render() {
    const { children } = this.props
    const { isDomRendered } = this.state
    return (
      <>
        {isDomRendered ? (
          <>
            <Navigation />
            <div className={className}>{children}</div>
          </>
        ) : (
          <div id="loading">
            <img src="/static/loading.gif" />
          </div>
        )}
      </>
    )
  }
}
