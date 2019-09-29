import React from 'react'
import { style } from 'typestyle'
import { rem, percent } from 'csx'
import { centerCenter } from 'csstips'

const className = style(centerCenter, {
  fontSize: `${rem(3)}`,
  lineHeight: '1.15',
  margin: 0,
  marginTop: `${rem(5)}`,
  marginBottom: `${rem(2)}`,
  width: percent(100),
})

interface IProps {
  content: string
}

export class Title extends React.Component<IProps> {
  render() {
    const { content } = this.props
    return <h1 className={className}>{content}</h1>
  }
}
