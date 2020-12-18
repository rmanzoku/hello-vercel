import { useState, FormEventHandler } from 'react'
import { NextComponentType } from 'next'
import getStripe from 'utils/get-stripe'
import { useInterval } from 'ahooks';

interface MyProps {
}

interface MyState {
    locked: boolean
    status: string
}

const StripeCheckout: NextComponentType = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        setLoading(true)

        const sessionId = "cs_test_a1iNWVJXnEgkRhvXkwcr7bcbvfgRWNFr7MWXOrMHSqbspKpwRwhBj1zmI0"

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
                className={`box-content p-1 border-2 ${loading ? "bg-red-500" : "bg-blue-500"}`}
                type="submit"
                disabled={loading}
            >
                {children}
            </button>
        </form>
    )
}

export default StripeCheckout