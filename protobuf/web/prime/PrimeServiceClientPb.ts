/**
 * @fileoverview gRPC-Web generated client stub for prime
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as stripe_pb from './stripe_pb';


export class PrimeServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetMyCheckoutSession = new grpcWeb.AbstractClientBase.MethodInfo(
    stripe_pb.CheckoutSession,
    (request: stripe_pb.CheckoutSessionInput) => {
      return request.serializeBinary();
    },
    stripe_pb.CheckoutSession.deserializeBinary
  );

  getMyCheckoutSession(
    request: stripe_pb.CheckoutSessionInput,
    metadata: grpcWeb.Metadata | null): Promise<stripe_pb.CheckoutSession>;

  getMyCheckoutSession(
    request: stripe_pb.CheckoutSessionInput,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: stripe_pb.CheckoutSession) => void): grpcWeb.ClientReadableStream<stripe_pb.CheckoutSession>;

  getMyCheckoutSession(
    request: stripe_pb.CheckoutSessionInput,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: stripe_pb.CheckoutSession) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/prime.PrimeService/GetMyCheckoutSession',
        request,
        metadata || {},
        this.methodInfoGetMyCheckoutSession,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/prime.PrimeService/GetMyCheckoutSession',
    request,
    metadata || {},
    this.methodInfoGetMyCheckoutSession);
  }

}

