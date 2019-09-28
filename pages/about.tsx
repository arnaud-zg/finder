import React from 'react'

export default class AboutPage extends React.PureComponent {
  static async getInitialProps() {
    await new Promise(resolve => {
      setTimeout(resolve, 500)
    })

    return { }
  }

  render() {
    return <p>This is about Next.js!</p>
  }  
}
