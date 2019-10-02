import { rem } from 'csx'
import React from 'react'
import { style } from 'typestyle'
import { Title } from '../Title'
import { AnnouncementCreateClassic } from './AnnouncementCreateClassic'

export interface IFormSchema {
  type: 'classic' | 'express'
  required: string[]
  properties: IFormSchemaProperty
}

interface IFormSchemaProperty {
  [fieldName: string]: {
    type: string
    minLength?: number
    maxLength?: number
  }
}

const className = style({
  marginTop: rem(1),
})

export interface IProps {
  formSchema: IFormSchema
  mode: 'classic' | 'express'
}

export class AnnouncementCreate extends React.PureComponent<IProps> {
  render() {
    const { formSchema, mode } = this.props
    return (
      <div className={className}>
        {mode === 'classic' && (
          <AnnouncementCreateClassic
            formSchema={formSchema}
            onSubmit={formData => {
              console.log(formData)
            }}
          />
        )}
        {mode === 'express' && <Title content="Express" level={3} />}
      </div>
    )
  }
}
