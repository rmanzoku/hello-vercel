import { useState, FormEventHandler } from 'react'
import { NextComponentType } from 'next'
import getStripe from 'utils/get-stripe'
import { useInterval } from 'ahooks'
import styleStripe from "styles/stripe.module.css"

interface Props {
}

interface State {
    locked: boolean
    status: string
}

const StripeCheckout: NextComponentType<Props> = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        setLoading(true)

        const sessionId = "cs_test_a1BEVwucAnb7TTXJIfH7upDYKbaG0kNpePH10uZulmTSRWxZd7K91OKgxh"

        const stripe = await getStripe()
        const { error } = await stripe!.redirectToCheckout({
            sessionId: sessionId,
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