import { NextComponentType } from "next"
import { createContext, useContext, useEffect, useState } from "react"
import { ethers } from "ethers"
import { create } from "domain"

interface EthereumContextType {
    hasWallet: boolean
    provider: ethers.providers.JsonRpcProvider
    ethereum?: any
}

const anonymousProvider = new ethers.providers.JsonRpcProvider("https://node.mch.plus/evm/chainid/1")
const defaultEthereumContext: EthereumContextType = { hasWallet: false, provider: anonymousProvider }
const EthereumContext = createContext<EthereumContextType>(defaultEthereumContext)

const Ethereum: NextComponentType = ({ children }) => {
    const [ethereum, setEthereum] = useState(defaultEthereumContext)

    useEffect(() => {
        if (window.ethereum) {
            const p = new ethers.providers.Web3Provider(window.ethereum)

            setEthereum({
                hasWallet: true,
                provider: p,
                ethereum: window.ethereum
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
