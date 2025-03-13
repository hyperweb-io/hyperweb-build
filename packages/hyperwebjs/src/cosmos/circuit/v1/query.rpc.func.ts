import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Permissions, PermissionsSDKType, GenesisAccountPermissions, GenesisAccountPermissionsSDKType } from "./types";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryAccountRequest, QueryAccountRequestSDKType, AccountResponse, AccountResponseSDKType, QueryAccountsRequest, QueryAccountsRequestSDKType, AccountsResponse, AccountsResponseSDKType, QueryDisabledListRequest, QueryDisabledListRequestSDKType, DisabledListResponse, DisabledListResponseSDKType } from "./query";
export const createGetAccount = (clientResolver?: RpcResolver) => buildQuery<QueryAccountRequest, AccountResponse>({
  encode: QueryAccountRequest.encode,
  decode: AccountResponse.decode,
  service: "cosmos.circuit.v1.Query",
  method: "Account",
  clientResolver,
  deps: [QueryAccountRequest, AccountResponse]
});
export const createGetAccounts = (clientResolver?: RpcResolver) => buildQuery<QueryAccountsRequest, AccountsResponse>({
  encode: QueryAccountsRequest.encode,
  decode: AccountsResponse.decode,
  service: "cosmos.circuit.v1.Query",
  method: "Accounts",
  clientResolver,
  deps: [QueryAccountsRequest, AccountsResponse]
});
export const createGetDisabledList = (clientResolver?: RpcResolver) => buildQuery<QueryDisabledListRequest, DisabledListResponse>({
  encode: QueryDisabledListRequest.encode,
  decode: DisabledListResponse.decode,
  service: "cosmos.circuit.v1.Query",
  method: "DisabledList",
  clientResolver,
  deps: [QueryDisabledListRequest, DisabledListResponse]
});