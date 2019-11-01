import classNames from 'classnames'
import { rem } from 'csx'
import React from 'react'
import { style } from 'typestyle'
import { Navigation } from '../Navigation'

const className = style({
  padding: `${rem(0.5)} ${rem(1.5)}`,
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
      <div
        className={classNames(
          'main-container',
          isDomRendered ? 'main-container--ready' : null
        )}
      >
        <Navigation />
        <div className={className}>{children}</div>
        {!isDomRendered && (
          <div id="loading">
            <img src="/static/loading.gif" />
          </div>
        )}
      </div>
    )
  }
}
