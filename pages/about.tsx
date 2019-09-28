import Head from 'next/head'
import React from 'react'
import { Layout } from '../components/Layout'

export default class AboutPage extends React.PureComponent {
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
          <title>About | Finder</title>
        </Head>
        <p>This is about Next.js!</p>
      </Layout>
    )
  }
}
