import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ValidatorOutstandingRewards, ValidatorOutstandingRewardsSDKType, ValidatorAccumulatedCommission, ValidatorAccumulatedCommissionSDKType, ValidatorSlashEvent, ValidatorSlashEventSDKType, DelegationDelegatorReward, DelegationDelegatorRewardSDKType } from "./distribution";
import { DecCoin, DecCoinSDKType } from "../../base/v1beta1/coin";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryValidatorDistributionInfoRequest, QueryValidatorDistributionInfoRequestSDKType, QueryValidatorDistributionInfoResponse, QueryValidatorDistributionInfoResponseSDKType, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsRequestSDKType, QueryValidatorOutstandingRewardsResponse, QueryValidatorOutstandingRewardsResponseSDKType, QueryValidatorCommissionRequest, QueryValidatorCommissionRequestSDKType, QueryValidatorCommissionResponse, QueryValidatorCommissionResponseSDKType, QueryValidatorSlashesRequest, QueryValidatorSlashesRequestSDKType, QueryValidatorSlashesResponse, QueryValidatorSlashesResponseSDKType, QueryDelegationRewardsRequest, QueryDelegationRewardsRequestSDKType, QueryDelegationRewardsResponse, QueryDelegationRewardsResponseSDKType, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsRequestSDKType, QueryDelegationTotalRewardsResponse, QueryDelegationTotalRewardsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsRequestSDKType, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressRequestSDKType, QueryDelegatorWithdrawAddressResponse, QueryDelegatorWithdrawAddressResponseSDKType, QueryCommunityPoolRequest, QueryCommunityPoolRequestSDKType, QueryCommunityPoolResponse, QueryCommunityPoolResponseSDKType } from "./query";
/** Query defines the gRPC querier service for distribution module. */
export interface Query {
  /** Params queries params of the distribution module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator */
  validatorDistributionInfo(request: QueryValidatorDistributionInfoRequest): Promise<QueryValidatorDistributionInfoResponse>;
  /** ValidatorOutstandingRewards queries rewards of a validator address. */
  validatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse>;
  /** ValidatorCommission queries accumulated commission for a validator. */
  validatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse>;
  /** ValidatorSlashes queries slash events of a validator. */
  validatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse>;
  /** DelegationRewards queries the total rewards accrued by a delegation. */
  delegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse>;
  /**
   * DelegationTotalRewards queries the total rewards accrued by each
   * validator.
   */
  delegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse>;
  /** DelegatorValidators queries the validators of a delegator. */
  delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
  delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse>;
  /** CommunityPool queries the community pool coins. */
  communityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Params queries params of the distribution module. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator */
  validatorDistributionInfo = async (request: QueryValidatorDistributionInfoRequest): Promise<QueryValidatorDistributionInfoResponse> => {
    const data = QueryValidatorDistributionInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorDistributionInfo", data);
    return promise.then(data => QueryValidatorDistributionInfoResponse.decode(new BinaryReader(data)));
  };
  /* ValidatorOutstandingRewards queries rewards of a validator address. */
  validatorOutstandingRewards = async (request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse> => {
    const data = QueryValidatorOutstandingRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorOutstandingRewards", data);
    return promise.then(data => QueryValidatorOutstandingRewardsResponse.decode(new BinaryReader(data)));
  };
  /* ValidatorCommission queries accumulated commission for a validator. */
  validatorCommission = async (request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse> => {
    const data = QueryValidatorCommissionRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorCommission", data);
    return promise.then(data => QueryValidatorCommissionResponse.decode(new BinaryReader(data)));
  };
  /* ValidatorSlashes queries slash events of a validator. */
  validatorSlashes = async (request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse> => {
    const data = QueryValidatorSlashesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorSlashes", data);
    return promise.then(data => QueryValidatorSlashesResponse.decode(new BinaryReader(data)));
  };
  /* DelegationRewards queries the total rewards accrued by a delegation. */
  delegationRewards = async (request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse> => {
    const data = QueryDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationRewards", data);
    return promise.then(data => QueryDelegationRewardsResponse.decode(new BinaryReader(data)));
  };
  /* DelegationTotalRewards queries the total rewards accrued by each
   validator. */
  delegationTotalRewards = async (request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse> => {
    const data = QueryDelegationTotalRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationTotalRewards", data);
    return promise.then(data => QueryDelegationTotalRewardsResponse.decode(new BinaryReader(data)));
  };
  /* DelegatorValidators queries the validators of a delegator. */
  delegatorValidators = async (request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> => {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorValidators", data);
    return promise.then(data => QueryDelegatorValidatorsResponse.decode(new BinaryReader(data)));
  };
  /* DelegatorWithdrawAddress queries withdraw address of a delegator. */
  delegatorWithdrawAddress = async (request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse> => {
    const data = QueryDelegatorWithdrawAddressRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorWithdrawAddress", data);
    return promise.then(data => QueryDelegatorWithdrawAddressResponse.decode(new BinaryReader(data)));
  };
  /* CommunityPool queries the community pool coins. */
  communityPool = async (request: QueryCommunityPoolRequest = {}): Promise<QueryCommunityPoolResponse> => {
    const data = QueryCommunityPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "CommunityPool", data);
    return promise.then(data => QueryCommunityPoolResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new QueryClientImpl(rpc);
};