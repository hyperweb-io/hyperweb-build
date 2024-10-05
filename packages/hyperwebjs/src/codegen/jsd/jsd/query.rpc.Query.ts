import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Contracts, ContractsSDKType } from "./contracts";
import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryGetContractsRequest, QueryGetContractsRequestSDKType, QueryGetContractsResponse, QueryGetContractsResponseSDKType, QueryAllContractsRequest, QueryAllContractsRequestSDKType, QueryAllContractsResponse, QueryAllContractsResponseSDKType, QueryEvalRequest, QueryEvalRequestSDKType, QueryEvalResponse, QueryEvalResponseSDKType, QueryLocalStateRequest, QueryLocalStateRequestSDKType, QueryLocalStateResponse, QueryLocalStateResponseSDKType } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Contracts items. */
  contracts(request: QueryGetContractsRequest): Promise<QueryGetContractsResponse>;
  contractsAll(request?: QueryAllContractsRequest): Promise<QueryAllContractsResponse>;
  /** Queries a list of Eval items. */
  eval(request: QueryEvalRequest): Promise<QueryEvalResponse>;
  /** Queries a list of LocalState items. */
  localState(request: QueryLocalStateRequest): Promise<QueryLocalStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Parameters queries the parameters of the module. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("jsd.jsd.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Queries a list of Contracts items. */
  contracts = async (request: QueryGetContractsRequest): Promise<QueryGetContractsResponse> => {
    const data = QueryGetContractsRequest.encode(request).finish();
    const promise = this.rpc.request("jsd.jsd.Query", "Contracts", data);
    return promise.then(data => QueryGetContractsResponse.decode(new BinaryReader(data)));
  };
  /* ContractsAll */
  contractsAll = async (request: QueryAllContractsRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryAllContractsResponse> => {
    const data = QueryAllContractsRequest.encode(request).finish();
    const promise = this.rpc.request("jsd.jsd.Query", "ContractsAll", data);
    return promise.then(data => QueryAllContractsResponse.decode(new BinaryReader(data)));
  };
  /* Queries a list of Eval items. */
  eval = async (request: QueryEvalRequest): Promise<QueryEvalResponse> => {
    const data = QueryEvalRequest.encode(request).finish();
    const promise = this.rpc.request("jsd.jsd.Query", "Eval", data);
    return promise.then(data => QueryEvalResponse.decode(new BinaryReader(data)));
  };
  /* Queries a list of LocalState items. */
  localState = async (request: QueryLocalStateRequest): Promise<QueryLocalStateResponse> => {
    const data = QueryLocalStateRequest.encode(request).finish();
    const promise = this.rpc.request("jsd.jsd.Query", "LocalState", data);
    return promise.then(data => QueryLocalStateResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    contracts(request: QueryGetContractsRequest): Promise<QueryGetContractsResponse> {
      return queryService.contracts(request);
    },
    contractsAll(request?: QueryAllContractsRequest): Promise<QueryAllContractsResponse> {
      return queryService.contractsAll(request);
    },
    eval(request: QueryEvalRequest): Promise<QueryEvalResponse> {
      return queryService.eval(request);
    },
    localState(request: QueryLocalStateRequest): Promise<QueryLocalStateResponse> {
      return queryService.localState(request);
    }
  };
};