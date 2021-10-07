import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import React from 'react'
import { SearchIcon } from '@heroicons/react/solid/';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchIcon />
      <Header />


      {/* nav */}
      {/* result */}
      {/* footer */}

    </div>
  )
}

export default Home
