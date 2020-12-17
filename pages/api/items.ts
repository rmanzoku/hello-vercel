import { IncomingMessage, ServerResponse } from 'http'

export default function handler(req: IncomingMessage, res: ServerResponse) {
    const ret: number[] = [5001, 5002, 5003, 5004, 5005, 4001, 4002, 4003, 4004, 4005]
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(ret))
}