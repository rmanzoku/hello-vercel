// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var stripe_pb = require('./stripe_pb.js');

function serialize_stripe_CheckoutSession(arg) {
  if (!(arg instanceof stripe_pb.CheckoutSession)) {
    throw new Error('Expected argument of type stripe.CheckoutSession');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_stripe_CheckoutSession(buffer_arg) {
  return stripe_pb.CheckoutSession.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stripe_CheckoutSessionInput(arg) {
  if (!(arg instanceof stripe_pb.CheckoutSessionInput)) {
    throw new Error('Expected argument of type stripe.CheckoutSessionInput');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_stripe_CheckoutSessionInput(buffer_arg) {
  return stripe_pb.CheckoutSessionInput.deserializeBinary(new Uint8Array(buffer_arg));
}


var PrimeServiceService = exports.PrimeServiceService = {
  getMyCheckoutSession: {
    path: '/prime.PrimeService/GetMyCheckoutSession',
    requestStream: false,
    responseStream: false,
    requestType: stripe_pb.CheckoutSessionInput,
    responseType: stripe_pb.CheckoutSession,
    requestSerialize: serialize_stripe_CheckoutSessionInput,
    requestDeserialize: deserialize_stripe_CheckoutSessionInput,
    responseSerialize: serialize_stripe_CheckoutSession,
    responseDeserialize: deserialize_stripe_CheckoutSession,
  },
};

exports.PrimeServiceClient = grpc.makeGenericClientConstructor(PrimeServiceService);
