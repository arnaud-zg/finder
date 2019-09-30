import { centerCenter } from 'csstips'
import { percent, rem } from 'csx'
import React from 'react'
import { style } from 'typestyle'

const classNameTitleLevel1 = style({
  fontSize: `${rem(3)}`,
  lineHeight: '1.15',
  margin: 0,
  marginBottom: `${rem(2)}`,
  marginLeft: `${rem(0.0625)}`,
  marginTop: `${rem(5)}`,
  width: percent(100),
})

const classNameTitleLevel2 = style({
  fontSize: `${rem(2)}`,
  lineHeight: '1.15',
  margin: 0,
  marginBottom: `${rem(1)}`,
  marginLeft: `${rem(0.125)}`,
  marginTop: `${rem(3)}`,
  width: percent(100),
})

const classNameTitleLevel3 = style({
  fontSize: `${rem(1)}`,
  lineHeight: '1.15',
  margin: 0,
  marginBottom: `${rem(0.5)}`,
  marginLeft: `${rem(0.25)}`,
  marginTop: `${rem(1)}`,
  width: percent(100),
})

interface IProps {
  center?: boolean
  content: string
  level: number
}

export class Title extends React.Component<IProps> {
  render() {
    const { center, content, level } = this.props

    switch (level) {
      case 1:
        return (
          <h1
            className={`${classNameTitleLevel1}${
              center ? ` ${style(centerCenter)}` : ''
            }`}
          >
            {content}
          </h1>
        )
      case 2:
        return (
          <h2
            className={`${classNameTitleLevel2}${
              center ? ` ${style(centerCenter)}` : ''
            }`}
          >
            {content}
          </h2>
        )
      case 3:
        return (
          <h3
            className={`${classNameTitleLevel3}${
              center ? ` ${style(centerCenter)}` : ''
            }`}
          >
            {content}
          </h3>
        )

      default:
        return null
    }
  }
}
