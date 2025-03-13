import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantSDKType } from "./feegrant";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryAllowanceRequest, QueryAllowanceRequestSDKType, QueryAllowanceResponse, QueryAllowanceResponseSDKType, QueryAllowancesRequest, QueryAllowancesRequestSDKType, QueryAllowancesResponse, QueryAllowancesResponseSDKType, QueryAllowancesByGranterRequest, QueryAllowancesByGranterRequestSDKType, QueryAllowancesByGranterResponse, QueryAllowancesByGranterResponseSDKType } from "./query";
export const createGetAllowance = (clientResolver?: RpcResolver) => buildQuery<QueryAllowanceRequest, QueryAllowanceResponse>({
  encode: QueryAllowanceRequest.encode,
  decode: QueryAllowanceResponse.decode,
  service: "cosmos.feegrant.v1beta1.Query",
  method: "Allowance",
  clientResolver,
  deps: [QueryAllowanceRequest, QueryAllowanceResponse]
});
export const createGetAllowances = (clientResolver?: RpcResolver) => buildQuery<QueryAllowancesRequest, QueryAllowancesResponse>({
  encode: QueryAllowancesRequest.encode,
  decode: QueryAllowancesResponse.decode,
  service: "cosmos.feegrant.v1beta1.Query",
  method: "Allowances",
  clientResolver,
  deps: [QueryAllowancesRequest, QueryAllowancesResponse]
});
export const createGetAllowancesByGranter = (clientResolver?: RpcResolver) => buildQuery<QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse>({
  encode: QueryAllowancesByGranterRequest.encode,
  decode: QueryAllowancesByGranterResponse.decode,
  service: "cosmos.feegrant.v1beta1.Query",
  method: "AllowancesByGranter",
  clientResolver,
  deps: [QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse]
});