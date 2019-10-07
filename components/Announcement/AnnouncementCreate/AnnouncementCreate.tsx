import { rem } from 'csx'
import React from 'react'
import { style } from 'typestyle'
import { Title } from '../../Title'
import { AnnouncementCreateClassic } from './AnnouncementCreateClassic'

export interface IFormSchema {
  type: 'classic' | 'express'
  required: string[]
  properties: IFormSchemaProperty
}

interface IFormSchemaProperty {
  [fieldName: string]: IFormSchemaField
}

export interface IFormSchemaField {
  type: string
  enums?: string[]
  minLength?: number
  maxLength?: number
}

const className = style({
  marginTop: rem(1),
})

export interface IAnnouncementCreateProps {
  formSchema: IFormSchema
  mode: 'classic' | 'express'
  onSubmit: (formData: IFormData) => void
}

export class AnnouncementCreate extends React.PureComponent<
  IAnnouncementCreateProps
> {
  render() {
    const { formSchema, mode, onSubmit } = this.props
    return (
      <div className={className}>
        {mode === 'classic' && (
          <AnnouncementCreateClassic
            formSchema={formSchema}
            onSubmit={onSubmit}
          />
        )}
        {mode === 'express' && <Title content="Express" level={3} />}
      </div>
    )
  }
}
