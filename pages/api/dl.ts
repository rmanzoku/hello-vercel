import { IncomingMessage, ServerResponse } from 'http'
import { URL } from 'url'
import { ethers } from "ethers";
import httpProxy from 'http-proxy';

const rpc = "https://node.mch.plus/evm/chainid/1"
const address = "0xcfe758aEa4266Da00f13140eEAB908e465a211df"

const target = "https://metadata.nftplus.io/"
const proxy = httpProxy.createProxyServer({ target, changeOrigin: true });

export default async function handler(req: IncomingMessage, res: ServerResponse) {
    const url = new URL("http://localhost" + req.url!); // parseするために適当
    const sig = url.searchParams.get("sig")!
    const t = url.searchParams.get("t")!
    const signer = ethers.utils.verifyMessage(t, sig)
    const provider = new ethers.providers.JsonRpcProvider(rpc)
    var abi = [
        "function ownerOf(uint256 tokenId) view returns (address)",
    ]
    const contract = new ethers.Contract(address, abi, provider);
    const owner = (await contract.ownerOf(1)) as string

    if (signer == owner) {
        res.statusCode = 200
        req.url = "/images/Nor/1.png"
        proxy.web(req, res)

    } else {
        res.statusCode = 400
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify("not an owner"))

    }
}