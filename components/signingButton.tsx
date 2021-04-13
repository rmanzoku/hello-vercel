import { useState, FormEventHandler, ReactNode, MouseEventHandler, Dispatch, SetStateAction } from 'react'
import { NextComponentType, NextPageContext } from 'next'
import { ethers } from "ethers";

interface Props {
    now: number
    children: ReactNode
    setUrl: Dispatch<SetStateAction<string>>
}

interface State {
    locked: boolean
    status: string
}

const SigningButton: NextComponentType<NextPageContext, {}, Props> = (props) => {
    const handleClick: MouseEventHandler = async (e) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        provider.getSigner().signMessage(props.now.toString())
            .then((sig) => {
                fetch("/api/dl?sig=" + sig + "&t=" + props.now.toString()).then((ret) => {
                    console.log(ret)
                    props.setUrl(ret.url)
                })

            })
            .catch((e) => {
                console.error(e)
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
export default SigningButton