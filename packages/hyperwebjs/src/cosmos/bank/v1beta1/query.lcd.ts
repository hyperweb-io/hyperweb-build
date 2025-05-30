import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Params, ParamsSDKType, Metadata, MetadataSDKType, SendEnabled, SendEnabledSDKType } from "./bank";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryBalanceRequest, QueryBalanceRequestSDKType, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryAllBalancesRequest, QueryAllBalancesRequestSDKType, QueryAllBalancesResponse, QueryAllBalancesResponseSDKType, QuerySpendableBalancesRequest, QuerySpendableBalancesRequestSDKType, QuerySpendableBalancesResponse, QuerySpendableBalancesResponseSDKType, QuerySpendableBalanceByDenomRequest, QuerySpendableBalanceByDenomRequestSDKType, QuerySpendableBalanceByDenomResponse, QuerySpendableBalanceByDenomResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyRequestSDKType, QueryTotalSupplyResponse, QueryTotalSupplyResponseSDKType, QuerySupplyOfRequest, QuerySupplyOfRequestSDKType, QuerySupplyOfResponse, QuerySupplyOfResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDenomMetadataRequest, QueryDenomMetadataRequestSDKType, QueryDenomMetadataResponse, QueryDenomMetadataResponseSDKType, QueryDenomMetadataByQueryStringRequest, QueryDenomMetadataByQueryStringRequestSDKType, QueryDenomMetadataByQueryStringResponse, QueryDenomMetadataByQueryStringResponseSDKType, QueryDenomsMetadataRequest, QueryDenomsMetadataRequestSDKType, QueryDenomsMetadataResponse, QueryDenomsMetadataResponseSDKType, QueryDenomOwnersRequest, QueryDenomOwnersRequestSDKType, QueryDenomOwnersResponse, QueryDenomOwnersResponseSDKType, QueryDenomOwnersByQueryRequest, QueryDenomOwnersByQueryRequestSDKType, QueryDenomOwnersByQueryResponse, QueryDenomOwnersByQueryResponseSDKType, QuerySendEnabledRequest, QuerySendEnabledRequestSDKType, QuerySendEnabledResponse, QuerySendEnabledResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Balance queries the balance of a single coin for a single account. */
  balance = async (params: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `cosmos/bank/v1beta1/balances/${params.address}/by_denom`;
    return await this.req.get<QueryBalanceResponseSDKType>(endpoint, options);
  };
  /* AllBalances queries the balance of all coins for a single account.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  allBalances = async (params: QueryAllBalancesRequest): Promise<QueryAllBalancesResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.resolveDenom !== "undefined") {
      options.params.resolve_denom = params.resolveDenom;
    }
    const endpoint = `cosmos/bank/v1beta1/balances/${params.address}`;
    return await this.req.get<QueryAllBalancesResponseSDKType>(endpoint, options);
  };
  /* SpendableBalances queries the spendable balance of all coins for a single
   account.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.46 */
  spendableBalances = async (params: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/bank/v1beta1/spendable_balances/${params.address}`;
    return await this.req.get<QuerySpendableBalancesResponseSDKType>(endpoint, options);
  };
  /* SpendableBalanceByDenom queries the spendable balance of a single denom for
   a single account.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.47 */
  spendableBalanceByDenom = async (params: QuerySpendableBalanceByDenomRequest): Promise<QuerySpendableBalanceByDenomResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `cosmos/bank/v1beta1/spendable_balances/${params.address}/by_denom`;
    return await this.req.get<QuerySpendableBalanceByDenomResponseSDKType>(endpoint, options);
  };
  /* TotalSupply queries the total supply of all coins.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  totalSupply = async (params: QueryTotalSupplyRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryTotalSupplyResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/bank/v1beta1/supply`;
    return await this.req.get<QueryTotalSupplyResponseSDKType>(endpoint, options);
  };
  /* SupplyOf queries the supply of a single coin.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  supplyOf = async (params: QuerySupplyOfRequest): Promise<QuerySupplyOfResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `cosmos/bank/v1beta1/supply/by_denom`;
    return await this.req.get<QuerySupplyOfResponseSDKType>(endpoint, options);
  };
  /* Params queries the parameters of x/bank module. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `cosmos/bank/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  };
  /* DenomMetadata queries the client metadata of a given coin denomination. */
  denomMetadata = async (params: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponseSDKType> => {
    const endpoint = `cosmos/bank/v1beta1/denoms_metadata/${params.denom}`;
    return await this.req.get<QueryDenomMetadataResponseSDKType>(endpoint);
  };
  /* DenomMetadataByQueryString queries the client metadata of a given coin denomination. */
  denomMetadataByQueryString = async (params: QueryDenomMetadataByQueryStringRequest): Promise<QueryDenomMetadataByQueryStringResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `cosmos/bank/v1beta1/denoms_metadata_by_query_string`;
    return await this.req.get<QueryDenomMetadataByQueryStringResponseSDKType>(endpoint, options);
  };
  /* DenomsMetadata queries the client metadata for all registered coin
   denominations. */
  denomsMetadata = async (params: QueryDenomsMetadataRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryDenomsMetadataResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/bank/v1beta1/denoms_metadata`;
    return await this.req.get<QueryDenomsMetadataResponseSDKType>(endpoint, options);
  };
  /* DenomOwners queries for all account addresses that own a particular token
   denomination.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.46 */
  denomOwners = async (params: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/bank/v1beta1/denom_owners/${params.denom}`;
    return await this.req.get<QueryDenomOwnersResponseSDKType>(endpoint, options);
  };
  /* DenomOwnersByQuery queries for all account addresses that own a particular token
   denomination.
  
   Since: cosmos-sdk 0.50.3 */
  denomOwnersByQuery = async (params: QueryDenomOwnersByQueryRequest): Promise<QueryDenomOwnersByQueryResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/bank/v1beta1/denom_owners_by_query`;
    return await this.req.get<QueryDenomOwnersByQueryResponseSDKType>(endpoint, options);
  };
  /* SendEnabled queries for SendEnabled entries.
  
   This query only returns denominations that have specific SendEnabled settings.
   Any denomination that does not have a specific setting will use the default
   params.default_send_enabled, and will not be returned by this query.
  
   Since: cosmos-sdk 0.47 */
  sendEnabled = async (params: QuerySendEnabledRequest): Promise<QuerySendEnabledResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.denoms !== "undefined") {
      options.params.denoms = params.denoms;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/bank/v1beta1/send_enabled`;
    return await this.req.get<QuerySendEnabledResponseSDKType>(endpoint, options);
  };
}