import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from 'components/layout'

export default function Home() {
  const ids = [5001, 5002, 5003, 5004, 5005, 4001, 4002, 4003, 4004, 4005]
  return (
    <>
      <Head>
        <title></title>
      </Head>

      <Layout>
        <p>hello</p>
      </Layout>
    </>
  )
}
