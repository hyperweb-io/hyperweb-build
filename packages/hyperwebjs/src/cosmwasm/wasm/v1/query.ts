import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractInfoAmino, ContractInfoSDKType, ContractCodeHistoryEntry, ContractCodeHistoryEntryAmino, ContractCodeHistoryEntrySDKType, Model, ModelAmino, ModelSDKType, AccessConfig, AccessConfigAmino, AccessConfigSDKType, Params, ParamsAmino, ParamsSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
import { toUtf8, fromUtf8 } from "@interchainjs/encoding";
export const protobufPackage = "cosmwasm.wasm.v1";
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoRequest {
  /** address is the address of the contract to query */
  address: string;
}
export interface QueryContractInfoRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest";
  value: Uint8Array;
}
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoRequestAmino {
  /** address is the address of the contract to query */
  address: string;
}
export interface QueryContractInfoRequestAminoMsg {
  type: "wasm/QueryContractInfoRequest";
  value: QueryContractInfoRequestAmino;
}
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoRequestSDKType {
  address: string;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponse {
  /** address is the address of the contract */
  address: string;
  contractInfo: ContractInfo;
}
export interface QueryContractInfoResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse";
  value: Uint8Array;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponseAmino {
  /** address is the address of the contract */
  address: string;
  contract_info: ContractInfoAmino;
}
export interface QueryContractInfoResponseAminoMsg {
  type: "wasm/QueryContractInfoResponse";
  value: QueryContractInfoResponseAmino;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponseSDKType {
  address: string;
  contract_info: ContractInfoSDKType;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequest {
  /** address is the address of the contract to query */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryContractHistoryRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest";
  value: Uint8Array;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequestAmino {
  /** address is the address of the contract to query */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryContractHistoryRequestAminoMsg {
  type: "wasm/QueryContractHistoryRequest";
  value: QueryContractHistoryRequestAmino;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponse {
  entries: ContractCodeHistoryEntry[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryContractHistoryResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse";
  value: Uint8Array;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponseAmino {
  entries: ContractCodeHistoryEntryAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryContractHistoryResponseAminoMsg {
  type: "wasm/QueryContractHistoryResponse";
  value: QueryContractHistoryResponseAmino;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponseSDKType {
  entries: ContractCodeHistoryEntrySDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */
export interface QueryContractsByCodeRequest {
  /** grpc-gateway_out does not support Go style CodID */
  codeId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryContractsByCodeRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest";
  value: Uint8Array;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */
export interface QueryContractsByCodeRequestAmino {
  /** grpc-gateway_out does not support Go style CodID */
  code_id: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryContractsByCodeRequestAminoMsg {
  type: "wasm/QueryContractsByCodeRequest";
  value: QueryContractsByCodeRequestAmino;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */
export interface QueryContractsByCodeRequestSDKType {
  code_id: bigint;
  pagination?: PageRequestSDKType;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface QueryContractsByCodeResponse {
  /** contracts are a set of contract addresses */
  contracts: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryContractsByCodeResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse";
  value: Uint8Array;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface QueryContractsByCodeResponseAmino {
  /** contracts are a set of contract addresses */
  contracts: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryContractsByCodeResponseAminoMsg {
  type: "wasm/QueryContractsByCodeResponse";
  value: QueryContractsByCodeResponseAmino;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface QueryContractsByCodeResponseSDKType {
  contracts: string[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateRequest {
  /** address is the address of the contract */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryAllContractStateRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest";
  value: Uint8Array;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateRequestAmino {
  /** address is the address of the contract */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryAllContractStateRequestAminoMsg {
  type: "wasm/QueryAllContractStateRequest";
  value: QueryAllContractStateRequestAmino;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponse {
  models: Model[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryAllContractStateResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse";
  value: Uint8Array;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponseAmino {
  models: ModelAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryAllContractStateResponseAminoMsg {
  type: "wasm/QueryAllContractStateResponse";
  value: QueryAllContractStateResponseAmino;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponseSDKType {
  models: ModelSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateRequest {
  /** address is the address of the contract */
  address: string;
  queryData: Uint8Array;
}
export interface QueryRawContractStateRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest";
  value: Uint8Array;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateRequestAmino {
  /** address is the address of the contract */
  address: string;
  query_data: string;
}
export interface QueryRawContractStateRequestAminoMsg {
  type: "wasm/QueryRawContractStateRequest";
  value: QueryRawContractStateRequestAmino;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateRequestSDKType {
  address: string;
  query_data: Uint8Array;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateResponse {
  /** Data contains the raw store data */
  data: Uint8Array;
}
export interface QueryRawContractStateResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse";
  value: Uint8Array;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateResponseAmino {
  /** Data contains the raw store data */
  data: string;
}
export interface QueryRawContractStateResponseAminoMsg {
  type: "wasm/QueryRawContractStateResponse";
  value: QueryRawContractStateResponseAmino;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateResponseSDKType {
  data: Uint8Array;
}
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateRequest {
  /** address is the address of the contract */
  address: string;
  /** QueryData contains the query data passed to the contract */
  queryData: Uint8Array;
}
export interface QuerySmartContractStateRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest";
  value: Uint8Array;
}
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateRequestAmino {
  /** address is the address of the contract */
  address: string;
  /** QueryData contains the query data passed to the contract */
  query_data: any;
}
export interface QuerySmartContractStateRequestAminoMsg {
  type: "wasm/QuerySmartContractStateRequest";
  value: QuerySmartContractStateRequestAmino;
}
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateRequestSDKType {
  address: string;
  query_data: Uint8Array;
}
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateResponse {
  /** Data contains the json data returned from the smart contract */
  data: Uint8Array;
}
export interface QuerySmartContractStateResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse";
  value: Uint8Array;
}
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateResponseAmino {
  /** Data contains the json data returned from the smart contract */
  data: any;
}
export interface QuerySmartContractStateResponseAminoMsg {
  type: "wasm/QuerySmartContractStateResponse";
  value: QuerySmartContractStateResponseAmino;
}
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateResponseSDKType {
  data: Uint8Array;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */
export interface QueryCodeRequest {
  /** grpc-gateway_out does not support Go style CodID */
  codeId: bigint;
}
export interface QueryCodeRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest";
  value: Uint8Array;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */
export interface QueryCodeRequestAmino {
  /** grpc-gateway_out does not support Go style CodID */
  code_id: string;
}
export interface QueryCodeRequestAminoMsg {
  type: "wasm/QueryCodeRequest";
  value: QueryCodeRequestAmino;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */
export interface QueryCodeRequestSDKType {
  code_id: bigint;
}
/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CodeInfoResponse {
  codeId: bigint;
  creator: string;
  dataHash: Uint8Array;
  instantiatePermission: AccessConfig;
}
export interface CodeInfoResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse";
  value: Uint8Array;
}
/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CodeInfoResponseAmino {
  code_id: string;
  creator: string;
  data_hash: string;
  instantiate_permission: AccessConfigAmino;
}
export interface CodeInfoResponseAminoMsg {
  type: "wasm/CodeInfoResponse";
  value: CodeInfoResponseAmino;
}
/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CodeInfoResponseSDKType {
  code_id: bigint;
  creator: string;
  data_hash: Uint8Array;
  instantiate_permission: AccessConfigSDKType;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponse {
  codeInfo?: CodeInfoResponse;
  data: Uint8Array;
}
export interface QueryCodeResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse";
  value: Uint8Array;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponseAmino {
  code_info?: CodeInfoResponseAmino;
  data: string;
}
export interface QueryCodeResponseAminoMsg {
  type: "wasm/QueryCodeResponse";
  value: QueryCodeResponseAmino;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponseSDKType {
  code_info?: CodeInfoResponseSDKType;
  data: Uint8Array;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */
export interface QueryCodesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryCodesRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest";
  value: Uint8Array;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */
export interface QueryCodesRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryCodesRequestAminoMsg {
  type: "wasm/QueryCodesRequest";
  value: QueryCodesRequestAmino;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */
export interface QueryCodesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponse {
  codeInfos: CodeInfoResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryCodesResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse";
  value: Uint8Array;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponseAmino {
  code_infos: CodeInfoResponseAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryCodesResponseAminoMsg {
  type: "wasm/QueryCodesResponse";
  value: QueryCodesResponseAmino;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponseSDKType {
  code_infos: CodeInfoResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 */
export interface QueryPinnedCodesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryPinnedCodesRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest";
  value: Uint8Array;
}
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 */
export interface QueryPinnedCodesRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryPinnedCodesRequestAminoMsg {
  type: "wasm/QueryPinnedCodesRequest";
  value: QueryPinnedCodesRequestAmino;
}
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 */
export interface QueryPinnedCodesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 */
export interface QueryPinnedCodesResponse {
  codeIds: bigint[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryPinnedCodesResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse";
  value: Uint8Array;
}
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 */
export interface QueryPinnedCodesResponseAmino {
  code_ids: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryPinnedCodesResponseAminoMsg {
  type: "wasm/QueryPinnedCodesResponse";
  value: QueryPinnedCodesResponseAmino;
}
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 */
export interface QueryPinnedCodesResponseSDKType {
  code_ids: bigint[];
  pagination?: PageResponseSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "wasm/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "wasm/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryContractsByCreatorRequest is the request type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorRequest {
  /** CreatorAddress is the address of contract creator */
  creatorAddress: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryContractsByCreatorRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorRequest";
  value: Uint8Array;
}
/**
 * QueryContractsByCreatorRequest is the request type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorRequestAmino {
  /** CreatorAddress is the address of contract creator */
  creator_address: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryContractsByCreatorRequestAminoMsg {
  type: "wasm/QueryContractsByCreatorRequest";
  value: QueryContractsByCreatorRequestAmino;
}
/**
 * QueryContractsByCreatorRequest is the request type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorRequestSDKType {
  creator_address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryContractsByCreatorResponse is the response type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorResponse {
  /** ContractAddresses result set */
  contractAddresses: string[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryContractsByCreatorResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorResponse";
  value: Uint8Array;
}
/**
 * QueryContractsByCreatorResponse is the response type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorResponseAmino {
  /** ContractAddresses result set */
  contract_addresses: string[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryContractsByCreatorResponseAminoMsg {
  type: "wasm/QueryContractsByCreatorResponse";
  value: QueryContractsByCreatorResponseAmino;
}
/**
 * QueryContractsByCreatorResponse is the response type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorResponseSDKType {
  contract_addresses: string[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryContractInfoRequest(): QueryContractInfoRequest {
  return {
    address: ""
  };
}
export const QueryContractInfoRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest",
  aminoType: "wasm/QueryContractInfoRequest",
  is(o: any): o is QueryContractInfoRequest {
    return o && (o.$typeUrl === QueryContractInfoRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryContractInfoRequestSDKType {
    return o && (o.$typeUrl === QueryContractInfoRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryContractInfoRequestAmino {
    return o && (o.$typeUrl === QueryContractInfoRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryContractInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoRequest();
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
  fromJSON(object: any): QueryContractInfoRequest {
    const obj = createBaseQueryContractInfoRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: QueryContractInfoRequest): JsonSafe<QueryContractInfoRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryContractInfoRequest>): QueryContractInfoRequest {
    const message = createBaseQueryContractInfoRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: QueryContractInfoRequestSDKType): QueryContractInfoRequest {
    return {
      address: object?.address
    };
  },
  toSDK(message: QueryContractInfoRequest): QueryContractInfoRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAmino(object: QueryContractInfoRequestAmino): QueryContractInfoRequest {
    const message = createBaseQueryContractInfoRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryContractInfoRequest): QueryContractInfoRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryContractInfoRequestAminoMsg): QueryContractInfoRequest {
    return QueryContractInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContractInfoRequest): QueryContractInfoRequestAminoMsg {
    return {
      type: "wasm/QueryContractInfoRequest",
      value: QueryContractInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryContractInfoRequestProtoMsg): QueryContractInfoRequest {
    return QueryContractInfoRequest.decode(message.value);
  },
  toProto(message: QueryContractInfoRequest): Uint8Array {
    return QueryContractInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContractInfoRequest): QueryContractInfoRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest",
      value: QueryContractInfoRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryContractInfoResponse(): QueryContractInfoResponse {
  return {
    address: "",
    contractInfo: ContractInfo.fromPartial({})
  };
}
export const QueryContractInfoResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse",
  aminoType: "wasm/QueryContractInfoResponse",
  is(o: any): o is QueryContractInfoResponse {
    return o && (o.$typeUrl === QueryContractInfoResponse.typeUrl || typeof o.address === "string" && ContractInfo.is(o.contractInfo));
  },
  isSDK(o: any): o is QueryContractInfoResponseSDKType {
    return o && (o.$typeUrl === QueryContractInfoResponse.typeUrl || typeof o.address === "string" && ContractInfo.isSDK(o.contract_info));
  },
  isAmino(o: any): o is QueryContractInfoResponseAmino {
    return o && (o.$typeUrl === QueryContractInfoResponse.typeUrl || typeof o.address === "string" && ContractInfo.isAmino(o.contract_info));
  },
  encode(message: QueryContractInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    if (message.contractInfo !== undefined) {
      ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.contractInfo = ContractInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContractInfoResponse {
    const obj = createBaseQueryContractInfoResponse();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.contractInfo)) obj.contractInfo = ContractInfo.fromJSON(object.contractInfo);
    return obj;
  },
  toJSON(message: QueryContractInfoResponse): JsonSafe<QueryContractInfoResponse> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.contractInfo !== undefined && (obj.contractInfo = message.contractInfo ? ContractInfo.toJSON(message.contractInfo) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryContractInfoResponse>): QueryContractInfoResponse {
    const message = createBaseQueryContractInfoResponse();
    message.address = object.address ?? "";
    if (object.contractInfo !== undefined && object.contractInfo !== null) {
      message.contractInfo = ContractInfo.fromPartial(object.contractInfo);
    }
    return message;
  },
  fromSDK(object: QueryContractInfoResponseSDKType): QueryContractInfoResponse {
    return {
      address: object?.address,
      contractInfo: object.contract_info ? ContractInfo.fromSDK(object.contract_info) : undefined
    };
  },
  toSDK(message: QueryContractInfoResponse): QueryContractInfoResponseSDKType {
    const obj: any = {};
    obj.address = message.address;
    message.contractInfo !== undefined && (obj.contract_info = message.contractInfo ? ContractInfo.toSDK(message.contractInfo) : undefined);
    return obj;
  },
  fromAmino(object: QueryContractInfoResponseAmino): QueryContractInfoResponse {
    const message = createBaseQueryContractInfoResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.contract_info !== undefined && object.contract_info !== null) {
      message.contractInfo = ContractInfo.fromAmino(object.contract_info);
    }
    return message;
  },
  toAmino(message: QueryContractInfoResponse): QueryContractInfoResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.contract_info = message.contractInfo ? ContractInfo.toAmino(message.contractInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContractInfoResponseAminoMsg): QueryContractInfoResponse {
    return QueryContractInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContractInfoResponse): QueryContractInfoResponseAminoMsg {
    return {
      type: "wasm/QueryContractInfoResponse",
      value: QueryContractInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryContractInfoResponseProtoMsg): QueryContractInfoResponse {
    return QueryContractInfoResponse.decode(message.value);
  },
  toProto(message: QueryContractInfoResponse): Uint8Array {
    return QueryContractInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContractInfoResponse): QueryContractInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse",
      value: QueryContractInfoResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ContractInfo.registerTypeUrl();
  }
};
function createBaseQueryContractHistoryRequest(): QueryContractHistoryRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QueryContractHistoryRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest",
  aminoType: "wasm/QueryContractHistoryRequest",
  is(o: any): o is QueryContractHistoryRequest {
    return o && (o.$typeUrl === QueryContractHistoryRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryContractHistoryRequestSDKType {
    return o && (o.$typeUrl === QueryContractHistoryRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryContractHistoryRequestAmino {
    return o && (o.$typeUrl === QueryContractHistoryRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryContractHistoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractHistoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContractHistoryRequest {
    const obj = createBaseQueryContractHistoryRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryContractHistoryRequest): JsonSafe<QueryContractHistoryRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryContractHistoryRequest>): QueryContractHistoryRequest {
    const message = createBaseQueryContractHistoryRequest();
    message.address = object.address ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryContractHistoryRequestSDKType): QueryContractHistoryRequest {
    return {
      address: object?.address,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryContractHistoryRequest): QueryContractHistoryRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryContractHistoryRequestAmino): QueryContractHistoryRequest {
    const message = createBaseQueryContractHistoryRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryContractHistoryRequest): QueryContractHistoryRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContractHistoryRequestAminoMsg): QueryContractHistoryRequest {
    return QueryContractHistoryRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContractHistoryRequest): QueryContractHistoryRequestAminoMsg {
    return {
      type: "wasm/QueryContractHistoryRequest",
      value: QueryContractHistoryRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryContractHistoryRequestProtoMsg): QueryContractHistoryRequest {
    return QueryContractHistoryRequest.decode(message.value);
  },
  toProto(message: QueryContractHistoryRequest): Uint8Array {
    return QueryContractHistoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContractHistoryRequest): QueryContractHistoryRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest",
      value: QueryContractHistoryRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryContractHistoryResponse(): QueryContractHistoryResponse {
  return {
    entries: [],
    pagination: undefined
  };
}
export const QueryContractHistoryResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse",
  aminoType: "wasm/QueryContractHistoryResponse",
  is(o: any): o is QueryContractHistoryResponse {
    return o && (o.$typeUrl === QueryContractHistoryResponse.typeUrl || Array.isArray(o.entries) && (!o.entries.length || ContractCodeHistoryEntry.is(o.entries[0])));
  },
  isSDK(o: any): o is QueryContractHistoryResponseSDKType {
    return o && (o.$typeUrl === QueryContractHistoryResponse.typeUrl || Array.isArray(o.entries) && (!o.entries.length || ContractCodeHistoryEntry.isSDK(o.entries[0])));
  },
  isAmino(o: any): o is QueryContractHistoryResponseAmino {
    return o && (o.$typeUrl === QueryContractHistoryResponse.typeUrl || Array.isArray(o.entries) && (!o.entries.length || ContractCodeHistoryEntry.isAmino(o.entries[0])));
  },
  encode(message: QueryContractHistoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.entries) {
      ContractCodeHistoryEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractHistoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(ContractCodeHistoryEntry.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryContractHistoryResponse {
    const obj = createBaseQueryContractHistoryResponse();
    if (Array.isArray(object?.entries)) obj.entries = object.entries.map((e: any) => ContractCodeHistoryEntry.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryContractHistoryResponse): JsonSafe<QueryContractHistoryResponse> {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? ContractCodeHistoryEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryContractHistoryResponse>): QueryContractHistoryResponse {
    const message = createBaseQueryContractHistoryResponse();
    message.entries = object.entries?.map(e => ContractCodeHistoryEntry.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryContractHistoryResponseSDKType): QueryContractHistoryResponse {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => ContractCodeHistoryEntry.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryContractHistoryResponse): QueryContractHistoryResponseSDKType {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? ContractCodeHistoryEntry.toSDK(e) : undefined);
    } else {
      obj.entries = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryContractHistoryResponseAmino): QueryContractHistoryResponse {
    const message = createBaseQueryContractHistoryResponse();
    message.entries = object.entries?.map(e => ContractCodeHistoryEntry.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryContractHistoryResponse): QueryContractHistoryResponseAmino {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? ContractCodeHistoryEntry.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContractHistoryResponseAminoMsg): QueryContractHistoryResponse {
    return QueryContractHistoryResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContractHistoryResponse): QueryContractHistoryResponseAminoMsg {
    return {
      type: "wasm/QueryContractHistoryResponse",
      value: QueryContractHistoryResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryContractHistoryResponseProtoMsg): QueryContractHistoryResponse {
    return QueryContractHistoryResponse.decode(message.value);
  },
  toProto(message: QueryContractHistoryResponse): Uint8Array {
    return QueryContractHistoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContractHistoryResponse): QueryContractHistoryResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse",
      value: QueryContractHistoryResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ContractCodeHistoryEntry.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryContractsByCodeRequest(): QueryContractsByCodeRequest {
  return {
    codeId: BigInt(0),
    pagination: undefined
  };
}
export const QueryContractsByCodeRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest",
  aminoType: "wasm/QueryContractsByCodeRequest",
  is(o: any): o is QueryContractsByCodeRequest {
    return o && (o.$typeUrl === QueryContractsByCodeRequest.typeUrl || typeof o.codeId === "bigint");
  },
  isSDK(o: any): o is QueryContractsByCodeRequestSDKType {
    return o && (o.$typeUrl === QueryContractsByCodeRequest.typeUrl || typeof o.code_id === "bigint");
  },
  isAmino(o: any): o is QueryContractsByCodeRequestAmino {
    return o && (o.$typeUrl === QueryContractsByCodeRequest.typeUrl || typeof o.code_id === "bigint");
  },
  encode(message: QueryContractsByCodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== undefined) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractsByCodeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContractsByCodeRequest {
    const obj = createBaseQueryContractsByCodeRequest();
    if (isSet(object.codeId)) obj.codeId = BigInt(object.codeId.toString());
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryContractsByCodeRequest): JsonSafe<QueryContractsByCodeRequest> {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryContractsByCodeRequest>): QueryContractsByCodeRequest {
    const message = createBaseQueryContractsByCodeRequest();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryContractsByCodeRequestSDKType): QueryContractsByCodeRequest {
    return {
      codeId: object?.code_id,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryContractsByCodeRequest): QueryContractsByCodeRequestSDKType {
    const obj: any = {};
    obj.code_id = message.codeId;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryContractsByCodeRequestAmino): QueryContractsByCodeRequest {
    const message = createBaseQueryContractsByCodeRequest();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryContractsByCodeRequest): QueryContractsByCodeRequestAmino {
    const obj: any = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContractsByCodeRequestAminoMsg): QueryContractsByCodeRequest {
    return QueryContractsByCodeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContractsByCodeRequest): QueryContractsByCodeRequestAminoMsg {
    return {
      type: "wasm/QueryContractsByCodeRequest",
      value: QueryContractsByCodeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryContractsByCodeRequestProtoMsg): QueryContractsByCodeRequest {
    return QueryContractsByCodeRequest.decode(message.value);
  },
  toProto(message: QueryContractsByCodeRequest): Uint8Array {
    return QueryContractsByCodeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContractsByCodeRequest): QueryContractsByCodeRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest",
      value: QueryContractsByCodeRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryContractsByCodeResponse(): QueryContractsByCodeResponse {
  return {
    contracts: [],
    pagination: undefined
  };
}
export const QueryContractsByCodeResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse",
  aminoType: "wasm/QueryContractsByCodeResponse",
  is(o: any): o is QueryContractsByCodeResponse {
    return o && (o.$typeUrl === QueryContractsByCodeResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || typeof o.contracts[0] === "string"));
  },
  isSDK(o: any): o is QueryContractsByCodeResponseSDKType {
    return o && (o.$typeUrl === QueryContractsByCodeResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || typeof o.contracts[0] === "string"));
  },
  isAmino(o: any): o is QueryContractsByCodeResponseAmino {
    return o && (o.$typeUrl === QueryContractsByCodeResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || typeof o.contracts[0] === "string"));
  },
  encode(message: QueryContractsByCodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contracts) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractsByCodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contracts.push(reader.string());
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
  fromJSON(object: any): QueryContractsByCodeResponse {
    const obj = createBaseQueryContractsByCodeResponse();
    if (Array.isArray(object?.contracts)) obj.contracts = object.contracts.map((e: any) => String(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryContractsByCodeResponse): JsonSafe<QueryContractsByCodeResponse> {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e);
    } else {
      obj.contracts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryContractsByCodeResponse>): QueryContractsByCodeResponse {
    const message = createBaseQueryContractsByCodeResponse();
    message.contracts = object.contracts?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryContractsByCodeResponseSDKType): QueryContractsByCodeResponse {
    return {
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => e) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryContractsByCodeResponse): QueryContractsByCodeResponseSDKType {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e);
    } else {
      obj.contracts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryContractsByCodeResponseAmino): QueryContractsByCodeResponse {
    const message = createBaseQueryContractsByCodeResponse();
    message.contracts = object.contracts?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryContractsByCodeResponse): QueryContractsByCodeResponseAmino {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e);
    } else {
      obj.contracts = message.contracts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContractsByCodeResponseAminoMsg): QueryContractsByCodeResponse {
    return QueryContractsByCodeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContractsByCodeResponse): QueryContractsByCodeResponseAminoMsg {
    return {
      type: "wasm/QueryContractsByCodeResponse",
      value: QueryContractsByCodeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryContractsByCodeResponseProtoMsg): QueryContractsByCodeResponse {
    return QueryContractsByCodeResponse.decode(message.value);
  },
  toProto(message: QueryContractsByCodeResponse): Uint8Array {
    return QueryContractsByCodeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContractsByCodeResponse): QueryContractsByCodeResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse",
      value: QueryContractsByCodeResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryAllContractStateRequest(): QueryAllContractStateRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QueryAllContractStateRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest",
  aminoType: "wasm/QueryAllContractStateRequest",
  is(o: any): o is QueryAllContractStateRequest {
    return o && (o.$typeUrl === QueryAllContractStateRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryAllContractStateRequestSDKType {
    return o && (o.$typeUrl === QueryAllContractStateRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryAllContractStateRequestAmino {
    return o && (o.$typeUrl === QueryAllContractStateRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryAllContractStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllContractStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllContractStateRequest {
    const obj = createBaseQueryAllContractStateRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllContractStateRequest): JsonSafe<QueryAllContractStateRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllContractStateRequest>): QueryAllContractStateRequest {
    const message = createBaseQueryAllContractStateRequest();
    message.address = object.address ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryAllContractStateRequestSDKType): QueryAllContractStateRequest {
    return {
      address: object?.address,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllContractStateRequest): QueryAllContractStateRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllContractStateRequestAmino): QueryAllContractStateRequest {
    const message = createBaseQueryAllContractStateRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllContractStateRequest): QueryAllContractStateRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllContractStateRequestAminoMsg): QueryAllContractStateRequest {
    return QueryAllContractStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllContractStateRequest): QueryAllContractStateRequestAminoMsg {
    return {
      type: "wasm/QueryAllContractStateRequest",
      value: QueryAllContractStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllContractStateRequestProtoMsg): QueryAllContractStateRequest {
    return QueryAllContractStateRequest.decode(message.value);
  },
  toProto(message: QueryAllContractStateRequest): Uint8Array {
    return QueryAllContractStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllContractStateRequest): QueryAllContractStateRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest",
      value: QueryAllContractStateRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryAllContractStateResponse(): QueryAllContractStateResponse {
  return {
    models: [],
    pagination: undefined
  };
}
export const QueryAllContractStateResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse",
  aminoType: "wasm/QueryAllContractStateResponse",
  is(o: any): o is QueryAllContractStateResponse {
    return o && (o.$typeUrl === QueryAllContractStateResponse.typeUrl || Array.isArray(o.models) && (!o.models.length || Model.is(o.models[0])));
  },
  isSDK(o: any): o is QueryAllContractStateResponseSDKType {
    return o && (o.$typeUrl === QueryAllContractStateResponse.typeUrl || Array.isArray(o.models) && (!o.models.length || Model.isSDK(o.models[0])));
  },
  isAmino(o: any): o is QueryAllContractStateResponseAmino {
    return o && (o.$typeUrl === QueryAllContractStateResponse.typeUrl || Array.isArray(o.models) && (!o.models.length || Model.isAmino(o.models[0])));
  },
  encode(message: QueryAllContractStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.models) {
      Model.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllContractStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.models.push(Model.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllContractStateResponse {
    const obj = createBaseQueryAllContractStateResponse();
    if (Array.isArray(object?.models)) obj.models = object.models.map((e: any) => Model.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllContractStateResponse): JsonSafe<QueryAllContractStateResponse> {
    const obj: any = {};
    if (message.models) {
      obj.models = message.models.map(e => e ? Model.toJSON(e) : undefined);
    } else {
      obj.models = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllContractStateResponse>): QueryAllContractStateResponse {
    const message = createBaseQueryAllContractStateResponse();
    message.models = object.models?.map(e => Model.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryAllContractStateResponseSDKType): QueryAllContractStateResponse {
    return {
      models: Array.isArray(object?.models) ? object.models.map((e: any) => Model.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllContractStateResponse): QueryAllContractStateResponseSDKType {
    const obj: any = {};
    if (message.models) {
      obj.models = message.models.map(e => e ? Model.toSDK(e) : undefined);
    } else {
      obj.models = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllContractStateResponseAmino): QueryAllContractStateResponse {
    const message = createBaseQueryAllContractStateResponse();
    message.models = object.models?.map(e => Model.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllContractStateResponse): QueryAllContractStateResponseAmino {
    const obj: any = {};
    if (message.models) {
      obj.models = message.models.map(e => e ? Model.toAmino(e) : undefined);
    } else {
      obj.models = message.models;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllContractStateResponseAminoMsg): QueryAllContractStateResponse {
    return QueryAllContractStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllContractStateResponse): QueryAllContractStateResponseAminoMsg {
    return {
      type: "wasm/QueryAllContractStateResponse",
      value: QueryAllContractStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllContractStateResponseProtoMsg): QueryAllContractStateResponse {
    return QueryAllContractStateResponse.decode(message.value);
  },
  toProto(message: QueryAllContractStateResponse): Uint8Array {
    return QueryAllContractStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllContractStateResponse): QueryAllContractStateResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse",
      value: QueryAllContractStateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Model.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryRawContractStateRequest(): QueryRawContractStateRequest {
  return {
    address: "",
    queryData: new Uint8Array()
  };
}
export const QueryRawContractStateRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest",
  aminoType: "wasm/QueryRawContractStateRequest",
  is(o: any): o is QueryRawContractStateRequest {
    return o && (o.$typeUrl === QueryRawContractStateRequest.typeUrl || typeof o.address === "string" && (o.queryData instanceof Uint8Array || typeof o.queryData === "string"));
  },
  isSDK(o: any): o is QueryRawContractStateRequestSDKType {
    return o && (o.$typeUrl === QueryRawContractStateRequest.typeUrl || typeof o.address === "string" && (o.query_data instanceof Uint8Array || typeof o.query_data === "string"));
  },
  isAmino(o: any): o is QueryRawContractStateRequestAmino {
    return o && (o.$typeUrl === QueryRawContractStateRequest.typeUrl || typeof o.address === "string" && (o.query_data instanceof Uint8Array || typeof o.query_data === "string"));
  },
  encode(message: QueryRawContractStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    if (message.queryData.length !== 0) {
      writer.uint32(18).bytes(message.queryData);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRawContractStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.queryData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRawContractStateRequest {
    const obj = createBaseQueryRawContractStateRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.queryData)) obj.queryData = bytesFromBase64(object.queryData);
    return obj;
  },
  toJSON(message: QueryRawContractStateRequest): JsonSafe<QueryRawContractStateRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.queryData !== undefined && (obj.queryData = base64FromBytes(message.queryData !== undefined ? message.queryData : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<QueryRawContractStateRequest>): QueryRawContractStateRequest {
    const message = createBaseQueryRawContractStateRequest();
    message.address = object.address ?? "";
    message.queryData = object.queryData ?? new Uint8Array();
    return message;
  },
  fromSDK(object: QueryRawContractStateRequestSDKType): QueryRawContractStateRequest {
    return {
      address: object?.address,
      queryData: object?.query_data
    };
  },
  toSDK(message: QueryRawContractStateRequest): QueryRawContractStateRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.query_data = message.queryData;
    return obj;
  },
  fromAmino(object: QueryRawContractStateRequestAmino): QueryRawContractStateRequest {
    const message = createBaseQueryRawContractStateRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.query_data !== undefined && object.query_data !== null) {
      message.queryData = bytesFromBase64(object.query_data);
    }
    return message;
  },
  toAmino(message: QueryRawContractStateRequest): QueryRawContractStateRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.query_data = message.queryData ? base64FromBytes(message.queryData) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRawContractStateRequestAminoMsg): QueryRawContractStateRequest {
    return QueryRawContractStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryRawContractStateRequest): QueryRawContractStateRequestAminoMsg {
    return {
      type: "wasm/QueryRawContractStateRequest",
      value: QueryRawContractStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryRawContractStateRequestProtoMsg): QueryRawContractStateRequest {
    return QueryRawContractStateRequest.decode(message.value);
  },
  toProto(message: QueryRawContractStateRequest): Uint8Array {
    return QueryRawContractStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRawContractStateRequest): QueryRawContractStateRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest",
      value: QueryRawContractStateRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryRawContractStateResponse(): QueryRawContractStateResponse {
  return {
    data: new Uint8Array()
  };
}
export const QueryRawContractStateResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse",
  aminoType: "wasm/QueryRawContractStateResponse",
  is(o: any): o is QueryRawContractStateResponse {
    return o && (o.$typeUrl === QueryRawContractStateResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  isSDK(o: any): o is QueryRawContractStateResponseSDKType {
    return o && (o.$typeUrl === QueryRawContractStateResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  isAmino(o: any): o is QueryRawContractStateResponseAmino {
    return o && (o.$typeUrl === QueryRawContractStateResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  encode(message: QueryRawContractStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRawContractStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawContractStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRawContractStateResponse {
    const obj = createBaseQueryRawContractStateResponse();
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: QueryRawContractStateResponse): JsonSafe<QueryRawContractStateResponse> {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<QueryRawContractStateResponse>): QueryRawContractStateResponse {
    const message = createBaseQueryRawContractStateResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromSDK(object: QueryRawContractStateResponseSDKType): QueryRawContractStateResponse {
    return {
      data: object?.data
    };
  },
  toSDK(message: QueryRawContractStateResponse): QueryRawContractStateResponseSDKType {
    const obj: any = {};
    obj.data = message.data;
    return obj;
  },
  fromAmino(object: QueryRawContractStateResponseAmino): QueryRawContractStateResponse {
    const message = createBaseQueryRawContractStateResponse();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: QueryRawContractStateResponse): QueryRawContractStateResponseAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRawContractStateResponseAminoMsg): QueryRawContractStateResponse {
    return QueryRawContractStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryRawContractStateResponse): QueryRawContractStateResponseAminoMsg {
    return {
      type: "wasm/QueryRawContractStateResponse",
      value: QueryRawContractStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryRawContractStateResponseProtoMsg): QueryRawContractStateResponse {
    return QueryRawContractStateResponse.decode(message.value);
  },
  toProto(message: QueryRawContractStateResponse): Uint8Array {
    return QueryRawContractStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRawContractStateResponse): QueryRawContractStateResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse",
      value: QueryRawContractStateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySmartContractStateRequest(): QuerySmartContractStateRequest {
  return {
    address: "",
    queryData: new Uint8Array()
  };
}
export const QuerySmartContractStateRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest",
  aminoType: "wasm/QuerySmartContractStateRequest",
  is(o: any): o is QuerySmartContractStateRequest {
    return o && (o.$typeUrl === QuerySmartContractStateRequest.typeUrl || typeof o.address === "string" && (o.queryData instanceof Uint8Array || typeof o.queryData === "string"));
  },
  isSDK(o: any): o is QuerySmartContractStateRequestSDKType {
    return o && (o.$typeUrl === QuerySmartContractStateRequest.typeUrl || typeof o.address === "string" && (o.query_data instanceof Uint8Array || typeof o.query_data === "string"));
  },
  isAmino(o: any): o is QuerySmartContractStateRequestAmino {
    return o && (o.$typeUrl === QuerySmartContractStateRequest.typeUrl || typeof o.address === "string" && (o.query_data instanceof Uint8Array || typeof o.query_data === "string"));
  },
  encode(message: QuerySmartContractStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    if (message.queryData.length !== 0) {
      writer.uint32(18).bytes(message.queryData);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySmartContractStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySmartContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.queryData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySmartContractStateRequest {
    const obj = createBaseQuerySmartContractStateRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.queryData)) obj.queryData = bytesFromBase64(object.queryData);
    return obj;
  },
  toJSON(message: QuerySmartContractStateRequest): JsonSafe<QuerySmartContractStateRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.queryData !== undefined && (obj.queryData = base64FromBytes(message.queryData !== undefined ? message.queryData : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySmartContractStateRequest>): QuerySmartContractStateRequest {
    const message = createBaseQuerySmartContractStateRequest();
    message.address = object.address ?? "";
    message.queryData = object.queryData ?? new Uint8Array();
    return message;
  },
  fromSDK(object: QuerySmartContractStateRequestSDKType): QuerySmartContractStateRequest {
    return {
      address: object?.address,
      queryData: object?.query_data
    };
  },
  toSDK(message: QuerySmartContractStateRequest): QuerySmartContractStateRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.query_data = message.queryData;
    return obj;
  },
  fromAmino(object: QuerySmartContractStateRequestAmino): QuerySmartContractStateRequest {
    const message = createBaseQuerySmartContractStateRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.query_data !== undefined && object.query_data !== null) {
      message.queryData = toUtf8(JSON.stringify(object.query_data));
    }
    return message;
  },
  toAmino(message: QuerySmartContractStateRequest): QuerySmartContractStateRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.query_data = message.queryData ? JSON.parse(fromUtf8(message.queryData)) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySmartContractStateRequestAminoMsg): QuerySmartContractStateRequest {
    return QuerySmartContractStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySmartContractStateRequest): QuerySmartContractStateRequestAminoMsg {
    return {
      type: "wasm/QuerySmartContractStateRequest",
      value: QuerySmartContractStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySmartContractStateRequestProtoMsg): QuerySmartContractStateRequest {
    return QuerySmartContractStateRequest.decode(message.value);
  },
  toProto(message: QuerySmartContractStateRequest): Uint8Array {
    return QuerySmartContractStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySmartContractStateRequest): QuerySmartContractStateRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest",
      value: QuerySmartContractStateRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySmartContractStateResponse(): QuerySmartContractStateResponse {
  return {
    data: new Uint8Array()
  };
}
export const QuerySmartContractStateResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse",
  aminoType: "wasm/QuerySmartContractStateResponse",
  is(o: any): o is QuerySmartContractStateResponse {
    return o && (o.$typeUrl === QuerySmartContractStateResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  isSDK(o: any): o is QuerySmartContractStateResponseSDKType {
    return o && (o.$typeUrl === QuerySmartContractStateResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  isAmino(o: any): o is QuerySmartContractStateResponseAmino {
    return o && (o.$typeUrl === QuerySmartContractStateResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  encode(message: QuerySmartContractStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySmartContractStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySmartContractStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySmartContractStateResponse {
    const obj = createBaseQuerySmartContractStateResponse();
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: QuerySmartContractStateResponse): JsonSafe<QuerySmartContractStateResponse> {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySmartContractStateResponse>): QuerySmartContractStateResponse {
    const message = createBaseQuerySmartContractStateResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromSDK(object: QuerySmartContractStateResponseSDKType): QuerySmartContractStateResponse {
    return {
      data: object?.data
    };
  },
  toSDK(message: QuerySmartContractStateResponse): QuerySmartContractStateResponseSDKType {
    const obj: any = {};
    obj.data = message.data;
    return obj;
  },
  fromAmino(object: QuerySmartContractStateResponseAmino): QuerySmartContractStateResponse {
    const message = createBaseQuerySmartContractStateResponse();
    if (object.data !== undefined && object.data !== null) {
      message.data = toUtf8(JSON.stringify(object.data));
    }
    return message;
  },
  toAmino(message: QuerySmartContractStateResponse): QuerySmartContractStateResponseAmino {
    const obj: any = {};
    obj.data = message.data ? JSON.parse(fromUtf8(message.data)) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySmartContractStateResponseAminoMsg): QuerySmartContractStateResponse {
    return QuerySmartContractStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySmartContractStateResponse): QuerySmartContractStateResponseAminoMsg {
    return {
      type: "wasm/QuerySmartContractStateResponse",
      value: QuerySmartContractStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySmartContractStateResponseProtoMsg): QuerySmartContractStateResponse {
    return QuerySmartContractStateResponse.decode(message.value);
  },
  toProto(message: QuerySmartContractStateResponse): Uint8Array {
    return QuerySmartContractStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySmartContractStateResponse): QuerySmartContractStateResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse",
      value: QuerySmartContractStateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryCodeRequest(): QueryCodeRequest {
  return {
    codeId: BigInt(0)
  };
}
export const QueryCodeRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest",
  aminoType: "wasm/QueryCodeRequest",
  is(o: any): o is QueryCodeRequest {
    return o && (o.$typeUrl === QueryCodeRequest.typeUrl || typeof o.codeId === "bigint");
  },
  isSDK(o: any): o is QueryCodeRequestSDKType {
    return o && (o.$typeUrl === QueryCodeRequest.typeUrl || typeof o.code_id === "bigint");
  },
  isAmino(o: any): o is QueryCodeRequestAmino {
    return o && (o.$typeUrl === QueryCodeRequest.typeUrl || typeof o.code_id === "bigint");
  },
  encode(message: QueryCodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== undefined) {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCodeRequest {
    const obj = createBaseQueryCodeRequest();
    if (isSet(object.codeId)) obj.codeId = BigInt(object.codeId.toString());
    return obj;
  },
  toJSON(message: QueryCodeRequest): JsonSafe<QueryCodeRequest> {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCodeRequest>): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
    return message;
  },
  fromSDK(object: QueryCodeRequestSDKType): QueryCodeRequest {
    return {
      codeId: object?.code_id
    };
  },
  toSDK(message: QueryCodeRequest): QueryCodeRequestSDKType {
    const obj: any = {};
    obj.code_id = message.codeId;
    return obj;
  },
  fromAmino(object: QueryCodeRequestAmino): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    return message;
  },
  toAmino(message: QueryCodeRequest): QueryCodeRequestAmino {
    const obj: any = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCodeRequestAminoMsg): QueryCodeRequest {
    return QueryCodeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCodeRequest): QueryCodeRequestAminoMsg {
    return {
      type: "wasm/QueryCodeRequest",
      value: QueryCodeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCodeRequestProtoMsg): QueryCodeRequest {
    return QueryCodeRequest.decode(message.value);
  },
  toProto(message: QueryCodeRequest): Uint8Array {
    return QueryCodeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCodeRequest): QueryCodeRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest",
      value: QueryCodeRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseCodeInfoResponse(): CodeInfoResponse {
  return {
    codeId: BigInt(0),
    creator: "",
    dataHash: new Uint8Array(),
    instantiatePermission: AccessConfig.fromPartial({})
  };
}
export const CodeInfoResponse = {
  typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse",
  aminoType: "wasm/CodeInfoResponse",
  is(o: any): o is CodeInfoResponse {
    return o && (o.$typeUrl === CodeInfoResponse.typeUrl || typeof o.codeId === "bigint" && typeof o.creator === "string" && (o.dataHash instanceof Uint8Array || typeof o.dataHash === "string") && AccessConfig.is(o.instantiatePermission));
  },
  isSDK(o: any): o is CodeInfoResponseSDKType {
    return o && (o.$typeUrl === CodeInfoResponse.typeUrl || typeof o.code_id === "bigint" && typeof o.creator === "string" && (o.data_hash instanceof Uint8Array || typeof o.data_hash === "string") && AccessConfig.isSDK(o.instantiate_permission));
  },
  isAmino(o: any): o is CodeInfoResponseAmino {
    return o && (o.$typeUrl === CodeInfoResponse.typeUrl || typeof o.code_id === "bigint" && typeof o.creator === "string" && (o.data_hash instanceof Uint8Array || typeof o.data_hash === "string") && AccessConfig.isAmino(o.instantiate_permission));
  },
  encode(message: CodeInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== undefined) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.creator !== undefined) {
      writer.uint32(18).string(message.creator);
    }
    if (message.dataHash.length !== 0) {
      writer.uint32(26).bytes(message.dataHash);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CodeInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.dataHash = reader.bytes();
          break;
        case 6:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CodeInfoResponse {
    const obj = createBaseCodeInfoResponse();
    if (isSet(object.codeId)) obj.codeId = BigInt(object.codeId.toString());
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.dataHash)) obj.dataHash = bytesFromBase64(object.dataHash);
    if (isSet(object.instantiatePermission)) obj.instantiatePermission = AccessConfig.fromJSON(object.instantiatePermission);
    return obj;
  },
  toJSON(message: CodeInfoResponse): JsonSafe<CodeInfoResponse> {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    message.dataHash !== undefined && (obj.dataHash = base64FromBytes(message.dataHash !== undefined ? message.dataHash : new Uint8Array()));
    message.instantiatePermission !== undefined && (obj.instantiatePermission = message.instantiatePermission ? AccessConfig.toJSON(message.instantiatePermission) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<CodeInfoResponse>): CodeInfoResponse {
    const message = createBaseCodeInfoResponse();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
    message.creator = object.creator ?? "";
    message.dataHash = object.dataHash ?? new Uint8Array();
    if (object.instantiatePermission !== undefined && object.instantiatePermission !== null) {
      message.instantiatePermission = AccessConfig.fromPartial(object.instantiatePermission);
    }
    return message;
  },
  fromSDK(object: CodeInfoResponseSDKType): CodeInfoResponse {
    return {
      codeId: object?.code_id,
      creator: object?.creator,
      dataHash: object?.data_hash,
      instantiatePermission: object.instantiate_permission ? AccessConfig.fromSDK(object.instantiate_permission) : undefined
    };
  },
  toSDK(message: CodeInfoResponse): CodeInfoResponseSDKType {
    const obj: any = {};
    obj.code_id = message.codeId;
    obj.creator = message.creator;
    obj.data_hash = message.dataHash;
    message.instantiatePermission !== undefined && (obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toSDK(message.instantiatePermission) : undefined);
    return obj;
  },
  fromAmino(object: CodeInfoResponseAmino): CodeInfoResponse {
    const message = createBaseCodeInfoResponse();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.data_hash !== undefined && object.data_hash !== null) {
      message.dataHash = bytesFromBase64(object.data_hash);
    }
    if (object.instantiate_permission !== undefined && object.instantiate_permission !== null) {
      message.instantiatePermission = AccessConfig.fromAmino(object.instantiate_permission);
    }
    return message;
  },
  toAmino(message: CodeInfoResponse): CodeInfoResponseAmino {
    const obj: any = {};
    obj.code_id = message.codeId ? message.codeId?.toString() : "0";
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.data_hash = message.dataHash ? base64FromBytes(message.dataHash) : undefined;
    obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toAmino(message.instantiatePermission) : undefined;
    return obj;
  },
  fromAminoMsg(object: CodeInfoResponseAminoMsg): CodeInfoResponse {
    return CodeInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: CodeInfoResponse): CodeInfoResponseAminoMsg {
    return {
      type: "wasm/CodeInfoResponse",
      value: CodeInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: CodeInfoResponseProtoMsg): CodeInfoResponse {
    return CodeInfoResponse.decode(message.value);
  },
  toProto(message: CodeInfoResponse): Uint8Array {
    return CodeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: CodeInfoResponse): CodeInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse",
      value: CodeInfoResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    AccessConfig.registerTypeUrl();
  }
};
function createBaseQueryCodeResponse(): QueryCodeResponse {
  return {
    codeInfo: undefined,
    data: new Uint8Array()
  };
}
export const QueryCodeResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse",
  aminoType: "wasm/QueryCodeResponse",
  is(o: any): o is QueryCodeResponse {
    return o && (o.$typeUrl === QueryCodeResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  isSDK(o: any): o is QueryCodeResponseSDKType {
    return o && (o.$typeUrl === QueryCodeResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  isAmino(o: any): o is QueryCodeResponseAmino {
    return o && (o.$typeUrl === QueryCodeResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  encode(message: QueryCodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeInfo !== undefined) {
      CodeInfoResponse.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeInfo = CodeInfoResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCodeResponse {
    const obj = createBaseQueryCodeResponse();
    if (isSet(object.codeInfo)) obj.codeInfo = CodeInfoResponse.fromJSON(object.codeInfo);
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: QueryCodeResponse): JsonSafe<QueryCodeResponse> {
    const obj: any = {};
    message.codeInfo !== undefined && (obj.codeInfo = message.codeInfo ? CodeInfoResponse.toJSON(message.codeInfo) : undefined);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCodeResponse>): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    if (object.codeInfo !== undefined && object.codeInfo !== null) {
      message.codeInfo = CodeInfoResponse.fromPartial(object.codeInfo);
    }
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromSDK(object: QueryCodeResponseSDKType): QueryCodeResponse {
    return {
      codeInfo: object.code_info ? CodeInfoResponse.fromSDK(object.code_info) : undefined,
      data: object?.data
    };
  },
  toSDK(message: QueryCodeResponse): QueryCodeResponseSDKType {
    const obj: any = {};
    message.codeInfo !== undefined && (obj.code_info = message.codeInfo ? CodeInfoResponse.toSDK(message.codeInfo) : undefined);
    obj.data = message.data;
    return obj;
  },
  fromAmino(object: QueryCodeResponseAmino): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    if (object.code_info !== undefined && object.code_info !== null) {
      message.codeInfo = CodeInfoResponse.fromAmino(object.code_info);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: QueryCodeResponse): QueryCodeResponseAmino {
    const obj: any = {};
    obj.code_info = message.codeInfo ? CodeInfoResponse.toAmino(message.codeInfo) : undefined;
    obj.data = message.data ? base64FromBytes(message.data) : "";
    return obj;
  },
  fromAminoMsg(object: QueryCodeResponseAminoMsg): QueryCodeResponse {
    return QueryCodeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCodeResponse): QueryCodeResponseAminoMsg {
    return {
      type: "wasm/QueryCodeResponse",
      value: QueryCodeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCodeResponseProtoMsg): QueryCodeResponse {
    return QueryCodeResponse.decode(message.value);
  },
  toProto(message: QueryCodeResponse): Uint8Array {
    return QueryCodeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCodeResponse): QueryCodeResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse",
      value: QueryCodeResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    CodeInfoResponse.registerTypeUrl();
  }
};
function createBaseQueryCodesRequest(): QueryCodesRequest {
  return {
    pagination: undefined
  };
}
export const QueryCodesRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest",
  aminoType: "wasm/QueryCodesRequest",
  is(o: any): o is QueryCodesRequest {
    return o && o.$typeUrl === QueryCodesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryCodesRequestSDKType {
    return o && o.$typeUrl === QueryCodesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryCodesRequestAmino {
    return o && o.$typeUrl === QueryCodesRequest.typeUrl;
  },
  encode(message: QueryCodesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodesRequest();
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
  fromJSON(object: any): QueryCodesRequest {
    const obj = createBaseQueryCodesRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryCodesRequest): JsonSafe<QueryCodesRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCodesRequest>): QueryCodesRequest {
    const message = createBaseQueryCodesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryCodesRequestSDKType): QueryCodesRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryCodesRequest): QueryCodesRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryCodesRequestAmino): QueryCodesRequest {
    const message = createBaseQueryCodesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCodesRequest): QueryCodesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCodesRequestAminoMsg): QueryCodesRequest {
    return QueryCodesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCodesRequest): QueryCodesRequestAminoMsg {
    return {
      type: "wasm/QueryCodesRequest",
      value: QueryCodesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCodesRequestProtoMsg): QueryCodesRequest {
    return QueryCodesRequest.decode(message.value);
  },
  toProto(message: QueryCodesRequest): Uint8Array {
    return QueryCodesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCodesRequest): QueryCodesRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest",
      value: QueryCodesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryCodesResponse(): QueryCodesResponse {
  return {
    codeInfos: [],
    pagination: undefined
  };
}
export const QueryCodesResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse",
  aminoType: "wasm/QueryCodesResponse",
  is(o: any): o is QueryCodesResponse {
    return o && (o.$typeUrl === QueryCodesResponse.typeUrl || Array.isArray(o.codeInfos) && (!o.codeInfos.length || CodeInfoResponse.is(o.codeInfos[0])));
  },
  isSDK(o: any): o is QueryCodesResponseSDKType {
    return o && (o.$typeUrl === QueryCodesResponse.typeUrl || Array.isArray(o.code_infos) && (!o.code_infos.length || CodeInfoResponse.isSDK(o.code_infos[0])));
  },
  isAmino(o: any): o is QueryCodesResponseAmino {
    return o && (o.$typeUrl === QueryCodesResponse.typeUrl || Array.isArray(o.code_infos) && (!o.code_infos.length || CodeInfoResponse.isAmino(o.code_infos[0])));
  },
  encode(message: QueryCodesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.codeInfos) {
      CodeInfoResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeInfos.push(CodeInfoResponse.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryCodesResponse {
    const obj = createBaseQueryCodesResponse();
    if (Array.isArray(object?.codeInfos)) obj.codeInfos = object.codeInfos.map((e: any) => CodeInfoResponse.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryCodesResponse): JsonSafe<QueryCodesResponse> {
    const obj: any = {};
    if (message.codeInfos) {
      obj.codeInfos = message.codeInfos.map(e => e ? CodeInfoResponse.toJSON(e) : undefined);
    } else {
      obj.codeInfos = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCodesResponse>): QueryCodesResponse {
    const message = createBaseQueryCodesResponse();
    message.codeInfos = object.codeInfos?.map(e => CodeInfoResponse.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryCodesResponseSDKType): QueryCodesResponse {
    return {
      codeInfos: Array.isArray(object?.code_infos) ? object.code_infos.map((e: any) => CodeInfoResponse.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryCodesResponse): QueryCodesResponseSDKType {
    const obj: any = {};
    if (message.codeInfos) {
      obj.code_infos = message.codeInfos.map(e => e ? CodeInfoResponse.toSDK(e) : undefined);
    } else {
      obj.code_infos = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryCodesResponseAmino): QueryCodesResponse {
    const message = createBaseQueryCodesResponse();
    message.codeInfos = object.code_infos?.map(e => CodeInfoResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCodesResponse): QueryCodesResponseAmino {
    const obj: any = {};
    if (message.codeInfos) {
      obj.code_infos = message.codeInfos.map(e => e ? CodeInfoResponse.toAmino(e) : undefined);
    } else {
      obj.code_infos = message.codeInfos;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCodesResponseAminoMsg): QueryCodesResponse {
    return QueryCodesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCodesResponse): QueryCodesResponseAminoMsg {
    return {
      type: "wasm/QueryCodesResponse",
      value: QueryCodesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCodesResponseProtoMsg): QueryCodesResponse {
    return QueryCodesResponse.decode(message.value);
  },
  toProto(message: QueryCodesResponse): Uint8Array {
    return QueryCodesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCodesResponse): QueryCodesResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse",
      value: QueryCodesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    CodeInfoResponse.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryPinnedCodesRequest(): QueryPinnedCodesRequest {
  return {
    pagination: undefined
  };
}
export const QueryPinnedCodesRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest",
  aminoType: "wasm/QueryPinnedCodesRequest",
  is(o: any): o is QueryPinnedCodesRequest {
    return o && o.$typeUrl === QueryPinnedCodesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryPinnedCodesRequestSDKType {
    return o && o.$typeUrl === QueryPinnedCodesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryPinnedCodesRequestAmino {
    return o && o.$typeUrl === QueryPinnedCodesRequest.typeUrl;
  },
  encode(message: QueryPinnedCodesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPinnedCodesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPinnedCodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPinnedCodesRequest {
    const obj = createBaseQueryPinnedCodesRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryPinnedCodesRequest): JsonSafe<QueryPinnedCodesRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPinnedCodesRequest>): QueryPinnedCodesRequest {
    const message = createBaseQueryPinnedCodesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryPinnedCodesRequestSDKType): QueryPinnedCodesRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPinnedCodesRequest): QueryPinnedCodesRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryPinnedCodesRequestAmino): QueryPinnedCodesRequest {
    const message = createBaseQueryPinnedCodesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPinnedCodesRequest): QueryPinnedCodesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPinnedCodesRequestAminoMsg): QueryPinnedCodesRequest {
    return QueryPinnedCodesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPinnedCodesRequest): QueryPinnedCodesRequestAminoMsg {
    return {
      type: "wasm/QueryPinnedCodesRequest",
      value: QueryPinnedCodesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPinnedCodesRequestProtoMsg): QueryPinnedCodesRequest {
    return QueryPinnedCodesRequest.decode(message.value);
  },
  toProto(message: QueryPinnedCodesRequest): Uint8Array {
    return QueryPinnedCodesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPinnedCodesRequest): QueryPinnedCodesRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest",
      value: QueryPinnedCodesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryPinnedCodesResponse(): QueryPinnedCodesResponse {
  return {
    codeIds: [],
    pagination: undefined
  };
}
export const QueryPinnedCodesResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse",
  aminoType: "wasm/QueryPinnedCodesResponse",
  is(o: any): o is QueryPinnedCodesResponse {
    return o && (o.$typeUrl === QueryPinnedCodesResponse.typeUrl || Array.isArray(o.codeIds) && (!o.codeIds.length || typeof o.codeIds[0] === "bigint"));
  },
  isSDK(o: any): o is QueryPinnedCodesResponseSDKType {
    return o && (o.$typeUrl === QueryPinnedCodesResponse.typeUrl || Array.isArray(o.code_ids) && (!o.code_ids.length || typeof o.code_ids[0] === "bigint"));
  },
  isAmino(o: any): o is QueryPinnedCodesResponseAmino {
    return o && (o.$typeUrl === QueryPinnedCodesResponse.typeUrl || Array.isArray(o.code_ids) && (!o.code_ids.length || typeof o.code_ids[0] === "bigint"));
  },
  encode(message: QueryPinnedCodesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPinnedCodesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPinnedCodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(reader.uint64());
            }
          } else {
            message.codeIds.push(reader.uint64());
          }
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
  fromJSON(object: any): QueryPinnedCodesResponse {
    const obj = createBaseQueryPinnedCodesResponse();
    if (Array.isArray(object?.codeIds)) obj.codeIds = object.codeIds.map((e: any) => BigInt(e.toString()));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryPinnedCodesResponse): JsonSafe<QueryPinnedCodesResponse> {
    const obj: any = {};
    if (message.codeIds) {
      obj.codeIds = message.codeIds.map(e => (e || BigInt(0)).toString());
    } else {
      obj.codeIds = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPinnedCodesResponse>): QueryPinnedCodesResponse {
    const message = createBaseQueryPinnedCodesResponse();
    message.codeIds = object.codeIds?.map(e => BigInt(e.toString())) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryPinnedCodesResponseSDKType): QueryPinnedCodesResponse {
    return {
      codeIds: Array.isArray(object?.code_ids) ? object.code_ids.map((e: any) => e) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPinnedCodesResponse): QueryPinnedCodesResponseSDKType {
    const obj: any = {};
    if (message.codeIds) {
      obj.code_ids = message.codeIds.map(e => e);
    } else {
      obj.code_ids = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryPinnedCodesResponseAmino): QueryPinnedCodesResponse {
    const message = createBaseQueryPinnedCodesResponse();
    message.codeIds = object.code_ids?.map(e => BigInt(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPinnedCodesResponse): QueryPinnedCodesResponseAmino {
    const obj: any = {};
    if (message.codeIds) {
      obj.code_ids = message.codeIds.map(e => e.toString());
    } else {
      obj.code_ids = message.codeIds;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPinnedCodesResponseAminoMsg): QueryPinnedCodesResponse {
    return QueryPinnedCodesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPinnedCodesResponse): QueryPinnedCodesResponseAminoMsg {
    return {
      type: "wasm/QueryPinnedCodesResponse",
      value: QueryPinnedCodesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPinnedCodesResponseProtoMsg): QueryPinnedCodesResponse {
    return QueryPinnedCodesResponse.decode(message.value);
  },
  toProto(message: QueryPinnedCodesResponse): Uint8Array {
    return QueryPinnedCodesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPinnedCodesResponse): QueryPinnedCodesResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse",
      value: QueryPinnedCodesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryParamsRequest",
  aminoType: "wasm/QueryParamsRequest",
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
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "wasm/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryParamsResponse",
  aminoType: "wasm/QueryParamsResponse",
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
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "wasm/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Params.registerTypeUrl();
  }
};
function createBaseQueryContractsByCreatorRequest(): QueryContractsByCreatorRequest {
  return {
    creatorAddress: "",
    pagination: undefined
  };
}
export const QueryContractsByCreatorRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorRequest",
  aminoType: "wasm/QueryContractsByCreatorRequest",
  is(o: any): o is QueryContractsByCreatorRequest {
    return o && (o.$typeUrl === QueryContractsByCreatorRequest.typeUrl || typeof o.creatorAddress === "string");
  },
  isSDK(o: any): o is QueryContractsByCreatorRequestSDKType {
    return o && (o.$typeUrl === QueryContractsByCreatorRequest.typeUrl || typeof o.creator_address === "string");
  },
  isAmino(o: any): o is QueryContractsByCreatorRequestAmino {
    return o && (o.$typeUrl === QueryContractsByCreatorRequest.typeUrl || typeof o.creator_address === "string");
  },
  encode(message: QueryContractsByCreatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creatorAddress !== undefined) {
      writer.uint32(10).string(message.creatorAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractsByCreatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCreatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creatorAddress = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContractsByCreatorRequest {
    const obj = createBaseQueryContractsByCreatorRequest();
    if (isSet(object.creatorAddress)) obj.creatorAddress = String(object.creatorAddress);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryContractsByCreatorRequest): JsonSafe<QueryContractsByCreatorRequest> {
    const obj: any = {};
    message.creatorAddress !== undefined && (obj.creatorAddress = message.creatorAddress);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryContractsByCreatorRequest>): QueryContractsByCreatorRequest {
    const message = createBaseQueryContractsByCreatorRequest();
    message.creatorAddress = object.creatorAddress ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryContractsByCreatorRequestSDKType): QueryContractsByCreatorRequest {
    return {
      creatorAddress: object?.creator_address,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryContractsByCreatorRequest): QueryContractsByCreatorRequestSDKType {
    const obj: any = {};
    obj.creator_address = message.creatorAddress;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryContractsByCreatorRequestAmino): QueryContractsByCreatorRequest {
    const message = createBaseQueryContractsByCreatorRequest();
    if (object.creator_address !== undefined && object.creator_address !== null) {
      message.creatorAddress = object.creator_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryContractsByCreatorRequest): QueryContractsByCreatorRequestAmino {
    const obj: any = {};
    obj.creator_address = message.creatorAddress === "" ? undefined : message.creatorAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContractsByCreatorRequestAminoMsg): QueryContractsByCreatorRequest {
    return QueryContractsByCreatorRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContractsByCreatorRequest): QueryContractsByCreatorRequestAminoMsg {
    return {
      type: "wasm/QueryContractsByCreatorRequest",
      value: QueryContractsByCreatorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryContractsByCreatorRequestProtoMsg): QueryContractsByCreatorRequest {
    return QueryContractsByCreatorRequest.decode(message.value);
  },
  toProto(message: QueryContractsByCreatorRequest): Uint8Array {
    return QueryContractsByCreatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContractsByCreatorRequest): QueryContractsByCreatorRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorRequest",
      value: QueryContractsByCreatorRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryContractsByCreatorResponse(): QueryContractsByCreatorResponse {
  return {
    contractAddresses: [],
    pagination: undefined
  };
}
export const QueryContractsByCreatorResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorResponse",
  aminoType: "wasm/QueryContractsByCreatorResponse",
  is(o: any): o is QueryContractsByCreatorResponse {
    return o && (o.$typeUrl === QueryContractsByCreatorResponse.typeUrl || Array.isArray(o.contractAddresses) && (!o.contractAddresses.length || typeof o.contractAddresses[0] === "string"));
  },
  isSDK(o: any): o is QueryContractsByCreatorResponseSDKType {
    return o && (o.$typeUrl === QueryContractsByCreatorResponse.typeUrl || Array.isArray(o.contract_addresses) && (!o.contract_addresses.length || typeof o.contract_addresses[0] === "string"));
  },
  isAmino(o: any): o is QueryContractsByCreatorResponseAmino {
    return o && (o.$typeUrl === QueryContractsByCreatorResponse.typeUrl || Array.isArray(o.contract_addresses) && (!o.contract_addresses.length || typeof o.contract_addresses[0] === "string"));
  },
  encode(message: QueryContractsByCreatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractsByCreatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCreatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddresses.push(reader.string());
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
  fromJSON(object: any): QueryContractsByCreatorResponse {
    const obj = createBaseQueryContractsByCreatorResponse();
    if (Array.isArray(object?.contractAddresses)) obj.contractAddresses = object.contractAddresses.map((e: any) => String(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryContractsByCreatorResponse): JsonSafe<QueryContractsByCreatorResponse> {
    const obj: any = {};
    if (message.contractAddresses) {
      obj.contractAddresses = message.contractAddresses.map(e => e);
    } else {
      obj.contractAddresses = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryContractsByCreatorResponse>): QueryContractsByCreatorResponse {
    const message = createBaseQueryContractsByCreatorResponse();
    message.contractAddresses = object.contractAddresses?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryContractsByCreatorResponseSDKType): QueryContractsByCreatorResponse {
    return {
      contractAddresses: Array.isArray(object?.contract_addresses) ? object.contract_addresses.map((e: any) => e) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryContractsByCreatorResponse): QueryContractsByCreatorResponseSDKType {
    const obj: any = {};
    if (message.contractAddresses) {
      obj.contract_addresses = message.contractAddresses.map(e => e);
    } else {
      obj.contract_addresses = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryContractsByCreatorResponseAmino): QueryContractsByCreatorResponse {
    const message = createBaseQueryContractsByCreatorResponse();
    message.contractAddresses = object.contract_addresses?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryContractsByCreatorResponse): QueryContractsByCreatorResponseAmino {
    const obj: any = {};
    if (message.contractAddresses) {
      obj.contract_addresses = message.contractAddresses.map(e => e);
    } else {
      obj.contract_addresses = message.contractAddresses;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContractsByCreatorResponseAminoMsg): QueryContractsByCreatorResponse {
    return QueryContractsByCreatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContractsByCreatorResponse): QueryContractsByCreatorResponseAminoMsg {
    return {
      type: "wasm/QueryContractsByCreatorResponse",
      value: QueryContractsByCreatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryContractsByCreatorResponseProtoMsg): QueryContractsByCreatorResponse {
    return QueryContractsByCreatorResponse.decode(message.value);
  },
  toProto(message: QueryContractsByCreatorResponse): Uint8Array {
    return QueryContractsByCreatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContractsByCreatorResponse): QueryContractsByCreatorResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorResponse",
      value: QueryContractsByCreatorResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageResponse.registerTypeUrl();
  }
};