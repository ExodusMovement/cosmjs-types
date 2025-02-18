/* eslint-disable */
import Long from "long";
import _m0 from "@exodus/protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";

export const protobufPackage = "tendermint.types";

/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParams {
  block?: BlockParams;
  evidence?: EvidenceParams;
  validator?: ValidatorParams;
  version?: VersionParams;
}

/** BlockParams contains limits on the block size. */
export interface BlockParams {
  /**
   * Max block size, in bytes.
   * Note: must be greater than 0
   */
  maxBytes: Long;
  /**
   * Max gas per block.
   * Note: must be greater or equal to -1
   */
  maxGas: Long;
  /**
   * Minimum time increment between consecutive blocks (in milliseconds) If the
   * block header timestamp is ahead of the system clock, decrease this value.
   *
   * Not exposed to the application.
   */
  timeIotaMs: Long;
}

/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParams {
  /**
   * Max age of evidence, in blocks.
   *
   * The basic formula for calculating this is: MaxAgeDuration / {average block
   * time}.
   */
  maxAgeNumBlocks: Long;
  /**
   * Max age of evidence, in time.
   *
   * It should correspond with an app's "unbonding period" or other similar
   * mechanism for handling [Nothing-At-Stake
   * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
   */
  maxAgeDuration?: Duration;
  /**
   * This sets the maximum size of total evidence in bytes that can be committed in a single block.
   * and should fall comfortably under the max block bytes.
   * Default is 1048576 or 1MB
   */
  maxBytes: Long;
}

/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParams {
  pubKeyTypes: string[];
}

/** VersionParams contains the ABCI application version. */
export interface VersionParams {
  appVersion: Long;
}

/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParams {
  blockMaxBytes: Long;
  blockMaxGas: Long;
}

const baseConsensusParams: object = {};

export const ConsensusParams = {
  encode(message: ConsensusParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.block !== undefined) {
      BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    if (message.validator !== undefined) {
      ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
    }
    if (message.version !== undefined) {
      VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConsensusParams } as ConsensusParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = BlockParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.evidence = EvidenceParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.validator = ValidatorParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.version = VersionParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConsensusParams {
    const message = { ...baseConsensusParams } as ConsensusParams;
    message.block =
      object.block !== undefined && object.block !== null ? BlockParams.fromJSON(object.block) : undefined;
    message.evidence =
      object.evidence !== undefined && object.evidence !== null
        ? EvidenceParams.fromJSON(object.evidence)
        : undefined;
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? ValidatorParams.fromJSON(object.validator)
        : undefined;
    message.version =
      object.version !== undefined && object.version !== null
        ? VersionParams.fromJSON(object.version)
        : undefined;
    return message;
  },

  toJSON(message: ConsensusParams): unknown {
    const obj: any = {};
    message.block !== undefined &&
      (obj.block = message.block ? BlockParams.toJSON(message.block) : undefined);
    message.evidence !== undefined &&
      (obj.evidence = message.evidence ? EvidenceParams.toJSON(message.evidence) : undefined);
    message.validator !== undefined &&
      (obj.validator = message.validator ? ValidatorParams.toJSON(message.validator) : undefined);
    message.version !== undefined &&
      (obj.version = message.version ? VersionParams.toJSON(message.version) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConsensusParams>, I>>(object: I): ConsensusParams {
    const message = { ...baseConsensusParams } as ConsensusParams;
    message.block =
      object.block !== undefined && object.block !== null ? BlockParams.fromPartial(object.block) : undefined;
    message.evidence =
      object.evidence !== undefined && object.evidence !== null
        ? EvidenceParams.fromPartial(object.evidence)
        : undefined;
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? ValidatorParams.fromPartial(object.validator)
        : undefined;
    message.version =
      object.version !== undefined && object.version !== null
        ? VersionParams.fromPartial(object.version)
        : undefined;
    return message;
  },
};

const baseBlockParams: object = { maxBytes: Long.ZERO, maxGas: Long.ZERO, timeIotaMs: Long.ZERO };

export const BlockParams = {
  encode(message: BlockParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxBytes.isZero()) {
      writer.uint32(8).int64(message.maxBytes);
    }
    if (!message.maxGas.isZero()) {
      writer.uint32(16).int64(message.maxGas);
    }
    if (!message.timeIotaMs.isZero()) {
      writer.uint32(24).int64(message.timeIotaMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlockParams } as BlockParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxBytes = reader.int64() as Long;
          break;
        case 2:
          message.maxGas = reader.int64() as Long;
          break;
        case 3:
          message.timeIotaMs = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockParams {
    const message = { ...baseBlockParams } as BlockParams;
    message.maxBytes =
      object.maxBytes !== undefined && object.maxBytes !== null
        ? Long.fromString(object.maxBytes)
        : Long.ZERO;
    message.maxGas =
      object.maxGas !== undefined && object.maxGas !== null ? Long.fromString(object.maxGas) : Long.ZERO;
    message.timeIotaMs =
      object.timeIotaMs !== undefined && object.timeIotaMs !== null
        ? Long.fromString(object.timeIotaMs)
        : Long.ZERO;
    return message;
  },

  toJSON(message: BlockParams): unknown {
    const obj: any = {};
    message.maxBytes !== undefined && (obj.maxBytes = (message.maxBytes || Long.ZERO).toString());
    message.maxGas !== undefined && (obj.maxGas = (message.maxGas || Long.ZERO).toString());
    message.timeIotaMs !== undefined && (obj.timeIotaMs = (message.timeIotaMs || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BlockParams>, I>>(object: I): BlockParams {
    const message = { ...baseBlockParams } as BlockParams;
    message.maxBytes =
      object.maxBytes !== undefined && object.maxBytes !== null ? Long.fromValue(object.maxBytes) : Long.ZERO;
    message.maxGas =
      object.maxGas !== undefined && object.maxGas !== null ? Long.fromValue(object.maxGas) : Long.ZERO;
    message.timeIotaMs =
      object.timeIotaMs !== undefined && object.timeIotaMs !== null
        ? Long.fromValue(object.timeIotaMs)
        : Long.ZERO;
    return message;
  },
};

const baseEvidenceParams: object = { maxAgeNumBlocks: Long.ZERO, maxBytes: Long.ZERO };

export const EvidenceParams = {
  encode(message: EvidenceParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxAgeNumBlocks.isZero()) {
      writer.uint32(8).int64(message.maxAgeNumBlocks);
    }
    if (message.maxAgeDuration !== undefined) {
      Duration.encode(message.maxAgeDuration, writer.uint32(18).fork()).ldelim();
    }
    if (!message.maxBytes.isZero()) {
      writer.uint32(24).int64(message.maxBytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EvidenceParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEvidenceParams } as EvidenceParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxAgeNumBlocks = reader.int64() as Long;
          break;
        case 2:
          message.maxAgeDuration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxBytes = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EvidenceParams {
    const message = { ...baseEvidenceParams } as EvidenceParams;
    message.maxAgeNumBlocks =
      object.maxAgeNumBlocks !== undefined && object.maxAgeNumBlocks !== null
        ? Long.fromString(object.maxAgeNumBlocks)
        : Long.ZERO;
    message.maxAgeDuration =
      object.maxAgeDuration !== undefined && object.maxAgeDuration !== null
        ? Duration.fromJSON(object.maxAgeDuration)
        : undefined;
    message.maxBytes =
      object.maxBytes !== undefined && object.maxBytes !== null
        ? Long.fromString(object.maxBytes)
        : Long.ZERO;
    return message;
  },

  toJSON(message: EvidenceParams): unknown {
    const obj: any = {};
    message.maxAgeNumBlocks !== undefined &&
      (obj.maxAgeNumBlocks = (message.maxAgeNumBlocks || Long.ZERO).toString());
    message.maxAgeDuration !== undefined &&
      (obj.maxAgeDuration = message.maxAgeDuration ? Duration.toJSON(message.maxAgeDuration) : undefined);
    message.maxBytes !== undefined && (obj.maxBytes = (message.maxBytes || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EvidenceParams>, I>>(object: I): EvidenceParams {
    const message = { ...baseEvidenceParams } as EvidenceParams;
    message.maxAgeNumBlocks =
      object.maxAgeNumBlocks !== undefined && object.maxAgeNumBlocks !== null
        ? Long.fromValue(object.maxAgeNumBlocks)
        : Long.ZERO;
    message.maxAgeDuration =
      object.maxAgeDuration !== undefined && object.maxAgeDuration !== null
        ? Duration.fromPartial(object.maxAgeDuration)
        : undefined;
    message.maxBytes =
      object.maxBytes !== undefined && object.maxBytes !== null ? Long.fromValue(object.maxBytes) : Long.ZERO;
    return message;
  },
};

const baseValidatorParams: object = { pubKeyTypes: "" };

export const ValidatorParams = {
  encode(message: ValidatorParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pubKeyTypes) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValidatorParams } as ValidatorParams;
    message.pubKeyTypes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKeyTypes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorParams {
    const message = { ...baseValidatorParams } as ValidatorParams;
    message.pubKeyTypes = (object.pubKeyTypes ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: ValidatorParams): unknown {
    const obj: any = {};
    if (message.pubKeyTypes) {
      obj.pubKeyTypes = message.pubKeyTypes.map((e) => e);
    } else {
      obj.pubKeyTypes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorParams>, I>>(object: I): ValidatorParams {
    const message = { ...baseValidatorParams } as ValidatorParams;
    message.pubKeyTypes = object.pubKeyTypes?.map((e) => e) || [];
    return message;
  },
};

const baseVersionParams: object = { appVersion: Long.UZERO };

export const VersionParams = {
  encode(message: VersionParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.appVersion.isZero()) {
      writer.uint32(8).uint64(message.appVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VersionParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVersionParams } as VersionParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appVersion = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VersionParams {
    const message = { ...baseVersionParams } as VersionParams;
    message.appVersion =
      object.appVersion !== undefined && object.appVersion !== null
        ? Long.fromString(object.appVersion)
        : Long.UZERO;
    return message;
  },

  toJSON(message: VersionParams): unknown {
    const obj: any = {};
    message.appVersion !== undefined && (obj.appVersion = (message.appVersion || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VersionParams>, I>>(object: I): VersionParams {
    const message = { ...baseVersionParams } as VersionParams;
    message.appVersion =
      object.appVersion !== undefined && object.appVersion !== null
        ? Long.fromValue(object.appVersion)
        : Long.UZERO;
    return message;
  },
};

const baseHashedParams: object = { blockMaxBytes: Long.ZERO, blockMaxGas: Long.ZERO };

export const HashedParams = {
  encode(message: HashedParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.blockMaxBytes.isZero()) {
      writer.uint32(8).int64(message.blockMaxBytes);
    }
    if (!message.blockMaxGas.isZero()) {
      writer.uint32(16).int64(message.blockMaxGas);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HashedParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHashedParams } as HashedParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockMaxBytes = reader.int64() as Long;
          break;
        case 2:
          message.blockMaxGas = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HashedParams {
    const message = { ...baseHashedParams } as HashedParams;
    message.blockMaxBytes =
      object.blockMaxBytes !== undefined && object.blockMaxBytes !== null
        ? Long.fromString(object.blockMaxBytes)
        : Long.ZERO;
    message.blockMaxGas =
      object.blockMaxGas !== undefined && object.blockMaxGas !== null
        ? Long.fromString(object.blockMaxGas)
        : Long.ZERO;
    return message;
  },

  toJSON(message: HashedParams): unknown {
    const obj: any = {};
    message.blockMaxBytes !== undefined &&
      (obj.blockMaxBytes = (message.blockMaxBytes || Long.ZERO).toString());
    message.blockMaxGas !== undefined && (obj.blockMaxGas = (message.blockMaxGas || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HashedParams>, I>>(object: I): HashedParams {
    const message = { ...baseHashedParams } as HashedParams;
    message.blockMaxBytes =
      object.blockMaxBytes !== undefined && object.blockMaxBytes !== null
        ? Long.fromValue(object.blockMaxBytes)
        : Long.ZERO;
    message.blockMaxGas =
      object.blockMaxGas !== undefined && object.blockMaxGas !== null
        ? Long.fromValue(object.blockMaxGas)
        : Long.ZERO;
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
