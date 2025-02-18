/* eslint-disable */
import Long from "long";
import _m0 from "@exodus/protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";

export const protobufPackage = "cosmos.auth.v1beta1";

/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */
export interface BaseAccount {
  address: string;
  pubKey?: Any;
  accountNumber: Long;
  sequence: Long;
}

/** ModuleAccount defines an account for modules that holds coins on a pool. */
export interface ModuleAccount {
  baseAccount?: BaseAccount;
  name: string;
  permissions: string[];
}

/** Params defines the parameters for the auth module. */
export interface Params {
  maxMemoCharacters: Long;
  txSigLimit: Long;
  txSizeCostPerByte: Long;
  sigVerifyCostEd25519: Long;
  sigVerifyCostSecp256k1: Long;
}

const baseBaseAccount: object = { address: "", accountNumber: Long.UZERO, sequence: Long.UZERO };

export const BaseAccount = {
  encode(message: BaseAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (!message.accountNumber.isZero()) {
      writer.uint32(24).uint64(message.accountNumber);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBaseAccount } as BaseAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pubKey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.accountNumber = reader.uint64() as Long;
          break;
        case 4:
          message.sequence = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BaseAccount {
    const message = { ...baseBaseAccount } as BaseAccount;
    message.address = object.address !== undefined && object.address !== null ? String(object.address) : "";
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null ? Any.fromJSON(object.pubKey) : undefined;
    message.accountNumber =
      object.accountNumber !== undefined && object.accountNumber !== null
        ? Long.fromString(object.accountNumber)
        : Long.UZERO;
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromString(object.sequence)
        : Long.UZERO;
    return message;
  },

  toJSON(message: BaseAccount): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.accountNumber !== undefined &&
      (obj.accountNumber = (message.accountNumber || Long.UZERO).toString());
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BaseAccount>, I>>(object: I): BaseAccount {
    const message = { ...baseBaseAccount } as BaseAccount;
    message.address = object.address ?? "";
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null ? Any.fromPartial(object.pubKey) : undefined;
    message.accountNumber =
      object.accountNumber !== undefined && object.accountNumber !== null
        ? Long.fromValue(object.accountNumber)
        : Long.UZERO;
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromValue(object.sequence)
        : Long.UZERO;
    return message;
  },
};

const baseModuleAccount: object = { name: "", permissions: "" };

export const ModuleAccount = {
  encode(message: ModuleAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.permissions) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseModuleAccount } as ModuleAccount;
    message.permissions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.permissions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModuleAccount {
    const message = { ...baseModuleAccount } as ModuleAccount;
    message.baseAccount =
      object.baseAccount !== undefined && object.baseAccount !== null
        ? BaseAccount.fromJSON(object.baseAccount)
        : undefined;
    message.name = object.name !== undefined && object.name !== null ? String(object.name) : "";
    message.permissions = (object.permissions ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: ModuleAccount): unknown {
    const obj: any = {};
    message.baseAccount !== undefined &&
      (obj.baseAccount = message.baseAccount ? BaseAccount.toJSON(message.baseAccount) : undefined);
    message.name !== undefined && (obj.name = message.name);
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) => e);
    } else {
      obj.permissions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModuleAccount>, I>>(object: I): ModuleAccount {
    const message = { ...baseModuleAccount } as ModuleAccount;
    message.baseAccount =
      object.baseAccount !== undefined && object.baseAccount !== null
        ? BaseAccount.fromPartial(object.baseAccount)
        : undefined;
    message.name = object.name ?? "";
    message.permissions = object.permissions?.map((e) => e) || [];
    return message;
  },
};

const baseParams: object = {
  maxMemoCharacters: Long.UZERO,
  txSigLimit: Long.UZERO,
  txSizeCostPerByte: Long.UZERO,
  sigVerifyCostEd25519: Long.UZERO,
  sigVerifyCostSecp256k1: Long.UZERO,
};

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxMemoCharacters.isZero()) {
      writer.uint32(8).uint64(message.maxMemoCharacters);
    }
    if (!message.txSigLimit.isZero()) {
      writer.uint32(16).uint64(message.txSigLimit);
    }
    if (!message.txSizeCostPerByte.isZero()) {
      writer.uint32(24).uint64(message.txSizeCostPerByte);
    }
    if (!message.sigVerifyCostEd25519.isZero()) {
      writer.uint32(32).uint64(message.sigVerifyCostEd25519);
    }
    if (!message.sigVerifyCostSecp256k1.isZero()) {
      writer.uint32(40).uint64(message.sigVerifyCostSecp256k1);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxMemoCharacters = reader.uint64() as Long;
          break;
        case 2:
          message.txSigLimit = reader.uint64() as Long;
          break;
        case 3:
          message.txSizeCostPerByte = reader.uint64() as Long;
          break;
        case 4:
          message.sigVerifyCostEd25519 = reader.uint64() as Long;
          break;
        case 5:
          message.sigVerifyCostSecp256k1 = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.maxMemoCharacters =
      object.maxMemoCharacters !== undefined && object.maxMemoCharacters !== null
        ? Long.fromString(object.maxMemoCharacters)
        : Long.UZERO;
    message.txSigLimit =
      object.txSigLimit !== undefined && object.txSigLimit !== null
        ? Long.fromString(object.txSigLimit)
        : Long.UZERO;
    message.txSizeCostPerByte =
      object.txSizeCostPerByte !== undefined && object.txSizeCostPerByte !== null
        ? Long.fromString(object.txSizeCostPerByte)
        : Long.UZERO;
    message.sigVerifyCostEd25519 =
      object.sigVerifyCostEd25519 !== undefined && object.sigVerifyCostEd25519 !== null
        ? Long.fromString(object.sigVerifyCostEd25519)
        : Long.UZERO;
    message.sigVerifyCostSecp256k1 =
      object.sigVerifyCostSecp256k1 !== undefined && object.sigVerifyCostSecp256k1 !== null
        ? Long.fromString(object.sigVerifyCostSecp256k1)
        : Long.UZERO;
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxMemoCharacters !== undefined &&
      (obj.maxMemoCharacters = (message.maxMemoCharacters || Long.UZERO).toString());
    message.txSigLimit !== undefined && (obj.txSigLimit = (message.txSigLimit || Long.UZERO).toString());
    message.txSizeCostPerByte !== undefined &&
      (obj.txSizeCostPerByte = (message.txSizeCostPerByte || Long.UZERO).toString());
    message.sigVerifyCostEd25519 !== undefined &&
      (obj.sigVerifyCostEd25519 = (message.sigVerifyCostEd25519 || Long.UZERO).toString());
    message.sigVerifyCostSecp256k1 !== undefined &&
      (obj.sigVerifyCostSecp256k1 = (message.sigVerifyCostSecp256k1 || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = { ...baseParams } as Params;
    message.maxMemoCharacters =
      object.maxMemoCharacters !== undefined && object.maxMemoCharacters !== null
        ? Long.fromValue(object.maxMemoCharacters)
        : Long.UZERO;
    message.txSigLimit =
      object.txSigLimit !== undefined && object.txSigLimit !== null
        ? Long.fromValue(object.txSigLimit)
        : Long.UZERO;
    message.txSizeCostPerByte =
      object.txSizeCostPerByte !== undefined && object.txSizeCostPerByte !== null
        ? Long.fromValue(object.txSizeCostPerByte)
        : Long.UZERO;
    message.sigVerifyCostEd25519 =
      object.sigVerifyCostEd25519 !== undefined && object.sigVerifyCostEd25519 !== null
        ? Long.fromValue(object.sigVerifyCostEd25519)
        : Long.UZERO;
    message.sigVerifyCostSecp256k1 =
      object.sigVerifyCostSecp256k1 !== undefined && object.sigVerifyCostSecp256k1 !== null
        ? Long.fromValue(object.sigVerifyCostSecp256k1)
        : Long.UZERO;
    return message;
  },
};

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
