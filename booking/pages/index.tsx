import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import React from 'react'
import Banner from '../components/Banner'

const Home: NextPage = (marketDatas) => {
  console.log(marketDatas);

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
          {marketDatas.map((marketData: any) => (
            <h3>{marketData}</h3>
          ))}


          {/* data from server side- API endpoints */}
        </section>
      </main>


      {/* nav */}
      {/* result */}
      {/* footer */}

    </div>
  )
}

export const getStaticProps = async () => {
  const marketDatas = await fetch(`https://ftx.com/api/markets`, {});
  if (marketDatas.status === 200) {
    return marketDatas.json().then(
      data => {
        return data.result
      })
  }

  return {
    props: {
      marketDatas
    }
  }
}

export default Home
