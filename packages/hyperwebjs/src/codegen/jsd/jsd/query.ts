import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Contracts, ContractsAmino, ContractsSDKType } from "./contracts";
import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "jsd.jsd";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/jsd.jsd.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/jsd.jsd.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/jsd.jsd.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/jsd.jsd.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetContractsRequest {
  index: bigint;
}
export interface QueryGetContractsRequestProtoMsg {
  typeUrl: "/jsd.jsd.QueryGetContractsRequest";
  value: Uint8Array;
}
export interface QueryGetContractsRequestAmino {
  index?: string;
}
export interface QueryGetContractsRequestAminoMsg {
  type: "/jsd.jsd.QueryGetContractsRequest";
  value: QueryGetContractsRequestAmino;
}
export interface QueryGetContractsRequestSDKType {
  index: bigint;
}
export interface QueryGetContractsResponse {
  contracts: Contracts;
}
export interface QueryGetContractsResponseProtoMsg {
  typeUrl: "/jsd.jsd.QueryGetContractsResponse";
  value: Uint8Array;
}
export interface QueryGetContractsResponseAmino {
  contracts?: ContractsAmino;
}
export interface QueryGetContractsResponseAminoMsg {
  type: "/jsd.jsd.QueryGetContractsResponse";
  value: QueryGetContractsResponseAmino;
}
export interface QueryGetContractsResponseSDKType {
  contracts: ContractsSDKType;
}
export interface QueryAllContractsRequest {
  pagination?: PageRequest;
}
export interface QueryAllContractsRequestProtoMsg {
  typeUrl: "/jsd.jsd.QueryAllContractsRequest";
  value: Uint8Array;
}
export interface QueryAllContractsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllContractsRequestAminoMsg {
  type: "/jsd.jsd.QueryAllContractsRequest";
  value: QueryAllContractsRequestAmino;
}
export interface QueryAllContractsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllContractsResponse {
  contracts: Contracts[];
  pagination?: PageResponse;
}
export interface QueryAllContractsResponseProtoMsg {
  typeUrl: "/jsd.jsd.QueryAllContractsResponse";
  value: Uint8Array;
}
export interface QueryAllContractsResponseAmino {
  contracts?: ContractsAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllContractsResponseAminoMsg {
  type: "/jsd.jsd.QueryAllContractsResponse";
  value: QueryAllContractsResponseAmino;
}
export interface QueryAllContractsResponseSDKType {
  contracts: ContractsSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryEvalRequest {
  index: bigint;
  fnName: string;
  arg: string;
}
export interface QueryEvalRequestProtoMsg {
  typeUrl: "/jsd.jsd.QueryEvalRequest";
  value: Uint8Array;
}
export interface QueryEvalRequestAmino {
  index?: string;
  fn_name?: string;
  arg?: string;
}
export interface QueryEvalRequestAminoMsg {
  type: "/jsd.jsd.QueryEvalRequest";
  value: QueryEvalRequestAmino;
}
export interface QueryEvalRequestSDKType {
  index: bigint;
  fn_name: string;
  arg: string;
}
export interface QueryEvalResponse {
  result: string;
}
export interface QueryEvalResponseProtoMsg {
  typeUrl: "/jsd.jsd.QueryEvalResponse";
  value: Uint8Array;
}
export interface QueryEvalResponseAmino {
  result?: string;
}
export interface QueryEvalResponseAminoMsg {
  type: "/jsd.jsd.QueryEvalResponse";
  value: QueryEvalResponseAmino;
}
export interface QueryEvalResponseSDKType {
  result: string;
}
export interface QueryLocalStateRequest {
  index: bigint;
  key: string;
}
export interface QueryLocalStateRequestProtoMsg {
  typeUrl: "/jsd.jsd.QueryLocalStateRequest";
  value: Uint8Array;
}
export interface QueryLocalStateRequestAmino {
  index?: string;
  key?: string;
}
export interface QueryLocalStateRequestAminoMsg {
  type: "/jsd.jsd.QueryLocalStateRequest";
  value: QueryLocalStateRequestAmino;
}
export interface QueryLocalStateRequestSDKType {
  index: bigint;
  key: string;
}
export interface QueryLocalStateResponse {
  value: string;
}
export interface QueryLocalStateResponseProtoMsg {
  typeUrl: "/jsd.jsd.QueryLocalStateResponse";
  value: Uint8Array;
}
export interface QueryLocalStateResponseAmino {
  value?: string;
}
export interface QueryLocalStateResponseAminoMsg {
  type: "/jsd.jsd.QueryLocalStateResponse";
  value: QueryLocalStateResponseAmino;
}
export interface QueryLocalStateResponseSDKType {
  value: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/jsd.jsd.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },
  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/jsd.jsd.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/jsd.jsd.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
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
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/jsd.jsd.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryGetContractsRequest(): QueryGetContractsRequest {
  return {
    index: BigInt(0)
  };
}
export const QueryGetContractsRequest = {
  typeUrl: "/jsd.jsd.QueryGetContractsRequest",
  is(o: any): o is QueryGetContractsRequest {
    return o && (o.$typeUrl === QueryGetContractsRequest.typeUrl || typeof o.index === "bigint");
  },
  isSDK(o: any): o is QueryGetContractsRequestSDKType {
    return o && (o.$typeUrl === QueryGetContractsRequest.typeUrl || typeof o.index === "bigint");
  },
  isAmino(o: any): o is QueryGetContractsRequestAmino {
    return o && (o.$typeUrl === QueryGetContractsRequest.typeUrl || typeof o.index === "bigint");
  },
  encode(message: QueryGetContractsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== undefined) {
      writer.uint32(8).uint64(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetContractsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetContractsRequest();
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
  fromJSON(object: any): QueryGetContractsRequest {
    const obj = createBaseQueryGetContractsRequest();
    if (isSet(object.index)) obj.index = BigInt(object.index.toString());
    return obj;
  },
  toJSON(message: QueryGetContractsRequest): JsonSafe<QueryGetContractsRequest> {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetContractsRequest>): QueryGetContractsRequest {
    const message = createBaseQueryGetContractsRequest();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index.toString());
    }
    return message;
  },
  fromSDK(object: QueryGetContractsRequestSDKType): QueryGetContractsRequest {
    return {
      index: object?.index
    };
  },
  toSDK(message: QueryGetContractsRequest): QueryGetContractsRequestSDKType {
    const obj: any = {};
    obj.index = message.index;
    return obj;
  },
  fromAmino(object: QueryGetContractsRequestAmino): QueryGetContractsRequest {
    const message = createBaseQueryGetContractsRequest();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    return message;
  },
  toAmino(message: QueryGetContractsRequest): QueryGetContractsRequestAmino {
    const obj: any = {};
    obj.index = message.index !== BigInt(0) ? (message.index?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetContractsRequestAminoMsg): QueryGetContractsRequest {
    return QueryGetContractsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetContractsRequestProtoMsg): QueryGetContractsRequest {
    return QueryGetContractsRequest.decode(message.value);
  },
  toProto(message: QueryGetContractsRequest): Uint8Array {
    return QueryGetContractsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetContractsRequest): QueryGetContractsRequestProtoMsg {
    return {
      typeUrl: "/jsd.jsd.QueryGetContractsRequest",
      value: QueryGetContractsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetContractsRequest.typeUrl, QueryGetContractsRequest);
function createBaseQueryGetContractsResponse(): QueryGetContractsResponse {
  return {
    contracts: Contracts.fromPartial({})
  };
}
export const QueryGetContractsResponse = {
  typeUrl: "/jsd.jsd.QueryGetContractsResponse",
  is(o: any): o is QueryGetContractsResponse {
    return o && (o.$typeUrl === QueryGetContractsResponse.typeUrl || Contracts.is(o.contracts));
  },
  isSDK(o: any): o is QueryGetContractsResponseSDKType {
    return o && (o.$typeUrl === QueryGetContractsResponse.typeUrl || Contracts.isSDK(o.contracts));
  },
  isAmino(o: any): o is QueryGetContractsResponseAmino {
    return o && (o.$typeUrl === QueryGetContractsResponse.typeUrl || Contracts.isAmino(o.contracts));
  },
  encode(message: QueryGetContractsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contracts !== undefined) {
      Contracts.encode(message.contracts, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetContractsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetContractsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contracts = Contracts.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetContractsResponse {
    const obj = createBaseQueryGetContractsResponse();
    if (isSet(object.contracts)) obj.contracts = Contracts.fromJSON(object.contracts);
    return obj;
  },
  toJSON(message: QueryGetContractsResponse): JsonSafe<QueryGetContractsResponse> {
    const obj: any = {};
    message.contracts !== undefined && (obj.contracts = message.contracts ? Contracts.toJSON(message.contracts) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGetContractsResponse>): QueryGetContractsResponse {
    const message = createBaseQueryGetContractsResponse();
    if (object.contracts !== undefined && object.contracts !== null) {
      message.contracts = Contracts.fromPartial(object.contracts);
    }
    return message;
  },
  fromSDK(object: QueryGetContractsResponseSDKType): QueryGetContractsResponse {
    return {
      contracts: object.contracts ? Contracts.fromSDK(object.contracts) : undefined
    };
  },
  toSDK(message: QueryGetContractsResponse): QueryGetContractsResponseSDKType {
    const obj: any = {};
    message.contracts !== undefined && (obj.contracts = message.contracts ? Contracts.toSDK(message.contracts) : undefined);
    return obj;
  },
  fromAmino(object: QueryGetContractsResponseAmino): QueryGetContractsResponse {
    const message = createBaseQueryGetContractsResponse();
    if (object.contracts !== undefined && object.contracts !== null) {
      message.contracts = Contracts.fromAmino(object.contracts);
    }
    return message;
  },
  toAmino(message: QueryGetContractsResponse): QueryGetContractsResponseAmino {
    const obj: any = {};
    obj.contracts = message.contracts ? Contracts.toAmino(message.contracts) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetContractsResponseAminoMsg): QueryGetContractsResponse {
    return QueryGetContractsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetContractsResponseProtoMsg): QueryGetContractsResponse {
    return QueryGetContractsResponse.decode(message.value);
  },
  toProto(message: QueryGetContractsResponse): Uint8Array {
    return QueryGetContractsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetContractsResponse): QueryGetContractsResponseProtoMsg {
    return {
      typeUrl: "/jsd.jsd.QueryGetContractsResponse",
      value: QueryGetContractsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetContractsResponse.typeUrl, QueryGetContractsResponse);
function createBaseQueryAllContractsRequest(): QueryAllContractsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllContractsRequest = {
  typeUrl: "/jsd.jsd.QueryAllContractsRequest",
  is(o: any): o is QueryAllContractsRequest {
    return o && o.$typeUrl === QueryAllContractsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllContractsRequestSDKType {
    return o && o.$typeUrl === QueryAllContractsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllContractsRequestAmino {
    return o && o.$typeUrl === QueryAllContractsRequest.typeUrl;
  },
  encode(message: QueryAllContractsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllContractsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractsRequest();
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
  fromJSON(object: any): QueryAllContractsRequest {
    const obj = createBaseQueryAllContractsRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllContractsRequest): JsonSafe<QueryAllContractsRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllContractsRequest>): QueryAllContractsRequest {
    const message = createBaseQueryAllContractsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryAllContractsRequestSDKType): QueryAllContractsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllContractsRequest): QueryAllContractsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllContractsRequestAmino): QueryAllContractsRequest {
    const message = createBaseQueryAllContractsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllContractsRequest): QueryAllContractsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllContractsRequestAminoMsg): QueryAllContractsRequest {
    return QueryAllContractsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllContractsRequestProtoMsg): QueryAllContractsRequest {
    return QueryAllContractsRequest.decode(message.value);
  },
  toProto(message: QueryAllContractsRequest): Uint8Array {
    return QueryAllContractsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllContractsRequest): QueryAllContractsRequestProtoMsg {
    return {
      typeUrl: "/jsd.jsd.QueryAllContractsRequest",
      value: QueryAllContractsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllContractsRequest.typeUrl, QueryAllContractsRequest);
function createBaseQueryAllContractsResponse(): QueryAllContractsResponse {
  return {
    contracts: [],
    pagination: undefined
  };
}
export const QueryAllContractsResponse = {
  typeUrl: "/jsd.jsd.QueryAllContractsResponse",
  is(o: any): o is QueryAllContractsResponse {
    return o && (o.$typeUrl === QueryAllContractsResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || Contracts.is(o.contracts[0])));
  },
  isSDK(o: any): o is QueryAllContractsResponseSDKType {
    return o && (o.$typeUrl === QueryAllContractsResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || Contracts.isSDK(o.contracts[0])));
  },
  isAmino(o: any): o is QueryAllContractsResponseAmino {
    return o && (o.$typeUrl === QueryAllContractsResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || Contracts.isAmino(o.contracts[0])));
  },
  encode(message: QueryAllContractsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contracts) {
      Contracts.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllContractsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractsResponse();
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
  fromJSON(object: any): QueryAllContractsResponse {
    const obj = createBaseQueryAllContractsResponse();
    if (Array.isArray(object?.contracts)) obj.contracts = object.contracts.map((e: any) => Contracts.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllContractsResponse): JsonSafe<QueryAllContractsResponse> {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? Contracts.toJSON(e) : undefined);
    } else {
      obj.contracts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllContractsResponse>): QueryAllContractsResponse {
    const message = createBaseQueryAllContractsResponse();
    message.contracts = object.contracts?.map(e => Contracts.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryAllContractsResponseSDKType): QueryAllContractsResponse {
    return {
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => Contracts.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllContractsResponse): QueryAllContractsResponseSDKType {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? Contracts.toSDK(e) : undefined);
    } else {
      obj.contracts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllContractsResponseAmino): QueryAllContractsResponse {
    const message = createBaseQueryAllContractsResponse();
    message.contracts = object.contracts?.map(e => Contracts.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllContractsResponse): QueryAllContractsResponseAmino {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? Contracts.toAmino(e) : undefined);
    } else {
      obj.contracts = message.contracts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllContractsResponseAminoMsg): QueryAllContractsResponse {
    return QueryAllContractsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllContractsResponseProtoMsg): QueryAllContractsResponse {
    return QueryAllContractsResponse.decode(message.value);
  },
  toProto(message: QueryAllContractsResponse): Uint8Array {
    return QueryAllContractsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllContractsResponse): QueryAllContractsResponseProtoMsg {
    return {
      typeUrl: "/jsd.jsd.QueryAllContractsResponse",
      value: QueryAllContractsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllContractsResponse.typeUrl, QueryAllContractsResponse);
function createBaseQueryEvalRequest(): QueryEvalRequest {
  return {
    index: BigInt(0),
    fnName: "",
    arg: ""
  };
}
export const QueryEvalRequest = {
  typeUrl: "/jsd.jsd.QueryEvalRequest",
  is(o: any): o is QueryEvalRequest {
    return o && (o.$typeUrl === QueryEvalRequest.typeUrl || typeof o.index === "bigint" && typeof o.fnName === "string" && typeof o.arg === "string");
  },
  isSDK(o: any): o is QueryEvalRequestSDKType {
    return o && (o.$typeUrl === QueryEvalRequest.typeUrl || typeof o.index === "bigint" && typeof o.fn_name === "string" && typeof o.arg === "string");
  },
  isAmino(o: any): o is QueryEvalRequestAmino {
    return o && (o.$typeUrl === QueryEvalRequest.typeUrl || typeof o.index === "bigint" && typeof o.fn_name === "string" && typeof o.arg === "string");
  },
  encode(message: QueryEvalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== undefined) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.fnName !== undefined) {
      writer.uint32(18).string(message.fnName);
    }
    if (message.arg !== undefined) {
      writer.uint32(26).string(message.arg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEvalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEvalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
          break;
        case 2:
          message.fnName = reader.string();
          break;
        case 3:
          message.arg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEvalRequest {
    const obj = createBaseQueryEvalRequest();
    if (isSet(object.index)) obj.index = BigInt(object.index.toString());
    if (isSet(object.fnName)) obj.fnName = String(object.fnName);
    if (isSet(object.arg)) obj.arg = String(object.arg);
    return obj;
  },
  toJSON(message: QueryEvalRequest): JsonSafe<QueryEvalRequest> {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
    message.fnName !== undefined && (obj.fnName = message.fnName);
    message.arg !== undefined && (obj.arg = message.arg);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryEvalRequest>): QueryEvalRequest {
    const message = createBaseQueryEvalRequest();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index.toString());
    }
    message.fnName = object.fnName ?? "";
    message.arg = object.arg ?? "";
    return message;
  },
  fromSDK(object: QueryEvalRequestSDKType): QueryEvalRequest {
    return {
      index: object?.index,
      fnName: object?.fn_name,
      arg: object?.arg
    };
  },
  toSDK(message: QueryEvalRequest): QueryEvalRequestSDKType {
    const obj: any = {};
    obj.index = message.index;
    obj.fn_name = message.fnName;
    obj.arg = message.arg;
    return obj;
  },
  fromAmino(object: QueryEvalRequestAmino): QueryEvalRequest {
    const message = createBaseQueryEvalRequest();
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
  toAmino(message: QueryEvalRequest): QueryEvalRequestAmino {
    const obj: any = {};
    obj.index = message.index !== BigInt(0) ? (message.index?.toString)() : undefined;
    obj.fn_name = message.fnName === "" ? undefined : message.fnName;
    obj.arg = message.arg === "" ? undefined : message.arg;
    return obj;
  },
  fromAminoMsg(object: QueryEvalRequestAminoMsg): QueryEvalRequest {
    return QueryEvalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEvalRequestProtoMsg): QueryEvalRequest {
    return QueryEvalRequest.decode(message.value);
  },
  toProto(message: QueryEvalRequest): Uint8Array {
    return QueryEvalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEvalRequest): QueryEvalRequestProtoMsg {
    return {
      typeUrl: "/jsd.jsd.QueryEvalRequest",
      value: QueryEvalRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEvalRequest.typeUrl, QueryEvalRequest);
function createBaseQueryEvalResponse(): QueryEvalResponse {
  return {
    result: ""
  };
}
export const QueryEvalResponse = {
  typeUrl: "/jsd.jsd.QueryEvalResponse",
  is(o: any): o is QueryEvalResponse {
    return o && (o.$typeUrl === QueryEvalResponse.typeUrl || typeof o.result === "string");
  },
  isSDK(o: any): o is QueryEvalResponseSDKType {
    return o && (o.$typeUrl === QueryEvalResponse.typeUrl || typeof o.result === "string");
  },
  isAmino(o: any): o is QueryEvalResponseAmino {
    return o && (o.$typeUrl === QueryEvalResponse.typeUrl || typeof o.result === "string");
  },
  encode(message: QueryEvalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== undefined) {
      writer.uint32(10).string(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEvalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEvalResponse();
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
  fromJSON(object: any): QueryEvalResponse {
    const obj = createBaseQueryEvalResponse();
    if (isSet(object.result)) obj.result = String(object.result);
    return obj;
  },
  toJSON(message: QueryEvalResponse): JsonSafe<QueryEvalResponse> {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryEvalResponse>): QueryEvalResponse {
    const message = createBaseQueryEvalResponse();
    message.result = object.result ?? "";
    return message;
  },
  fromSDK(object: QueryEvalResponseSDKType): QueryEvalResponse {
    return {
      result: object?.result
    };
  },
  toSDK(message: QueryEvalResponse): QueryEvalResponseSDKType {
    const obj: any = {};
    obj.result = message.result;
    return obj;
  },
  fromAmino(object: QueryEvalResponseAmino): QueryEvalResponse {
    const message = createBaseQueryEvalResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: QueryEvalResponse): QueryEvalResponseAmino {
    const obj: any = {};
    obj.result = message.result === "" ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: QueryEvalResponseAminoMsg): QueryEvalResponse {
    return QueryEvalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEvalResponseProtoMsg): QueryEvalResponse {
    return QueryEvalResponse.decode(message.value);
  },
  toProto(message: QueryEvalResponse): Uint8Array {
    return QueryEvalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEvalResponse): QueryEvalResponseProtoMsg {
    return {
      typeUrl: "/jsd.jsd.QueryEvalResponse",
      value: QueryEvalResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEvalResponse.typeUrl, QueryEvalResponse);
function createBaseQueryLocalStateRequest(): QueryLocalStateRequest {
  return {
    index: BigInt(0),
    key: ""
  };
}
export const QueryLocalStateRequest = {
  typeUrl: "/jsd.jsd.QueryLocalStateRequest",
  is(o: any): o is QueryLocalStateRequest {
    return o && (o.$typeUrl === QueryLocalStateRequest.typeUrl || typeof o.index === "bigint" && typeof o.key === "string");
  },
  isSDK(o: any): o is QueryLocalStateRequestSDKType {
    return o && (o.$typeUrl === QueryLocalStateRequest.typeUrl || typeof o.index === "bigint" && typeof o.key === "string");
  },
  isAmino(o: any): o is QueryLocalStateRequestAmino {
    return o && (o.$typeUrl === QueryLocalStateRequest.typeUrl || typeof o.index === "bigint" && typeof o.key === "string");
  },
  encode(message: QueryLocalStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== undefined) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.key !== undefined) {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLocalStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLocalStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
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
  fromJSON(object: any): QueryLocalStateRequest {
    const obj = createBaseQueryLocalStateRequest();
    if (isSet(object.index)) obj.index = BigInt(object.index.toString());
    if (isSet(object.key)) obj.key = String(object.key);
    return obj;
  },
  toJSON(message: QueryLocalStateRequest): JsonSafe<QueryLocalStateRequest> {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryLocalStateRequest>): QueryLocalStateRequest {
    const message = createBaseQueryLocalStateRequest();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index.toString());
    }
    message.key = object.key ?? "";
    return message;
  },
  fromSDK(object: QueryLocalStateRequestSDKType): QueryLocalStateRequest {
    return {
      index: object?.index,
      key: object?.key
    };
  },
  toSDK(message: QueryLocalStateRequest): QueryLocalStateRequestSDKType {
    const obj: any = {};
    obj.index = message.index;
    obj.key = message.key;
    return obj;
  },
  fromAmino(object: QueryLocalStateRequestAmino): QueryLocalStateRequest {
    const message = createBaseQueryLocalStateRequest();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    return message;
  },
  toAmino(message: QueryLocalStateRequest): QueryLocalStateRequestAmino {
    const obj: any = {};
    obj.index = message.index !== BigInt(0) ? (message.index?.toString)() : undefined;
    obj.key = message.key === "" ? undefined : message.key;
    return obj;
  },
  fromAminoMsg(object: QueryLocalStateRequestAminoMsg): QueryLocalStateRequest {
    return QueryLocalStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLocalStateRequestProtoMsg): QueryLocalStateRequest {
    return QueryLocalStateRequest.decode(message.value);
  },
  toProto(message: QueryLocalStateRequest): Uint8Array {
    return QueryLocalStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLocalStateRequest): QueryLocalStateRequestProtoMsg {
    return {
      typeUrl: "/jsd.jsd.QueryLocalStateRequest",
      value: QueryLocalStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryLocalStateRequest.typeUrl, QueryLocalStateRequest);
function createBaseQueryLocalStateResponse(): QueryLocalStateResponse {
  return {
    value: ""
  };
}
export const QueryLocalStateResponse = {
  typeUrl: "/jsd.jsd.QueryLocalStateResponse",
  is(o: any): o is QueryLocalStateResponse {
    return o && (o.$typeUrl === QueryLocalStateResponse.typeUrl || typeof o.value === "string");
  },
  isSDK(o: any): o is QueryLocalStateResponseSDKType {
    return o && (o.$typeUrl === QueryLocalStateResponse.typeUrl || typeof o.value === "string");
  },
  isAmino(o: any): o is QueryLocalStateResponseAmino {
    return o && (o.$typeUrl === QueryLocalStateResponse.typeUrl || typeof o.value === "string");
  },
  encode(message: QueryLocalStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== undefined) {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLocalStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLocalStateResponse();
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
  fromJSON(object: any): QueryLocalStateResponse {
    const obj = createBaseQueryLocalStateResponse();
    if (isSet(object.value)) obj.value = String(object.value);
    return obj;
  },
  toJSON(message: QueryLocalStateResponse): JsonSafe<QueryLocalStateResponse> {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryLocalStateResponse>): QueryLocalStateResponse {
    const message = createBaseQueryLocalStateResponse();
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: QueryLocalStateResponseSDKType): QueryLocalStateResponse {
    return {
      value: object?.value
    };
  },
  toSDK(message: QueryLocalStateResponse): QueryLocalStateResponseSDKType {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: QueryLocalStateResponseAmino): QueryLocalStateResponse {
    const message = createBaseQueryLocalStateResponse();
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: QueryLocalStateResponse): QueryLocalStateResponseAmino {
    const obj: any = {};
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: QueryLocalStateResponseAminoMsg): QueryLocalStateResponse {
    return QueryLocalStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLocalStateResponseProtoMsg): QueryLocalStateResponse {
    return QueryLocalStateResponse.decode(message.value);
  },
  toProto(message: QueryLocalStateResponse): Uint8Array {
    return QueryLocalStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLocalStateResponse): QueryLocalStateResponseProtoMsg {
    return {
      typeUrl: "/jsd.jsd.QueryLocalStateResponse",
      value: QueryLocalStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryLocalStateResponse.typeUrl, QueryLocalStateResponse);