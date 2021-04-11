import { IncomingMessage, ServerResponse } from 'http'
import AWS from 'aws-sdk'

const keyPairId = process.env.KEY_PAIR_ID!
const privateKey = process.env.PRIVATE_KEY!

export default async function handler(req: IncomingMessage, res: ServerResponse) {

    // const privateKey = fs.readFileSync(keyPath, { encoding: 'utf-8' });
    const signer = new AWS.CloudFront.Signer(keyPairId, privateKey)

    const option: AWS.CloudFront.Signer.SignerOptionsWithoutPolicy = {
        url: "https://d225gg55bmrwbg.cloudfront.net/1.png",
        expires: Date.now() + 10
    }
    const ret = signer.getSignedUrl(option)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(ret))
}