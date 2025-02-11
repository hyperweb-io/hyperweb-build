import { Params, ParamsSDKType } from "./params";
import { Contracts, ContractsSDKType } from "./contracts";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { ParamsRequest, ParamsRequestSDKType, ParamsResponse, ParamsResponseSDKType, GetContractRequest, GetContractRequestSDKType, GetContractResponse, GetContractResponseSDKType, ListContractsRequest, ListContractsRequestSDKType, ListContractsResponse, ListContractsResponseSDKType, EvalRequest, EvalRequestSDKType, EvalResponse, EvalResponseSDKType, LocalStateRequest, LocalStateRequestSDKType, LocalStateResponse, LocalStateResponseSDKType, GetContractSourceRequest, GetContractSourceRequestSDKType, GetContractSourceResponse, GetContractSourceResponseSDKType } from "./query";
/** query defines the gRPC querier service */
export interface Query {
  /** parameters queries the parameters of the module */
  params(request?: ParamsRequest): Promise<ParamsResponse>;
  /** get contract by index */
  getContract(request: GetContractRequest): Promise<GetContractResponse>;
  /** list all contracts */
  listContracts(request?: ListContractsRequest): Promise<ListContractsResponse>;
  /** evaluate contract function */
  eval(request: EvalRequest): Promise<EvalResponse>;
  /** get contract local state */
  localState(request: LocalStateRequest): Promise<LocalStateResponse>;
  /** fetch TypeScript source */
  getContractSource(request: GetContractSourceRequest): Promise<GetContractSourceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* parameters queries the parameters of the module */
  params = async (request: ParamsRequest = {}): Promise<ParamsResponse> => {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("hyperweb.hvm.Query", "Params", data);
    return promise.then(data => ParamsResponse.decode(new BinaryReader(data)));
  };
  /* get contract by index */
  getContract = async (request: GetContractRequest): Promise<GetContractResponse> => {
    const data = GetContractRequest.encode(request).finish();
    const promise = this.rpc.request("hyperweb.hvm.Query", "GetContract", data);
    return promise.then(data => GetContractResponse.decode(new BinaryReader(data)));
  };
  /* list all contracts */
  listContracts = async (request: ListContractsRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<ListContractsResponse> => {
    const data = ListContractsRequest.encode(request).finish();
    const promise = this.rpc.request("hyperweb.hvm.Query", "ListContracts", data);
    return promise.then(data => ListContractsResponse.decode(new BinaryReader(data)));
  };
  /* evaluate contract function */
  eval = async (request: EvalRequest): Promise<EvalResponse> => {
    const data = EvalRequest.encode(request).finish();
    const promise = this.rpc.request("hyperweb.hvm.Query", "Eval", data);
    return promise.then(data => EvalResponse.decode(new BinaryReader(data)));
  };
  /* get contract local state */
  localState = async (request: LocalStateRequest): Promise<LocalStateResponse> => {
    const data = LocalStateRequest.encode(request).finish();
    const promise = this.rpc.request("hyperweb.hvm.Query", "LocalState", data);
    return promise.then(data => LocalStateResponse.decode(new BinaryReader(data)));
  };
  /* fetch TypeScript source */
  getContractSource = async (request: GetContractSourceRequest): Promise<GetContractSourceResponse> => {
    const data = GetContractSourceRequest.encode(request).finish();
    const promise = this.rpc.request("hyperweb.hvm.Query", "GetContractSource", data);
    return promise.then(data => GetContractSourceResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: ParamsRequest): Promise<ParamsResponse> {
      return queryService.params(request);
    },
    getContract(request: GetContractRequest): Promise<GetContractResponse> {
      return queryService.getContract(request);
    },
    listContracts(request?: ListContractsRequest): Promise<ListContractsResponse> {
      return queryService.listContracts(request);
    },
    eval(request: EvalRequest): Promise<EvalResponse> {
      return queryService.eval(request);
    },
    localState(request: LocalStateRequest): Promise<LocalStateResponse> {
      return queryService.localState(request);
    },
    getContractSource(request: GetContractSourceRequest): Promise<GetContractSourceResponse> {
      return queryService.getContractSource(request);
    }
  };
};