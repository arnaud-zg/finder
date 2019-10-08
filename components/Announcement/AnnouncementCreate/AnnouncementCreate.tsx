import { rem } from 'csx'
import React from 'react'
import { style } from 'typestyle'
import { AnnouncementCreateForm } from './AnnouncementCreateForm'

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

export const AnnouncementCreate = (props: IAnnouncementCreateProps) => {
  const { formSchema, onSubmit } = props
  return (
    <div className={className}>
      <AnnouncementCreateForm formSchema={formSchema} onSubmit={onSubmit} />
    </div>
  )
}
