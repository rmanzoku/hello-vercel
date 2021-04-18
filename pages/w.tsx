import { NextPage, GetStaticProps, GetStaticPropsContext, NextComponentType, NextPageContext } from 'next';
import { useEthereumContext } from "contexts/ethereum"
import { MouseEventHandler, useEffect, useState, Dispatch, SetStateAction } from 'react';
import Web3 from 'web3';
import { ethers } from 'ethers';

interface Props {
}

const Page: NextPage<Props> = (context) => {
    const [account, setAccount] = useState("Account")
    const message = "hello world"

    const [sigEthers, setSigEthers] = useState("")
    const [sigWeb3, setSigWeb3] = useState("")

    const eth = useEthereumContext()

    useEffect(() => {
        if (!eth.hasWallet) return;
        const signer = eth.provider.getSigner()
        signer.getAddress().then((a) => setAccount(a))
    }, [eth.provider])

    return (
        <>
            <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
                <tbody>
                    <tr className="text-left border-b-2 border-gray-300">
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Buttom</th>
                        <th className="px-4 py-3">Result</th>
                        <th className="px-4 py-3">Memo</th>
                    </tr>

                    <tr className="bg-gray-100 border-b border-gray-200">
                        <td className="px-4 py-3">Account</td>
                        <td className="px-4 py-3"><Enable enableFn={eth.enableFn} setAccountFn={setAccount}>Enable</Enable></td>
                        <td className="px-4 py-3">{account}</td>
                        <td className="px-4 py-3"></td>
                    </tr>

                    <tr className="bg-gray-100 border-b border-gray-200">
                        <td className="px-4 py-3">enable</td>
                        <td className="px-4 py-3">NA</td>
                        <td className="px-4 py-3"></td>
                        <td className="px-4 py-3"></td>
                    </tr>

                    <tr className="bg-gray-100 border-b border-gray-200">
                        <td className="px-4 py-3">PotentialWallet</td>
                        <td className="px-4 py-3">NA</td>
                        <td className="px-4 py-3">{eth.potentialWallet.join(",")}</td>
                        <td className="px-4 py-3"></td>
                    </tr>

                    <tr className="bg-gray-100 border-b border-gray-200">
                        <td className="px-4 py-3">Message</td>
                        <td className="px-4 py-3">NA</td>
                        <td className="px-4 py-3">"{message}"</td>
                        <td className="px-4 py-3"></td>
                    </tr>

                    <tr className="bg-gray-100 border-b border-gray-200">
                        <td className="px-4 py-3">signing ethers</td>
                        <td className="px-4 py-3"><SigningButtonEthers provider={eth.provider} msg={message} setSigFn={setSigEthers}>Sign</SigningButtonEthers></td>
                        <td className="px-4 py-3">{sigEthers}</td>
                        <td className="px-4 py-3"></td>
                    </tr>

                    <tr className="bg-gray-100 border-b border-gray-200">
                        <td className="px-4 py-3">signing web3</td>
                        <td className="px-4 py-3"><SigningButtonWeb3 web3={eth.web3} msg={message} setSigFn={setSigWeb3}>Sign</SigningButtonWeb3></td>
                        <td className="px-4 py-3">{sigWeb3}</td>
                        <td className="px-4 py-3"></td>
                    </tr>

                </tbody>

            </table>
        </>
    )
}

interface EnableProps {
    enableFn?: () => Promise<string>
    setAccountFn: Dispatch<SetStateAction<string>>
}

const Enable: NextComponentType<NextPageContext, {}, EnableProps> = (props) => {
    const handleClick: MouseEventHandler = async (e) => {
        if (!props.enableFn) return
        props.enableFn().then(v => {
            props.setAccountFn(v)
        })
    }

    return (
        <button
            type="submit"
            className="bg-blue-500 px-4 py-2 text-xs font-semibold tracking-wider text-white rounded hover:bg-blue-600"
            onClick={handleClick}
        >
            {props.children}
        </button>
    )
}

interface SigningProps {
    msg: string
    web3?: Web3
    provider?: ethers.providers.JsonRpcProvider
    setSigFn: Dispatch<SetStateAction<string>>
    setMemoFn?: Dispatch<SetStateAction<string>>
}

const SigningButtonEthers: NextComponentType<NextPageContext, {}, SigningProps> = (props) => {
    const handleClick: MouseEventHandler = async (e) => {
        props.provider!.getSigner().signMessage(props.msg)
            .then((sig) => {
                props.setSigFn(sig)
            })
            .catch((e) => {
                alert(e)
            })
    }

    return (
        <button
            type="submit"
            className="bg-blue-500 px-4 py-2 text-xs font-semibold tracking-wider text-white rounded hover:bg-blue-600"
            onClick={handleClick}
        >
            {props.children}
        </button>
    )
}

const SigningButtonWeb3: NextComponentType<NextPageContext, {}, SigningProps> = (props) => {
    const handleClick: MouseEventHandler = async (e) => {
        const web3 = props.web3!
        web3.eth.getAccounts((e, accounts) => {
            if (e) {
                alert(e)
            }
            web3.eth.personal.sign(props.msg, accounts[0], "", (e, sig) => {
                if (e) {
                    alert(e)
                }
                props.setSigFn(sig)

            })

        })
    }

    return (
        <button
            type="submit"
            className="bg-blue-500 px-4 py-2 text-xs font-semibold tracking-wider text-white rounded hover:bg-blue-600"
            onClick={handleClick}
        >
            {props.children}
        </button>
    )
}


export default Page;