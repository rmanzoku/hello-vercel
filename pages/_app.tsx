import app, { AppProps } from 'next/app'
import { ethers } from "ethers";
import "../styles/global.css"
import Ethereum from 'contexts/ethereum'

const App = ({ Component, pageProps }: AppProps) => {
    // if (process.browser) {
    //     try {
    //         const provider = new ethers.providers.Web3Provider(window.ethereum)
    //         provider.send('eth_requestAccounts', []).then()
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }
    return <>
        <Ethereum>
            <Component {...pageProps} />
        </Ethereum>
    </>
}

export default App