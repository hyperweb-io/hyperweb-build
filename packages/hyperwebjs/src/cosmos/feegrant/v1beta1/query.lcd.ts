import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantSDKType } from "./feegrant";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryAllowanceRequest, QueryAllowanceRequestSDKType, QueryAllowanceResponse, QueryAllowanceResponseSDKType, QueryAllowancesRequest, QueryAllowancesRequestSDKType, QueryAllowancesResponse, QueryAllowancesResponseSDKType, QueryAllowancesByGranterRequest, QueryAllowancesByGranterRequestSDKType, QueryAllowancesByGranterResponse, QueryAllowancesByGranterResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Allowance returns granted allwance to the grantee by the granter. */
  allowance = async (params: QueryAllowanceRequest): Promise<QueryAllowanceResponseSDKType> => {
    const endpoint = `cosmos/feegrant/v1beta1/allowance/${params.granter}/${params.grantee}`;
    return await this.req.get<QueryAllowanceResponseSDKType>(endpoint);
  };
  /* Allowances returns all the grants for the given grantee address. */
  allowances = async (params: QueryAllowancesRequest): Promise<QueryAllowancesResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/feegrant/v1beta1/allowances/${params.grantee}`;
    return await this.req.get<QueryAllowancesResponseSDKType>(endpoint, options);
  };
  /* AllowancesByGranter returns all the grants given by an address
  
   Since: cosmos-sdk 0.46 */
  allowancesByGranter = async (params: QueryAllowancesByGranterRequest): Promise<QueryAllowancesByGranterResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/feegrant/v1beta1/issued/${params.granter}`;
    return await this.req.get<QueryAllowancesByGranterResponseSDKType>(endpoint, options);
  };
}