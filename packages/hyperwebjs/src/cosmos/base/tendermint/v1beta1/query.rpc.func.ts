import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { BlockID, BlockIDSDKType } from "../../../../tendermint/types/types";
import { Block as Block1 } from "../../../../tendermint/types/block";
import { BlockSDKType as Block1SDKType } from "../../../../tendermint/types/block";
import { Block as Block2 } from "./types";
import { BlockSDKType as Block2SDKType } from "./types";
import { DefaultNodeInfo, DefaultNodeInfoSDKType } from "../../../../tendermint/p2p/types";
import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { GetNodeInfoRequest, GetNodeInfoRequestSDKType, GetNodeInfoResponse, GetNodeInfoResponseSDKType, GetSyncingRequest, GetSyncingRequestSDKType, GetSyncingResponse, GetSyncingResponseSDKType, GetLatestBlockRequest, GetLatestBlockRequestSDKType, GetLatestBlockResponse, GetLatestBlockResponseSDKType, GetBlockByHeightRequest, GetBlockByHeightRequestSDKType, GetBlockByHeightResponse, GetBlockByHeightResponseSDKType, GetLatestValidatorSetRequest, GetLatestValidatorSetRequestSDKType, GetLatestValidatorSetResponse, GetLatestValidatorSetResponseSDKType, GetValidatorSetByHeightRequest, GetValidatorSetByHeightRequestSDKType, GetValidatorSetByHeightResponse, GetValidatorSetByHeightResponseSDKType, ABCIQueryRequest, ABCIQueryRequestSDKType, ABCIQueryResponse, ABCIQueryResponseSDKType } from "./query";
export const createGetGetNodeInfo = (clientResolver?: RpcResolver) => buildQuery<GetNodeInfoRequest, GetNodeInfoResponse>({
  encode: GetNodeInfoRequest.encode,
  decode: GetNodeInfoResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetNodeInfo",
  clientResolver,
  deps: [GetNodeInfoRequest, GetNodeInfoResponse]
});
export const createGetGetSyncing = (clientResolver?: RpcResolver) => buildQuery<GetSyncingRequest, GetSyncingResponse>({
  encode: GetSyncingRequest.encode,
  decode: GetSyncingResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetSyncing",
  clientResolver,
  deps: [GetSyncingRequest, GetSyncingResponse]
});
export const createGetGetLatestBlock = (clientResolver?: RpcResolver) => buildQuery<GetLatestBlockRequest, GetLatestBlockResponse>({
  encode: GetLatestBlockRequest.encode,
  decode: GetLatestBlockResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetLatestBlock",
  clientResolver,
  deps: [GetLatestBlockRequest, GetLatestBlockResponse]
});
export const createGetGetBlockByHeight = (clientResolver?: RpcResolver) => buildQuery<GetBlockByHeightRequest, GetBlockByHeightResponse>({
  encode: GetBlockByHeightRequest.encode,
  decode: GetBlockByHeightResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetBlockByHeight",
  clientResolver,
  deps: [GetBlockByHeightRequest, GetBlockByHeightResponse]
});
export const createGetGetLatestValidatorSet = (clientResolver?: RpcResolver) => buildQuery<GetLatestValidatorSetRequest, GetLatestValidatorSetResponse>({
  encode: GetLatestValidatorSetRequest.encode,
  decode: GetLatestValidatorSetResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetLatestValidatorSet",
  clientResolver,
  deps: [GetLatestValidatorSetRequest, GetLatestValidatorSetResponse]
});
export const createGetGetValidatorSetByHeight = (clientResolver?: RpcResolver) => buildQuery<GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse>({
  encode: GetValidatorSetByHeightRequest.encode,
  decode: GetValidatorSetByHeightResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetValidatorSetByHeight",
  clientResolver,
  deps: [GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse]
});
export const createGetABCIQuery = (clientResolver?: RpcResolver) => buildQuery<ABCIQueryRequest, ABCIQueryResponse>({
  encode: ABCIQueryRequest.encode,
  decode: ABCIQueryResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "ABCIQuery",
  clientResolver,
  deps: [ABCIQueryRequest, ABCIQueryResponse]
});