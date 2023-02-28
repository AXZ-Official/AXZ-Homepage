class SampleDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <head prefix="og: https://ogp.me/ns#">
          <meta property="og:url" content=" ページのURL" />
          <meta property="og:type" content=" ページの種類" />
          <meta property="og:title" content=" ページのタイトル" />
          <meta property="og:description" content=" ページの説明文" />
          <meta property="og:site_name" content="サイト名" />
          <meta property="og:image" content=" サムネイル画像のURL" />
          <link rel="dns-prefetch" href="//www.google.co.jp" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default SampleDocument
