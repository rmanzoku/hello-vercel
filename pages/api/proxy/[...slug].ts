import { IncomingMessage, ServerResponse } from 'http'
import httpProxy from 'http-proxy';

const target = "https://api.exchangeratesapi.io/"

const proxy = httpProxy.createProxyServer({ target, changeOrigin: true });

export default function handler(req: IncomingMessage, res: ServerResponse) {
    req.url = req.url!.replace(new RegExp("^/api/proxy"), "")
    proxy.web(req, res);
}
