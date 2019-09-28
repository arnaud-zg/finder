import { centerCenter } from 'csstips'
import { percent, rem } from 'csx'
import Head from 'next/head'
import React from 'react'
import { style } from 'typestyle'
import { Layout } from '../components/Layout'

const APP_NAME = 'Finder'

const className = style({})

const Home = () => (
  <Layout>
    <Head>
      <title>Home | Finder</title>
    </Head>

    <div className={className}>
      <h1
        className={style(centerCenter, {
          fontSize: `${rem(3)}`,
          lineHeight: '1.15',
          margin: 0,
          marginTop: `${rem(5)}`,
          marginBottom: `${rem(2)}`,
          width: percent(100),
        })}
      >
        Welcome to {APP_NAME}!
      </h1>
      <p
        className={style(centerCenter, {
          fontSize: `${rem(1)}`,
        })}
      >
        Just a simple platform to post announcements.
      </p>
    </div>
  </Layout>
)

export default Home
