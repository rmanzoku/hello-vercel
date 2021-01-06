// package: stripe
// file: stripe.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "./google/api/annotations_pb";

export class WebhookRequest extends jspb.Message {
  getRawdata(): Uint8Array | string;
  getRawdata_asU8(): Uint8Array;
  getRawdata_asB64(): string;
  setRawdata(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebhookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WebhookRequest): WebhookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebhookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebhookRequest;
  static deserializeBinaryFromReader(message: WebhookRequest, reader: jspb.BinaryReader): WebhookRequest;
}

export namespace WebhookRequest {
  export type AsObject = {
    rawdata: Uint8Array | string,
  }
}

export class CheckoutSessionInput extends jspb.Message {
  getSuccessUrl(): string;
  setSuccessUrl(value: string): void;

  getCancelUrl(): string;
  setCancelUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckoutSessionInput.AsObject;
  static toObject(includeInstance: boolean, msg: CheckoutSessionInput): CheckoutSessionInput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckoutSessionInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckoutSessionInput;
  static deserializeBinaryFromReader(message: CheckoutSessionInput, reader: jspb.BinaryReader): CheckoutSessionInput;
}

export namespace CheckoutSessionInput {
  export type AsObject = {
    successUrl: string,
    cancelUrl: string,
  }
}

export class CheckoutSession extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckoutSession.AsObject;
  static toObject(includeInstance: boolean, msg: CheckoutSession): CheckoutSession.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckoutSession, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckoutSession;
  static deserializeBinaryFromReader(message: CheckoutSession, reader: jspb.BinaryReader): CheckoutSession;
}

export namespace CheckoutSession {
  export type AsObject = {
    sessionId: string,
  }
}

export class Uid extends jspb.Message {
  getUid(): number;
  setUid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Uid.AsObject;
  static toObject(includeInstance: boolean, msg: Uid): Uid.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Uid, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Uid;
  static deserializeBinaryFromReader(message: Uid, reader: jspb.BinaryReader): Uid;
}

export namespace Uid {
  export type AsObject = {
    uid: number,
  }
}

export class CustomerId extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerId.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerId): CustomerId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerId;
  static deserializeBinaryFromReader(message: CustomerId, reader: jspb.BinaryReader): CustomerId;
}

export namespace CustomerId {
  export type AsObject = {
    customerId: string,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

