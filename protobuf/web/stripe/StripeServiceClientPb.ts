/**
 * @fileoverview gRPC-Web generated client stub for stripe
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as stripe_pb from './stripe_pb';


export class StripeServiceClient {
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

  methodInfoGetCustomerID = new grpcWeb.AbstractClientBase.MethodInfo(
    stripe_pb.CustomerId,
    (request: stripe_pb.Uid) => {
      return request.serializeBinary();
    },
    stripe_pb.CustomerId.deserializeBinary
  );

  getCustomerID(
    request: stripe_pb.Uid,
    metadata: grpcWeb.Metadata | null): Promise<stripe_pb.CustomerId>;

  getCustomerID(
    request: stripe_pb.Uid,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: stripe_pb.CustomerId) => void): grpcWeb.ClientReadableStream<stripe_pb.CustomerId>;

  getCustomerID(
    request: stripe_pb.Uid,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: stripe_pb.CustomerId) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/stripe.StripeService/GetCustomerID',
        request,
        metadata || {},
        this.methodInfoGetCustomerID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/stripe.StripeService/GetCustomerID',
    request,
    metadata || {},
    this.methodInfoGetCustomerID);
  }

  methodInfoGetCheckoutSession = new grpcWeb.AbstractClientBase.MethodInfo(
    stripe_pb.CheckoutSession,
    (request: stripe_pb.CheckoutSessionInput) => {
      return request.serializeBinary();
    },
    stripe_pb.CheckoutSession.deserializeBinary
  );

  getCheckoutSession(
    request: stripe_pb.CheckoutSessionInput,
    metadata: grpcWeb.Metadata | null): Promise<stripe_pb.CheckoutSession>;

  getCheckoutSession(
    request: stripe_pb.CheckoutSessionInput,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: stripe_pb.CheckoutSession) => void): grpcWeb.ClientReadableStream<stripe_pb.CheckoutSession>;

  getCheckoutSession(
    request: stripe_pb.CheckoutSessionInput,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: stripe_pb.CheckoutSession) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/stripe.StripeService/GetCheckoutSession',
        request,
        metadata || {},
        this.methodInfoGetCheckoutSession,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/stripe.StripeService/GetCheckoutSession',
    request,
    metadata || {},
    this.methodInfoGetCheckoutSession);
  }

  methodInfoWebhook = new grpcWeb.AbstractClientBase.MethodInfo(
    stripe_pb.Empty,
    (request: stripe_pb.WebhookRequest) => {
      return request.serializeBinary();
    },
    stripe_pb.Empty.deserializeBinary
  );

  webhook(
    request: stripe_pb.WebhookRequest,
    metadata: grpcWeb.Metadata | null): Promise<stripe_pb.Empty>;

  webhook(
    request: stripe_pb.WebhookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: stripe_pb.Empty) => void): grpcWeb.ClientReadableStream<stripe_pb.Empty>;

  webhook(
    request: stripe_pb.WebhookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: stripe_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/stripe.StripeService/Webhook',
        request,
        metadata || {},
        this.methodInfoWebhook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/stripe.StripeService/Webhook',
    request,
    metadata || {},
    this.methodInfoWebhook);
  }

}

