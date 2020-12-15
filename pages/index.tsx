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
        <ul className="align-center">
          {ids.map((id) => {
            return <li className="inline p-1"><Link href={"/shop/" + id}><a><Image src={"/images/kami/256/" + id + ".png"} width="128" height="128" /></a></Link></li>

          })}
        </ul>
      </Layout>
    </>
  )
}
