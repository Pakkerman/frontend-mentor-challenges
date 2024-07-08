import { type AppType } from "next/dist/shared/lib/utils"
import Head from "next/head"
import { BG } from "~/components/BG"
import FontProvider from "~/components/FontProvider"
import { Footer } from "~/components/Footer"
import { Navbar } from "~/components/Navbar"
import "~/styles/globals.css"

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Space Tourism Website</title>
        <meta
          name="description"
          content="A Space Tourism Build with Create T3 App"
        />
        <link rel="icon" href="/assets/favicon.png" />
      </Head>
      <FontProvider>
        <header>
          <Navbar />
        </header>
        <Component {...pageProps} />
        <Footer />
      </FontProvider>
      <BG />
    </>
  )
}

export default MyApp
