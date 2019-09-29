import Head from 'next/head'
import React from 'react'
import { Layout } from '../components/Layout'
import { Card } from '../components/Card'
import { Paragraph } from '../components/Paragraph'

interface IProps {
  page: {
    description: string
    disambiguatingDescription: string
    identifier: string
  }
}

export default class AnnouncementPage extends React.PureComponent<IProps> {
  static async getInitialProps() {
    await new Promise(resolve => {
      setTimeout(resolve, 500)
    })

    return {
      page: {
        description:
          'Find the most recent announcements with the best opportunities. Stay connected to take advantage of our announcements.',
        disambiguatingDescription:
          'Find the most recent announcements with the best opportunities by the themes that we offer: real estate offer, sale opportunity. Stay connected to take advantage of our announcements.',
        identifier: 'announcement',
      },
    }
  }

  render() {
    const { page } = this.props
    const { description } = page

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
      </Layout>
    )
  }
}
