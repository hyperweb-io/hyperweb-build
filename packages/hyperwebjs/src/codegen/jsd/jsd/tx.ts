import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "jsd.jsd";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/jsd.jsd.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
  /** NOTE: All parameters must be supplied. */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "jsd/x/jsd/MsgUpdateParams";
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
  typeUrl: "/jsd.jsd.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/jsd.jsd.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgInstantiate {
  creator: string;
  code: string;
}
export interface MsgInstantiateProtoMsg {
  typeUrl: "/jsd.jsd.MsgInstantiate";
  value: Uint8Array;
}
export interface MsgInstantiateAmino {
  creator?: string;
  code?: string;
}
export interface MsgInstantiateAminoMsg {
  type: "/jsd.jsd.MsgInstantiate";
  value: MsgInstantiateAmino;
}
export interface MsgInstantiateSDKType {
  creator: string;
  code: string;
}
export interface MsgInstantiateResponse {
  index: bigint;
}
export interface MsgInstantiateResponseProtoMsg {
  typeUrl: "/jsd.jsd.MsgInstantiateResponse";
  value: Uint8Array;
}
export interface MsgInstantiateResponseAmino {
  index?: string;
}
export interface MsgInstantiateResponseAminoMsg {
  type: "/jsd.jsd.MsgInstantiateResponse";
  value: MsgInstantiateResponseAmino;
}
export interface MsgInstantiateResponseSDKType {
  index: bigint;
}
export interface MsgEval {
  creator: string;
  index: bigint;
  fnName: string;
  arg: string;
}
export interface MsgEvalProtoMsg {
  typeUrl: "/jsd.jsd.MsgEval";
  value: Uint8Array;
}
export interface MsgEvalAmino {
  creator?: string;
  index?: string;
  fn_name?: string;
  arg?: string;
}
export interface MsgEvalAminoMsg {
  type: "/jsd.jsd.MsgEval";
  value: MsgEvalAmino;
}
export interface MsgEvalSDKType {
  creator: string;
  index: bigint;
  fn_name: string;
  arg: string;
}
export interface MsgEvalResponse {
  result: string;
}
export interface MsgEvalResponseProtoMsg {
  typeUrl: "/jsd.jsd.MsgEvalResponse";
  value: Uint8Array;
}
export interface MsgEvalResponseAmino {
  result?: string;
}
export interface MsgEvalResponseAminoMsg {
  type: "/jsd.jsd.MsgEvalResponse";
  value: MsgEvalResponseAmino;
}
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
  typeUrl: "/jsd.jsd.MsgUpdateParams",
  aminoType: "jsd/x/jsd/MsgUpdateParams",
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
      type: "jsd/x/jsd/MsgUpdateParams",
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
      typeUrl: "/jsd.jsd.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/jsd.jsd.MsgUpdateParamsResponse",
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
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/jsd.jsd.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
function createBaseMsgInstantiate(): MsgInstantiate {
  return {
    creator: "",
    code: ""
  };
}
export const MsgInstantiate = {
  typeUrl: "/jsd.jsd.MsgInstantiate",
  is(o: any): o is MsgInstantiate {
    return o && (o.$typeUrl === MsgInstantiate.typeUrl || typeof o.creator === "string" && typeof o.code === "string");
  },
  isSDK(o: any): o is MsgInstantiateSDKType {
    return o && (o.$typeUrl === MsgInstantiate.typeUrl || typeof o.creator === "string" && typeof o.code === "string");
  },
  isAmino(o: any): o is MsgInstantiateAmino {
    return o && (o.$typeUrl === MsgInstantiate.typeUrl || typeof o.creator === "string" && typeof o.code === "string");
  },
  encode(message: MsgInstantiate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== undefined) {
      writer.uint32(10).string(message.creator);
    }
    if (message.code !== undefined) {
      writer.uint32(18).string(message.code);
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
    return obj;
  },
  toJSON(message: MsgInstantiate): JsonSafe<MsgInstantiate> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.code !== undefined && (obj.code = message.code);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgInstantiate>): MsgInstantiate {
    const message = createBaseMsgInstantiate();
    message.creator = object.creator ?? "";
    message.code = object.code ?? "";
    return message;
  },
  fromSDK(object: MsgInstantiateSDKType): MsgInstantiate {
    return {
      creator: object?.creator,
      code: object?.code
    };
  },
  toSDK(message: MsgInstantiate): MsgInstantiateSDKType {
    const obj: any = {};
    obj.creator = message.creator;
    obj.code = message.code;
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
    return message;
  },
  toAmino(message: MsgInstantiate): MsgInstantiateAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.code = message.code === "" ? undefined : message.code;
    return obj;
  },
  fromAminoMsg(object: MsgInstantiateAminoMsg): MsgInstantiate {
    return MsgInstantiate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInstantiateProtoMsg): MsgInstantiate {
    return MsgInstantiate.decode(message.value);
  },
  toProto(message: MsgInstantiate): Uint8Array {
    return MsgInstantiate.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantiate): MsgInstantiateProtoMsg {
    return {
      typeUrl: "/jsd.jsd.MsgInstantiate",
      value: MsgInstantiate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgInstantiate.typeUrl, MsgInstantiate);
function createBaseMsgInstantiateResponse(): MsgInstantiateResponse {
  return {
    index: BigInt(0)
  };
}
export const MsgInstantiateResponse = {
  typeUrl: "/jsd.jsd.MsgInstantiateResponse",
  is(o: any): o is MsgInstantiateResponse {
    return o && (o.$typeUrl === MsgInstantiateResponse.typeUrl || typeof o.index === "bigint");
  },
  isSDK(o: any): o is MsgInstantiateResponseSDKType {
    return o && (o.$typeUrl === MsgInstantiateResponse.typeUrl || typeof o.index === "bigint");
  },
  isAmino(o: any): o is MsgInstantiateResponseAmino {
    return o && (o.$typeUrl === MsgInstantiateResponse.typeUrl || typeof o.index === "bigint");
  },
  encode(message: MsgInstantiateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== undefined) {
      writer.uint32(8).uint64(message.index);
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
    return obj;
  },
  toJSON(message: MsgInstantiateResponse): JsonSafe<MsgInstantiateResponse> {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgInstantiateResponse>): MsgInstantiateResponse {
    const message = createBaseMsgInstantiateResponse();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index.toString());
    }
    return message;
  },
  fromSDK(object: MsgInstantiateResponseSDKType): MsgInstantiateResponse {
    return {
      index: object?.index
    };
  },
  toSDK(message: MsgInstantiateResponse): MsgInstantiateResponseSDKType {
    const obj: any = {};
    obj.index = message.index;
    return obj;
  },
  fromAmino(object: MsgInstantiateResponseAmino): MsgInstantiateResponse {
    const message = createBaseMsgInstantiateResponse();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    return message;
  },
  toAmino(message: MsgInstantiateResponse): MsgInstantiateResponseAmino {
    const obj: any = {};
    obj.index = message.index !== BigInt(0) ? (message.index?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgInstantiateResponseAminoMsg): MsgInstantiateResponse {
    return MsgInstantiateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInstantiateResponseProtoMsg): MsgInstantiateResponse {
    return MsgInstantiateResponse.decode(message.value);
  },
  toProto(message: MsgInstantiateResponse): Uint8Array {
    return MsgInstantiateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantiateResponse): MsgInstantiateResponseProtoMsg {
    return {
      typeUrl: "/jsd.jsd.MsgInstantiateResponse",
      value: MsgInstantiateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgInstantiateResponse.typeUrl, MsgInstantiateResponse);
function createBaseMsgEval(): MsgEval {
  return {
    creator: "",
    index: BigInt(0),
    fnName: "",
    arg: ""
  };
}
export const MsgEval = {
  typeUrl: "/jsd.jsd.MsgEval",
  is(o: any): o is MsgEval {
    return o && (o.$typeUrl === MsgEval.typeUrl || typeof o.creator === "string" && typeof o.index === "bigint" && typeof o.fnName === "string" && typeof o.arg === "string");
  },
  isSDK(o: any): o is MsgEvalSDKType {
    return o && (o.$typeUrl === MsgEval.typeUrl || typeof o.creator === "string" && typeof o.index === "bigint" && typeof o.fn_name === "string" && typeof o.arg === "string");
  },
  isAmino(o: any): o is MsgEvalAmino {
    return o && (o.$typeUrl === MsgEval.typeUrl || typeof o.creator === "string" && typeof o.index === "bigint" && typeof o.fn_name === "string" && typeof o.arg === "string");
  },
  encode(message: MsgEval, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== undefined) {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== undefined) {
      writer.uint32(16).uint64(message.index);
    }
    if (message.fnName !== undefined) {
      writer.uint32(26).string(message.fnName);
    }
    if (message.arg !== undefined) {
      writer.uint32(34).string(message.arg);
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
          message.index = reader.uint64();
          break;
        case 3:
          message.fnName = reader.string();
          break;
        case 4:
          message.arg = reader.string();
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
    if (isSet(object.index)) obj.index = BigInt(object.index.toString());
    if (isSet(object.fnName)) obj.fnName = String(object.fnName);
    if (isSet(object.arg)) obj.arg = String(object.arg);
    return obj;
  },
  toJSON(message: MsgEval): JsonSafe<MsgEval> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
    message.fnName !== undefined && (obj.fnName = message.fnName);
    message.arg !== undefined && (obj.arg = message.arg);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgEval>): MsgEval {
    const message = createBaseMsgEval();
    message.creator = object.creator ?? "";
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index.toString());
    }
    message.fnName = object.fnName ?? "";
    message.arg = object.arg ?? "";
    return message;
  },
  fromSDK(object: MsgEvalSDKType): MsgEval {
    return {
      creator: object?.creator,
      index: object?.index,
      fnName: object?.fn_name,
      arg: object?.arg
    };
  },
  toSDK(message: MsgEval): MsgEvalSDKType {
    const obj: any = {};
    obj.creator = message.creator;
    obj.index = message.index;
    obj.fn_name = message.fnName;
    obj.arg = message.arg;
    return obj;
  },
  fromAmino(object: MsgEvalAmino): MsgEval {
    const message = createBaseMsgEval();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.fn_name !== undefined && object.fn_name !== null) {
      message.fnName = object.fn_name;
    }
    if (object.arg !== undefined && object.arg !== null) {
      message.arg = object.arg;
    }
    return message;
  },
  toAmino(message: MsgEval): MsgEvalAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.index = message.index !== BigInt(0) ? (message.index?.toString)() : undefined;
    obj.fn_name = message.fnName === "" ? undefined : message.fnName;
    obj.arg = message.arg === "" ? undefined : message.arg;
    return obj;
  },
  fromAminoMsg(object: MsgEvalAminoMsg): MsgEval {
    return MsgEval.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEvalProtoMsg): MsgEval {
    return MsgEval.decode(message.value);
  },
  toProto(message: MsgEval): Uint8Array {
    return MsgEval.encode(message).finish();
  },
  toProtoMsg(message: MsgEval): MsgEvalProtoMsg {
    return {
      typeUrl: "/jsd.jsd.MsgEval",
      value: MsgEval.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgEval.typeUrl, MsgEval);
function createBaseMsgEvalResponse(): MsgEvalResponse {
  return {
    result: ""
  };
}
export const MsgEvalResponse = {
  typeUrl: "/jsd.jsd.MsgEvalResponse",
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
  fromProtoMsg(message: MsgEvalResponseProtoMsg): MsgEvalResponse {
    return MsgEvalResponse.decode(message.value);
  },
  toProto(message: MsgEvalResponse): Uint8Array {
    return MsgEvalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEvalResponse): MsgEvalResponseProtoMsg {
    return {
      typeUrl: "/jsd.jsd.MsgEvalResponse",
      value: MsgEvalResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgEvalResponse.typeUrl, MsgEvalResponse);