import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { isSet, DeepPartial } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "hyperweb.hvm";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/hyperweb.hvm.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "hvm/x/hvm/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/hyperweb.hvm.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "hvm/x/hvm/MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
/** msg instantiate */
export interface MsgInstantiate {
  creator: string;
  code: string;
  /** source holds the original TS artifact and/or type info like .d.ts etc */
  source: string;
}
export interface MsgInstantiateProtoMsg {
  typeUrl: "/hyperweb.hvm.MsgInstantiate";
  value: Uint8Array;
}
/** msg instantiate */
export interface MsgInstantiateAmino {
  creator: string;
  code: string;
  /** source holds the original TS artifact and/or type info like .d.ts etc */
  source: string;
}
export interface MsgInstantiateAminoMsg {
  type: "hvm/x/hvm/MsgInstantiate";
  value: MsgInstantiateAmino;
}
/** msg instantiate */
export interface MsgInstantiateSDKType {
  creator: string;
  code: string;
  source: string;
}
/** msg instantiate response */
export interface MsgInstantiateResponse {
  index: bigint;
  address: string;
}
export interface MsgInstantiateResponseProtoMsg {
  typeUrl: "/hyperweb.hvm.MsgInstantiateResponse";
  value: Uint8Array;
}
/** msg instantiate response */
export interface MsgInstantiateResponseAmino {
  index: string;
  address: string;
}
export interface MsgInstantiateResponseAminoMsg {
  type: "hvm/x/hvm/MsgInstantiateResponse";
  value: MsgInstantiateResponseAmino;
}
/** msg instantiate response */
export interface MsgInstantiateResponseSDKType {
  index: bigint;
  address: string;
}
/** msg eval response */
export interface MsgEval {
  creator: string;
  address: string;
  /** Contract method we wish to invoke */
  callee: string;
  /**
   * Args is a JSON encoded value. Each string in the repeated field represents
   * a fully encoded argument object, ensuring proper deserialization in the
   * function call
   */
  args: string[];
}
export interface MsgEvalProtoMsg {
  typeUrl: "/hyperweb.hvm.MsgEval";
  value: Uint8Array;
}
/** msg eval response */
export interface MsgEvalAmino {
  creator: string;
  address: string;
  /** Contract method we wish to invoke */
  callee: string;
  /**
   * Args is a JSON encoded value. Each string in the repeated field represents
   * a fully encoded argument object, ensuring proper deserialization in the
   * function call
   */
  args: string[];
}
export interface MsgEvalAminoMsg {
  type: "hvm/x/hvm/MsgEval";
  value: MsgEvalAmino;
}
/** msg eval response */
export interface MsgEvalSDKType {
  creator: string;
  address: string;
  callee: string;
  args: string[];
}
/** msg eval response */
export interface MsgEvalResponse {
  result: string;
}
export interface MsgEvalResponseProtoMsg {
  typeUrl: "/hyperweb.hvm.MsgEvalResponse";
  value: Uint8Array;
}
/** msg eval response */
export interface MsgEvalResponseAmino {
  result: string;
}
export interface MsgEvalResponseAminoMsg {
  type: "hvm/x/hvm/MsgEvalResponse";
  value: MsgEvalResponseAmino;
}
/** msg eval response */
export interface MsgEvalResponseSDKType {
  result: string;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/hyperweb.hvm.MsgUpdateParams",
  aminoType: "hvm/x/hvm/MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isSDK(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== undefined) {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
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
  fromJSON(object: any): MsgUpdateParams {
    const obj = createBaseMsgUpdateParams();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromSDK(object: MsgUpdateParamsSDKType): MsgUpdateParams {
    return {
      authority: object?.authority,
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: MsgUpdateParams): MsgUpdateParamsSDKType {
    const obj: any = {};
    obj.authority = message.authority;
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "hvm/x/hvm/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/hyperweb.hvm.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Params.registerTypeUrl();
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/hyperweb.hvm.MsgUpdateParamsResponse",
  aminoType: "hvm/x/hvm/MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    const obj = createBaseMsgUpdateParamsResponse();
    return obj;
  },
  toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromSDK(_: MsgUpdateParamsResponseSDKType): MsgUpdateParamsResponse {
    return {};
  },
  toSDK(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg {
    return {
      type: "hvm/x/hvm/MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/hyperweb.hvm.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgInstantiate(): MsgInstantiate {
  return {
    creator: "",
    code: "",
    source: ""
  };
}
export const MsgInstantiate = {
  typeUrl: "/hyperweb.hvm.MsgInstantiate",
  aminoType: "hvm/x/hvm/MsgInstantiate",
  is(o: any): o is MsgInstantiate {
    return o && (o.$typeUrl === MsgInstantiate.typeUrl || typeof o.creator === "string" && typeof o.code === "string" && typeof o.source === "string");
  },
  isSDK(o: any): o is MsgInstantiateSDKType {
    return o && (o.$typeUrl === MsgInstantiate.typeUrl || typeof o.creator === "string" && typeof o.code === "string" && typeof o.source === "string");
  },
  isAmino(o: any): o is MsgInstantiateAmino {
    return o && (o.$typeUrl === MsgInstantiate.typeUrl || typeof o.creator === "string" && typeof o.code === "string" && typeof o.source === "string");
  },
  encode(message: MsgInstantiate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== undefined) {
      writer.uint32(10).string(message.creator);
    }
    if (message.code !== undefined) {
      writer.uint32(18).string(message.code);
    }
    if (message.source !== undefined) {
      writer.uint32(26).string(message.source);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.code = reader.string();
          break;
        case 3:
          message.source = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgInstantiate {
    const obj = createBaseMsgInstantiate();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.code)) obj.code = String(object.code);
    if (isSet(object.source)) obj.source = String(object.source);
    return obj;
  },
  toJSON(message: MsgInstantiate): JsonSafe<MsgInstantiate> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.code !== undefined && (obj.code = message.code);
    message.source !== undefined && (obj.source = message.source);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgInstantiate>): MsgInstantiate {
    const message = createBaseMsgInstantiate();
    message.creator = object.creator ?? "";
    message.code = object.code ?? "";
    message.source = object.source ?? "";
    return message;
  },
  fromSDK(object: MsgInstantiateSDKType): MsgInstantiate {
    return {
      creator: object?.creator,
      code: object?.code,
      source: object?.source
    };
  },
  toSDK(message: MsgInstantiate): MsgInstantiateSDKType {
    const obj: any = {};
    obj.creator = message.creator;
    obj.code = message.code;
    obj.source = message.source;
    return obj;
  },
  fromAmino(object: MsgInstantiateAmino): MsgInstantiate {
    const message = createBaseMsgInstantiate();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    return message;
  },
  toAmino(message: MsgInstantiate): MsgInstantiateAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.code = message.code === "" ? undefined : message.code;
    obj.source = message.source === "" ? undefined : message.source;
    return obj;
  },
  fromAminoMsg(object: MsgInstantiateAminoMsg): MsgInstantiate {
    return MsgInstantiate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgInstantiate): MsgInstantiateAminoMsg {
    return {
      type: "hvm/x/hvm/MsgInstantiate",
      value: MsgInstantiate.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgInstantiateProtoMsg): MsgInstantiate {
    return MsgInstantiate.decode(message.value);
  },
  toProto(message: MsgInstantiate): Uint8Array {
    return MsgInstantiate.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantiate): MsgInstantiateProtoMsg {
    return {
      typeUrl: "/hyperweb.hvm.MsgInstantiate",
      value: MsgInstantiate.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgInstantiateResponse(): MsgInstantiateResponse {
  return {
    index: BigInt(0),
    address: ""
  };
}
export const MsgInstantiateResponse = {
  typeUrl: "/hyperweb.hvm.MsgInstantiateResponse",
  aminoType: "hvm/x/hvm/MsgInstantiateResponse",
  is(o: any): o is MsgInstantiateResponse {
    return o && (o.$typeUrl === MsgInstantiateResponse.typeUrl || typeof o.index === "bigint" && typeof o.address === "string");
  },
  isSDK(o: any): o is MsgInstantiateResponseSDKType {
    return o && (o.$typeUrl === MsgInstantiateResponse.typeUrl || typeof o.index === "bigint" && typeof o.address === "string");
  },
  isAmino(o: any): o is MsgInstantiateResponseAmino {
    return o && (o.$typeUrl === MsgInstantiateResponse.typeUrl || typeof o.index === "bigint" && typeof o.address === "string");
  },
  encode(message: MsgInstantiateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== undefined) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.address !== undefined) {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgInstantiateResponse {
    const obj = createBaseMsgInstantiateResponse();
    if (isSet(object.index)) obj.index = BigInt(object.index.toString());
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: MsgInstantiateResponse): JsonSafe<MsgInstantiateResponse> {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgInstantiateResponse>): MsgInstantiateResponse {
    const message = createBaseMsgInstantiateResponse();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index.toString());
    }
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: MsgInstantiateResponseSDKType): MsgInstantiateResponse {
    return {
      index: object?.index,
      address: object?.address
    };
  },
  toSDK(message: MsgInstantiateResponse): MsgInstantiateResponseSDKType {
    const obj: any = {};
    obj.index = message.index;
    obj.address = message.address;
    return obj;
  },
  fromAmino(object: MsgInstantiateResponseAmino): MsgInstantiateResponse {
    const message = createBaseMsgInstantiateResponse();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: MsgInstantiateResponse): MsgInstantiateResponseAmino {
    const obj: any = {};
    obj.index = message.index !== BigInt(0) ? message.index?.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: MsgInstantiateResponseAminoMsg): MsgInstantiateResponse {
    return MsgInstantiateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgInstantiateResponse): MsgInstantiateResponseAminoMsg {
    return {
      type: "hvm/x/hvm/MsgInstantiateResponse",
      value: MsgInstantiateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgInstantiateResponseProtoMsg): MsgInstantiateResponse {
    return MsgInstantiateResponse.decode(message.value);
  },
  toProto(message: MsgInstantiateResponse): Uint8Array {
    return MsgInstantiateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantiateResponse): MsgInstantiateResponseProtoMsg {
    return {
      typeUrl: "/hyperweb.hvm.MsgInstantiateResponse",
      value: MsgInstantiateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgEval(): MsgEval {
  return {
    creator: "",
    address: "",
    callee: "",
    args: []
  };
}
export const MsgEval = {
  typeUrl: "/hyperweb.hvm.MsgEval",
  aminoType: "hvm/x/hvm/MsgEval",
  is(o: any): o is MsgEval {
    return o && (o.$typeUrl === MsgEval.typeUrl || typeof o.creator === "string" && typeof o.address === "string" && typeof o.callee === "string" && Array.isArray(o.args) && (!o.args.length || typeof o.args[0] === "string"));
  },
  isSDK(o: any): o is MsgEvalSDKType {
    return o && (o.$typeUrl === MsgEval.typeUrl || typeof o.creator === "string" && typeof o.address === "string" && typeof o.callee === "string" && Array.isArray(o.args) && (!o.args.length || typeof o.args[0] === "string"));
  },
  isAmino(o: any): o is MsgEvalAmino {
    return o && (o.$typeUrl === MsgEval.typeUrl || typeof o.creator === "string" && typeof o.address === "string" && typeof o.callee === "string" && Array.isArray(o.args) && (!o.args.length || typeof o.args[0] === "string"));
  },
  encode(message: MsgEval, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== undefined) {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== undefined) {
      writer.uint32(18).string(message.address);
    }
    if (message.callee !== undefined) {
      writer.uint32(26).string(message.callee);
    }
    for (const v of message.args) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEval {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEval();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.callee = reader.string();
          break;
        case 4:
          message.args.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgEval {
    const obj = createBaseMsgEval();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.callee)) obj.callee = String(object.callee);
    if (Array.isArray(object?.args)) obj.args = object.args.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: MsgEval): JsonSafe<MsgEval> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    message.callee !== undefined && (obj.callee = message.callee);
    if (message.args) {
      obj.args = message.args.map(e => e);
    } else {
      obj.args = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgEval>): MsgEval {
    const message = createBaseMsgEval();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.callee = object.callee ?? "";
    message.args = object.args?.map(e => e) || [];
    return message;
  },
  fromSDK(object: MsgEvalSDKType): MsgEval {
    return {
      creator: object?.creator,
      address: object?.address,
      callee: object?.callee,
      args: Array.isArray(object?.args) ? object.args.map((e: any) => e) : []
    };
  },
  toSDK(message: MsgEval): MsgEvalSDKType {
    const obj: any = {};
    obj.creator = message.creator;
    obj.address = message.address;
    obj.callee = message.callee;
    if (message.args) {
      obj.args = message.args.map(e => e);
    } else {
      obj.args = [];
    }
    return obj;
  },
  fromAmino(object: MsgEvalAmino): MsgEval {
    const message = createBaseMsgEval();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.callee !== undefined && object.callee !== null) {
      message.callee = object.callee;
    }
    message.args = object.args?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgEval): MsgEvalAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.address = message.address === "" ? undefined : message.address;
    obj.callee = message.callee === "" ? undefined : message.callee;
    if (message.args) {
      obj.args = message.args.map(e => e);
    } else {
      obj.args = message.args;
    }
    return obj;
  },
  fromAminoMsg(object: MsgEvalAminoMsg): MsgEval {
    return MsgEval.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEval): MsgEvalAminoMsg {
    return {
      type: "hvm/x/hvm/MsgEval",
      value: MsgEval.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEvalProtoMsg): MsgEval {
    return MsgEval.decode(message.value);
  },
  toProto(message: MsgEval): Uint8Array {
    return MsgEval.encode(message).finish();
  },
  toProtoMsg(message: MsgEval): MsgEvalProtoMsg {
    return {
      typeUrl: "/hyperweb.hvm.MsgEval",
      value: MsgEval.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgEvalResponse(): MsgEvalResponse {
  return {
    result: ""
  };
}
export const MsgEvalResponse = {
  typeUrl: "/hyperweb.hvm.MsgEvalResponse",
  aminoType: "hvm/x/hvm/MsgEvalResponse",
  is(o: any): o is MsgEvalResponse {
    return o && (o.$typeUrl === MsgEvalResponse.typeUrl || typeof o.result === "string");
  },
  isSDK(o: any): o is MsgEvalResponseSDKType {
    return o && (o.$typeUrl === MsgEvalResponse.typeUrl || typeof o.result === "string");
  },
  isAmino(o: any): o is MsgEvalResponseAmino {
    return o && (o.$typeUrl === MsgEvalResponse.typeUrl || typeof o.result === "string");
  },
  encode(message: MsgEvalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== undefined) {
      writer.uint32(10).string(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEvalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEvalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgEvalResponse {
    const obj = createBaseMsgEvalResponse();
    if (isSet(object.result)) obj.result = String(object.result);
    return obj;
  },
  toJSON(message: MsgEvalResponse): JsonSafe<MsgEvalResponse> {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgEvalResponse>): MsgEvalResponse {
    const message = createBaseMsgEvalResponse();
    message.result = object.result ?? "";
    return message;
  },
  fromSDK(object: MsgEvalResponseSDKType): MsgEvalResponse {
    return {
      result: object?.result
    };
  },
  toSDK(message: MsgEvalResponse): MsgEvalResponseSDKType {
    const obj: any = {};
    obj.result = message.result;
    return obj;
  },
  fromAmino(object: MsgEvalResponseAmino): MsgEvalResponse {
    const message = createBaseMsgEvalResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: MsgEvalResponse): MsgEvalResponseAmino {
    const obj: any = {};
    obj.result = message.result === "" ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: MsgEvalResponseAminoMsg): MsgEvalResponse {
    return MsgEvalResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEvalResponse): MsgEvalResponseAminoMsg {
    return {
      type: "hvm/x/hvm/MsgEvalResponse",
      value: MsgEvalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEvalResponseProtoMsg): MsgEvalResponse {
    return MsgEvalResponse.decode(message.value);
  },
  toProto(message: MsgEvalResponse): Uint8Array {
    return MsgEvalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEvalResponse): MsgEvalResponseProtoMsg {
    return {
      typeUrl: "/hyperweb.hvm.MsgEvalResponse",
      value: MsgEvalResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};