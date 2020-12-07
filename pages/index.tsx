import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>

      <Layout>
        <h1>NFT販売所</h1>
        <p>hogehog</p>
      </Layout>
    </>
  )
}
