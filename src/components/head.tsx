import NextHead from 'next/head'
import { SITE_PROPS } from '../lib/constants'

const Head = () => (
  <NextHead>
    <meta charSet="UTF-8" key="charset" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1, maximum-scale=1.0,user-scalable=0"
      key="viewport"
    />
    <meta property="og:locale" content={SITE_PROPS.locale} key="og:locale" />
    <meta
      property="og:site_name"
      content={SITE_PROPS.siteName}
      key="og:sitename"
    />
    <meta name="author" content={SITE_PROPS.author} key="author" />
    <meta
      name="twitter:card"
      content="summary_large_image"
      key="twitter:card"
    />
  </NextHead>
)

export default Head
