import { NextComponentType } from "next"
import { createContext, useContext, useEffect, useState } from "react"
import { ethers } from "ethers"
import Web3 from "web3"
import { resolve } from "node:path"


interface EthereumContextType {
    hasWallet: boolean
    provider: ethers.providers.JsonRpcProvider
    web3?: Web3
    ethereum?: metamaskEthereum
    potentialWallet: string[]
    enableFn?: () => Promise<string>
}

const anonymousProvider = new ethers.providers.JsonRpcProvider("https://node.mch.plus/evm/chainid/1")
const defaultEthereumContext: EthereumContextType = { hasWallet: false, provider: anonymousProvider, potentialWallet: [] }
const EthereumContext = createContext<EthereumContextType>(defaultEthereumContext)

const Ethereum: NextComponentType = ({ children }) => {
    const [ethereum, setEthereum] = useState(defaultEthereumContext)

    useEffect(() => {
        console.log("do effect in Ethereum")
        if (window.ethereum) {
            const p = new ethers.providers.Web3Provider(window.ethereum as any)
            const w = new Web3(window.ethereum as any)

            let potentialWalletName: string[] = []
            const currentProvider = w.currentProvider as any
            for (let key in currentProvider) {
                if (key.startsWith("is")) {
                    potentialWalletName.push(key)
                }
            }

            const enableMetamask = async (): Promise<string> => {
                await window.ethereum!.send('eth_requestAccounts')
                return window.ethereum!.selectedAddress
            }

            setEthereum({
                hasWallet: true,
                provider: p,
                web3: w,
                ethereum: window.ethereum,
                potentialWallet: potentialWalletName,
                enableFn: enableMetamask
            })
            return
        }

        if (window.web3) {
            const p = new ethers.providers.Web3Provider(window.web3)
            const w = new Web3(window.web3 as any)

            let potentialWalletName: string[] = []
            const currentProvider = w.currentProvider as any
            for (let key in currentProvider) {
                if (key.startsWith("is")) {
                    potentialWalletName.push(key)
                }
            }

            setEthereum({
                hasWallet: true,
                provider: p,
                web3: w,
                ethereum: undefined,
                potentialWallet: potentialWalletName,
            })
        }
    }, [])

    return <>
        <EthereumContext.Provider value={ethereum}>
            {children}
        </EthereumContext.Provider>
    </>
}



const useEthereumContext = () => useContext(EthereumContext)

export { useEthereumContext }
export default Ethereum
