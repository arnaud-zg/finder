import Head from 'next/head'
import React from 'react'
import {
  AnnouncementCreate,
  IFormSchema,
  IProps as IAnnouncementCreateProps,
} from '../components/AnnouncementCreate'
import {
  AnnouncementList,
  IProps as IAnnouncementListProps,
} from '../components/AnnouncementList'
import { Card } from '../components/Card'
import { Layout } from '../components/Layout'
import { Paragraph } from '../components/Paragraph'
import { payload } from '../__mocks__/getAnnouncement.resolve'

interface IBlock {
  entityId: string
  identifier: string
}

interface IProps {
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

export default class AnnouncementPage extends React.PureComponent<IProps> {
  static async getInitialProps() {
    await new Promise(resolve => {
      setTimeout(resolve, 250)
    })

    return {
      ...payload,
    }
  }

  render() {
    const { formSchemas, entities, page } = this.props
    const { blocks, description } = page

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
            const entity = entities[
              pageBlock.entityId
            ] as IAnnouncementCreateProps
            const formSchema = formSchemas.find(
              item => item.type === entity.mode
            )

            return (
              !!formSchema && (
                <div id={pageBlock.identifier} key={pageBlock.identifier}>
                  <AnnouncementCreate
                    formSchema={formSchema}
                    mode={entity.mode}
                  />
                </div>
              )
            )
          }

          if (pageBlock.identifier === 'announcement-list') {
            const entity = entities[
              pageBlock.entityId
            ] as IAnnouncementListProps

            return (
              <div id={pageBlock.identifier} key={pageBlock.identifier}>
                <AnnouncementList {...entity} />
              </div>
            )
          }

          return undefined
        })}
      </Layout>
    )
  }
}
