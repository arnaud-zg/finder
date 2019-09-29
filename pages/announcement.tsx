import Head from 'next/head'
import React from 'react'
import {
  AnnouncementCreate,
  IProps as IAnnouncementCreateProps,
} from '../components/AnnouncementCreate'
import {
  AnnouncementList,
  IProps as IAnnouncementListProps,
} from '../components/AnnouncementList'
import { Card } from '../components/Card'
import { Layout } from '../components/Layout'
import { Paragraph } from '../components/Paragraph'

interface IBlock {
  entityId: string
  identifier: string
}

interface IProps {
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
      setTimeout(resolve, 500)
    })

    return {
      entities: {
        '123': {
          list: [
            {
              identifier: '1',
              name:
                '€750 Ground floor Studio apartment with Balcony ! (Paris Brochant - Rue des Moines)',
              // https://paris.craigslist.org/apa/d/ground-floor-studio-apartment-with/6988874946.html
            },
            {
              identifier: '2',
              name:
                "Improve your Online Shopify Store with France's Top Shopify Expert - €97 (Paris)",
              // https://paris.craigslist.org/syd/d/improve-your-online-shopify-store-with/6986077334.html
            },

            {
              identifier: '3',
              name:
                'Native English Speaker Seeking Accomodation (Montmartre - Paris)',
              // https://paris.craigslist.org/hss/d/native-english-speaker-seeking/6984153650.html
            },
          ],
        },
        '124': {
          mode: 'classic',
        },
      },
      page: {
        blocks: [
          {
            identifier: 'announcement-list',
            entityId: '123',
          },
          {
            identifier: 'announcement-create',
            entityId: '124',
          },
        ],
        description:
          'Find the most recent announcements with the best opportunities. Stay connected to take advantage of our announcements.',
        disambiguatingDescription:
          'Find the most recent announcements with the best opportunities by the themes that we offer: real estate offer, sale opportunity. Stay connected to take advantage of our announcements.',
        identifier: 'announcement',
      },
    }
  }

  render() {
    const { entities, page } = this.props
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

            return (
              <div id={pageBlock.identifier} key={pageBlock.identifier}>
                <AnnouncementCreate {...entity} />
              </div>
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
