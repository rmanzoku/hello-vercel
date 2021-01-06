// GENERATED CODE -- DO NOT EDIT!

// package: prime
// file: prime.proto

import * as prime_pb from "./prime_pb";
import * as stripe_pb from "./stripe_pb";
import * as grpc from "grpc";

interface IPrimeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getMyCheckoutSession: grpc.MethodDefinition<stripe_pb.CheckoutSessionInput, stripe_pb.CheckoutSession>;
}

export const PrimeServiceService: IPrimeServiceService;

export class PrimeServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getMyCheckoutSession(argument: stripe_pb.CheckoutSessionInput, callback: grpc.requestCallback<stripe_pb.CheckoutSession>): grpc.ClientUnaryCall;
  getMyCheckoutSession(argument: stripe_pb.CheckoutSessionInput, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<stripe_pb.CheckoutSession>): grpc.ClientUnaryCall;
  getMyCheckoutSession(argument: stripe_pb.CheckoutSessionInput, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<stripe_pb.CheckoutSession>): grpc.ClientUnaryCall;
}
