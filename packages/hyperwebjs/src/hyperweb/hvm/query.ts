import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Contracts, ContractsAmino, ContractsSDKType } from "./contracts";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "hyperweb.hvm";
/** params request */
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  typeUrl: "/hyperweb.hvm.ParamsRequest";
  value: Uint8Array;
}
/** params request */
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: "/hyperweb.hvm.ParamsRequest";
  value: ParamsRequestAmino;
}
/** params request */
export interface ParamsRequestSDKType {}
/** params response */
export interface ParamsResponse {
  /** params holds all the parameters of this module */
  params: Params;
}
export interface ParamsResponseProtoMsg {
  typeUrl: "/hyperweb.hvm.ParamsResponse";
  value: Uint8Array;
}
/** params response */
export interface ParamsResponseAmino {
  /** params holds all the parameters of this module */
  params: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
  type: "/hyperweb.hvm.ParamsResponse";
  value: ParamsResponseAmino;
}
/** params response */
export interface ParamsResponseSDKType {
  params: ParamsSDKType;
}
/** request to get contract by index */
export interface GetContractByIndexRequest {
  index: bigint;
}
export interface GetContractByIndexRequestProtoMsg {
  typeUrl: "/hyperweb.hvm.GetContractByIndexRequest";
  value: Uint8Array;
}
/** request to get contract by index */
export interface GetContractByIndexRequestAmino {
  index?: string;
}
export interface GetContractByIndexRequestAminoMsg {
  type: "/hyperweb.hvm.GetContractByIndexRequest";
  value: GetContractByIndexRequestAmino;
}
/** request to get contract by index */
export interface GetContractByIndexRequestSDKType {
  index: bigint;
}
/** response with contract by index */
export interface GetContractByIndexResponse {
  contract: Contracts;
}
export interface GetContractByIndexResponseProtoMsg {
  typeUrl: "/hyperweb.hvm.GetContractByIndexResponse";
  value: Uint8Array;
}
/** response with contract by index */
export interface GetContractByIndexResponseAmino {
  contract?: ContractsAmino;
}
export interface GetContractByIndexResponseAminoMsg {
  type: "/hyperweb.hvm.GetContractByIndexResponse";
  value: GetContractByIndexResponseAmino;
}
/** response with contract by index */
export interface GetContractByIndexResponseSDKType {
  contract: ContractsSDKType;
}
/** request to get a single contract */
export interface GetContractRequest {
  address: string;
}
export interface GetContractRequestProtoMsg {
  typeUrl: "/hyperweb.hvm.GetContractRequest";
  value: Uint8Array;
}
/** request to get a single contract */
export interface GetContractRequestAmino {
  address?: string;
}
export interface GetContractRequestAminoMsg {
  type: "/hyperweb.hvm.GetContractRequest";
  value: GetContractRequestAmino;
}
/** request to get a single contract */
export interface GetContractRequestSDKType {
  address: string;
}
/** response with a single contract */
export interface GetContractResponse {
  contract: Contracts;
}
export interface GetContractResponseProtoMsg {
  typeUrl: "/hyperweb.hvm.GetContractResponse";
  value: Uint8Array;
}
/** response with a single contract */
export interface GetContractResponseAmino {
  contract?: ContractsAmino;
}
export interface GetContractResponseAminoMsg {
  type: "/hyperweb.hvm.GetContractResponse";
  value: GetContractResponseAmino;
}
/** response with a single contract */
export interface GetContractResponseSDKType {
  contract: ContractsSDKType;
}
/** request to list all contracts */
export interface ListContractsRequest {
  pagination?: PageRequest;
}
export interface ListContractsRequestProtoMsg {
  typeUrl: "/hyperweb.hvm.ListContractsRequest";
  value: Uint8Array;
}
/** request to list all contracts */
export interface ListContractsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface ListContractsRequestAminoMsg {
  type: "/hyperweb.hvm.ListContractsRequest";
  value: ListContractsRequestAmino;
}
/** request to list all contracts */
export interface ListContractsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** response with list of contracts */
export interface ListContractsResponse {
  contracts: Contracts[];
  pagination?: PageResponse;
}
export interface ListContractsResponseProtoMsg {
  typeUrl: "/hyperweb.hvm.ListContractsResponse";
  value: Uint8Array;
}
/** response with list of contracts */
export interface ListContractsResponseAmino {
  contracts?: ContractsAmino[];
  pagination?: PageResponseAmino;
}
export interface ListContractsResponseAminoMsg {
  type: "/hyperweb.hvm.ListContractsResponse";
  value: ListContractsResponseAmino;
}
/** response with list of contracts */
export interface ListContractsResponseSDKType {
  contracts: ContractsSDKType[];
  pagination?: PageResponseSDKType;
}
/** request to evaluate contract function */
export interface EvalRequest {
  address: string;
  callee: string;
  args: string[];
}
export interface EvalRequestProtoMsg {
  typeUrl: "/hyperweb.hvm.EvalRequest";
  value: Uint8Array;
}
/** request to evaluate contract function */
export interface EvalRequestAmino {
  address?: string;
  callee?: string;
  args?: string[];
}
export interface EvalRequestAminoMsg {
  type: "/hyperweb.hvm.EvalRequest";
  value: EvalRequestAmino;
}
/** request to evaluate contract function */
export interface EvalRequestSDKType {
  address: string;
  callee: string;
  args: string[];
}
/** response from contract function evaluation */
export interface EvalResponse {
  result: string;
}
export interface EvalResponseProtoMsg {
  typeUrl: "/hyperweb.hvm.EvalResponse";
  value: Uint8Array;
}
/** response from contract function evaluation */
export interface EvalResponseAmino {
  result?: string;
}
export interface EvalResponseAminoMsg {
  type: "/hyperweb.hvm.EvalResponse";
  value: EvalResponseAmino;
}
/** response from contract function evaluation */
export interface EvalResponseSDKType {
  result: string;
}
/** request to get contract local state */
export interface LocalStateRequest {
  address: string;
  key: string;
}
export interface LocalStateRequestProtoMsg {
  typeUrl: "/hyperweb.hvm.LocalStateRequest";
  value: Uint8Array;
}
/** request to get contract local state */
export interface LocalStateRequestAmino {
  address?: string;
  key?: string;
}
export interface LocalStateRequestAminoMsg {
  type: "/hyperweb.hvm.LocalStateRequest";
  value: LocalStateRequestAmino;
}
/** request to get contract local state */
export interface LocalStateRequestSDKType {
  address: string;
  key: string;
}
/** response with contract local state */
export interface LocalStateResponse {
  value: string;
}
export interface LocalStateResponseProtoMsg {
  typeUrl: "/hyperweb.hvm.LocalStateResponse";
  value: Uint8Array;
}
/** response with contract local state */
export interface LocalStateResponseAmino {
  value?: string;
}
export interface LocalStateResponseAminoMsg {
  type: "/hyperweb.hvm.LocalStateResponse";
  value: LocalStateResponseAmino;
}
/** response with contract local state */
export interface LocalStateResponseSDKType {
  value: string;
}
/** request to get contract source code */
export interface GetContractSourceRequest {
  address: string;
}
export interface GetContractSourceRequestProtoMsg {
  typeUrl: "/hyperweb.hvm.GetContractSourceRequest";
  value: Uint8Array;
}
/** request to get contract source code */
export interface GetContractSourceRequestAmino {
  address?: string;
}
export interface GetContractSourceRequestAminoMsg {
  type: "/hyperweb.hvm.GetContractSourceRequest";
  value: GetContractSourceRequestAmino;
}
/** request to get contract source code */
export interface GetContractSourceRequestSDKType {
  address: string;
}
/** response with contract source code */
export interface GetContractSourceResponse {
  source: string;
}
export interface GetContractSourceResponseProtoMsg {
  typeUrl: "/hyperweb.hvm.GetContractSourceResponse";
  value: Uint8Array;
}
/** response with contract source code */
export interface GetContractSourceResponseAmino {
  source?: string;
}
export interface GetContractSourceResponseAminoMsg {
  type: "/hyperweb.hvm.GetContractSourceResponse";
  value: GetContractSourceResponseAmino;
}
/** response with contract source code */
export interface GetContractSourceResponseSDKType {
  source: string;
}
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/hyperweb.hvm.ParamsRequest",
  is(o: any): o is ParamsRequest {
    return o && o.$typeUrl === ParamsRequest.typeUrl;
  },
  isSDK(o: any): o is ParamsRequestSDKType {
    return o && o.$typeUrl === ParamsRequest.typeUrl;
  },
  isAmino(o: any): o is ParamsRequestAmino {
    return o && o.$typeUrl === ParamsRequest.typeUrl;
  },
  encode(_: ParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
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
  fromJSON(_: any): ParamsRequest {
    const obj = createBaseParamsRequest();
    return obj;
  },
  toJSON(_: ParamsRequest): JsonSafe<ParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<ParamsRequest>): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  fromSDK(_: ParamsRequestSDKType): ParamsRequest {
    return {};
  },
  toSDK(_: ParamsRequest): ParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: ParamsRequestAmino): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  toAmino(_: ParamsRequest): ParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest {
    return ParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest {
    return ParamsRequest.decode(message.value);
  },
  toProto(message: ParamsRequest): Uint8Array {
    return ParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg {
    return {
      typeUrl: "/hyperweb.hvm.ParamsRequest",
      value: ParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ParamsRequest.typeUrl, ParamsRequest);
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const ParamsResponse = {
  typeUrl: "/hyperweb.hvm.ParamsResponse",
  is(o: any): o is ParamsResponse {
    return o && (o.$typeUrl === ParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is ParamsResponseSDKType {
    return o && (o.$typeUrl === ParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is ParamsResponseAmino {
    return o && (o.$typeUrl === ParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: ParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ParamsResponse {
    const obj = createBaseParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: ParamsResponse): JsonSafe<ParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ParamsResponse>): ParamsResponse {
    const message = createBaseParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromSDK(object: ParamsResponseSDKType): ParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: ParamsResponse): ParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: ParamsResponseAmino): ParamsResponse {
    const message = createBaseParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: ParamsResponse): ParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse {
    return ParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse {
    return ParamsResponse.decode(message.value);
  },
  toProto(message: ParamsResponse): Uint8Array {
    return ParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg {
    return {
      typeUrl: "/hyperweb.hvm.ParamsResponse",
      value: ParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ParamsResponse.typeUrl, ParamsResponse);
function createBaseGetContractByIndexRequest(): GetContractByIndexRequest {
  return {
    index: BigInt(0)
  };
}
export const GetContractByIndexRequest = {
  typeUrl: "/hyperweb.hvm.GetContractByIndexRequest",
  is(o: any): o is GetContractByIndexRequest {
    return o && (o.$typeUrl === GetContractByIndexRequest.typeUrl || typeof o.index === "bigint");
  },
  isSDK(o: any): o is GetContractByIndexRequestSDKType {
    return o && (o.$typeUrl === GetContractByIndexRequest.typeUrl || typeof o.index === "bigint");
  },
  isAmino(o: any): o is GetContractByIndexRequestAmino {
    return o && (o.$typeUrl === GetContractByIndexRequest.typeUrl || typeof o.index === "bigint");
  },
  encode(message: GetContractByIndexRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== undefined) {
      writer.uint32(8).uint64(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetContractByIndexRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetContractByIndexRequest();
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
  fromJSON(object: any): GetContractByIndexRequest {
    const obj = createBaseGetContractByIndexRequest();
    if (isSet(object.index)) obj.index = BigInt(object.index.toString());
    return obj;
  },
  toJSON(message: GetContractByIndexRequest): JsonSafe<GetContractByIndexRequest> {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<GetContractByIndexRequest>): GetContractByIndexRequest {
    const message = createBaseGetContractByIndexRequest();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index.toString());
    }
    return message;
  },
  fromSDK(object: GetContractByIndexRequestSDKType): GetContractByIndexRequest {
    return {
      index: object?.index
    };
  },
  toSDK(message: GetContractByIndexRequest): GetContractByIndexRequestSDKType {
    const obj: any = {};
    obj.index = message.index;
    return obj;
  },
  fromAmino(object: GetContractByIndexRequestAmino): GetContractByIndexRequest {
    const message = createBaseGetContractByIndexRequest();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    return message;
  },
  toAmino(message: GetContractByIndexRequest): GetContractByIndexRequestAmino {
    const obj: any = {};
    obj.index = message.index !== BigInt(0) ? (message.index?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: GetContractByIndexRequestAminoMsg): GetContractByIndexRequest {
    return GetContractByIndexRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetContractByIndexRequestProtoMsg): GetContractByIndexRequest {
    return GetContractByIndexRequest.decode(message.value);
  },
  toProto(message: GetContractByIndexRequest): Uint8Array {
    return GetContractByIndexRequest.encode(message).finish();
  },
  toProtoMsg(message: GetContractByIndexRequest): GetContractByIndexRequestProtoMsg {
    return {
      typeUrl: "/hyperweb.hvm.GetContractByIndexRequest",
      value: GetContractByIndexRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetContractByIndexRequest.typeUrl, GetContractByIndexRequest);
function createBaseGetContractByIndexResponse(): GetContractByIndexResponse {
  return {
    contract: Contracts.fromPartial({})
  };
}
export const GetContractByIndexResponse = {
  typeUrl: "/hyperweb.hvm.GetContractByIndexResponse",
  is(o: any): o is GetContractByIndexResponse {
    return o && (o.$typeUrl === GetContractByIndexResponse.typeUrl || Contracts.is(o.contract));
  },
  isSDK(o: any): o is GetContractByIndexResponseSDKType {
    return o && (o.$typeUrl === GetContractByIndexResponse.typeUrl || Contracts.isSDK(o.contract));
  },
  isAmino(o: any): o is GetContractByIndexResponseAmino {
    return o && (o.$typeUrl === GetContractByIndexResponse.typeUrl || Contracts.isAmino(o.contract));
  },
  encode(message: GetContractByIndexResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== undefined) {
      Contracts.encode(message.contract, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetContractByIndexResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetContractByIndexResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = Contracts.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetContractByIndexResponse {
    const obj = createBaseGetContractByIndexResponse();
    if (isSet(object.contract)) obj.contract = Contracts.fromJSON(object.contract);
    return obj;
  },
  toJSON(message: GetContractByIndexResponse): JsonSafe<GetContractByIndexResponse> {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract ? Contracts.toJSON(message.contract) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetContractByIndexResponse>): GetContractByIndexResponse {
    const message = createBaseGetContractByIndexResponse();
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = Contracts.fromPartial(object.contract);
    }
    return message;
  },
  fromSDK(object: GetContractByIndexResponseSDKType): GetContractByIndexResponse {
    return {
      contract: object.contract ? Contracts.fromSDK(object.contract) : undefined
    };
  },
  toSDK(message: GetContractByIndexResponse): GetContractByIndexResponseSDKType {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract ? Contracts.toSDK(message.contract) : undefined);
    return obj;
  },
  fromAmino(object: GetContractByIndexResponseAmino): GetContractByIndexResponse {
    const message = createBaseGetContractByIndexResponse();
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = Contracts.fromAmino(object.contract);
    }
    return message;
  },
  toAmino(message: GetContractByIndexResponse): GetContractByIndexResponseAmino {
    const obj: any = {};
    obj.contract = message.contract ? Contracts.toAmino(message.contract) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetContractByIndexResponseAminoMsg): GetContractByIndexResponse {
    return GetContractByIndexResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: GetContractByIndexResponseProtoMsg): GetContractByIndexResponse {
    return GetContractByIndexResponse.decode(message.value);
  },
  toProto(message: GetContractByIndexResponse): Uint8Array {
    return GetContractByIndexResponse.encode(message).finish();
  },
  toProtoMsg(message: GetContractByIndexResponse): GetContractByIndexResponseProtoMsg {
    return {
      typeUrl: "/hyperweb.hvm.GetContractByIndexResponse",
      value: GetContractByIndexResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetContractByIndexResponse.typeUrl, GetContractByIndexResponse);
function createBaseGetContractRequest(): GetContractRequest {
  return {
    address: ""
  };
}
export const GetContractRequest = {
  typeUrl: "/hyperweb.hvm.GetContractRequest",
  is(o: any): o is GetContractRequest {
    return o && (o.$typeUrl === GetContractRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is GetContractRequestSDKType {
    return o && (o.$typeUrl === GetContractRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is GetContractRequestAmino {
    return o && (o.$typeUrl === GetContractRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: GetContractRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetContractRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetContractRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetContractRequest {
    const obj = createBaseGetContractRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: GetContractRequest): JsonSafe<GetContractRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: DeepPartial<GetContractRequest>): GetContractRequest {
    const message = createBaseGetContractRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: GetContractRequestSDKType): GetContractRequest {
    return {
      address: object?.address
    };
  },
  toSDK(message: GetContractRequest): GetContractRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAmino(object: GetContractRequestAmino): GetContractRequest {
    const message = createBaseGetContractRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: GetContractRequest): GetContractRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: GetContractRequestAminoMsg): GetContractRequest {
    return GetContractRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetContractRequestProtoMsg): GetContractRequest {
    return GetContractRequest.decode(message.value);
  },
  toProto(message: GetContractRequest): Uint8Array {
    return GetContractRequest.encode(message).finish();
  },
  toProtoMsg(message: GetContractRequest): GetContractRequestProtoMsg {
    return {
      typeUrl: "/hyperweb.hvm.GetContractRequest",
      value: GetContractRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetContractRequest.typeUrl, GetContractRequest);
function createBaseGetContractResponse(): GetContractResponse {
  return {
    contract: Contracts.fromPartial({})
  };
}
export const GetContractResponse = {
  typeUrl: "/hyperweb.hvm.GetContractResponse",
  is(o: any): o is GetContractResponse {
    return o && (o.$typeUrl === GetContractResponse.typeUrl || Contracts.is(o.contract));
  },
  isSDK(o: any): o is GetContractResponseSDKType {
    return o && (o.$typeUrl === GetContractResponse.typeUrl || Contracts.isSDK(o.contract));
  },
  isAmino(o: any): o is GetContractResponseAmino {
    return o && (o.$typeUrl === GetContractResponse.typeUrl || Contracts.isAmino(o.contract));
  },
  encode(message: GetContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== undefined) {
      Contracts.encode(message.contract, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = Contracts.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetContractResponse {
    const obj = createBaseGetContractResponse();
    if (isSet(object.contract)) obj.contract = Contracts.fromJSON(object.contract);
    return obj;
  },
  toJSON(message: GetContractResponse): JsonSafe<GetContractResponse> {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract ? Contracts.toJSON(message.contract) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetContractResponse>): GetContractResponse {
    const message = createBaseGetContractResponse();
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = Contracts.fromPartial(object.contract);
    }
    return message;
  },
  fromSDK(object: GetContractResponseSDKType): GetContractResponse {
    return {
      contract: object.contract ? Contracts.fromSDK(object.contract) : undefined
    };
  },
  toSDK(message: GetContractResponse): GetContractResponseSDKType {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract ? Contracts.toSDK(message.contract) : undefined);
    return obj;
  },
  fromAmino(object: GetContractResponseAmino): GetContractResponse {
    const message = createBaseGetContractResponse();
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = Contracts.fromAmino(object.contract);
    }
    return message;
  },
  toAmino(message: GetContractResponse): GetContractResponseAmino {
    const obj: any = {};
    obj.contract = message.contract ? Contracts.toAmino(message.contract) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetContractResponseAminoMsg): GetContractResponse {
    return GetContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: GetContractResponseProtoMsg): GetContractResponse {
    return GetContractResponse.decode(message.value);
  },
  toProto(message: GetContractResponse): Uint8Array {
    return GetContractResponse.encode(message).finish();
  },
  toProtoMsg(message: GetContractResponse): GetContractResponseProtoMsg {
    return {
      typeUrl: "/hyperweb.hvm.GetContractResponse",
      value: GetContractResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetContractResponse.typeUrl, GetContractResponse);
function createBaseListContractsRequest(): ListContractsRequest {
  return {
    pagination: undefined
  };
}
export const ListContractsRequest = {
  typeUrl: "/hyperweb.hvm.ListContractsRequest",
  is(o: any): o is ListContractsRequest {
    return o && o.$typeUrl === ListContractsRequest.typeUrl;
  },
  isSDK(o: any): o is ListContractsRequestSDKType {
    return o && o.$typeUrl === ListContractsRequest.typeUrl;
  },
  isAmino(o: any): o is ListContractsRequestAmino {
    return o && o.$typeUrl === ListContractsRequest.typeUrl;
  },
  encode(message: ListContractsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListContractsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListContractsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListContractsRequest {
    const obj = createBaseListContractsRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: ListContractsRequest): JsonSafe<ListContractsRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ListContractsRequest>): ListContractsRequest {
    const message = createBaseListContractsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: ListContractsRequestSDKType): ListContractsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: ListContractsRequest): ListContractsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: ListContractsRequestAmino): ListContractsRequest {
    const message = createBaseListContractsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: ListContractsRequest): ListContractsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: ListContractsRequestAminoMsg): ListContractsRequest {
    return ListContractsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ListContractsRequestProtoMsg): ListContractsRequest {
    return ListContractsRequest.decode(message.value);
  },
  toProto(message: ListContractsRequest): Uint8Array {
    return ListContractsRequest.encode(message).finish();
  },
  toProtoMsg(message: ListContractsRequest): ListContractsRequestProtoMsg {
    return {
      typeUrl: "/hyperweb.hvm.ListContractsRequest",
      value: ListContractsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ListContractsRequest.typeUrl, ListContractsRequest);
function createBaseListContractsResponse(): ListContractsResponse {
  return {
    contracts: [],
    pagination: undefined
  };
}
export const ListContractsResponse = {
  typeUrl: "/hyperweb.hvm.ListContractsResponse",
  is(o: any): o is ListContractsResponse {
    return o && (o.$typeUrl === ListContractsResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || Contracts.is(o.contracts[0])));
  },
  isSDK(o: any): o is ListContractsResponseSDKType {
    return o && (o.$typeUrl === ListContractsResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || Contracts.isSDK(o.contracts[0])));
  },
  isAmino(o: any): o is ListContractsResponseAmino {
    return o && (o.$typeUrl === ListContractsResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || Contracts.isAmino(o.contracts[0])));
  },
  encode(message: ListContractsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contracts) {
      Contracts.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListContractsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListContractsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contracts.push(Contracts.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListContractsResponse {
    const obj = createBaseListContractsResponse();
    if (Array.isArray(object?.contracts)) obj.contracts = object.contracts.map((e: any) => Contracts.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: ListContractsResponse): JsonSafe<ListContractsResponse> {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? Contracts.toJSON(e) : undefined);
    } else {
      obj.contracts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ListContractsResponse>): ListContractsResponse {
    const message = createBaseListContractsResponse();
    message.contracts = object.contracts?.map(e => Contracts.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: ListContractsResponseSDKType): ListContractsResponse {
    return {
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => Contracts.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: ListContractsResponse): ListContractsResponseSDKType {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? Contracts.toSDK(e) : undefined);
    } else {
      obj.contracts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: ListContractsResponseAmino): ListContractsResponse {
    const message = createBaseListContractsResponse();
    message.contracts = object.contracts?.map(e => Contracts.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: ListContractsResponse): ListContractsResponseAmino {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? Contracts.toAmino(e) : undefined);
    } else {
      obj.contracts = message.contracts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: ListContractsResponseAminoMsg): ListContractsResponse {
    return ListContractsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ListContractsResponseProtoMsg): ListContractsResponse {
    return ListContractsResponse.decode(message.value);
  },
  toProto(message: ListContractsResponse): Uint8Array {
    return ListContractsResponse.encode(message).finish();
  },
  toProtoMsg(message: ListContractsResponse): ListContractsResponseProtoMsg {
    return {
      typeUrl: "/hyperweb.hvm.ListContractsResponse",
      value: ListContractsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ListContractsResponse.typeUrl, ListContractsResponse);
function createBaseEvalRequest(): EvalRequest {
  return {
    address: "",
    callee: "",
    args: []
  };
}
export const EvalRequest = {
  typeUrl: "/hyperweb.hvm.EvalRequest",
  is(o: any): o is EvalRequest {
    return o && (o.$typeUrl === EvalRequest.typeUrl || typeof o.address === "string" && typeof o.callee === "string" && Array.isArray(o.args) && (!o.args.length || typeof o.args[0] === "string"));
  },
  isSDK(o: any): o is EvalRequestSDKType {
    return o && (o.$typeUrl === EvalRequest.typeUrl || typeof o.address === "string" && typeof o.callee === "string" && Array.isArray(o.args) && (!o.args.length || typeof o.args[0] === "string"));
  },
  isAmino(o: any): o is EvalRequestAmino {
    return o && (o.$typeUrl === EvalRequest.typeUrl || typeof o.address === "string" && typeof o.callee === "string" && Array.isArray(o.args) && (!o.args.length || typeof o.args[0] === "string"));
  },
  encode(message: EvalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    if (message.callee !== undefined) {
      writer.uint32(18).string(message.callee);
    }
    for (const v of message.args) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EvalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.callee = reader.string();
          break;
        case 3:
          message.args.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EvalRequest {
    const obj = createBaseEvalRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.callee)) obj.callee = String(object.callee);
    if (Array.isArray(object?.args)) obj.args = object.args.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: EvalRequest): JsonSafe<EvalRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.callee !== undefined && (obj.callee = message.callee);
    if (message.args) {
      obj.args = message.args.map(e => e);
    } else {
      obj.args = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<EvalRequest>): EvalRequest {
    const message = createBaseEvalRequest();
    message.address = object.address ?? "";
    message.callee = object.callee ?? "";
    message.args = object.args?.map(e => e) || [];
    return message;
  },
  fromSDK(object: EvalRequestSDKType): EvalRequest {
    return {
      address: object?.address,
      callee: object?.callee,
      args: Array.isArray(object?.args) ? object.args.map((e: any) => e) : []
    };
  },
  toSDK(message: EvalRequest): EvalRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.callee = message.callee;
    if (message.args) {
      obj.args = message.args.map(e => e);
    } else {
      obj.args = [];
    }
    return obj;
  },
  fromAmino(object: EvalRequestAmino): EvalRequest {
    const message = createBaseEvalRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.callee !== undefined && object.callee !== null) {
      message.callee = object.callee;
    }
    message.args = object.args?.map(e => e) || [];
    return message;
  },
  toAmino(message: EvalRequest): EvalRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.callee = message.callee === "" ? undefined : message.callee;
    if (message.args) {
      obj.args = message.args.map(e => e);
    } else {
      obj.args = message.args;
    }
    return obj;
  },
  fromAminoMsg(object: EvalRequestAminoMsg): EvalRequest {
    return EvalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: EvalRequestProtoMsg): EvalRequest {
    return EvalRequest.decode(message.value);
  },
  toProto(message: EvalRequest): Uint8Array {
    return EvalRequest.encode(message).finish();
  },
  toProtoMsg(message: EvalRequest): EvalRequestProtoMsg {
    return {
      typeUrl: "/hyperweb.hvm.EvalRequest",
      value: EvalRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EvalRequest.typeUrl, EvalRequest);
function createBaseEvalResponse(): EvalResponse {
  return {
    result: ""
  };
}
export const EvalResponse = {
  typeUrl: "/hyperweb.hvm.EvalResponse",
  is(o: any): o is EvalResponse {
    return o && (o.$typeUrl === EvalResponse.typeUrl || typeof o.result === "string");
  },
  isSDK(o: any): o is EvalResponseSDKType {
    return o && (o.$typeUrl === EvalResponse.typeUrl || typeof o.result === "string");
  },
  isAmino(o: any): o is EvalResponseAmino {
    return o && (o.$typeUrl === EvalResponse.typeUrl || typeof o.result === "string");
  },
  encode(message: EvalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== undefined) {
      writer.uint32(10).string(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EvalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvalResponse();
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
  fromJSON(object: any): EvalResponse {
    const obj = createBaseEvalResponse();
    if (isSet(object.result)) obj.result = String(object.result);
    return obj;
  },
  toJSON(message: EvalResponse): JsonSafe<EvalResponse> {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },
  fromPartial(object: DeepPartial<EvalResponse>): EvalResponse {
    const message = createBaseEvalResponse();
    message.result = object.result ?? "";
    return message;
  },
  fromSDK(object: EvalResponseSDKType): EvalResponse {
    return {
      result: object?.result
    };
  },
  toSDK(message: EvalResponse): EvalResponseSDKType {
    const obj: any = {};
    obj.result = message.result;
    return obj;
  },
  fromAmino(object: EvalResponseAmino): EvalResponse {
    const message = createBaseEvalResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: EvalResponse): EvalResponseAmino {
    const obj: any = {};
    obj.result = message.result === "" ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: EvalResponseAminoMsg): EvalResponse {
    return EvalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: EvalResponseProtoMsg): EvalResponse {
    return EvalResponse.decode(message.value);
  },
  toProto(message: EvalResponse): Uint8Array {
    return EvalResponse.encode(message).finish();
  },
  toProtoMsg(message: EvalResponse): EvalResponseProtoMsg {
    return {
      typeUrl: "/hyperweb.hvm.EvalResponse",
      value: EvalResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EvalResponse.typeUrl, EvalResponse);
function createBaseLocalStateRequest(): LocalStateRequest {
  return {
    address: "",
    key: ""
  };
}
export const LocalStateRequest = {
  typeUrl: "/hyperweb.hvm.LocalStateRequest",
  is(o: any): o is LocalStateRequest {
    return o && (o.$typeUrl === LocalStateRequest.typeUrl || typeof o.address === "string" && typeof o.key === "string");
  },
  isSDK(o: any): o is LocalStateRequestSDKType {
    return o && (o.$typeUrl === LocalStateRequest.typeUrl || typeof o.address === "string" && typeof o.key === "string");
  },
  isAmino(o: any): o is LocalStateRequestAmino {
    return o && (o.$typeUrl === LocalStateRequest.typeUrl || typeof o.address === "string" && typeof o.key === "string");
  },
  encode(message: LocalStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    if (message.key !== undefined) {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LocalStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LocalStateRequest {
    const obj = createBaseLocalStateRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.key)) obj.key = String(object.key);
    return obj;
  },
  toJSON(message: LocalStateRequest): JsonSafe<LocalStateRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },
  fromPartial(object: DeepPartial<LocalStateRequest>): LocalStateRequest {
    const message = createBaseLocalStateRequest();
    message.address = object.address ?? "";
    message.key = object.key ?? "";
    return message;
  },
  fromSDK(object: LocalStateRequestSDKType): LocalStateRequest {
    return {
      address: object?.address,
      key: object?.key
    };
  },
  toSDK(message: LocalStateRequest): LocalStateRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.key = message.key;
    return obj;
  },
  fromAmino(object: LocalStateRequestAmino): LocalStateRequest {
    const message = createBaseLocalStateRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    return message;
  },
  toAmino(message: LocalStateRequest): LocalStateRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.key = message.key === "" ? undefined : message.key;
    return obj;
  },
  fromAminoMsg(object: LocalStateRequestAminoMsg): LocalStateRequest {
    return LocalStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: LocalStateRequestProtoMsg): LocalStateRequest {
    return LocalStateRequest.decode(message.value);
  },
  toProto(message: LocalStateRequest): Uint8Array {
    return LocalStateRequest.encode(message).finish();
  },
  toProtoMsg(message: LocalStateRequest): LocalStateRequestProtoMsg {
    return {
      typeUrl: "/hyperweb.hvm.LocalStateRequest",
      value: LocalStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LocalStateRequest.typeUrl, LocalStateRequest);
function createBaseLocalStateResponse(): LocalStateResponse {
  return {
    value: ""
  };
}
export const LocalStateResponse = {
  typeUrl: "/hyperweb.hvm.LocalStateResponse",
  is(o: any): o is LocalStateResponse {
    return o && (o.$typeUrl === LocalStateResponse.typeUrl || typeof o.value === "string");
  },
  isSDK(o: any): o is LocalStateResponseSDKType {
    return o && (o.$typeUrl === LocalStateResponse.typeUrl || typeof o.value === "string");
  },
  isAmino(o: any): o is LocalStateResponseAmino {
    return o && (o.$typeUrl === LocalStateResponse.typeUrl || typeof o.value === "string");
  },
  encode(message: LocalStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== undefined) {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LocalStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LocalStateResponse {
    const obj = createBaseLocalStateResponse();
    if (isSet(object.value)) obj.value = String(object.value);
    return obj;
  },
  toJSON(message: LocalStateResponse): JsonSafe<LocalStateResponse> {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<LocalStateResponse>): LocalStateResponse {
    const message = createBaseLocalStateResponse();
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: LocalStateResponseSDKType): LocalStateResponse {
    return {
      value: object?.value
    };
  },
  toSDK(message: LocalStateResponse): LocalStateResponseSDKType {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: LocalStateResponseAmino): LocalStateResponse {
    const message = createBaseLocalStateResponse();
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: LocalStateResponse): LocalStateResponseAmino {
    const obj: any = {};
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: LocalStateResponseAminoMsg): LocalStateResponse {
    return LocalStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: LocalStateResponseProtoMsg): LocalStateResponse {
    return LocalStateResponse.decode(message.value);
  },
  toProto(message: LocalStateResponse): Uint8Array {
    return LocalStateResponse.encode(message).finish();
  },
  toProtoMsg(message: LocalStateResponse): LocalStateResponseProtoMsg {
    return {
      typeUrl: "/hyperweb.hvm.LocalStateResponse",
      value: LocalStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LocalStateResponse.typeUrl, LocalStateResponse);
function createBaseGetContractSourceRequest(): GetContractSourceRequest {
  return {
    address: ""
  };
}
export const GetContractSourceRequest = {
  typeUrl: "/hyperweb.hvm.GetContractSourceRequest",
  is(o: any): o is GetContractSourceRequest {
    return o && (o.$typeUrl === GetContractSourceRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is GetContractSourceRequestSDKType {
    return o && (o.$typeUrl === GetContractSourceRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is GetContractSourceRequestAmino {
    return o && (o.$typeUrl === GetContractSourceRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: GetContractSourceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetContractSourceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetContractSourceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetContractSourceRequest {
    const obj = createBaseGetContractSourceRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: GetContractSourceRequest): JsonSafe<GetContractSourceRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: DeepPartial<GetContractSourceRequest>): GetContractSourceRequest {
    const message = createBaseGetContractSourceRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: GetContractSourceRequestSDKType): GetContractSourceRequest {
    return {
      address: object?.address
    };
  },
  toSDK(message: GetContractSourceRequest): GetContractSourceRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAmino(object: GetContractSourceRequestAmino): GetContractSourceRequest {
    const message = createBaseGetContractSourceRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: GetContractSourceRequest): GetContractSourceRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: GetContractSourceRequestAminoMsg): GetContractSourceRequest {
    return GetContractSourceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetContractSourceRequestProtoMsg): GetContractSourceRequest {
    return GetContractSourceRequest.decode(message.value);
  },
  toProto(message: GetContractSourceRequest): Uint8Array {
    return GetContractSourceRequest.encode(message).finish();
  },
  toProtoMsg(message: GetContractSourceRequest): GetContractSourceRequestProtoMsg {
    return {
      typeUrl: "/hyperweb.hvm.GetContractSourceRequest",
      value: GetContractSourceRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetContractSourceRequest.typeUrl, GetContractSourceRequest);
function createBaseGetContractSourceResponse(): GetContractSourceResponse {
  return {
    source: ""
  };
}
export const GetContractSourceResponse = {
  typeUrl: "/hyperweb.hvm.GetContractSourceResponse",
  is(o: any): o is GetContractSourceResponse {
    return o && (o.$typeUrl === GetContractSourceResponse.typeUrl || typeof o.source === "string");
  },
  isSDK(o: any): o is GetContractSourceResponseSDKType {
    return o && (o.$typeUrl === GetContractSourceResponse.typeUrl || typeof o.source === "string");
  },
  isAmino(o: any): o is GetContractSourceResponseAmino {
    return o && (o.$typeUrl === GetContractSourceResponse.typeUrl || typeof o.source === "string");
  },
  encode(message: GetContractSourceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.source !== undefined) {
      writer.uint32(10).string(message.source);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetContractSourceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetContractSourceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetContractSourceResponse {
    const obj = createBaseGetContractSourceResponse();
    if (isSet(object.source)) obj.source = String(object.source);
    return obj;
  },
  toJSON(message: GetContractSourceResponse): JsonSafe<GetContractSourceResponse> {
    const obj: any = {};
    message.source !== undefined && (obj.source = message.source);
    return obj;
  },
  fromPartial(object: DeepPartial<GetContractSourceResponse>): GetContractSourceResponse {
    const message = createBaseGetContractSourceResponse();
    message.source = object.source ?? "";
    return message;
  },
  fromSDK(object: GetContractSourceResponseSDKType): GetContractSourceResponse {
    return {
      source: object?.source
    };
  },
  toSDK(message: GetContractSourceResponse): GetContractSourceResponseSDKType {
    const obj: any = {};
    obj.source = message.source;
    return obj;
  },
  fromAmino(object: GetContractSourceResponseAmino): GetContractSourceResponse {
    const message = createBaseGetContractSourceResponse();
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    return message;
  },
  toAmino(message: GetContractSourceResponse): GetContractSourceResponseAmino {
    const obj: any = {};
    obj.source = message.source === "" ? undefined : message.source;
    return obj;
  },
  fromAminoMsg(object: GetContractSourceResponseAminoMsg): GetContractSourceResponse {
    return GetContractSourceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: GetContractSourceResponseProtoMsg): GetContractSourceResponse {
    return GetContractSourceResponse.decode(message.value);
  },
  toProto(message: GetContractSourceResponse): Uint8Array {
    return GetContractSourceResponse.encode(message).finish();
  },
  toProtoMsg(message: GetContractSourceResponse): GetContractSourceResponseProtoMsg {
    return {
      typeUrl: "/hyperweb.hvm.GetContractSourceResponse",
      value: GetContractSourceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetContractSourceResponse.typeUrl, GetContractSourceResponse);