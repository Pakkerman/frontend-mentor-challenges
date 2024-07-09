import Head from "next/head"
import { Footer } from "~/components/Footer"
import { HeroSection } from "~/components/HeroSection"
import { Navbar } from "~/components/Navbar"

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="A Frontend Mentor Challenge with Create T3 App"
        />
        <link rel="icon" href="assets/favicon.png" />
        <title>Frontend Mentor | Intro section with dropdown navigation</title>
      </Head>
      <Navbar />
      <main>
        <HeroSection />
        <Footer />
      </main>
    </>
  )
}
