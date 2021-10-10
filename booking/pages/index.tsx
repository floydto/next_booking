import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import React from 'react'
import Banner from '../components/banner'



const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Room Booker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      {/* banner */}


      {/* nav */}
      {/* result */}
      {/* footer */}

    </div>
  )
}

export default Home
