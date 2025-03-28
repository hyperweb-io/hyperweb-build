import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Contracts, ContractsSDKType } from "./contracts";
import { RpcResolver, buildQuery } from "../../helper-func-types";
import { ParamsRequest, ParamsRequestSDKType, ParamsResponse, ParamsResponseSDKType, GetContractRequest, GetContractRequestSDKType, GetContractResponse, GetContractResponseSDKType, ListContractsRequest, ListContractsRequestSDKType, ListContractsResponse, ListContractsResponseSDKType, EvalRequest, EvalRequestSDKType, EvalResponse, EvalResponseSDKType, LocalStateRequest, LocalStateRequestSDKType, LocalStateResponse, LocalStateResponseSDKType, GetContractSourceRequest, GetContractSourceRequestSDKType, GetContractSourceResponse, GetContractSourceResponseSDKType, GetContractByIndexRequest, GetContractByIndexRequestSDKType, GetContractByIndexResponse, GetContractByIndexResponseSDKType } from "./query";
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<ParamsRequest, ParamsResponse>({
  encode: ParamsRequest.encode,
  decode: ParamsResponse.decode,
  service: "hyperweb.hvm.Query",
  method: "Params",
  clientResolver,
  deps: [ParamsRequest, ParamsResponse]
});
export const createGetGetContract = (clientResolver?: RpcResolver) => buildQuery<GetContractRequest, GetContractResponse>({
  encode: GetContractRequest.encode,
  decode: GetContractResponse.decode,
  service: "hyperweb.hvm.Query",
  method: "GetContract",
  clientResolver,
  deps: [GetContractRequest, GetContractResponse]
});
export const createGetListContracts = (clientResolver?: RpcResolver) => buildQuery<ListContractsRequest, ListContractsResponse>({
  encode: ListContractsRequest.encode,
  decode: ListContractsResponse.decode,
  service: "hyperweb.hvm.Query",
  method: "ListContracts",
  clientResolver,
  deps: [ListContractsRequest, ListContractsResponse]
});
export const createGetEval = (clientResolver?: RpcResolver) => buildQuery<EvalRequest, EvalResponse>({
  encode: EvalRequest.encode,
  decode: EvalResponse.decode,
  service: "hyperweb.hvm.Query",
  method: "Eval",
  clientResolver,
  deps: [EvalRequest, EvalResponse]
});
export const createGetLocalState = (clientResolver?: RpcResolver) => buildQuery<LocalStateRequest, LocalStateResponse>({
  encode: LocalStateRequest.encode,
  decode: LocalStateResponse.decode,
  service: "hyperweb.hvm.Query",
  method: "LocalState",
  clientResolver,
  deps: [LocalStateRequest, LocalStateResponse]
});
export const createGetGetContractSource = (clientResolver?: RpcResolver) => buildQuery<GetContractSourceRequest, GetContractSourceResponse>({
  encode: GetContractSourceRequest.encode,
  decode: GetContractSourceResponse.decode,
  service: "hyperweb.hvm.Query",
  method: "GetContractSource",
  clientResolver,
  deps: [GetContractSourceRequest, GetContractSourceResponse]
});
export const createGetGetContractByIndex = (clientResolver?: RpcResolver) => buildQuery<GetContractByIndexRequest, GetContractByIndexResponse>({
  encode: GetContractByIndexRequest.encode,
  decode: GetContractByIndexResponse.decode,
  service: "hyperweb.hvm.Query",
  method: "GetContractByIndex",
  clientResolver,
  deps: [GetContractByIndexRequest, GetContractByIndexResponse]
});