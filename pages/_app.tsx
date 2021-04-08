import app, { AppProps } from 'next/app'
import { ethers } from "ethers";
import "../styles/global.css"

const App = ({ Component, pageProps }: AppProps) => {
    if (process.browser) {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            provider.send('eth_requestAccounts', []).then()
        } catch (e) {
            console.error(e)
        }
    }
    return <Component {...pageProps} />
}

export default App