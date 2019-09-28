import Document, { Head, Main, NextScript } from 'next/document'
import { percent } from 'csx'
import { colors } from '../constants/colors'

class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
          <style jsx>
            {`
              @import url(/static/Roboto-Regular.ttf);

              :global(body) {
                color: ${colors.dark.toHexString()};
                font-family: 'Roboto', sans-serif;
                font-size: ${percent(62.5)};
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
