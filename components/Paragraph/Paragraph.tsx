import classNames from 'classnames'
import { centerCenter } from 'csstips'
import { rem } from 'csx'
import React from 'react'
import { style } from 'typestyle'

const className = style({
  fontSize: rem(1),
  margin: rem(0.5),
})

interface IParagraphProps {
  center?: boolean
  content: string
}

export const Paragraph = (props: IParagraphProps) => {
  const { center, content } = props
  return (
    <p className={classNames(className, center ? style(centerCenter) : null)}>
      {content}
    </p>
  )
}
