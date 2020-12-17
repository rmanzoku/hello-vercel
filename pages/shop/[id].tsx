import { NextPage, GetStaticProps, GetStaticPaths, GetStaticPropsResult } from 'next';
import { ParsedUrlQuery } from 'querystring'

import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Layout from 'components/layout'
import { useState, useEffect, Props } from 'react'
import { useInterval } from 'ahooks';

const Shop: NextPage<MyProps> = ({ id, count, now }) => {
    const router = useRouter()
    if (router.isFallback) {
        return <div>loading</div>
    }
    const [time, setTime] = useState(now)
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTime(time + 1);
    //     }, 1000);
    //     return () => clearInterval(interval);
    // })
    useInterval(() => { setTime(Date.now()) }, 1000)

    return (
        <>
            <Head>
                <title>Shop for {id}</title>
            </Head>

            <Layout>
                <p>{time}</p>
                <Image src={"/images/kami/256/" + id + ".png"} width="128" height="128" />
            </Layout>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths: string[] = []
    return { paths, fallback: true }
}

type MyParsedUrlQuery = ParsedUrlQuery & { id: string, count: number }
type MyProps = {
    id: string,
    count: number,
    now: number
}

export const getStaticProps: GetStaticProps<MyProps, MyParsedUrlQuery> = async (context) => {
    const params = context.params as MyParsedUrlQuery
    const ret: GetStaticPropsResult<MyProps> = { props: { id: params.id, count: 100, now: Date.now() }, revalidate: 60 }
    return ret
}

export default Shop;