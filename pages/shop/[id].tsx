import { GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring'

import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Layout from 'components/layout'
import { Props } from 'react';

export default function Shop({ id }) {
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Head>
                <title>Shop for {id}</title>
            </Head>

            <Layout>
                <Image src={"/images/kami/256/" + id + ".png"} width="128" height="128" />
            </Layout>
        </>
    )
}

export async function getStaticPaths() {
    const paths: string[] = []
    return { paths, fallback: true }
}

interface Params extends ParsedUrlQuery {
    id: string
}

export const getStaticProps: GetStaticProps<{}, Params> = async (context) => {
    const params = context.params as Params
    return { props: { id: params.id } }
}
