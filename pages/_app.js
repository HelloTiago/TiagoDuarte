import App from 'next/app'
import Router from 'next/router'

import * as gtag from '../lib/gtag'

import '../styles/styles.css'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}