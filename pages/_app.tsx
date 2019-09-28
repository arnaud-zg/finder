import React from 'react'
import App from 'next/app'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'

Router.events.on('routeChangeStart', () => {NProgress.start() })
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          {/* Import CSS for nprogress */}
          <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
        </Head>
        <Link href='/about'>
            <a>About</a>
          </Link>
        <Component {...pageProps} />
      </>
    )
  }
}