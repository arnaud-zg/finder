import Head from 'next/head'
import React from 'react'
import { Layout } from '../components/Layout'
import { Card } from '../components/Card'
import { Paragraph } from '../components/Paragraph'
import { RESPONSE_DURATION_IN_MS } from '../constants/api'

interface IProps {
  page: {
    description: string
    disambiguatingDescription: string
    identifier: string
  }
}

export default class AboutPage extends React.PureComponent<IProps> {
  static async getInitialProps() {
    await new Promise(resolve => {
      setTimeout(resolve, RESPONSE_DURATION_IN_MS)
    })

    return {
      page: {
        description:
          'This website is just a simple platform to post announcements, I made it for a job. About constraints, it must be a data driven client app and easy to understand code.',
        disambiguatingDescription:
          'This website is just a simple platform to post announcements, I made it for a job as a front-end developer. About constraints, it must be a data driven client app and easy to understand code for others developers.',
        identifier: 'about',
      },
    }
  }

  render() {
    const { page } = this.props
    const { description } = page

    return (
      <Layout>
        <Head>
          <title>About | Finder</title>
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
