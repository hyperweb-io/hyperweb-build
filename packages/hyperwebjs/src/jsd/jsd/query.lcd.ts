import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Contracts, ContractsSDKType } from "./contracts";
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryGetContractsRequest, QueryGetContractsRequestSDKType, QueryGetContractsResponse, QueryGetContractsResponseSDKType, QueryAllContractsRequest, QueryAllContractsRequestSDKType, QueryAllContractsResponse, QueryAllContractsResponseSDKType, QueryEvalRequest, QueryEvalRequestSDKType, QueryEvalResponse, QueryEvalResponseSDKType, QueryLocalStateRequest, QueryLocalStateRequestSDKType, QueryLocalStateResponse, QueryLocalStateResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Parameters queries the parameters of the module. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `jsd/jsd/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  };
  /* Queries a list of Contracts items. */
  contracts = async (params: QueryGetContractsRequest): Promise<QueryGetContractsResponseSDKType> => {
    const endpoint = `jsd/jsd/contracts/${params.index}`;
    return await this.req.get<QueryGetContractsResponseSDKType>(endpoint);
  };
  /* ContractsAll */
  contractsAll = async (params: QueryAllContractsRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryAllContractsResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `jsd/jsd/contracts`;
    return await this.req.get<QueryAllContractsResponseSDKType>(endpoint, options);
  };
  /* Queries a list of Eval items. */
  eval = async (params: QueryEvalRequest): Promise<QueryEvalResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.index !== "undefined") {
      options.params.index = params.index;
    }
    if (typeof params?.fnName !== "undefined") {
      options.params.fn_name = params.fnName;
    }
    if (typeof params?.arg !== "undefined") {
      options.params.arg = params.arg;
    }
    const endpoint = `jsd/jsd/eval`;
    return await this.req.get<QueryEvalResponseSDKType>(endpoint, options);
  };
  /* Queries a list of LocalState items. */
  localState = async (params: QueryLocalStateRequest): Promise<QueryLocalStateResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.index !== "undefined") {
      options.params.index = params.index;
    }
    if (typeof params?.key !== "undefined") {
      options.params.key = params.key;
    }
    const endpoint = `jsd/jsd/local_state`;
    return await this.req.get<QueryLocalStateResponseSDKType>(endpoint, options);
  };
}