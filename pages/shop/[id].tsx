import { NextPage, GetStaticPaths, InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'

import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Layout from 'components/layout'
import StripeCheckoutfrom from 'components/stripeCheckout'
import SigningButton from 'components/signingButton'
import { useState } from 'react'


type Props = InferGetStaticPropsType<typeof getStaticProps>

const Shop: NextPage<Props> = ({ id, count, now }) => {
    const [Url, setUrl] = useState("blank")

    return (
        <>
            <Head>
                <title>Shop for {id}</title>
            </Head>

            <Layout>
                <p>{Url}</p>
                {/* <p>{time}</p> */}
                <Image src={"https://core.mycryptosaga.net/images/nft/ja/" + id + ".png"} width="128" height="128" />
                <SigningButton now={now} setUrl={setUrl}>Sign</SigningButton>
            </Layout>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return { paths: [], fallback: true }
}

type Query = ParsedUrlQuery & { id: string, count: number }

export const getStaticProps = async (context: GetStaticPropsContext<Query>) => {
    const params = context.params!
    return {
        props: {
            id: params.id,
            count: 100,
            now: Date.now()
        },
        revalidate: 60
    }
}

export default Shop;