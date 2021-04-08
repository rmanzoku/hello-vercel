import { useState, FormEventHandler, ReactNode } from 'react'
import { NextComponentType, NextPageContext } from 'next'
import { ethers } from "ethers";

interface Props {
    now: number
    children: ReactNode
}

interface State {
    locked: boolean
    status: string
}

const SigningButton: NextComponentType<NextPageContext, {}, Props> = (props) => {
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        provider.getSigner().signMessage(props.now.toString())
            .then((sig) => {
                fetch("/api/dl?sig=" + sig + "&t=" + props.now.toString()).then((ret) => {
                    console.log(ret)
                })
            }
            )
            .catch((e) => {
                console.error(e)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <button
                type="submit"
            >
                {props.children}
            </button>
        </form>
    )
}
export default SigningButton