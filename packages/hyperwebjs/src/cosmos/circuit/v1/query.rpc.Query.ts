import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Permissions, PermissionsSDKType, GenesisAccountPermissions, GenesisAccountPermissionsSDKType } from "./types";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryAccountRequest, QueryAccountRequestSDKType, AccountResponse, AccountResponseSDKType, QueryAccountsRequest, QueryAccountsRequestSDKType, AccountsResponse, AccountsResponseSDKType, QueryDisabledListRequest, QueryDisabledListRequestSDKType, DisabledListResponse, DisabledListResponseSDKType } from "./query";
/** Query defines the circuit gRPC querier service. */
export interface Query {
  /** Account returns account permissions. */
  account(request: QueryAccountRequest): Promise<AccountResponse>;
  /** Account returns account permissions. */
  accounts(request?: QueryAccountsRequest): Promise<AccountsResponse>;
  /** DisabledList returns a list of disabled message urls */
  disabledList(request?: QueryDisabledListRequest): Promise<DisabledListResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Account returns account permissions. */
  account = async (request: QueryAccountRequest): Promise<AccountResponse> => {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Query", "Account", data);
    return promise.then(data => AccountResponse.decode(new BinaryReader(data)));
  };
  /* Account returns account permissions. */
  accounts = async (request: QueryAccountsRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<AccountsResponse> => {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Query", "Accounts", data);
    return promise.then(data => AccountsResponse.decode(new BinaryReader(data)));
  };
  /* DisabledList returns a list of disabled message urls */
  disabledList = async (request: QueryDisabledListRequest = {}): Promise<DisabledListResponse> => {
    const data = QueryDisabledListRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Query", "DisabledList", data);
    return promise.then(data => DisabledListResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new QueryClientImpl(rpc);
};