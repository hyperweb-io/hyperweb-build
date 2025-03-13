import { Params, ParamsSDKType } from "./params";
import { Contracts, ContractsSDKType } from "./contracts";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { ParamsRequest, ParamsRequestSDKType, ParamsResponse, ParamsResponseSDKType, GetContractRequest, GetContractRequestSDKType, GetContractResponse, GetContractResponseSDKType, ListContractsRequest, ListContractsRequestSDKType, ListContractsResponse, ListContractsResponseSDKType, EvalRequest, EvalRequestSDKType, EvalResponse, EvalResponseSDKType, LocalStateRequest, LocalStateRequestSDKType, LocalStateResponse, LocalStateResponseSDKType, GetContractSourceRequest, GetContractSourceRequestSDKType, GetContractSourceResponse, GetContractSourceResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* parameters queries the parameters of the module */
  params = async (_params: ParamsRequest = {}): Promise<ParamsResponseSDKType> => {
    const endpoint = `hvm/hvm/params`;
    return await this.req.get<ParamsResponseSDKType>(endpoint);
  };
  /* get contract by index */
  getContract = async (params: GetContractRequest): Promise<GetContractResponseSDKType> => {
    const endpoint = `hvm/hvm/contracts/${params.index}`;
    return await this.req.get<GetContractResponseSDKType>(endpoint);
  };
  /* list all contracts */
  listContracts = async (params: ListContractsRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<ListContractsResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `hvm/hvm/contracts`;
    return await this.req.get<ListContractsResponseSDKType>(endpoint, options);
  };
  /* evaluate contract function */
  eval = async (params: EvalRequest): Promise<EvalResponseSDKType> => {
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
    const endpoint = `hvm/hvm/eval`;
    return await this.req.get<EvalResponseSDKType>(endpoint, options);
  };
  /* get contract local state */
  localState = async (params: LocalStateRequest): Promise<LocalStateResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.index !== "undefined") {
      options.params.index = params.index;
    }
    if (typeof params?.key !== "undefined") {
      options.params.key = params.key;
    }
    const endpoint = `hvm/hvm/local_state`;
    return await this.req.get<LocalStateResponseSDKType>(endpoint, options);
  };
  /* fetch TypeScript source */
  getContractSource = async (params: GetContractSourceRequest): Promise<GetContractSourceResponseSDKType> => {
    const endpoint = `hvm/hvm/contract_source/${params.index}`;
    return await this.req.get<GetContractSourceResponseSDKType>(endpoint);
  };
}