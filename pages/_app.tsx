import '../styles/globals.css'
import type { AppProps } from 'next/app'

import MenuProvider from '../context/state-context'

export default function App({ Component, pageProps }: AppProps) {
  return <MenuProvider>
    <Component {...pageProps} />
  </MenuProvider>
}
