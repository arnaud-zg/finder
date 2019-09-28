import { normalize, setupPage } from 'csstips'
import App from 'next/app'
import React from 'react'
import('../plugins/progress')

normalize()
setupPage('#root')

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}
