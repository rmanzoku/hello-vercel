import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>

      <Layout>
        <ul className="align-center">
          <li className="inline p-1"><Image src="/images/kami/256/5001.png" width="128" height="128" /></li>
          <li className="inline p-1"><Image src="/images/kami/256/5002.png" width="128" height="128" /></li>
          <li className="inline p-1"><Image src="/images/kami/256/5003.png" width="128" height="128" /></li>
          <li className="inline p-1"><Image src="/images/kami/256/5004.png" width="128" height="128" /></li>
          <li className="inline p-1"><Image src="/images/kami/256/5005.png" width="128" height="128" /></li>
        </ul>
      </Layout>
    </>
  )
}
