import type { NextPage } from 'next'
import Head from 'next/head'
import {Menu} from "../components/Menu";
import {Hero} from "../components/Hero";
import {Roadmap} from "../components/Roadmap";
import {Team} from "../components/Team";
import {FAQ} from "../components/FAQ";
import {Mint} from "../components/Mint";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Magik Inside</title>
        <meta name="description" content="Explore a new dimension of collectibles. Dive deep into your imagination and immerse yourself in a world where everything is yours to explore, evolve and experience." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main>
          <Menu />
          <Hero />
          <Roadmap />
          <Mint />
          <Team />
          <FAQ />
      </main>

      <footer>
        {/* FOOTER HERE */}
      </footer>
    </>
  )
}

export default Home
