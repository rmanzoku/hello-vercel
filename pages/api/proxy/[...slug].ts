import { IncomingMessage, ServerResponse } from 'http'
import httpProxy from 'http-proxy';

const target = "http://static.s3.prod.mch.djty.co.s3-ap-northeast-1.amazonaws.com/"

const proxy = httpProxy.createProxyServer({ target, changeOrigin: true });

export default async function handler(req: IncomingMessage, res: ServerResponse) {
    req.url = req.url!.replace(new RegExp("^/api/proxy"), "")

    return new Promise((resolve, reject) => {
        try {
            proxy.web(req, res, { proxyTimeout: 5000 }, (e) => {
                console.warn(e.message)
            })
            return resolve
        } catch (e) {
            console.warn(e.message)
            return reject
        }
    })
}
