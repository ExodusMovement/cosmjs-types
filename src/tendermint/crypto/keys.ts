/* eslint-disable */
import Long from "long";
import _m0 from "@exodus/protobufjs/minimal";

export const protobufPackage = "tendermint.crypto";

/** PublicKey defines the keys available for use with Tendermint Validators */
export interface PublicKey {
  ed25519: Uint8Array | undefined;
  secp256k1: Uint8Array | undefined;
}

const basePublicKey: object = {};

export const PublicKey = {
  encode(message: PublicKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ed25519 !== undefined) {
      writer.uint32(10).bytes(message.ed25519);
    }
    if (message.secp256k1 !== undefined) {
      writer.uint32(18).bytes(message.secp256k1);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublicKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePublicKey } as PublicKey;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ed25519 = reader.bytes();
          break;
        case 2:
          message.secp256k1 = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublicKey {
    const message = { ...basePublicKey } as PublicKey;
    message.ed25519 =
      object.ed25519 !== undefined && object.ed25519 !== null ? bytesFromBase64(object.ed25519) : undefined;
    message.secp256k1 =
      object.secp256k1 !== undefined && object.secp256k1 !== null
        ? bytesFromBase64(object.secp256k1)
        : undefined;
    return message;
  },

  toJSON(message: PublicKey): unknown {
    const obj: any = {};
    message.ed25519 !== undefined &&
      (obj.ed25519 = message.ed25519 !== undefined ? base64FromBytes(message.ed25519) : undefined);
    message.secp256k1 !== undefined &&
      (obj.secp256k1 = message.secp256k1 !== undefined ? base64FromBytes(message.secp256k1) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PublicKey>, I>>(object: I): PublicKey {
    const message = { ...basePublicKey } as PublicKey;
    message.ed25519 = object.ed25519 ?? undefined;
    message.secp256k1 = object.secp256k1 ?? undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
