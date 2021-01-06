// GENERATED CODE -- DO NOT EDIT!

// package: stripe
// file: stripe.proto

import * as stripe_pb from "./stripe_pb";
import * as grpc from "grpc";

interface IStripeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCustomerID: grpc.MethodDefinition<stripe_pb.Uid, stripe_pb.CustomerId>;
  getCheckoutSession: grpc.MethodDefinition<stripe_pb.CheckoutSessionInput, stripe_pb.CheckoutSession>;
  webhook: grpc.MethodDefinition<stripe_pb.WebhookRequest, stripe_pb.Empty>;
}

export const StripeServiceService: IStripeServiceService;

export class StripeServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCustomerID(argument: stripe_pb.Uid, callback: grpc.requestCallback<stripe_pb.CustomerId>): grpc.ClientUnaryCall;
  getCustomerID(argument: stripe_pb.Uid, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<stripe_pb.CustomerId>): grpc.ClientUnaryCall;
  getCustomerID(argument: stripe_pb.Uid, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<stripe_pb.CustomerId>): grpc.ClientUnaryCall;
  getCheckoutSession(argument: stripe_pb.CheckoutSessionInput, callback: grpc.requestCallback<stripe_pb.CheckoutSession>): grpc.ClientUnaryCall;
  getCheckoutSession(argument: stripe_pb.CheckoutSessionInput, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<stripe_pb.CheckoutSession>): grpc.ClientUnaryCall;
  getCheckoutSession(argument: stripe_pb.CheckoutSessionInput, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<stripe_pb.CheckoutSession>): grpc.ClientUnaryCall;
  webhook(argument: stripe_pb.WebhookRequest, callback: grpc.requestCallback<stripe_pb.Empty>): grpc.ClientUnaryCall;
  webhook(argument: stripe_pb.WebhookRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<stripe_pb.Empty>): grpc.ClientUnaryCall;
  webhook(argument: stripe_pb.WebhookRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<stripe_pb.Empty>): grpc.ClientUnaryCall;
}
