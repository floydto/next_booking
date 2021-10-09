import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import React from 'react'
import Banner from '../components/Banner'



const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />


      {/* nav */}
      {/* result */}
      {/* footer */}

    </div>
  )
}

export default Home
