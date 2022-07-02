import Layout from "@components/Layout/Layout"
import { AppProps } from "node_modules/next/app"

import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
    return <Layout>
        <Component {...pageProps} />

    </Layout>
  }
 
  export default MyApp