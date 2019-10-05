import Head from 'next/head'
import React from 'react'
import {
  AnnouncementCreate,
  IFormSchema,
  IProps as IAnnouncementCreateProps,
} from '../components/AnnouncementCreate'
import { IFormData } from '../components/AnnouncementCreate/AnnouncementCreateClassic'
import {
  AnnouncementList,
  IProps as IAnnouncementListProps,
} from '../components/AnnouncementList'
import { Card } from '../components/Card'
import { Layout } from '../components/Layout'
import { Paragraph } from '../components/Paragraph'
import { useAnnouncementCreateApi } from '../hooks/announcementCreate'
import { payload } from '../__mocks__/getAnnouncement.resolve'
import { RESPONSE_DURATION_IN_MS } from '../constants/api'

interface IBlock {
  entityId: string
  identifier: string
}

export interface IProps {
  formSchemas: IFormSchema[]
  entities: {
    [entityId: string]: IAnnouncementListProps | IAnnouncementCreateProps
  }
  page: {
    description: string
    disambiguatingDescription: string
    identifier: string
    blocks: IBlock[]
  }
}

const AnnouncementPage = (props: IProps) => {
  const { formSchemas, entities: initialEntities, page } = props
  const { blocks, description } = page
  const {
    state: { entity: announcementListEntity, isError, isLoading },
    actions: { createAnnouncement },
  } = useAnnouncementCreateApi(initialEntities)
  return (
    <Layout>
      <Head>
        <title>Announcement | Finder</title>
      </Head>

      {!!description && (
        <Card>
          <Paragraph content={description} />
        </Card>
      )}

      {blocks.map(pageBlock => {
        if (pageBlock.identifier === 'announcement-create') {
          const entity = initialEntities[
            pageBlock.entityId
          ] as IAnnouncementCreateProps
          const formSchema = formSchemas.find(item => item.type === entity.mode)

          return (
            !!formSchema && (
              <div id={pageBlock.identifier} key={pageBlock.identifier}>
                <AnnouncementCreate
                  formSchema={formSchema}
                  mode={entity.mode}
                  onSubmit={(formData: IFormData) =>
                    createAnnouncement({
                      ...formData,
                      price:
                        formData.price && Number(formData.price)
                          ? Number(formData.price) * 100
                          : 0,
                    })
                  }
                />
              </div>
            )
          )
        }

        if (pageBlock.identifier === 'announcement-list') {
          return (
            <div id={pageBlock.identifier} key={pageBlock.identifier}>
              <AnnouncementList {...announcementListEntity} />
            </div>
          )
        }

        return undefined
      })}
    </Layout>
  )
}

AnnouncementPage.getInitialProps = async () => {
  await new Promise(resolve => {
    setTimeout(resolve, RESPONSE_DURATION_IN_MS)
  })

  return {
    ...payload,
  }
}

export default AnnouncementPage
