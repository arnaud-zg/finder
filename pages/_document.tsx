import { percent, rem } from 'csx'
import Document, { Head, Main, NextScript } from 'next/document'
import { colors } from '../constants/colors'
import { style } from 'typestyle'

class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width" />
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
          <style jsx>
            {`
              @import url(/static/Roboto-Regular.ttf);

              :global(html),
              :global(body) {
                height: 100%;
                width: 100%;
                padding: 0px;
                margin: 0px;
              }

              :global(html) {
                box-sizing: border-box;
              }

              :global(*),
              :global(*:before),
              :global(*:after) {
                box-sizing: inherit;
                font-size: ${rem(1)};
              }

              :global(body) {
                color: ${colors.dark.toHexString()};
                font-family: 'Roboto', sans-serif;
                font-size: ${percent(62.5)};
                margin: 0;
              }

              :global(p) {
                font-size: ${rem(1)};
                margin: 0;
              }
            `}
          </style>
        </Head>
        <body>
          <div id="root">
            <Main />
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
