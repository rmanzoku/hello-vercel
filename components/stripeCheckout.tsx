import { useState, FormEventHandler } from 'react'
import { NextComponentType } from 'next'
import getStripe from 'utils/get-stripe'
import { useInterval } from 'ahooks'
import styleStripe from 'styles/stripe.module.css'

interface Props {
}

interface State {
    locked: boolean
    status: string
}

interface sessionId {
    sessionId: string
}


const getSessionId = (successURL: string, cancelURL: string) => {
    const url = `/api/proxy/prime/checkout_session?success_url=${successURL}&cancel_url=${cancelURL}`
    return new Promise<sessionId>(async (resolve, reject) => {
        try {
            const response = await fetch(url)
            const res: sessionId = await response.json()
            resolve(res)
        } catch (e) {
            reject(e)
        }
    })
}

const StripeCheckout: NextComponentType<Props> = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        setLoading(true)

        const { sessionId } = await getSessionId(location.href, location.href).catch(e => {
            console.log(e)
            return { sessionId: "" }
        })
        if (!sessionId) {
            console.log("sessionId does not exist")
            setLoading(false)
            return
        }

        const stripe = await getStripe()
        const { error } = await stripe!.redirectToCheckout({
            sessionId: sessionId!,
        });
        console.warn(error.message);
        setLoading(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <button
                className={styleStripe.checkoutButton}
                type="submit"
                disabled={loading}
            >
                {children}
            </button>
        </form>
    )
}

export default StripeCheckout