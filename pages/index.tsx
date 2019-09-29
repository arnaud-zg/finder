import { centerCenter } from 'csstips'
import { percent, rem } from 'csx'
import Head from 'next/head'
import React from 'react'
import { style } from 'typestyle'
import { Layout } from '../components/Layout'
import { Paragraph } from '../components/Paragraph'
import { Title } from '../components/Title'

const APP_NAME = 'Finder'

const className = style({})

const Home = () => (
  <Layout>
    <Head>
      <title>Home | Finder</title>
    </Head>

    <div className={className}>
      <Title center={true} content={`Welcome to ${APP_NAME}!`} level={1} />
      <Paragraph
        center={true}
        content="Just a simple platform to post announcements."
      />
    </div>
  </Layout>
)

export default Home
