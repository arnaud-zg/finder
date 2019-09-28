import React from 'react'
import App from 'next/app'
import('../plugins/progress')

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}
