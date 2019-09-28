import Head from 'next/head'
import React from 'react'
import { Layout } from '../components/Layout'

export default class AnnouncementPage extends React.PureComponent {
  static async getInitialProps() {
    await new Promise(resolve => {
      setTimeout(resolve, 500)
    })

    return { data: {} }
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>Home | Finder</title>
        </Head>
        <p>This is about Next.js!</p>
      </Layout>
    )
  }  
}
