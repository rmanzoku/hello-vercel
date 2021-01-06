// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var stripe_pb = require('./stripe_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');

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

function serialize_stripe_CustomerId(arg) {
  if (!(arg instanceof stripe_pb.CustomerId)) {
    throw new Error('Expected argument of type stripe.CustomerId');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_stripe_CustomerId(buffer_arg) {
  return stripe_pb.CustomerId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stripe_Empty(arg) {
  if (!(arg instanceof stripe_pb.Empty)) {
    throw new Error('Expected argument of type stripe.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_stripe_Empty(buffer_arg) {
  return stripe_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stripe_Uid(arg) {
  if (!(arg instanceof stripe_pb.Uid)) {
    throw new Error('Expected argument of type stripe.Uid');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_stripe_Uid(buffer_arg) {
  return stripe_pb.Uid.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stripe_WebhookRequest(arg) {
  if (!(arg instanceof stripe_pb.WebhookRequest)) {
    throw new Error('Expected argument of type stripe.WebhookRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_stripe_WebhookRequest(buffer_arg) {
  return stripe_pb.WebhookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var StripeServiceService = exports.StripeServiceService = {
  getCustomerID: {
    path: '/stripe.StripeService/GetCustomerID',
    requestStream: false,
    responseStream: false,
    requestType: stripe_pb.Uid,
    responseType: stripe_pb.CustomerId,
    requestSerialize: serialize_stripe_Uid,
    requestDeserialize: deserialize_stripe_Uid,
    responseSerialize: serialize_stripe_CustomerId,
    responseDeserialize: deserialize_stripe_CustomerId,
  },
  getCheckoutSession: {
    path: '/stripe.StripeService/GetCheckoutSession',
    requestStream: false,
    responseStream: false,
    requestType: stripe_pb.CheckoutSessionInput,
    responseType: stripe_pb.CheckoutSession,
    requestSerialize: serialize_stripe_CheckoutSessionInput,
    requestDeserialize: deserialize_stripe_CheckoutSessionInput,
    responseSerialize: serialize_stripe_CheckoutSession,
    responseDeserialize: deserialize_stripe_CheckoutSession,
  },
  webhook: {
    path: '/stripe.StripeService/Webhook',
    requestStream: false,
    responseStream: false,
    requestType: stripe_pb.WebhookRequest,
    responseType: stripe_pb.Empty,
    requestSerialize: serialize_stripe_WebhookRequest,
    requestDeserialize: deserialize_stripe_WebhookRequest,
    responseSerialize: serialize_stripe_Empty,
    responseDeserialize: deserialize_stripe_Empty,
  },
};

exports.StripeServiceClient = grpc.makeGenericClientConstructor(StripeServiceService);
