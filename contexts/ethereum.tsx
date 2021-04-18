import { NextComponentType } from "next"
import { createContext, useContext, useEffect, useState } from "react"
import { ethers } from "ethers"
import Web3 from "web3"

interface EthereumContextType {
    hasWallet: boolean
    provider: ethers.providers.JsonRpcProvider
    web3?: Web3
    ethereum?: any
    potentialWallet: string[]
}

const anonymousProvider = new ethers.providers.JsonRpcProvider("https://node.mch.plus/evm/chainid/1")
const defaultEthereumContext: EthereumContextType = { hasWallet: false, provider: anonymousProvider, potentialWallet: [] }
const EthereumContext = createContext<EthereumContextType>(defaultEthereumContext)

const Ethereum: NextComponentType = ({ children }) => {
    const [ethereum, setEthereum] = useState(defaultEthereumContext)

    useEffect(() => {
        if (window.ethereum) {
            const p = new ethers.providers.Web3Provider(window.ethereum)
            const w = new Web3(window.ethereum)

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
                ethereum: window.ethereum,
                potentialWallet: potentialWalletName
            })
        }
    }, [ethereum.ethereum])

    return <>
        <EthereumContext.Provider value={ethereum}>
            {children}
        </EthereumContext.Provider>
    </>
}

const useEthereumContext = () => useContext(EthereumContext)

export { useEthereumContext }
export default Ethereum
