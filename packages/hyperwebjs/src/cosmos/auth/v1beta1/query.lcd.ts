import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsSDKType, BaseAccount, BaseAccountSDKType, ModuleAccount, ModuleAccountSDKType } from "./auth";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryAccountsRequest, QueryAccountsRequestSDKType, QueryAccountsResponse, QueryAccountsResponseSDKType, QueryAccountRequest, QueryAccountRequestSDKType, QueryAccountResponse, QueryAccountResponseSDKType, QueryAccountAddressByIDRequest, QueryAccountAddressByIDRequestSDKType, QueryAccountAddressByIDResponse, QueryAccountAddressByIDResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryModuleAccountsRequest, QueryModuleAccountsRequestSDKType, QueryModuleAccountsResponse, QueryModuleAccountsResponseSDKType, QueryModuleAccountByNameRequest, QueryModuleAccountByNameRequestSDKType, QueryModuleAccountByNameResponse, QueryModuleAccountByNameResponseSDKType, Bech32PrefixRequest, Bech32PrefixRequestSDKType, Bech32PrefixResponse, Bech32PrefixResponseSDKType, AddressBytesToStringRequest, AddressBytesToStringRequestSDKType, AddressBytesToStringResponse, AddressBytesToStringResponseSDKType, AddressStringToBytesRequest, AddressStringToBytesRequestSDKType, AddressStringToBytesResponse, AddressStringToBytesResponseSDKType, QueryAccountInfoRequest, QueryAccountInfoRequestSDKType, QueryAccountInfoResponse, QueryAccountInfoResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Accounts returns all the existing accounts.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.43 */
  accounts = async (params: QueryAccountsRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryAccountsResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/auth/v1beta1/accounts`;
    return await this.req.get<QueryAccountsResponseSDKType>(endpoint, options);
  };
  /* Account returns account details based on address. */
  account = async (params: QueryAccountRequest): Promise<QueryAccountResponseSDKType> => {
    const endpoint = `cosmos/auth/v1beta1/accounts/${params.address}`;
    return await this.req.get<QueryAccountResponseSDKType>(endpoint);
  };
  /* AccountAddressByID returns account address based on account number.
  
   Since: cosmos-sdk 0.46.2 */
  accountAddressByID = async (params: QueryAccountAddressByIDRequest): Promise<QueryAccountAddressByIDResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.accountId !== "undefined") {
      options.params.account_id = params.accountId;
    }
    const endpoint = `cosmos/auth/v1beta1/address_by_id/${params.id}`;
    return await this.req.get<QueryAccountAddressByIDResponseSDKType>(endpoint, options);
  };
  /* Params queries all parameters. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `cosmos/auth/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  };
  /* ModuleAccounts returns all the existing module accounts.
  
   Since: cosmos-sdk 0.46 */
  moduleAccounts = async (_params: QueryModuleAccountsRequest = {}): Promise<QueryModuleAccountsResponseSDKType> => {
    const endpoint = `cosmos/auth/v1beta1/module_accounts`;
    return await this.req.get<QueryModuleAccountsResponseSDKType>(endpoint);
  };
  /* ModuleAccountByName returns the module account info by module name */
  moduleAccountByName = async (params: QueryModuleAccountByNameRequest): Promise<QueryModuleAccountByNameResponseSDKType> => {
    const endpoint = `cosmos/auth/v1beta1/module_accounts/${params.name}`;
    return await this.req.get<QueryModuleAccountByNameResponseSDKType>(endpoint);
  };
  /* Bech32Prefix queries bech32Prefix
  
   Since: cosmos-sdk 0.46 */
  bech32Prefix = async (_params: Bech32PrefixRequest = {}): Promise<Bech32PrefixResponseSDKType> => {
    const endpoint = `cosmos/auth/v1beta1/bech32`;
    return await this.req.get<Bech32PrefixResponseSDKType>(endpoint);
  };
  /* AddressBytesToString converts Account Address bytes to string
  
   Since: cosmos-sdk 0.46 */
  addressBytesToString = async (params: AddressBytesToStringRequest): Promise<AddressBytesToStringResponseSDKType> => {
    const endpoint = `cosmos/auth/v1beta1/bech32/${params.addressBytes}`;
    return await this.req.get<AddressBytesToStringResponseSDKType>(endpoint);
  };
  /* AddressStringToBytes converts Address string to bytes
  
   Since: cosmos-sdk 0.46 */
  addressStringToBytes = async (params: AddressStringToBytesRequest): Promise<AddressStringToBytesResponseSDKType> => {
    const endpoint = `cosmos/auth/v1beta1/bech32/${params.addressString}`;
    return await this.req.get<AddressStringToBytesResponseSDKType>(endpoint);
  };
  /* AccountInfo queries account info which is common to all account types.
  
   Since: cosmos-sdk 0.47 */
  accountInfo = async (params: QueryAccountInfoRequest): Promise<QueryAccountInfoResponseSDKType> => {
    const endpoint = `cosmos/auth/v1beta1/account_info/${params.address}`;
    return await this.req.get<QueryAccountInfoResponseSDKType>(endpoint);
  };
}