import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { BlockID, BlockIDSDKType } from "../../../../tendermint/types/types";
import { Block as Block1 } from "../../../../tendermint/types/block";
import { BlockSDKType as Block1SDKType } from "../../../../tendermint/types/block";
import { Block as Block2 } from "./types";
import { BlockSDKType as Block2SDKType } from "./types";
import { DefaultNodeInfo, DefaultNodeInfoSDKType } from "../../../../tendermint/p2p/types";
import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { GetNodeInfoRequest, GetNodeInfoRequestSDKType, GetNodeInfoResponse, GetNodeInfoResponseSDKType, GetSyncingRequest, GetSyncingRequestSDKType, GetSyncingResponse, GetSyncingResponseSDKType, GetLatestBlockRequest, GetLatestBlockRequestSDKType, GetLatestBlockResponse, GetLatestBlockResponseSDKType, GetBlockByHeightRequest, GetBlockByHeightRequestSDKType, GetBlockByHeightResponse, GetBlockByHeightResponseSDKType, GetLatestValidatorSetRequest, GetLatestValidatorSetRequestSDKType, GetLatestValidatorSetResponse, GetLatestValidatorSetResponseSDKType, GetValidatorSetByHeightRequest, GetValidatorSetByHeightRequestSDKType, GetValidatorSetByHeightResponse, GetValidatorSetByHeightResponseSDKType, ABCIQueryRequest, ABCIQueryRequestSDKType, ABCIQueryResponse, ABCIQueryResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* GetNodeInfo queries the current node info. */
  getNodeInfo = async (_params: GetNodeInfoRequest = {}): Promise<GetNodeInfoResponseSDKType> => {
    const endpoint = `cosmos/base/tendermint/v1beta1/node_info`;
    return await this.req.get<GetNodeInfoResponseSDKType>(endpoint);
  };
  /* GetSyncing queries node syncing. */
  getSyncing = async (_params: GetSyncingRequest = {}): Promise<GetSyncingResponseSDKType> => {
    const endpoint = `cosmos/base/tendermint/v1beta1/syncing`;
    return await this.req.get<GetSyncingResponseSDKType>(endpoint);
  };
  /* GetLatestBlock returns the latest block. */
  getLatestBlock = async (_params: GetLatestBlockRequest = {}): Promise<GetLatestBlockResponseSDKType> => {
    const endpoint = `cosmos/base/tendermint/v1beta1/blocks/latest`;
    return await this.req.get<GetLatestBlockResponseSDKType>(endpoint);
  };
  /* GetBlockByHeight queries block for given height. */
  getBlockByHeight = async (params: GetBlockByHeightRequest): Promise<GetBlockByHeightResponseSDKType> => {
    const endpoint = `cosmos/base/tendermint/v1beta1/blocks/${params.height}`;
    return await this.req.get<GetBlockByHeightResponseSDKType>(endpoint);
  };
  /* GetLatestValidatorSet queries latest validator-set. */
  getLatestValidatorSet = async (params: GetLatestValidatorSetRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<GetLatestValidatorSetResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/base/tendermint/v1beta1/validatorsets/latest`;
    return await this.req.get<GetLatestValidatorSetResponseSDKType>(endpoint, options);
  };
  /* GetValidatorSetByHeight queries validator-set at a given height. */
  getValidatorSetByHeight = async (params: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/base/tendermint/v1beta1/validatorsets/${params.height}`;
    return await this.req.get<GetValidatorSetByHeightResponseSDKType>(endpoint, options);
  };
  /* ABCIQuery defines a query handler that supports ABCI queries directly to the
   application, bypassing Tendermint completely. The ABCI query must contain
   a valid and supported path, including app, custom, p2p, and store.
  
   Since: cosmos-sdk 0.46 */
  aBCIQuery = async (params: ABCIQueryRequest): Promise<ABCIQueryResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.data !== "undefined") {
      options.params.data = params.data;
    }
    if (typeof params?.path !== "undefined") {
      options.params.path = params.path;
    }
    if (typeof params?.height !== "undefined") {
      options.params.height = params.height;
    }
    if (typeof params?.prove !== "undefined") {
      options.params.prove = params.prove;
    }
    const endpoint = `cosmos/base/tendermint/v1beta1/abci_query`;
    return await this.req.get<ABCIQueryResponseSDKType>(endpoint, options);
  };
}