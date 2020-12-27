import { IncomingMessage, ServerResponse } from 'http'
import { URL } from 'url'

let ret: number[] = [5001, 5002, 5003, 5004, 5005, 4001, 4002, 4003, 4004, 4005];

export default function handler(req: IncomingMessage, res: ServerResponse) {
    const url = new URL(req.url!, `http://${req.headers.host}`)
    const ids = url.searchParams.getAll("ids")
    if (ids.length != 0) {
        ret = []
        ids.map((id) => { ret.push(Number(id)) })
    }

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(ret))
}