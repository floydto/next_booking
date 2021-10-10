import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import React from 'react'
import Banner from '../components/Banner'



const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Room Booker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="mar-w-7xl mx-auto sm:px-16">
        <section className="pt-6">
          <h2 className="text-xl font-semibold pb-5">Room Nearby</h2>
          {/* data from server side- API endpoints */}
        </section>
      </main>


      {/* nav */}
      {/* result */}
      {/* footer */}

    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("https://api//")
    .then(
      (res) => res.json()
    );
}

export default Home
