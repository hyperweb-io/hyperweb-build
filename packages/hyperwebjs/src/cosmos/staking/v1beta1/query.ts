import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Validator, ValidatorAmino, ValidatorSDKType, DelegationResponse, DelegationResponseAmino, DelegationResponseSDKType, UnbondingDelegation, UnbondingDelegationAmino, UnbondingDelegationSDKType, RedelegationResponse, RedelegationResponseAmino, RedelegationResponseSDKType, HistoricalInfo, HistoricalInfoAmino, HistoricalInfoSDKType, Pool, PoolAmino, PoolSDKType, Params, ParamsAmino, ParamsSDKType } from "./staking";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.staking.v1beta1";
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequest {
  /** status enables to query for validators matching a given status. */
  status: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryValidatorsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsRequest";
  value: Uint8Array;
}
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequestAmino {
  /** status enables to query for validators matching a given status. */
  status: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryValidatorsRequestAminoMsg {
  type: "cosmos-sdk/QueryValidatorsRequest";
  value: QueryValidatorsRequestAmino;
}
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequestSDKType {
  status: string;
  pagination?: PageRequestSDKType;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponse {
  /** validators contains all the queried validators. */
  validators: Validator[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryValidatorsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsResponse";
  value: Uint8Array;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponseAmino {
  /** validators contains all the queried validators. */
  validators: ValidatorAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryValidatorsResponseAminoMsg {
  type: "cosmos-sdk/QueryValidatorsResponse";
  value: QueryValidatorsResponseAmino;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponseSDKType {
  validators: ValidatorSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryValidatorRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorRequest";
  value: Uint8Array;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequestAmino {
  /** validator_addr defines the validator address to query for. */
  validator_addr: string;
}
export interface QueryValidatorRequestAminoMsg {
  type: "cosmos-sdk/QueryValidatorRequest";
  value: QueryValidatorRequestAmino;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequestSDKType {
  validator_addr: string;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponse {
  /** validator defines the validator info. */
  validator: Validator;
}
export interface QueryValidatorResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorResponse";
  value: Uint8Array;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponseAmino {
  /** validator defines the validator info. */
  validator: ValidatorAmino;
}
export interface QueryValidatorResponseAminoMsg {
  type: "cosmos-sdk/QueryValidatorResponse";
  value: QueryValidatorResponseAmino;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponseSDKType {
  validator: ValidatorSDKType;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryValidatorDelegationsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequestAmino {
  /** validator_addr defines the validator address to query for. */
  validator_addr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryValidatorDelegationsRequestAminoMsg {
  type: "cosmos-sdk/QueryValidatorDelegationsRequest";
  value: QueryValidatorDelegationsRequestAmino;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequestSDKType {
  validator_addr: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponse {
  delegationResponses: DelegationResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryValidatorDelegationsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponseAmino {
  delegation_responses: DelegationResponseAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryValidatorDelegationsResponseAminoMsg {
  type: "cosmos-sdk/QueryValidatorDelegationsResponse";
  value: QueryValidatorDelegationsResponseAmino;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponseSDKType {
  delegation_responses: DelegationResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryValidatorUnbondingDelegationsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequestAmino {
  /** validator_addr defines the validator address to query for. */
  validator_addr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryValidatorUnbondingDelegationsRequestAminoMsg {
  type: "cosmos-sdk/QueryValidatorUnbondingDelegationsRequest";
  value: QueryValidatorUnbondingDelegationsRequestAmino;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequestSDKType {
  validator_addr: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponse {
  unbondingResponses: UnbondingDelegation[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryValidatorUnbondingDelegationsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponseAmino {
  unbonding_responses: UnbondingDelegationAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryValidatorUnbondingDelegationsResponseAminoMsg {
  type: "cosmos-sdk/QueryValidatorUnbondingDelegationsResponse";
  value: QueryValidatorUnbondingDelegationsResponseAmino;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponseSDKType {
  unbonding_responses: UnbondingDelegationSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryDelegationRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegationRequest";
  value: Uint8Array;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequestAmino {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;
  /** validator_addr defines the validator address to query for. */
  validator_addr: string;
}
export interface QueryDelegationRequestAminoMsg {
  type: "cosmos-sdk/QueryDelegationRequest";
  value: QueryDelegationRequestAmino;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequestSDKType {
  delegator_addr: string;
  validator_addr: string;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponse {
  /** delegation_responses defines the delegation info of a delegation. */
  delegationResponse?: DelegationResponse;
}
export interface QueryDelegationResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegationResponse";
  value: Uint8Array;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponseAmino {
  /** delegation_responses defines the delegation info of a delegation. */
  delegation_response?: DelegationResponseAmino;
}
export interface QueryDelegationResponseAminoMsg {
  type: "cosmos-sdk/QueryDelegationResponse";
  value: QueryDelegationResponseAmino;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponseSDKType {
  delegation_response?: DelegationResponseSDKType;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryUnbondingDelegationRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationRequest";
  value: Uint8Array;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequestAmino {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;
  /** validator_addr defines the validator address to query for. */
  validator_addr: string;
}
export interface QueryUnbondingDelegationRequestAminoMsg {
  type: "cosmos-sdk/QueryUnbondingDelegationRequest";
  value: QueryUnbondingDelegationRequestAmino;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequestSDKType {
  delegator_addr: string;
  validator_addr: string;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponse {
  /** unbond defines the unbonding information of a delegation. */
  unbond: UnbondingDelegation;
}
export interface QueryUnbondingDelegationResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationResponse";
  value: Uint8Array;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponseAmino {
  /** unbond defines the unbonding information of a delegation. */
  unbond: UnbondingDelegationAmino;
}
export interface QueryUnbondingDelegationResponseAminoMsg {
  type: "cosmos-sdk/QueryUnbondingDelegationResponse";
  value: QueryUnbondingDelegationResponseAmino;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponseSDKType {
  unbond: UnbondingDelegationSDKType;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryDelegatorDelegationsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequestAmino {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDelegatorDelegationsRequestAminoMsg {
  type: "cosmos-sdk/QueryDelegatorDelegationsRequest";
  value: QueryDelegatorDelegationsRequestAmino;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequestSDKType {
  delegator_addr: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponse {
  /** delegation_responses defines all the delegations' info of a delegator. */
  delegationResponses: DelegationResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryDelegatorDelegationsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponseAmino {
  /** delegation_responses defines all the delegations' info of a delegator. */
  delegation_responses: DelegationResponseAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDelegatorDelegationsResponseAminoMsg {
  type: "cosmos-sdk/QueryDelegatorDelegationsResponse";
  value: QueryDelegatorDelegationsResponseAmino;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponseSDKType {
  delegation_responses: DelegationResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryDelegatorUnbondingDelegationsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequestAmino {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDelegatorUnbondingDelegationsRequestAminoMsg {
  type: "cosmos-sdk/QueryDelegatorUnbondingDelegationsRequest";
  value: QueryDelegatorUnbondingDelegationsRequestAmino;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequestSDKType {
  delegator_addr: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponse {
  unbondingResponses: UnbondingDelegation[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryDelegatorUnbondingDelegationsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponseAmino {
  unbonding_responses: UnbondingDelegationAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDelegatorUnbondingDelegationsResponseAminoMsg {
  type: "cosmos-sdk/QueryDelegatorUnbondingDelegationsResponse";
  value: QueryDelegatorUnbondingDelegationsResponseAmino;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponseSDKType {
  unbonding_responses: UnbondingDelegationSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** src_validator_addr defines the validator address to redelegate from. */
  srcValidatorAddr: string;
  /** dst_validator_addr defines the validator address to redelegate to. */
  dstValidatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryRedelegationsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequestAmino {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;
  /** src_validator_addr defines the validator address to redelegate from. */
  src_validator_addr: string;
  /** dst_validator_addr defines the validator address to redelegate to. */
  dst_validator_addr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryRedelegationsRequestAminoMsg {
  type: "cosmos-sdk/QueryRedelegationsRequest";
  value: QueryRedelegationsRequestAmino;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequestSDKType {
  delegator_addr: string;
  src_validator_addr: string;
  dst_validator_addr: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponse {
  redelegationResponses: RedelegationResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryRedelegationsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponseAmino {
  redelegation_responses: RedelegationResponseAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryRedelegationsResponseAminoMsg {
  type: "cosmos-sdk/QueryRedelegationsResponse";
  value: QueryRedelegationsResponseAmino;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponseSDKType {
  redelegation_responses: RedelegationResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryDelegatorValidatorsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequestAmino {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDelegatorValidatorsRequestAminoMsg {
  type: "cosmos-sdk/QueryDelegatorValidatorsRequest";
  value: QueryDelegatorValidatorsRequestAmino;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequestSDKType {
  delegator_addr: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
  /** validators defines the validators' info of a delegator. */
  validators: Validator[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryDelegatorValidatorsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponseAmino {
  /** validators defines the validators' info of a delegator. */
  validators: ValidatorAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDelegatorValidatorsResponseAminoMsg {
  type: "cosmos-sdk/QueryDelegatorValidatorsResponse";
  value: QueryDelegatorValidatorsResponseAmino;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponseSDKType {
  validators: ValidatorSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryDelegatorValidatorRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequestAmino {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;
  /** validator_addr defines the validator address to query for. */
  validator_addr: string;
}
export interface QueryDelegatorValidatorRequestAminoMsg {
  type: "cosmos-sdk/QueryDelegatorValidatorRequest";
  value: QueryDelegatorValidatorRequestAmino;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequestSDKType {
  delegator_addr: string;
  validator_addr: string;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponse {
  /** validator defines the validator info. */
  validator: Validator;
}
export interface QueryDelegatorValidatorResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponseAmino {
  /** validator defines the validator info. */
  validator: ValidatorAmino;
}
export interface QueryDelegatorValidatorResponseAminoMsg {
  type: "cosmos-sdk/QueryDelegatorValidatorResponse";
  value: QueryDelegatorValidatorResponseAmino;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponseSDKType {
  validator: ValidatorSDKType;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequest {
  /** height defines at which height to query the historical info. */
  height: bigint;
}
export interface QueryHistoricalInfoRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoRequest";
  value: Uint8Array;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequestAmino {
  /** height defines at which height to query the historical info. */
  height: string;
}
export interface QueryHistoricalInfoRequestAminoMsg {
  type: "cosmos-sdk/QueryHistoricalInfoRequest";
  value: QueryHistoricalInfoRequestAmino;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequestSDKType {
  height: bigint;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponse {
  /** hist defines the historical info at the given height. */
  hist?: HistoricalInfo;
}
export interface QueryHistoricalInfoResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoResponse";
  value: Uint8Array;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponseAmino {
  /** hist defines the historical info at the given height. */
  hist?: HistoricalInfoAmino;
}
export interface QueryHistoricalInfoResponseAminoMsg {
  type: "cosmos-sdk/QueryHistoricalInfoResponse";
  value: QueryHistoricalInfoResponseAmino;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponseSDKType {
  hist?: HistoricalInfoSDKType;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {}
export interface QueryPoolRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryPoolRequest";
  value: Uint8Array;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequestAmino {}
export interface QueryPoolRequestAminoMsg {
  type: "cosmos-sdk/QueryPoolRequest";
  value: QueryPoolRequestAmino;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequestSDKType {}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
  /** pool defines the pool info. */
  pool: Pool;
}
export interface QueryPoolResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryPoolResponse";
  value: Uint8Array;
}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponseAmino {
  /** pool defines the pool info. */
  pool: PoolAmino;
}
export interface QueryPoolResponseAminoMsg {
  type: "cosmos-sdk/QueryPoolResponse";
  value: QueryPoolResponseAmino;
}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponseSDKType {
  pool: PoolSDKType;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryValidatorsRequest(): QueryValidatorsRequest {
  return {
    status: "",
    pagination: undefined
  };
}
export const QueryValidatorsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsRequest",
  aminoType: "cosmos-sdk/QueryValidatorsRequest",
  is(o: any): o is QueryValidatorsRequest {
    return o && (o.$typeUrl === QueryValidatorsRequest.typeUrl || typeof o.status === "string");
  },
  isSDK(o: any): o is QueryValidatorsRequestSDKType {
    return o && (o.$typeUrl === QueryValidatorsRequest.typeUrl || typeof o.status === "string");
  },
  isAmino(o: any): o is QueryValidatorsRequestAmino {
    return o && (o.$typeUrl === QueryValidatorsRequest.typeUrl || typeof o.status === "string");
  },
  encode(message: QueryValidatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== undefined) {
      writer.uint32(10).string(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorsRequest {
    const obj = createBaseQueryValidatorsRequest();
    if (isSet(object.status)) obj.status = String(object.status);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryValidatorsRequest): JsonSafe<QueryValidatorsRequest> {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryValidatorsRequest>): QueryValidatorsRequest {
    const message = createBaseQueryValidatorsRequest();
    message.status = object.status ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryValidatorsRequestSDKType): QueryValidatorsRequest {
    return {
      status: object?.status,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryValidatorsRequest): QueryValidatorsRequestSDKType {
    const obj: any = {};
    obj.status = message.status;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryValidatorsRequestAmino): QueryValidatorsRequest {
    const message = createBaseQueryValidatorsRequest();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryValidatorsRequest): QueryValidatorsRequestAmino {
    const obj: any = {};
    obj.status = message.status === "" ? undefined : message.status;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorsRequestAminoMsg): QueryValidatorsRequest {
    return QueryValidatorsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorsRequest): QueryValidatorsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorsRequest",
      value: QueryValidatorsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryValidatorsRequestProtoMsg): QueryValidatorsRequest {
    return QueryValidatorsRequest.decode(message.value);
  },
  toProto(message: QueryValidatorsRequest): Uint8Array {
    return QueryValidatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorsRequest): QueryValidatorsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsRequest",
      value: QueryValidatorsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryValidatorsResponse(): QueryValidatorsResponse {
  return {
    validators: [],
    pagination: undefined
  };
}
export const QueryValidatorsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsResponse",
  aminoType: "cosmos-sdk/QueryValidatorsResponse",
  is(o: any): o is QueryValidatorsResponse {
    return o && (o.$typeUrl === QueryValidatorsResponse.typeUrl || Array.isArray(o.validators) && (!o.validators.length || Validator.is(o.validators[0])));
  },
  isSDK(o: any): o is QueryValidatorsResponseSDKType {
    return o && (o.$typeUrl === QueryValidatorsResponse.typeUrl || Array.isArray(o.validators) && (!o.validators.length || Validator.isSDK(o.validators[0])));
  },
  isAmino(o: any): o is QueryValidatorsResponseAmino {
    return o && (o.$typeUrl === QueryValidatorsResponse.typeUrl || Array.isArray(o.validators) && (!o.validators.length || Validator.isAmino(o.validators[0])));
  },
  encode(message: QueryValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorsResponse {
    const obj = createBaseQueryValidatorsResponse();
    if (Array.isArray(object?.validators)) obj.validators = object.validators.map((e: any) => Validator.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryValidatorsResponse): JsonSafe<QueryValidatorsResponse> {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryValidatorsResponse>): QueryValidatorsResponse {
    const message = createBaseQueryValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryValidatorsResponseSDKType): QueryValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryValidatorsResponse): QueryValidatorsResponseSDKType {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toSDK(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryValidatorsResponseAmino): QueryValidatorsResponse {
    const message = createBaseQueryValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryValidatorsResponse): QueryValidatorsResponseAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = message.validators;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorsResponseAminoMsg): QueryValidatorsResponse {
    return QueryValidatorsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorsResponse): QueryValidatorsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorsResponse",
      value: QueryValidatorsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryValidatorsResponseProtoMsg): QueryValidatorsResponse {
    return QueryValidatorsResponse.decode(message.value);
  },
  toProto(message: QueryValidatorsResponse): Uint8Array {
    return QueryValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorsResponse): QueryValidatorsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsResponse",
      value: QueryValidatorsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Validator.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryValidatorRequest(): QueryValidatorRequest {
  return {
    validatorAddr: ""
  };
}
export const QueryValidatorRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorRequest",
  aminoType: "cosmos-sdk/QueryValidatorRequest",
  is(o: any): o is QueryValidatorRequest {
    return o && (o.$typeUrl === QueryValidatorRequest.typeUrl || typeof o.validatorAddr === "string");
  },
  isSDK(o: any): o is QueryValidatorRequestSDKType {
    return o && (o.$typeUrl === QueryValidatorRequest.typeUrl || typeof o.validator_addr === "string");
  },
  isAmino(o: any): o is QueryValidatorRequestAmino {
    return o && (o.$typeUrl === QueryValidatorRequest.typeUrl || typeof o.validator_addr === "string");
  },
  encode(message: QueryValidatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== undefined) {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorRequest {
    const obj = createBaseQueryValidatorRequest();
    if (isSet(object.validatorAddr)) obj.validatorAddr = String(object.validatorAddr);
    return obj;
  },
  toJSON(message: QueryValidatorRequest): JsonSafe<QueryValidatorRequest> {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryValidatorRequest>): QueryValidatorRequest {
    const message = createBaseQueryValidatorRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromSDK(object: QueryValidatorRequestSDKType): QueryValidatorRequest {
    return {
      validatorAddr: object?.validator_addr
    };
  },
  toSDK(message: QueryValidatorRequest): QueryValidatorRequestSDKType {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAmino(object: QueryValidatorRequestAmino): QueryValidatorRequest {
    const message = createBaseQueryValidatorRequest();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryValidatorRequest): QueryValidatorRequestAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorRequestAminoMsg): QueryValidatorRequest {
    return QueryValidatorRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorRequest): QueryValidatorRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorRequest",
      value: QueryValidatorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryValidatorRequestProtoMsg): QueryValidatorRequest {
    return QueryValidatorRequest.decode(message.value);
  },
  toProto(message: QueryValidatorRequest): Uint8Array {
    return QueryValidatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorRequest): QueryValidatorRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorRequest",
      value: QueryValidatorRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryValidatorResponse(): QueryValidatorResponse {
  return {
    validator: Validator.fromPartial({})
  };
}
export const QueryValidatorResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorResponse",
  aminoType: "cosmos-sdk/QueryValidatorResponse",
  is(o: any): o is QueryValidatorResponse {
    return o && (o.$typeUrl === QueryValidatorResponse.typeUrl || Validator.is(o.validator));
  },
  isSDK(o: any): o is QueryValidatorResponseSDKType {
    return o && (o.$typeUrl === QueryValidatorResponse.typeUrl || Validator.isSDK(o.validator));
  },
  isAmino(o: any): o is QueryValidatorResponseAmino {
    return o && (o.$typeUrl === QueryValidatorResponse.typeUrl || Validator.isAmino(o.validator));
  },
  encode(message: QueryValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorResponse {
    const obj = createBaseQueryValidatorResponse();
    if (isSet(object.validator)) obj.validator = Validator.fromJSON(object.validator);
    return obj;
  },
  toJSON(message: QueryValidatorResponse): JsonSafe<QueryValidatorResponse> {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryValidatorResponse>): QueryValidatorResponse {
    const message = createBaseQueryValidatorResponse();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromPartial(object.validator);
    }
    return message;
  },
  fromSDK(object: QueryValidatorResponseSDKType): QueryValidatorResponse {
    return {
      validator: object.validator ? Validator.fromSDK(object.validator) : undefined
    };
  },
  toSDK(message: QueryValidatorResponse): QueryValidatorResponseSDKType {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator ? Validator.toSDK(message.validator) : undefined);
    return obj;
  },
  fromAmino(object: QueryValidatorResponseAmino): QueryValidatorResponse {
    const message = createBaseQueryValidatorResponse();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromAmino(object.validator);
    }
    return message;
  },
  toAmino(message: QueryValidatorResponse): QueryValidatorResponseAmino {
    const obj: any = {};
    obj.validator = message.validator ? Validator.toAmino(message.validator) : Validator.toAmino(Validator.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryValidatorResponseAminoMsg): QueryValidatorResponse {
    return QueryValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorResponse): QueryValidatorResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorResponse",
      value: QueryValidatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryValidatorResponseProtoMsg): QueryValidatorResponse {
    return QueryValidatorResponse.decode(message.value);
  },
  toProto(message: QueryValidatorResponse): Uint8Array {
    return QueryValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorResponse): QueryValidatorResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorResponse",
      value: QueryValidatorResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Validator.registerTypeUrl();
  }
};
function createBaseQueryValidatorDelegationsRequest(): QueryValidatorDelegationsRequest {
  return {
    validatorAddr: "",
    pagination: undefined
  };
}
export const QueryValidatorDelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsRequest",
  aminoType: "cosmos-sdk/QueryValidatorDelegationsRequest",
  is(o: any): o is QueryValidatorDelegationsRequest {
    return o && (o.$typeUrl === QueryValidatorDelegationsRequest.typeUrl || typeof o.validatorAddr === "string");
  },
  isSDK(o: any): o is QueryValidatorDelegationsRequestSDKType {
    return o && (o.$typeUrl === QueryValidatorDelegationsRequest.typeUrl || typeof o.validator_addr === "string");
  },
  isAmino(o: any): o is QueryValidatorDelegationsRequestAmino {
    return o && (o.$typeUrl === QueryValidatorDelegationsRequest.typeUrl || typeof o.validator_addr === "string");
  },
  encode(message: QueryValidatorDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== undefined) {
      writer.uint32(10).string(message.validatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorDelegationsRequest {
    const obj = createBaseQueryValidatorDelegationsRequest();
    if (isSet(object.validatorAddr)) obj.validatorAddr = String(object.validatorAddr);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryValidatorDelegationsRequest): JsonSafe<QueryValidatorDelegationsRequest> {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryValidatorDelegationsRequest>): QueryValidatorDelegationsRequest {
    const message = createBaseQueryValidatorDelegationsRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryValidatorDelegationsRequestSDKType): QueryValidatorDelegationsRequest {
    return {
      validatorAddr: object?.validator_addr,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryValidatorDelegationsRequest): QueryValidatorDelegationsRequestSDKType {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryValidatorDelegationsRequestAmino): QueryValidatorDelegationsRequest {
    const message = createBaseQueryValidatorDelegationsRequest();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryValidatorDelegationsRequest): QueryValidatorDelegationsRequestAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorDelegationsRequestAminoMsg): QueryValidatorDelegationsRequest {
    return QueryValidatorDelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorDelegationsRequest): QueryValidatorDelegationsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorDelegationsRequest",
      value: QueryValidatorDelegationsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryValidatorDelegationsRequestProtoMsg): QueryValidatorDelegationsRequest {
    return QueryValidatorDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryValidatorDelegationsRequest): Uint8Array {
    return QueryValidatorDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorDelegationsRequest): QueryValidatorDelegationsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsRequest",
      value: QueryValidatorDelegationsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryValidatorDelegationsResponse(): QueryValidatorDelegationsResponse {
  return {
    delegationResponses: [],
    pagination: undefined
  };
}
export const QueryValidatorDelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsResponse",
  aminoType: "cosmos-sdk/QueryValidatorDelegationsResponse",
  is(o: any): o is QueryValidatorDelegationsResponse {
    return o && (o.$typeUrl === QueryValidatorDelegationsResponse.typeUrl || Array.isArray(o.delegationResponses) && (!o.delegationResponses.length || DelegationResponse.is(o.delegationResponses[0])));
  },
  isSDK(o: any): o is QueryValidatorDelegationsResponseSDKType {
    return o && (o.$typeUrl === QueryValidatorDelegationsResponse.typeUrl || Array.isArray(o.delegation_responses) && (!o.delegation_responses.length || DelegationResponse.isSDK(o.delegation_responses[0])));
  },
  isAmino(o: any): o is QueryValidatorDelegationsResponseAmino {
    return o && (o.$typeUrl === QueryValidatorDelegationsResponse.typeUrl || Array.isArray(o.delegation_responses) && (!o.delegation_responses.length || DelegationResponse.isAmino(o.delegation_responses[0])));
  },
  encode(message: QueryValidatorDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorDelegationsResponse {
    const obj = createBaseQueryValidatorDelegationsResponse();
    if (Array.isArray(object?.delegationResponses)) obj.delegationResponses = object.delegationResponses.map((e: any) => DelegationResponse.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryValidatorDelegationsResponse): JsonSafe<QueryValidatorDelegationsResponse> {
    const obj: any = {};
    if (message.delegationResponses) {
      obj.delegationResponses = message.delegationResponses.map(e => e ? DelegationResponse.toJSON(e) : undefined);
    } else {
      obj.delegationResponses = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryValidatorDelegationsResponse>): QueryValidatorDelegationsResponse {
    const message = createBaseQueryValidatorDelegationsResponse();
    message.delegationResponses = object.delegationResponses?.map(e => DelegationResponse.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryValidatorDelegationsResponseSDKType): QueryValidatorDelegationsResponse {
    return {
      delegationResponses: Array.isArray(object?.delegation_responses) ? object.delegation_responses.map((e: any) => DelegationResponse.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryValidatorDelegationsResponse): QueryValidatorDelegationsResponseSDKType {
    const obj: any = {};
    if (message.delegationResponses) {
      obj.delegation_responses = message.delegationResponses.map(e => e ? DelegationResponse.toSDK(e) : undefined);
    } else {
      obj.delegation_responses = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryValidatorDelegationsResponseAmino): QueryValidatorDelegationsResponse {
    const message = createBaseQueryValidatorDelegationsResponse();
    message.delegationResponses = object.delegation_responses?.map(e => DelegationResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryValidatorDelegationsResponse): QueryValidatorDelegationsResponseAmino {
    const obj: any = {};
    if (message.delegationResponses) {
      obj.delegation_responses = message.delegationResponses.map(e => e ? DelegationResponse.toAmino(e) : undefined);
    } else {
      obj.delegation_responses = message.delegationResponses;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorDelegationsResponseAminoMsg): QueryValidatorDelegationsResponse {
    return QueryValidatorDelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorDelegationsResponse): QueryValidatorDelegationsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorDelegationsResponse",
      value: QueryValidatorDelegationsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryValidatorDelegationsResponseProtoMsg): QueryValidatorDelegationsResponse {
    return QueryValidatorDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryValidatorDelegationsResponse): Uint8Array {
    return QueryValidatorDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorDelegationsResponse): QueryValidatorDelegationsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsResponse",
      value: QueryValidatorDelegationsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    DelegationResponse.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryValidatorUnbondingDelegationsRequest(): QueryValidatorUnbondingDelegationsRequest {
  return {
    validatorAddr: "",
    pagination: undefined
  };
}
export const QueryValidatorUnbondingDelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest",
  aminoType: "cosmos-sdk/QueryValidatorUnbondingDelegationsRequest",
  is(o: any): o is QueryValidatorUnbondingDelegationsRequest {
    return o && (o.$typeUrl === QueryValidatorUnbondingDelegationsRequest.typeUrl || typeof o.validatorAddr === "string");
  },
  isSDK(o: any): o is QueryValidatorUnbondingDelegationsRequestSDKType {
    return o && (o.$typeUrl === QueryValidatorUnbondingDelegationsRequest.typeUrl || typeof o.validator_addr === "string");
  },
  isAmino(o: any): o is QueryValidatorUnbondingDelegationsRequestAmino {
    return o && (o.$typeUrl === QueryValidatorUnbondingDelegationsRequest.typeUrl || typeof o.validator_addr === "string");
  },
  encode(message: QueryValidatorUnbondingDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== undefined) {
      writer.uint32(10).string(message.validatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorUnbondingDelegationsRequest {
    const obj = createBaseQueryValidatorUnbondingDelegationsRequest();
    if (isSet(object.validatorAddr)) obj.validatorAddr = String(object.validatorAddr);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryValidatorUnbondingDelegationsRequest): JsonSafe<QueryValidatorUnbondingDelegationsRequest> {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryValidatorUnbondingDelegationsRequest>): QueryValidatorUnbondingDelegationsRequest {
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryValidatorUnbondingDelegationsRequestSDKType): QueryValidatorUnbondingDelegationsRequest {
    return {
      validatorAddr: object?.validator_addr,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryValidatorUnbondingDelegationsRequest): QueryValidatorUnbondingDelegationsRequestSDKType {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryValidatorUnbondingDelegationsRequestAmino): QueryValidatorUnbondingDelegationsRequest {
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryValidatorUnbondingDelegationsRequest): QueryValidatorUnbondingDelegationsRequestAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorUnbondingDelegationsRequestAminoMsg): QueryValidatorUnbondingDelegationsRequest {
    return QueryValidatorUnbondingDelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorUnbondingDelegationsRequest): QueryValidatorUnbondingDelegationsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorUnbondingDelegationsRequest",
      value: QueryValidatorUnbondingDelegationsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryValidatorUnbondingDelegationsRequestProtoMsg): QueryValidatorUnbondingDelegationsRequest {
    return QueryValidatorUnbondingDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryValidatorUnbondingDelegationsRequest): Uint8Array {
    return QueryValidatorUnbondingDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorUnbondingDelegationsRequest): QueryValidatorUnbondingDelegationsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest",
      value: QueryValidatorUnbondingDelegationsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryValidatorUnbondingDelegationsResponse(): QueryValidatorUnbondingDelegationsResponse {
  return {
    unbondingResponses: [],
    pagination: undefined
  };
}
export const QueryValidatorUnbondingDelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse",
  aminoType: "cosmos-sdk/QueryValidatorUnbondingDelegationsResponse",
  is(o: any): o is QueryValidatorUnbondingDelegationsResponse {
    return o && (o.$typeUrl === QueryValidatorUnbondingDelegationsResponse.typeUrl || Array.isArray(o.unbondingResponses) && (!o.unbondingResponses.length || UnbondingDelegation.is(o.unbondingResponses[0])));
  },
  isSDK(o: any): o is QueryValidatorUnbondingDelegationsResponseSDKType {
    return o && (o.$typeUrl === QueryValidatorUnbondingDelegationsResponse.typeUrl || Array.isArray(o.unbonding_responses) && (!o.unbonding_responses.length || UnbondingDelegation.isSDK(o.unbonding_responses[0])));
  },
  isAmino(o: any): o is QueryValidatorUnbondingDelegationsResponseAmino {
    return o && (o.$typeUrl === QueryValidatorUnbondingDelegationsResponse.typeUrl || Array.isArray(o.unbonding_responses) && (!o.unbonding_responses.length || UnbondingDelegation.isAmino(o.unbonding_responses[0])));
  },
  encode(message: QueryValidatorUnbondingDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorUnbondingDelegationsResponse {
    const obj = createBaseQueryValidatorUnbondingDelegationsResponse();
    if (Array.isArray(object?.unbondingResponses)) obj.unbondingResponses = object.unbondingResponses.map((e: any) => UnbondingDelegation.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryValidatorUnbondingDelegationsResponse): JsonSafe<QueryValidatorUnbondingDelegationsResponse> {
    const obj: any = {};
    if (message.unbondingResponses) {
      obj.unbondingResponses = message.unbondingResponses.map(e => e ? UnbondingDelegation.toJSON(e) : undefined);
    } else {
      obj.unbondingResponses = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryValidatorUnbondingDelegationsResponse>): QueryValidatorUnbondingDelegationsResponse {
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbondingResponses?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryValidatorUnbondingDelegationsResponseSDKType): QueryValidatorUnbondingDelegationsResponse {
    return {
      unbondingResponses: Array.isArray(object?.unbonding_responses) ? object.unbonding_responses.map((e: any) => UnbondingDelegation.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryValidatorUnbondingDelegationsResponse): QueryValidatorUnbondingDelegationsResponseSDKType {
    const obj: any = {};
    if (message.unbondingResponses) {
      obj.unbonding_responses = message.unbondingResponses.map(e => e ? UnbondingDelegation.toSDK(e) : undefined);
    } else {
      obj.unbonding_responses = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryValidatorUnbondingDelegationsResponseAmino): QueryValidatorUnbondingDelegationsResponse {
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbonding_responses?.map(e => UnbondingDelegation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryValidatorUnbondingDelegationsResponse): QueryValidatorUnbondingDelegationsResponseAmino {
    const obj: any = {};
    if (message.unbondingResponses) {
      obj.unbonding_responses = message.unbondingResponses.map(e => e ? UnbondingDelegation.toAmino(e) : undefined);
    } else {
      obj.unbonding_responses = message.unbondingResponses;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorUnbondingDelegationsResponseAminoMsg): QueryValidatorUnbondingDelegationsResponse {
    return QueryValidatorUnbondingDelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorUnbondingDelegationsResponse): QueryValidatorUnbondingDelegationsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorUnbondingDelegationsResponse",
      value: QueryValidatorUnbondingDelegationsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryValidatorUnbondingDelegationsResponseProtoMsg): QueryValidatorUnbondingDelegationsResponse {
    return QueryValidatorUnbondingDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryValidatorUnbondingDelegationsResponse): Uint8Array {
    return QueryValidatorUnbondingDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorUnbondingDelegationsResponse): QueryValidatorUnbondingDelegationsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse",
      value: QueryValidatorUnbondingDelegationsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    UnbondingDelegation.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryDelegationRequest(): QueryDelegationRequest {
  return {
    delegatorAddr: "",
    validatorAddr: ""
  };
}
export const QueryDelegationRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegationRequest",
  aminoType: "cosmos-sdk/QueryDelegationRequest",
  is(o: any): o is QueryDelegationRequest {
    return o && (o.$typeUrl === QueryDelegationRequest.typeUrl || typeof o.delegatorAddr === "string" && typeof o.validatorAddr === "string");
  },
  isSDK(o: any): o is QueryDelegationRequestSDKType {
    return o && (o.$typeUrl === QueryDelegationRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string");
  },
  isAmino(o: any): o is QueryDelegationRequestAmino {
    return o && (o.$typeUrl === QueryDelegationRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string");
  },
  encode(message: QueryDelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== undefined) {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== undefined) {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationRequest {
    const obj = createBaseQueryDelegationRequest();
    if (isSet(object.delegatorAddr)) obj.delegatorAddr = String(object.delegatorAddr);
    if (isSet(object.validatorAddr)) obj.validatorAddr = String(object.validatorAddr);
    return obj;
  },
  toJSON(message: QueryDelegationRequest): JsonSafe<QueryDelegationRequest> {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDelegationRequest>): QueryDelegationRequest {
    const message = createBaseQueryDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromSDK(object: QueryDelegationRequestSDKType): QueryDelegationRequest {
    return {
      delegatorAddr: object?.delegator_addr,
      validatorAddr: object?.validator_addr
    };
  },
  toSDK(message: QueryDelegationRequest): QueryDelegationRequestSDKType {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr;
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAmino(object: QueryDelegationRequestAmino): QueryDelegationRequest {
    const message = createBaseQueryDelegationRequest();
    if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryDelegationRequest): QueryDelegationRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr === "" ? undefined : message.delegatorAddr;
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryDelegationRequestAminoMsg): QueryDelegationRequest {
    return QueryDelegationRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegationRequest): QueryDelegationRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegationRequest",
      value: QueryDelegationRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegationRequestProtoMsg): QueryDelegationRequest {
    return QueryDelegationRequest.decode(message.value);
  },
  toProto(message: QueryDelegationRequest): Uint8Array {
    return QueryDelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationRequest): QueryDelegationRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegationRequest",
      value: QueryDelegationRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDelegationResponse(): QueryDelegationResponse {
  return {
    delegationResponse: undefined
  };
}
export const QueryDelegationResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegationResponse",
  aminoType: "cosmos-sdk/QueryDelegationResponse",
  is(o: any): o is QueryDelegationResponse {
    return o && o.$typeUrl === QueryDelegationResponse.typeUrl;
  },
  isSDK(o: any): o is QueryDelegationResponseSDKType {
    return o && o.$typeUrl === QueryDelegationResponse.typeUrl;
  },
  isAmino(o: any): o is QueryDelegationResponseAmino {
    return o && o.$typeUrl === QueryDelegationResponse.typeUrl;
  },
  encode(message: QueryDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegationResponse !== undefined) {
      DelegationResponse.encode(message.delegationResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponse = DelegationResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationResponse {
    const obj = createBaseQueryDelegationResponse();
    if (isSet(object.delegationResponse)) obj.delegationResponse = DelegationResponse.fromJSON(object.delegationResponse);
    return obj;
  },
  toJSON(message: QueryDelegationResponse): JsonSafe<QueryDelegationResponse> {
    const obj: any = {};
    message.delegationResponse !== undefined && (obj.delegationResponse = message.delegationResponse ? DelegationResponse.toJSON(message.delegationResponse) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDelegationResponse>): QueryDelegationResponse {
    const message = createBaseQueryDelegationResponse();
    if (object.delegationResponse !== undefined && object.delegationResponse !== null) {
      message.delegationResponse = DelegationResponse.fromPartial(object.delegationResponse);
    }
    return message;
  },
  fromSDK(object: QueryDelegationResponseSDKType): QueryDelegationResponse {
    return {
      delegationResponse: object.delegation_response ? DelegationResponse.fromSDK(object.delegation_response) : undefined
    };
  },
  toSDK(message: QueryDelegationResponse): QueryDelegationResponseSDKType {
    const obj: any = {};
    message.delegationResponse !== undefined && (obj.delegation_response = message.delegationResponse ? DelegationResponse.toSDK(message.delegationResponse) : undefined);
    return obj;
  },
  fromAmino(object: QueryDelegationResponseAmino): QueryDelegationResponse {
    const message = createBaseQueryDelegationResponse();
    if (object.delegation_response !== undefined && object.delegation_response !== null) {
      message.delegationResponse = DelegationResponse.fromAmino(object.delegation_response);
    }
    return message;
  },
  toAmino(message: QueryDelegationResponse): QueryDelegationResponseAmino {
    const obj: any = {};
    obj.delegation_response = message.delegationResponse ? DelegationResponse.toAmino(message.delegationResponse) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegationResponseAminoMsg): QueryDelegationResponse {
    return QueryDelegationResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegationResponse): QueryDelegationResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegationResponse",
      value: QueryDelegationResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegationResponseProtoMsg): QueryDelegationResponse {
    return QueryDelegationResponse.decode(message.value);
  },
  toProto(message: QueryDelegationResponse): Uint8Array {
    return QueryDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationResponse): QueryDelegationResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegationResponse",
      value: QueryDelegationResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    DelegationResponse.registerTypeUrl();
  }
};
function createBaseQueryUnbondingDelegationRequest(): QueryUnbondingDelegationRequest {
  return {
    delegatorAddr: "",
    validatorAddr: ""
  };
}
export const QueryUnbondingDelegationRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationRequest",
  aminoType: "cosmos-sdk/QueryUnbondingDelegationRequest",
  is(o: any): o is QueryUnbondingDelegationRequest {
    return o && (o.$typeUrl === QueryUnbondingDelegationRequest.typeUrl || typeof o.delegatorAddr === "string" && typeof o.validatorAddr === "string");
  },
  isSDK(o: any): o is QueryUnbondingDelegationRequestSDKType {
    return o && (o.$typeUrl === QueryUnbondingDelegationRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string");
  },
  isAmino(o: any): o is QueryUnbondingDelegationRequestAmino {
    return o && (o.$typeUrl === QueryUnbondingDelegationRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string");
  },
  encode(message: QueryUnbondingDelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== undefined) {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== undefined) {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnbondingDelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUnbondingDelegationRequest {
    const obj = createBaseQueryUnbondingDelegationRequest();
    if (isSet(object.delegatorAddr)) obj.delegatorAddr = String(object.delegatorAddr);
    if (isSet(object.validatorAddr)) obj.validatorAddr = String(object.validatorAddr);
    return obj;
  },
  toJSON(message: QueryUnbondingDelegationRequest): JsonSafe<QueryUnbondingDelegationRequest> {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryUnbondingDelegationRequest>): QueryUnbondingDelegationRequest {
    const message = createBaseQueryUnbondingDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromSDK(object: QueryUnbondingDelegationRequestSDKType): QueryUnbondingDelegationRequest {
    return {
      delegatorAddr: object?.delegator_addr,
      validatorAddr: object?.validator_addr
    };
  },
  toSDK(message: QueryUnbondingDelegationRequest): QueryUnbondingDelegationRequestSDKType {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr;
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAmino(object: QueryUnbondingDelegationRequestAmino): QueryUnbondingDelegationRequest {
    const message = createBaseQueryUnbondingDelegationRequest();
    if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryUnbondingDelegationRequest): QueryUnbondingDelegationRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr === "" ? undefined : message.delegatorAddr;
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryUnbondingDelegationRequestAminoMsg): QueryUnbondingDelegationRequest {
    return QueryUnbondingDelegationRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUnbondingDelegationRequest): QueryUnbondingDelegationRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryUnbondingDelegationRequest",
      value: QueryUnbondingDelegationRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUnbondingDelegationRequestProtoMsg): QueryUnbondingDelegationRequest {
    return QueryUnbondingDelegationRequest.decode(message.value);
  },
  toProto(message: QueryUnbondingDelegationRequest): Uint8Array {
    return QueryUnbondingDelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUnbondingDelegationRequest): QueryUnbondingDelegationRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationRequest",
      value: QueryUnbondingDelegationRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryUnbondingDelegationResponse(): QueryUnbondingDelegationResponse {
  return {
    unbond: UnbondingDelegation.fromPartial({})
  };
}
export const QueryUnbondingDelegationResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationResponse",
  aminoType: "cosmos-sdk/QueryUnbondingDelegationResponse",
  is(o: any): o is QueryUnbondingDelegationResponse {
    return o && (o.$typeUrl === QueryUnbondingDelegationResponse.typeUrl || UnbondingDelegation.is(o.unbond));
  },
  isSDK(o: any): o is QueryUnbondingDelegationResponseSDKType {
    return o && (o.$typeUrl === QueryUnbondingDelegationResponse.typeUrl || UnbondingDelegation.isSDK(o.unbond));
  },
  isAmino(o: any): o is QueryUnbondingDelegationResponseAmino {
    return o && (o.$typeUrl === QueryUnbondingDelegationResponse.typeUrl || UnbondingDelegation.isAmino(o.unbond));
  },
  encode(message: QueryUnbondingDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unbond !== undefined) {
      UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnbondingDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbond = UnbondingDelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUnbondingDelegationResponse {
    const obj = createBaseQueryUnbondingDelegationResponse();
    if (isSet(object.unbond)) obj.unbond = UnbondingDelegation.fromJSON(object.unbond);
    return obj;
  },
  toJSON(message: QueryUnbondingDelegationResponse): JsonSafe<QueryUnbondingDelegationResponse> {
    const obj: any = {};
    message.unbond !== undefined && (obj.unbond = message.unbond ? UnbondingDelegation.toJSON(message.unbond) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryUnbondingDelegationResponse>): QueryUnbondingDelegationResponse {
    const message = createBaseQueryUnbondingDelegationResponse();
    if (object.unbond !== undefined && object.unbond !== null) {
      message.unbond = UnbondingDelegation.fromPartial(object.unbond);
    }
    return message;
  },
  fromSDK(object: QueryUnbondingDelegationResponseSDKType): QueryUnbondingDelegationResponse {
    return {
      unbond: object.unbond ? UnbondingDelegation.fromSDK(object.unbond) : undefined
    };
  },
  toSDK(message: QueryUnbondingDelegationResponse): QueryUnbondingDelegationResponseSDKType {
    const obj: any = {};
    message.unbond !== undefined && (obj.unbond = message.unbond ? UnbondingDelegation.toSDK(message.unbond) : undefined);
    return obj;
  },
  fromAmino(object: QueryUnbondingDelegationResponseAmino): QueryUnbondingDelegationResponse {
    const message = createBaseQueryUnbondingDelegationResponse();
    if (object.unbond !== undefined && object.unbond !== null) {
      message.unbond = UnbondingDelegation.fromAmino(object.unbond);
    }
    return message;
  },
  toAmino(message: QueryUnbondingDelegationResponse): QueryUnbondingDelegationResponseAmino {
    const obj: any = {};
    obj.unbond = message.unbond ? UnbondingDelegation.toAmino(message.unbond) : UnbondingDelegation.toAmino(UnbondingDelegation.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryUnbondingDelegationResponseAminoMsg): QueryUnbondingDelegationResponse {
    return QueryUnbondingDelegationResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUnbondingDelegationResponse): QueryUnbondingDelegationResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryUnbondingDelegationResponse",
      value: QueryUnbondingDelegationResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUnbondingDelegationResponseProtoMsg): QueryUnbondingDelegationResponse {
    return QueryUnbondingDelegationResponse.decode(message.value);
  },
  toProto(message: QueryUnbondingDelegationResponse): Uint8Array {
    return QueryUnbondingDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUnbondingDelegationResponse): QueryUnbondingDelegationResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationResponse",
      value: QueryUnbondingDelegationResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    UnbondingDelegation.registerTypeUrl();
  }
};
function createBaseQueryDelegatorDelegationsRequest(): QueryDelegatorDelegationsRequest {
  return {
    delegatorAddr: "",
    pagination: undefined
  };
}
export const QueryDelegatorDelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest",
  aminoType: "cosmos-sdk/QueryDelegatorDelegationsRequest",
  is(o: any): o is QueryDelegatorDelegationsRequest {
    return o && (o.$typeUrl === QueryDelegatorDelegationsRequest.typeUrl || typeof o.delegatorAddr === "string");
  },
  isSDK(o: any): o is QueryDelegatorDelegationsRequestSDKType {
    return o && (o.$typeUrl === QueryDelegatorDelegationsRequest.typeUrl || typeof o.delegator_addr === "string");
  },
  isAmino(o: any): o is QueryDelegatorDelegationsRequestAmino {
    return o && (o.$typeUrl === QueryDelegatorDelegationsRequest.typeUrl || typeof o.delegator_addr === "string");
  },
  encode(message: QueryDelegatorDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== undefined) {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorDelegationsRequest {
    const obj = createBaseQueryDelegatorDelegationsRequest();
    if (isSet(object.delegatorAddr)) obj.delegatorAddr = String(object.delegatorAddr);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDelegatorDelegationsRequest): JsonSafe<QueryDelegatorDelegationsRequest> {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDelegatorDelegationsRequest>): QueryDelegatorDelegationsRequest {
    const message = createBaseQueryDelegatorDelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryDelegatorDelegationsRequestSDKType): QueryDelegatorDelegationsRequest {
    return {
      delegatorAddr: object?.delegator_addr,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDelegatorDelegationsRequest): QueryDelegatorDelegationsRequestSDKType {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDelegatorDelegationsRequestAmino): QueryDelegatorDelegationsRequest {
    const message = createBaseQueryDelegatorDelegationsRequest();
    if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorDelegationsRequest): QueryDelegatorDelegationsRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr === "" ? undefined : message.delegatorAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorDelegationsRequestAminoMsg): QueryDelegatorDelegationsRequest {
    return QueryDelegatorDelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorDelegationsRequest): QueryDelegatorDelegationsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorDelegationsRequest",
      value: QueryDelegatorDelegationsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegatorDelegationsRequestProtoMsg): QueryDelegatorDelegationsRequest {
    return QueryDelegatorDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorDelegationsRequest): Uint8Array {
    return QueryDelegatorDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorDelegationsRequest): QueryDelegatorDelegationsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest",
      value: QueryDelegatorDelegationsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryDelegatorDelegationsResponse(): QueryDelegatorDelegationsResponse {
  return {
    delegationResponses: [],
    pagination: undefined
  };
}
export const QueryDelegatorDelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse",
  aminoType: "cosmos-sdk/QueryDelegatorDelegationsResponse",
  is(o: any): o is QueryDelegatorDelegationsResponse {
    return o && (o.$typeUrl === QueryDelegatorDelegationsResponse.typeUrl || Array.isArray(o.delegationResponses) && (!o.delegationResponses.length || DelegationResponse.is(o.delegationResponses[0])));
  },
  isSDK(o: any): o is QueryDelegatorDelegationsResponseSDKType {
    return o && (o.$typeUrl === QueryDelegatorDelegationsResponse.typeUrl || Array.isArray(o.delegation_responses) && (!o.delegation_responses.length || DelegationResponse.isSDK(o.delegation_responses[0])));
  },
  isAmino(o: any): o is QueryDelegatorDelegationsResponseAmino {
    return o && (o.$typeUrl === QueryDelegatorDelegationsResponse.typeUrl || Array.isArray(o.delegation_responses) && (!o.delegation_responses.length || DelegationResponse.isAmino(o.delegation_responses[0])));
  },
  encode(message: QueryDelegatorDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorDelegationsResponse {
    const obj = createBaseQueryDelegatorDelegationsResponse();
    if (Array.isArray(object?.delegationResponses)) obj.delegationResponses = object.delegationResponses.map((e: any) => DelegationResponse.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDelegatorDelegationsResponse): JsonSafe<QueryDelegatorDelegationsResponse> {
    const obj: any = {};
    if (message.delegationResponses) {
      obj.delegationResponses = message.delegationResponses.map(e => e ? DelegationResponse.toJSON(e) : undefined);
    } else {
      obj.delegationResponses = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDelegatorDelegationsResponse>): QueryDelegatorDelegationsResponse {
    const message = createBaseQueryDelegatorDelegationsResponse();
    message.delegationResponses = object.delegationResponses?.map(e => DelegationResponse.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryDelegatorDelegationsResponseSDKType): QueryDelegatorDelegationsResponse {
    return {
      delegationResponses: Array.isArray(object?.delegation_responses) ? object.delegation_responses.map((e: any) => DelegationResponse.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDelegatorDelegationsResponse): QueryDelegatorDelegationsResponseSDKType {
    const obj: any = {};
    if (message.delegationResponses) {
      obj.delegation_responses = message.delegationResponses.map(e => e ? DelegationResponse.toSDK(e) : undefined);
    } else {
      obj.delegation_responses = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDelegatorDelegationsResponseAmino): QueryDelegatorDelegationsResponse {
    const message = createBaseQueryDelegatorDelegationsResponse();
    message.delegationResponses = object.delegation_responses?.map(e => DelegationResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorDelegationsResponse): QueryDelegatorDelegationsResponseAmino {
    const obj: any = {};
    if (message.delegationResponses) {
      obj.delegation_responses = message.delegationResponses.map(e => e ? DelegationResponse.toAmino(e) : undefined);
    } else {
      obj.delegation_responses = message.delegationResponses;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorDelegationsResponseAminoMsg): QueryDelegatorDelegationsResponse {
    return QueryDelegatorDelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorDelegationsResponse): QueryDelegatorDelegationsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorDelegationsResponse",
      value: QueryDelegatorDelegationsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegatorDelegationsResponseProtoMsg): QueryDelegatorDelegationsResponse {
    return QueryDelegatorDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorDelegationsResponse): Uint8Array {
    return QueryDelegatorDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorDelegationsResponse): QueryDelegatorDelegationsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse",
      value: QueryDelegatorDelegationsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    DelegationResponse.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryDelegatorUnbondingDelegationsRequest(): QueryDelegatorUnbondingDelegationsRequest {
  return {
    delegatorAddr: "",
    pagination: undefined
  };
}
export const QueryDelegatorUnbondingDelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest",
  aminoType: "cosmos-sdk/QueryDelegatorUnbondingDelegationsRequest",
  is(o: any): o is QueryDelegatorUnbondingDelegationsRequest {
    return o && (o.$typeUrl === QueryDelegatorUnbondingDelegationsRequest.typeUrl || typeof o.delegatorAddr === "string");
  },
  isSDK(o: any): o is QueryDelegatorUnbondingDelegationsRequestSDKType {
    return o && (o.$typeUrl === QueryDelegatorUnbondingDelegationsRequest.typeUrl || typeof o.delegator_addr === "string");
  },
  isAmino(o: any): o is QueryDelegatorUnbondingDelegationsRequestAmino {
    return o && (o.$typeUrl === QueryDelegatorUnbondingDelegationsRequest.typeUrl || typeof o.delegator_addr === "string");
  },
  encode(message: QueryDelegatorUnbondingDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== undefined) {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorUnbondingDelegationsRequest {
    const obj = createBaseQueryDelegatorUnbondingDelegationsRequest();
    if (isSet(object.delegatorAddr)) obj.delegatorAddr = String(object.delegatorAddr);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDelegatorUnbondingDelegationsRequest): JsonSafe<QueryDelegatorUnbondingDelegationsRequest> {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDelegatorUnbondingDelegationsRequest>): QueryDelegatorUnbondingDelegationsRequest {
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryDelegatorUnbondingDelegationsRequestSDKType): QueryDelegatorUnbondingDelegationsRequest {
    return {
      delegatorAddr: object?.delegator_addr,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDelegatorUnbondingDelegationsRequest): QueryDelegatorUnbondingDelegationsRequestSDKType {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDelegatorUnbondingDelegationsRequestAmino): QueryDelegatorUnbondingDelegationsRequest {
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorUnbondingDelegationsRequest): QueryDelegatorUnbondingDelegationsRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr === "" ? undefined : message.delegatorAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorUnbondingDelegationsRequestAminoMsg): QueryDelegatorUnbondingDelegationsRequest {
    return QueryDelegatorUnbondingDelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorUnbondingDelegationsRequest): QueryDelegatorUnbondingDelegationsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorUnbondingDelegationsRequest",
      value: QueryDelegatorUnbondingDelegationsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegatorUnbondingDelegationsRequestProtoMsg): QueryDelegatorUnbondingDelegationsRequest {
    return QueryDelegatorUnbondingDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorUnbondingDelegationsRequest): Uint8Array {
    return QueryDelegatorUnbondingDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorUnbondingDelegationsRequest): QueryDelegatorUnbondingDelegationsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest",
      value: QueryDelegatorUnbondingDelegationsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryDelegatorUnbondingDelegationsResponse(): QueryDelegatorUnbondingDelegationsResponse {
  return {
    unbondingResponses: [],
    pagination: undefined
  };
}
export const QueryDelegatorUnbondingDelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse",
  aminoType: "cosmos-sdk/QueryDelegatorUnbondingDelegationsResponse",
  is(o: any): o is QueryDelegatorUnbondingDelegationsResponse {
    return o && (o.$typeUrl === QueryDelegatorUnbondingDelegationsResponse.typeUrl || Array.isArray(o.unbondingResponses) && (!o.unbondingResponses.length || UnbondingDelegation.is(o.unbondingResponses[0])));
  },
  isSDK(o: any): o is QueryDelegatorUnbondingDelegationsResponseSDKType {
    return o && (o.$typeUrl === QueryDelegatorUnbondingDelegationsResponse.typeUrl || Array.isArray(o.unbonding_responses) && (!o.unbonding_responses.length || UnbondingDelegation.isSDK(o.unbonding_responses[0])));
  },
  isAmino(o: any): o is QueryDelegatorUnbondingDelegationsResponseAmino {
    return o && (o.$typeUrl === QueryDelegatorUnbondingDelegationsResponse.typeUrl || Array.isArray(o.unbonding_responses) && (!o.unbonding_responses.length || UnbondingDelegation.isAmino(o.unbonding_responses[0])));
  },
  encode(message: QueryDelegatorUnbondingDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorUnbondingDelegationsResponse {
    const obj = createBaseQueryDelegatorUnbondingDelegationsResponse();
    if (Array.isArray(object?.unbondingResponses)) obj.unbondingResponses = object.unbondingResponses.map((e: any) => UnbondingDelegation.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDelegatorUnbondingDelegationsResponse): JsonSafe<QueryDelegatorUnbondingDelegationsResponse> {
    const obj: any = {};
    if (message.unbondingResponses) {
      obj.unbondingResponses = message.unbondingResponses.map(e => e ? UnbondingDelegation.toJSON(e) : undefined);
    } else {
      obj.unbondingResponses = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDelegatorUnbondingDelegationsResponse>): QueryDelegatorUnbondingDelegationsResponse {
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbondingResponses?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryDelegatorUnbondingDelegationsResponseSDKType): QueryDelegatorUnbondingDelegationsResponse {
    return {
      unbondingResponses: Array.isArray(object?.unbonding_responses) ? object.unbonding_responses.map((e: any) => UnbondingDelegation.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDelegatorUnbondingDelegationsResponse): QueryDelegatorUnbondingDelegationsResponseSDKType {
    const obj: any = {};
    if (message.unbondingResponses) {
      obj.unbonding_responses = message.unbondingResponses.map(e => e ? UnbondingDelegation.toSDK(e) : undefined);
    } else {
      obj.unbonding_responses = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDelegatorUnbondingDelegationsResponseAmino): QueryDelegatorUnbondingDelegationsResponse {
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbonding_responses?.map(e => UnbondingDelegation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorUnbondingDelegationsResponse): QueryDelegatorUnbondingDelegationsResponseAmino {
    const obj: any = {};
    if (message.unbondingResponses) {
      obj.unbonding_responses = message.unbondingResponses.map(e => e ? UnbondingDelegation.toAmino(e) : undefined);
    } else {
      obj.unbonding_responses = message.unbondingResponses;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorUnbondingDelegationsResponseAminoMsg): QueryDelegatorUnbondingDelegationsResponse {
    return QueryDelegatorUnbondingDelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorUnbondingDelegationsResponse): QueryDelegatorUnbondingDelegationsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorUnbondingDelegationsResponse",
      value: QueryDelegatorUnbondingDelegationsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegatorUnbondingDelegationsResponseProtoMsg): QueryDelegatorUnbondingDelegationsResponse {
    return QueryDelegatorUnbondingDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorUnbondingDelegationsResponse): Uint8Array {
    return QueryDelegatorUnbondingDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorUnbondingDelegationsResponse): QueryDelegatorUnbondingDelegationsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse",
      value: QueryDelegatorUnbondingDelegationsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    UnbondingDelegation.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryRedelegationsRequest(): QueryRedelegationsRequest {
  return {
    delegatorAddr: "",
    srcValidatorAddr: "",
    dstValidatorAddr: "",
    pagination: undefined
  };
}
export const QueryRedelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsRequest",
  aminoType: "cosmos-sdk/QueryRedelegationsRequest",
  is(o: any): o is QueryRedelegationsRequest {
    return o && (o.$typeUrl === QueryRedelegationsRequest.typeUrl || typeof o.delegatorAddr === "string" && typeof o.srcValidatorAddr === "string" && typeof o.dstValidatorAddr === "string");
  },
  isSDK(o: any): o is QueryRedelegationsRequestSDKType {
    return o && (o.$typeUrl === QueryRedelegationsRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.src_validator_addr === "string" && typeof o.dst_validator_addr === "string");
  },
  isAmino(o: any): o is QueryRedelegationsRequestAmino {
    return o && (o.$typeUrl === QueryRedelegationsRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.src_validator_addr === "string" && typeof o.dst_validator_addr === "string");
  },
  encode(message: QueryRedelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== undefined) {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.srcValidatorAddr !== undefined) {
      writer.uint32(18).string(message.srcValidatorAddr);
    }
    if (message.dstValidatorAddr !== undefined) {
      writer.uint32(26).string(message.dstValidatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRedelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.srcValidatorAddr = reader.string();
          break;
        case 3:
          message.dstValidatorAddr = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRedelegationsRequest {
    const obj = createBaseQueryRedelegationsRequest();
    if (isSet(object.delegatorAddr)) obj.delegatorAddr = String(object.delegatorAddr);
    if (isSet(object.srcValidatorAddr)) obj.srcValidatorAddr = String(object.srcValidatorAddr);
    if (isSet(object.dstValidatorAddr)) obj.dstValidatorAddr = String(object.dstValidatorAddr);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryRedelegationsRequest): JsonSafe<QueryRedelegationsRequest> {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.srcValidatorAddr !== undefined && (obj.srcValidatorAddr = message.srcValidatorAddr);
    message.dstValidatorAddr !== undefined && (obj.dstValidatorAddr = message.dstValidatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryRedelegationsRequest>): QueryRedelegationsRequest {
    const message = createBaseQueryRedelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.srcValidatorAddr = object.srcValidatorAddr ?? "";
    message.dstValidatorAddr = object.dstValidatorAddr ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryRedelegationsRequestSDKType): QueryRedelegationsRequest {
    return {
      delegatorAddr: object?.delegator_addr,
      srcValidatorAddr: object?.src_validator_addr,
      dstValidatorAddr: object?.dst_validator_addr,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryRedelegationsRequest): QueryRedelegationsRequestSDKType {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr;
    obj.src_validator_addr = message.srcValidatorAddr;
    obj.dst_validator_addr = message.dstValidatorAddr;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryRedelegationsRequestAmino): QueryRedelegationsRequest {
    const message = createBaseQueryRedelegationsRequest();
    if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.src_validator_addr !== undefined && object.src_validator_addr !== null) {
      message.srcValidatorAddr = object.src_validator_addr;
    }
    if (object.dst_validator_addr !== undefined && object.dst_validator_addr !== null) {
      message.dstValidatorAddr = object.dst_validator_addr;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRedelegationsRequest): QueryRedelegationsRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr === "" ? undefined : message.delegatorAddr;
    obj.src_validator_addr = message.srcValidatorAddr === "" ? undefined : message.srcValidatorAddr;
    obj.dst_validator_addr = message.dstValidatorAddr === "" ? undefined : message.dstValidatorAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRedelegationsRequestAminoMsg): QueryRedelegationsRequest {
    return QueryRedelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryRedelegationsRequest): QueryRedelegationsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryRedelegationsRequest",
      value: QueryRedelegationsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryRedelegationsRequestProtoMsg): QueryRedelegationsRequest {
    return QueryRedelegationsRequest.decode(message.value);
  },
  toProto(message: QueryRedelegationsRequest): Uint8Array {
    return QueryRedelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRedelegationsRequest): QueryRedelegationsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsRequest",
      value: QueryRedelegationsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryRedelegationsResponse(): QueryRedelegationsResponse {
  return {
    redelegationResponses: [],
    pagination: undefined
  };
}
export const QueryRedelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsResponse",
  aminoType: "cosmos-sdk/QueryRedelegationsResponse",
  is(o: any): o is QueryRedelegationsResponse {
    return o && (o.$typeUrl === QueryRedelegationsResponse.typeUrl || Array.isArray(o.redelegationResponses) && (!o.redelegationResponses.length || RedelegationResponse.is(o.redelegationResponses[0])));
  },
  isSDK(o: any): o is QueryRedelegationsResponseSDKType {
    return o && (o.$typeUrl === QueryRedelegationsResponse.typeUrl || Array.isArray(o.redelegation_responses) && (!o.redelegation_responses.length || RedelegationResponse.isSDK(o.redelegation_responses[0])));
  },
  isAmino(o: any): o is QueryRedelegationsResponseAmino {
    return o && (o.$typeUrl === QueryRedelegationsResponse.typeUrl || Array.isArray(o.redelegation_responses) && (!o.redelegation_responses.length || RedelegationResponse.isAmino(o.redelegation_responses[0])));
  },
  encode(message: QueryRedelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.redelegationResponses) {
      RedelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRedelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegationResponses.push(RedelegationResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRedelegationsResponse {
    const obj = createBaseQueryRedelegationsResponse();
    if (Array.isArray(object?.redelegationResponses)) obj.redelegationResponses = object.redelegationResponses.map((e: any) => RedelegationResponse.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryRedelegationsResponse): JsonSafe<QueryRedelegationsResponse> {
    const obj: any = {};
    if (message.redelegationResponses) {
      obj.redelegationResponses = message.redelegationResponses.map(e => e ? RedelegationResponse.toJSON(e) : undefined);
    } else {
      obj.redelegationResponses = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryRedelegationsResponse>): QueryRedelegationsResponse {
    const message = createBaseQueryRedelegationsResponse();
    message.redelegationResponses = object.redelegationResponses?.map(e => RedelegationResponse.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryRedelegationsResponseSDKType): QueryRedelegationsResponse {
    return {
      redelegationResponses: Array.isArray(object?.redelegation_responses) ? object.redelegation_responses.map((e: any) => RedelegationResponse.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryRedelegationsResponse): QueryRedelegationsResponseSDKType {
    const obj: any = {};
    if (message.redelegationResponses) {
      obj.redelegation_responses = message.redelegationResponses.map(e => e ? RedelegationResponse.toSDK(e) : undefined);
    } else {
      obj.redelegation_responses = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryRedelegationsResponseAmino): QueryRedelegationsResponse {
    const message = createBaseQueryRedelegationsResponse();
    message.redelegationResponses = object.redelegation_responses?.map(e => RedelegationResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRedelegationsResponse): QueryRedelegationsResponseAmino {
    const obj: any = {};
    if (message.redelegationResponses) {
      obj.redelegation_responses = message.redelegationResponses.map(e => e ? RedelegationResponse.toAmino(e) : undefined);
    } else {
      obj.redelegation_responses = message.redelegationResponses;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRedelegationsResponseAminoMsg): QueryRedelegationsResponse {
    return QueryRedelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryRedelegationsResponse): QueryRedelegationsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryRedelegationsResponse",
      value: QueryRedelegationsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryRedelegationsResponseProtoMsg): QueryRedelegationsResponse {
    return QueryRedelegationsResponse.decode(message.value);
  },
  toProto(message: QueryRedelegationsResponse): Uint8Array {
    return QueryRedelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRedelegationsResponse): QueryRedelegationsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsResponse",
      value: QueryRedelegationsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    RedelegationResponse.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryDelegatorValidatorsRequest(): QueryDelegatorValidatorsRequest {
  return {
    delegatorAddr: "",
    pagination: undefined
  };
}
export const QueryDelegatorValidatorsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest",
  aminoType: "cosmos-sdk/QueryDelegatorValidatorsRequest",
  is(o: any): o is QueryDelegatorValidatorsRequest {
    return o && (o.$typeUrl === QueryDelegatorValidatorsRequest.typeUrl || typeof o.delegatorAddr === "string");
  },
  isSDK(o: any): o is QueryDelegatorValidatorsRequestSDKType {
    return o && (o.$typeUrl === QueryDelegatorValidatorsRequest.typeUrl || typeof o.delegator_addr === "string");
  },
  isAmino(o: any): o is QueryDelegatorValidatorsRequestAmino {
    return o && (o.$typeUrl === QueryDelegatorValidatorsRequest.typeUrl || typeof o.delegator_addr === "string");
  },
  encode(message: QueryDelegatorValidatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== undefined) {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorValidatorsRequest {
    const obj = createBaseQueryDelegatorValidatorsRequest();
    if (isSet(object.delegatorAddr)) obj.delegatorAddr = String(object.delegatorAddr);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDelegatorValidatorsRequest): JsonSafe<QueryDelegatorValidatorsRequest> {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest {
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryDelegatorValidatorsRequestSDKType): QueryDelegatorValidatorsRequest {
    return {
      delegatorAddr: object?.delegator_addr,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequestSDKType {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDelegatorValidatorsRequestAmino): QueryDelegatorValidatorsRequest {
    const message = createBaseQueryDelegatorValidatorsRequest();
    if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr === "" ? undefined : message.delegatorAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorValidatorsRequestAminoMsg): QueryDelegatorValidatorsRequest {
    return QueryDelegatorValidatorsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorValidatorsRequest",
      value: QueryDelegatorValidatorsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegatorValidatorsRequestProtoMsg): QueryDelegatorValidatorsRequest {
    return QueryDelegatorValidatorsRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorValidatorsRequest): Uint8Array {
    return QueryDelegatorValidatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest",
      value: QueryDelegatorValidatorsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryDelegatorValidatorsResponse(): QueryDelegatorValidatorsResponse {
  return {
    validators: [],
    pagination: undefined
  };
}
export const QueryDelegatorValidatorsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse",
  aminoType: "cosmos-sdk/QueryDelegatorValidatorsResponse",
  is(o: any): o is QueryDelegatorValidatorsResponse {
    return o && (o.$typeUrl === QueryDelegatorValidatorsResponse.typeUrl || Array.isArray(o.validators) && (!o.validators.length || Validator.is(o.validators[0])));
  },
  isSDK(o: any): o is QueryDelegatorValidatorsResponseSDKType {
    return o && (o.$typeUrl === QueryDelegatorValidatorsResponse.typeUrl || Array.isArray(o.validators) && (!o.validators.length || Validator.isSDK(o.validators[0])));
  },
  isAmino(o: any): o is QueryDelegatorValidatorsResponseAmino {
    return o && (o.$typeUrl === QueryDelegatorValidatorsResponse.typeUrl || Array.isArray(o.validators) && (!o.validators.length || Validator.isAmino(o.validators[0])));
  },
  encode(message: QueryDelegatorValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorValidatorsResponse {
    const obj = createBaseQueryDelegatorValidatorsResponse();
    if (Array.isArray(object?.validators)) obj.validators = object.validators.map((e: any) => Validator.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDelegatorValidatorsResponse): JsonSafe<QueryDelegatorValidatorsResponse> {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryDelegatorValidatorsResponseSDKType): QueryDelegatorValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseSDKType {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toSDK(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDelegatorValidatorsResponseAmino): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = message.validators;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorValidatorsResponseAminoMsg): QueryDelegatorValidatorsResponse {
    return QueryDelegatorValidatorsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorValidatorsResponse",
      value: QueryDelegatorValidatorsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegatorValidatorsResponseProtoMsg): QueryDelegatorValidatorsResponse {
    return QueryDelegatorValidatorsResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorValidatorsResponse): Uint8Array {
    return QueryDelegatorValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse",
      value: QueryDelegatorValidatorsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Validator.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryDelegatorValidatorRequest(): QueryDelegatorValidatorRequest {
  return {
    delegatorAddr: "",
    validatorAddr: ""
  };
}
export const QueryDelegatorValidatorRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorRequest",
  aminoType: "cosmos-sdk/QueryDelegatorValidatorRequest",
  is(o: any): o is QueryDelegatorValidatorRequest {
    return o && (o.$typeUrl === QueryDelegatorValidatorRequest.typeUrl || typeof o.delegatorAddr === "string" && typeof o.validatorAddr === "string");
  },
  isSDK(o: any): o is QueryDelegatorValidatorRequestSDKType {
    return o && (o.$typeUrl === QueryDelegatorValidatorRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string");
  },
  isAmino(o: any): o is QueryDelegatorValidatorRequestAmino {
    return o && (o.$typeUrl === QueryDelegatorValidatorRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string");
  },
  encode(message: QueryDelegatorValidatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== undefined) {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== undefined) {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorValidatorRequest {
    const obj = createBaseQueryDelegatorValidatorRequest();
    if (isSet(object.delegatorAddr)) obj.delegatorAddr = String(object.delegatorAddr);
    if (isSet(object.validatorAddr)) obj.validatorAddr = String(object.validatorAddr);
    return obj;
  },
  toJSON(message: QueryDelegatorValidatorRequest): JsonSafe<QueryDelegatorValidatorRequest> {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDelegatorValidatorRequest>): QueryDelegatorValidatorRequest {
    const message = createBaseQueryDelegatorValidatorRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromSDK(object: QueryDelegatorValidatorRequestSDKType): QueryDelegatorValidatorRequest {
    return {
      delegatorAddr: object?.delegator_addr,
      validatorAddr: object?.validator_addr
    };
  },
  toSDK(message: QueryDelegatorValidatorRequest): QueryDelegatorValidatorRequestSDKType {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr;
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAmino(object: QueryDelegatorValidatorRequestAmino): QueryDelegatorValidatorRequest {
    const message = createBaseQueryDelegatorValidatorRequest();
    if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryDelegatorValidatorRequest): QueryDelegatorValidatorRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr === "" ? undefined : message.delegatorAddr;
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorValidatorRequestAminoMsg): QueryDelegatorValidatorRequest {
    return QueryDelegatorValidatorRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorValidatorRequest): QueryDelegatorValidatorRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorValidatorRequest",
      value: QueryDelegatorValidatorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegatorValidatorRequestProtoMsg): QueryDelegatorValidatorRequest {
    return QueryDelegatorValidatorRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorValidatorRequest): Uint8Array {
    return QueryDelegatorValidatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorValidatorRequest): QueryDelegatorValidatorRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorRequest",
      value: QueryDelegatorValidatorRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDelegatorValidatorResponse(): QueryDelegatorValidatorResponse {
  return {
    validator: Validator.fromPartial({})
  };
}
export const QueryDelegatorValidatorResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorResponse",
  aminoType: "cosmos-sdk/QueryDelegatorValidatorResponse",
  is(o: any): o is QueryDelegatorValidatorResponse {
    return o && (o.$typeUrl === QueryDelegatorValidatorResponse.typeUrl || Validator.is(o.validator));
  },
  isSDK(o: any): o is QueryDelegatorValidatorResponseSDKType {
    return o && (o.$typeUrl === QueryDelegatorValidatorResponse.typeUrl || Validator.isSDK(o.validator));
  },
  isAmino(o: any): o is QueryDelegatorValidatorResponseAmino {
    return o && (o.$typeUrl === QueryDelegatorValidatorResponse.typeUrl || Validator.isAmino(o.validator));
  },
  encode(message: QueryDelegatorValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorValidatorResponse {
    const obj = createBaseQueryDelegatorValidatorResponse();
    if (isSet(object.validator)) obj.validator = Validator.fromJSON(object.validator);
    return obj;
  },
  toJSON(message: QueryDelegatorValidatorResponse): JsonSafe<QueryDelegatorValidatorResponse> {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDelegatorValidatorResponse>): QueryDelegatorValidatorResponse {
    const message = createBaseQueryDelegatorValidatorResponse();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromPartial(object.validator);
    }
    return message;
  },
  fromSDK(object: QueryDelegatorValidatorResponseSDKType): QueryDelegatorValidatorResponse {
    return {
      validator: object.validator ? Validator.fromSDK(object.validator) : undefined
    };
  },
  toSDK(message: QueryDelegatorValidatorResponse): QueryDelegatorValidatorResponseSDKType {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator ? Validator.toSDK(message.validator) : undefined);
    return obj;
  },
  fromAmino(object: QueryDelegatorValidatorResponseAmino): QueryDelegatorValidatorResponse {
    const message = createBaseQueryDelegatorValidatorResponse();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromAmino(object.validator);
    }
    return message;
  },
  toAmino(message: QueryDelegatorValidatorResponse): QueryDelegatorValidatorResponseAmino {
    const obj: any = {};
    obj.validator = message.validator ? Validator.toAmino(message.validator) : Validator.toAmino(Validator.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorValidatorResponseAminoMsg): QueryDelegatorValidatorResponse {
    return QueryDelegatorValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorValidatorResponse): QueryDelegatorValidatorResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorValidatorResponse",
      value: QueryDelegatorValidatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegatorValidatorResponseProtoMsg): QueryDelegatorValidatorResponse {
    return QueryDelegatorValidatorResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorValidatorResponse): Uint8Array {
    return QueryDelegatorValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorValidatorResponse): QueryDelegatorValidatorResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorResponse",
      value: QueryDelegatorValidatorResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Validator.registerTypeUrl();
  }
};
function createBaseQueryHistoricalInfoRequest(): QueryHistoricalInfoRequest {
  return {
    height: BigInt(0)
  };
}
export const QueryHistoricalInfoRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoRequest",
  aminoType: "cosmos-sdk/QueryHistoricalInfoRequest",
  is(o: any): o is QueryHistoricalInfoRequest {
    return o && (o.$typeUrl === QueryHistoricalInfoRequest.typeUrl || typeof o.height === "bigint");
  },
  isSDK(o: any): o is QueryHistoricalInfoRequestSDKType {
    return o && (o.$typeUrl === QueryHistoricalInfoRequest.typeUrl || typeof o.height === "bigint");
  },
  isAmino(o: any): o is QueryHistoricalInfoRequestAmino {
    return o && (o.$typeUrl === QueryHistoricalInfoRequest.typeUrl || typeof o.height === "bigint");
  },
  encode(message: QueryHistoricalInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== undefined) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHistoricalInfoRequest {
    const obj = createBaseQueryHistoricalInfoRequest();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    return obj;
  },
  toJSON(message: QueryHistoricalInfoRequest): JsonSafe<QueryHistoricalInfoRequest> {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryHistoricalInfoRequest>): QueryHistoricalInfoRequest {
    const message = createBaseQueryHistoricalInfoRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    return message;
  },
  fromSDK(object: QueryHistoricalInfoRequestSDKType): QueryHistoricalInfoRequest {
    return {
      height: object?.height
    };
  },
  toSDK(message: QueryHistoricalInfoRequest): QueryHistoricalInfoRequestSDKType {
    const obj: any = {};
    obj.height = message.height;
    return obj;
  },
  fromAmino(object: QueryHistoricalInfoRequestAmino): QueryHistoricalInfoRequest {
    const message = createBaseQueryHistoricalInfoRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: QueryHistoricalInfoRequest): QueryHistoricalInfoRequestAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalInfoRequestAminoMsg): QueryHistoricalInfoRequest {
    return QueryHistoricalInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryHistoricalInfoRequest): QueryHistoricalInfoRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryHistoricalInfoRequest",
      value: QueryHistoricalInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryHistoricalInfoRequestProtoMsg): QueryHistoricalInfoRequest {
    return QueryHistoricalInfoRequest.decode(message.value);
  },
  toProto(message: QueryHistoricalInfoRequest): Uint8Array {
    return QueryHistoricalInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalInfoRequest): QueryHistoricalInfoRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoRequest",
      value: QueryHistoricalInfoRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryHistoricalInfoResponse(): QueryHistoricalInfoResponse {
  return {
    hist: undefined
  };
}
export const QueryHistoricalInfoResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoResponse",
  aminoType: "cosmos-sdk/QueryHistoricalInfoResponse",
  is(o: any): o is QueryHistoricalInfoResponse {
    return o && o.$typeUrl === QueryHistoricalInfoResponse.typeUrl;
  },
  isSDK(o: any): o is QueryHistoricalInfoResponseSDKType {
    return o && o.$typeUrl === QueryHistoricalInfoResponse.typeUrl;
  },
  isAmino(o: any): o is QueryHistoricalInfoResponseAmino {
    return o && o.$typeUrl === QueryHistoricalInfoResponse.typeUrl;
  },
  encode(message: QueryHistoricalInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hist !== undefined) {
      HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hist = HistoricalInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHistoricalInfoResponse {
    const obj = createBaseQueryHistoricalInfoResponse();
    if (isSet(object.hist)) obj.hist = HistoricalInfo.fromJSON(object.hist);
    return obj;
  },
  toJSON(message: QueryHistoricalInfoResponse): JsonSafe<QueryHistoricalInfoResponse> {
    const obj: any = {};
    message.hist !== undefined && (obj.hist = message.hist ? HistoricalInfo.toJSON(message.hist) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryHistoricalInfoResponse>): QueryHistoricalInfoResponse {
    const message = createBaseQueryHistoricalInfoResponse();
    if (object.hist !== undefined && object.hist !== null) {
      message.hist = HistoricalInfo.fromPartial(object.hist);
    }
    return message;
  },
  fromSDK(object: QueryHistoricalInfoResponseSDKType): QueryHistoricalInfoResponse {
    return {
      hist: object.hist ? HistoricalInfo.fromSDK(object.hist) : undefined
    };
  },
  toSDK(message: QueryHistoricalInfoResponse): QueryHistoricalInfoResponseSDKType {
    const obj: any = {};
    message.hist !== undefined && (obj.hist = message.hist ? HistoricalInfo.toSDK(message.hist) : undefined);
    return obj;
  },
  fromAmino(object: QueryHistoricalInfoResponseAmino): QueryHistoricalInfoResponse {
    const message = createBaseQueryHistoricalInfoResponse();
    if (object.hist !== undefined && object.hist !== null) {
      message.hist = HistoricalInfo.fromAmino(object.hist);
    }
    return message;
  },
  toAmino(message: QueryHistoricalInfoResponse): QueryHistoricalInfoResponseAmino {
    const obj: any = {};
    obj.hist = message.hist ? HistoricalInfo.toAmino(message.hist) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalInfoResponseAminoMsg): QueryHistoricalInfoResponse {
    return QueryHistoricalInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryHistoricalInfoResponse): QueryHistoricalInfoResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryHistoricalInfoResponse",
      value: QueryHistoricalInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryHistoricalInfoResponseProtoMsg): QueryHistoricalInfoResponse {
    return QueryHistoricalInfoResponse.decode(message.value);
  },
  toProto(message: QueryHistoricalInfoResponse): Uint8Array {
    return QueryHistoricalInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalInfoResponse): QueryHistoricalInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoResponse",
      value: QueryHistoricalInfoResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    HistoricalInfo.registerTypeUrl();
  }
};
function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {};
}
export const QueryPoolRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryPoolRequest",
  aminoType: "cosmos-sdk/QueryPoolRequest",
  is(o: any): o is QueryPoolRequest {
    return o && o.$typeUrl === QueryPoolRequest.typeUrl;
  },
  isSDK(o: any): o is QueryPoolRequestSDKType {
    return o && o.$typeUrl === QueryPoolRequest.typeUrl;
  },
  isAmino(o: any): o is QueryPoolRequestAmino {
    return o && o.$typeUrl === QueryPoolRequest.typeUrl;
  },
  encode(_: QueryPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryPoolRequest {
    const obj = createBaseQueryPoolRequest();
    return obj;
  },
  toJSON(_: QueryPoolRequest): JsonSafe<QueryPoolRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryPoolRequest>): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    return message;
  },
  fromSDK(_: QueryPoolRequestSDKType): QueryPoolRequest {
    return {};
  },
  toSDK(_: QueryPoolRequest): QueryPoolRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryPoolRequestAmino): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    return message;
  },
  toAmino(_: QueryPoolRequest): QueryPoolRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPoolRequestAminoMsg): QueryPoolRequest {
    return QueryPoolRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPoolRequest): QueryPoolRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryPoolRequest",
      value: QueryPoolRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPoolRequestProtoMsg): QueryPoolRequest {
    return QueryPoolRequest.decode(message.value);
  },
  toProto(message: QueryPoolRequest): Uint8Array {
    return QueryPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolRequest): QueryPoolRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryPoolRequest",
      value: QueryPoolRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: Pool.fromPartial({})
  };
}
export const QueryPoolResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryPoolResponse",
  aminoType: "cosmos-sdk/QueryPoolResponse",
  is(o: any): o is QueryPoolResponse {
    return o && (o.$typeUrl === QueryPoolResponse.typeUrl || Pool.is(o.pool));
  },
  isSDK(o: any): o is QueryPoolResponseSDKType {
    return o && (o.$typeUrl === QueryPoolResponse.typeUrl || Pool.isSDK(o.pool));
  },
  isAmino(o: any): o is QueryPoolResponseAmino {
    return o && (o.$typeUrl === QueryPoolResponse.typeUrl || Pool.isAmino(o.pool));
  },
  encode(message: QueryPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolResponse {
    const obj = createBaseQueryPoolResponse();
    if (isSet(object.pool)) obj.pool = Pool.fromJSON(object.pool);
    return obj;
  },
  toJSON(message: QueryPoolResponse): JsonSafe<QueryPoolResponse> {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPoolResponse>): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromPartial(object.pool);
    }
    return message;
  },
  fromSDK(object: QueryPoolResponseSDKType): QueryPoolResponse {
    return {
      pool: object.pool ? Pool.fromSDK(object.pool) : undefined
    };
  },
  toSDK(message: QueryPoolResponse): QueryPoolResponseSDKType {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toSDK(message.pool) : undefined);
    return obj;
  },
  fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromAmino(object.pool);
    }
    return message;
  },
  toAmino(message: QueryPoolResponse): QueryPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool) : Pool.toAmino(Pool.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryPoolResponseAminoMsg): QueryPoolResponse {
    return QueryPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPoolResponse): QueryPoolResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryPoolResponse",
      value: QueryPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPoolResponseProtoMsg): QueryPoolResponse {
    return QueryPoolResponse.decode(message.value);
  },
  toProto(message: QueryPoolResponse): Uint8Array {
    return QueryPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryPoolResponse",
      value: QueryPoolResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Pool.registerTypeUrl();
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryParamsRequest",
  aminoType: "cosmos-sdk/QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },
  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryParamsResponse",
  aminoType: "cosmos-sdk/QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Params.registerTypeUrl();
  }
};