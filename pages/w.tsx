import { NextPage, GetStaticProps, GetStaticPropsContext } from 'next';
import { useEthereumContext } from "contexts/ethereum"
import { useEffect, useState } from 'react';

interface Props {
    ids: string[],
}

const Page: NextPage<Props> = (context) => {
    const [account, setAccount] = useState("Account")
    const eth = useEthereumContext()

    useEffect(() => {
        if (!eth.hasWallet) return;
        const signer = eth.provider.getSigner()
        signer.getAddress().then((a) => setAccount(a))
    }, [eth.provider])

    return (
        <>
            <div>{account}</div>
        </>
    )

}

// export const getStaticProps: GetStaticProps<Props> = async (context: GetStaticPropsContext) => {
//     return {props: { }, 1 }
// }

export default Page;