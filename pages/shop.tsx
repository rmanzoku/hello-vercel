import { NextPage, GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from 'components/layout'
import { useInterval } from 'ahooks'
import { useState } from 'react'

interface Props {
    ids: string[],
}

const Shop: NextPage<Props> = (context) => {
    const router = useRouter()
    if (router.isFallback) {
        return <div>loading</div>
    }

    const [ids, setIds] = useState(context.ids)

    useInterval(async () => {
        const ids = await fetchIds();
        setIds(ids)
    }, 5000, { immediate: true })

    return (
        <>
            <Head>
                <title>Welcome to NFT shop</title>
            </Head>

            <Layout>
                <p>aaaa</p>
                <ul className="align-center">
                    {ids.map((id) => {
                        return <li key={id} className="inline p-1"><Link href={"/shop/" + id}><a><Image src={"https://core.mycryptosaga.net/images/nft/ja/" + id + ".png"} width="128" height="128" /></a></Link></li>

                    })}
                </ul>
            </Layout>
        </>
    )
}

const fetchIds = async () => {
    let ids: string[] = []
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_PROTOCOL + '://' + process.env.NEXT_PUBLIC_API_URL + '/api/items')
        const items: number[] = await response.json()
        items.map((id) => { ids.push(String(id)) })
    } catch (e) {
        console.warn(e)
    }

    return ids
}

export const getStaticProps: GetStaticProps<Props> = async (context: GetStaticPropsContext) => {
    const ids = await fetchIds();
    const revalidate = ids.length ? 60 : 1
    return { props: { ids }, revalidate }
}

export default Shop;