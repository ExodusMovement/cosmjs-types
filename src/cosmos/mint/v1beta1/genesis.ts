/* eslint-disable */
import Long from "long";
import _m0 from "@exodus/protobufjs/minimal";
import { Minter, Params } from "../../../cosmos/mint/v1beta1/mint";

export const protobufPackage = "cosmos.mint.v1beta1";

/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
  /** minter is a space for holding current inflation information. */
  minter?: Minter;
  /** params defines all the paramaters of the module. */
  params?: Params;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minter !== undefined) {
      Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minter = Minter.decode(reader, reader.uint32());
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.minter =
      object.minter !== undefined && object.minter !== null ? Minter.fromJSON(object.minter) : undefined;
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromJSON(object.params) : undefined;
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.minter !== undefined && (obj.minter = message.minter ? Minter.toJSON(message.minter) : undefined);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.minter =
      object.minter !== undefined && object.minter !== null ? Minter.fromPartial(object.minter) : undefined;
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
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
