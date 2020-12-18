import { NextPage, GetStaticProps, GetStaticPropsResult, GetStaticPaths, GetStaticPathsResult } from 'next';
import { ParsedUrlQuery } from 'querystring'

import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Layout from 'components/layout'
import StripeCheckoutfrom from 'components/stripeCheckout'
import { useState, useEffect, Props } from 'react'
import { useInterval } from 'ahooks';

const Shop: NextPage<MyProps> = ({ id, count, now }) => {
    const router = useRouter()
    if (router.isFallback) {
        return <div>loading</div>
    }
    const [time, setTime] = useState(now)
    useInterval(() => { setTime(Date.now()) }, 1000)

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

    const res = await fetch(process.env.PROTOCOL + '://' + process.env.API_URL + '/api/items')
    const items: number[] = await res.json()
    const paths: string[] = []

    items.map((id) => { paths.push('/shop/' + String(id)) })

    const ret: GetStaticPathsResult = { paths, fallback: false }
    console.log(paths)
    return ret
}

type MyParsedUrlQuery = ParsedUrlQuery & { id: string, count: number }
type MyProps = {
    id: string,
    count: number,
    now: number
}

export const getStaticProps: GetStaticProps<MyProps, MyParsedUrlQuery> = async (context) => {
    const params = context.params!
    const ret: GetStaticPropsResult<MyProps> = { props: { id: params.id, count: 100, now: Date.now() }, revalidate: 60 }
    return ret
}

export default Shop;