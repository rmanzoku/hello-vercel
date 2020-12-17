import { NextPage, GetStaticProps, GetStaticPropsResult } from 'next';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from 'components/layout'


type MyProps = {
    ids: string[],
}

const Shop: NextPage<MyProps> = ({ ids }) => {
    const router = useRouter()
    if (router.isFallback) {
        return <div>loading</div>
    }

    return (
        <>
            <Head>
                <title>Welcome to NFT shop</title>
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

export const getStaticProps: GetStaticProps<MyProps> = async (context) => {
    const res = await fetch(process.env.API_HOST + '/api/items')
    const items: number[] = await res.json()
    const ids: string[] = []

    items.map((id) => { ids.push(String(id)) })

    const ret: GetStaticPropsResult<MyProps> = { props: { ids: ids }, revalidate: 60 }
    return ret
}

export default Shop;