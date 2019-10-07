import React from 'react'
import { style } from 'typestyle'
import { rem } from 'csx'
import { centerCenter } from 'csstips'

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
    <p className={`${className}${center ? ` ${style(centerCenter)}` : ''}`}>
      {content}
    </p>
  )
}
