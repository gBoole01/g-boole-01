import NextHead from 'next/head'
import { SITE_PROPS } from '../lib/constants'

const Head = () => (
  <NextHead>
    <meta
      name="application-name"
      content={SITE_PROPS.siteName}
      key="application_name"
    />
    <meta
      name="apple-mobile-web-app-capable"
      content="yes"
      key="apple_mobile_web_app_capable"
    />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="default"
      key="apple_mobile_web_app_status_bar_style"
    />
    <meta
      name="apple-mobile-web-app-title"
      content={SITE_PROPS.siteName}
      key="apple_mobile_web_app_title"
    />
    <meta
      name="format-detection"
      content="telephone=no"
      key="format_detection"
    />
    <meta
      name="mobile-web-app-capable"
      content="yes"
      key="mobile_web_app_capable"
    />

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
