import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }
  render () {
    return (
      <html>
        <Head>
          <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" async />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <style>
            {`
              body { margin: 0; font-family: Helvetica, sans-serif; }
              a { text-decoration: none; color: #333; }
              @media only screen
                and (max-device-width: 736px)
                and (-webkit-min-device-pixel-ratio: 2) {

                .page-container { font-size: 1.4em; }
              }
            `}
          </style>
          <title>Relisten</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
     </html>
    )
  }
}
