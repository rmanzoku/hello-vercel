import { NextPage, GetStaticProps, GetStaticPropsResult } from 'next';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from 'components/layout'


type Props = {
    ids: string[],
}

const Shop: NextPage<Props> = ({ ids }) => {
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
                        return <li key={id} className="inline p-1"><Link href={"/shop/" + id}><a><Image src={"/images/kami/256/" + id + ".png"} width="128" height="128" /></a></Link></li>

                    })}
                </ul>
            </Layout>
        </>
    )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    let ids: string[] = []
    let revalidate: number = 0

    try {
        const response = await fetch(process.env.PROTOCOL + '://' + process.env.API_URL + '/api/items')
        const items: number[] = await response.json()
        items.map((id) => { ids.push(String(id)) })
    } catch (e) {
        console.warn(e)
    }
    return { props: { ids }, revalidate }
}

export default Shop;