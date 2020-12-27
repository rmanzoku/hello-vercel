import { NextPage, GetStaticProps, GetStaticPropsResult, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'

import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Layout from 'components/layout'
import StripeCheckoutfrom from 'components/stripeCheckout'
import { useState } from 'react'
import { useInterval } from 'ahooks'

type Props = {
    id: string,
    count: number,
    now: number
}

const Shop: NextPage<Props> = ({ id, count, now }) => {
    const router = useRouter()
    if (router.isFallback) {
        return <div>loading</div>
    }
    const [time, setTime] = useState(now)
    useInterval(() => setTime(Date.now()), 1000)

    return (
        <>
            <Head>
                <title>Shop for {id}</title>
            </Head>

            <Layout>
                <p>{time}</p>
                <Image src={"/images/kami/256/" + id + ".png"} width="128" height="128" />
                <StripeCheckoutfrom>Buy Now!!</StripeCheckoutfrom>
            </Layout>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return { paths: [], fallback: true }
}

type Query = ParsedUrlQuery & { id: string, count: number }

export const getStaticProps: GetStaticProps<Props, Query> = async (context) => {
    const params = context.params!
    const ret: GetStaticPropsResult<Props> = { props: { id: params.id, count: 100, now: Date.now() }, revalidate: 60 }
    return ret
}

export default Shop;