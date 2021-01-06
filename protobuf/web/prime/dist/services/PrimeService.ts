/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { rpcStatus } from '../models/rpcStatus';
import type { stripeCheckoutSession } from '../models/stripeCheckoutSession';
import { request as __request } from '../core/request';

export class PrimeService {

    /**
     * @param successUrl
     * @param cancelUrl
     * @returns stripeCheckoutSession A successful response.
     * @returns rpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static async primeServiceGetMyCheckoutSession(
        successUrl?: string,
        cancelUrl?: string,
    ): Promise<stripeCheckoutSession | rpcStatus> {
        const result = await __request({
            method: 'GET',
            path: `/prime/checkout_session`,
            query: {
                'successUrl': successUrl,
                'cancelUrl': cancelUrl,
            },
        });
        return result.body;
    }

}