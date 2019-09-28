import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
          <style jsx>
            {`
              :global(body) {
                color: #333;
                font-family: -apple-system, BlinkMacSystemFont, Avenir Next,
                  Avenir, Helvetica, sans-serif;
                font-size: 13px;
                margin: 0;
              }
            `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
