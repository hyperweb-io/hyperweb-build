import { ProposalStatus, ProposalStatusSDKType, Proposal, ProposalAmino, ProposalSDKType, Vote, VoteAmino, VoteSDKType, VotingParams, VotingParamsAmino, VotingParamsSDKType, DepositParams, DepositParamsAmino, DepositParamsSDKType, TallyParams, TallyParamsAmino, TallyParamsSDKType, Params, ParamsAmino, ParamsSDKType, Deposit, DepositAmino, DepositSDKType, TallyResult, TallyResultAmino, TallyResultSDKType, proposalStatusFromJSON, proposalStatusToJSON } from "./gov";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.gov.v1";
/** QueryConstitutionRequest is the request type for the Query/Constitution RPC method */
export interface QueryConstitutionRequest {}
export interface QueryConstitutionRequestProtoMsg {
  typeUrl: "/cosmos.gov.v1.QueryConstitutionRequest";
  value: Uint8Array;
}
/** QueryConstitutionRequest is the request type for the Query/Constitution RPC method */
export interface QueryConstitutionRequestAmino {}
export interface QueryConstitutionRequestAminoMsg {
  type: "cosmos-sdk/v1/QueryConstitutionRequest";
  value: QueryConstitutionRequestAmino;
}
/** QueryConstitutionRequest is the request type for the Query/Constitution RPC method */
export interface QueryConstitutionRequestSDKType {}
/** QueryConstitutionResponse is the response type for the Query/Constitution RPC method */
export interface QueryConstitutionResponse {
  constitution: string;
}
export interface QueryConstitutionResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1.QueryConstitutionResponse";
  value: Uint8Array;
}
/** QueryConstitutionResponse is the response type for the Query/Constitution RPC method */
export interface QueryConstitutionResponseAmino {
  constitution: string;
}
export interface QueryConstitutionResponseAminoMsg {
  type: "cosmos-sdk/v1/QueryConstitutionResponse";
  value: QueryConstitutionResponseAmino;
}
/** QueryConstitutionResponse is the response type for the Query/Constitution RPC method */
export interface QueryConstitutionResponseSDKType {
  constitution: string;
}
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
}
export interface QueryProposalRequestProtoMsg {
  typeUrl: "/cosmos.gov.v1.QueryProposalRequest";
  value: Uint8Array;
}
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequestAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
}
export interface QueryProposalRequestAminoMsg {
  type: "cosmos-sdk/v1/QueryProposalRequest";
  value: QueryProposalRequestAmino;
}
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequestSDKType {
  proposal_id: bigint;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponse {
  /** proposal is the requested governance proposal. */
  proposal?: Proposal;
}
export interface QueryProposalResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1.QueryProposalResponse";
  value: Uint8Array;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponseAmino {
  /** proposal is the requested governance proposal. */
  proposal?: ProposalAmino;
}
export interface QueryProposalResponseAminoMsg {
  type: "cosmos-sdk/v1/QueryProposalResponse";
  value: QueryProposalResponseAmino;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponseSDKType {
  proposal?: ProposalSDKType;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequest {
  /** proposal_status defines the status of the proposals. */
  proposalStatus: ProposalStatus;
  /** voter defines the voter address for the proposals. */
  voter: string;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryProposalsRequestProtoMsg {
  typeUrl: "/cosmos.gov.v1.QueryProposalsRequest";
  value: Uint8Array;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequestAmino {
  /** proposal_status defines the status of the proposals. */
  proposal_status: ProposalStatus;
  /** voter defines the voter address for the proposals. */
  voter: string;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryProposalsRequestAminoMsg {
  type: "cosmos-sdk/v1/QueryProposalsRequest";
  value: QueryProposalsRequestAmino;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequestSDKType {
  proposal_status: ProposalStatus;
  voter: string;
  depositor: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponse {
  /** proposals defines all the requested governance proposals. */
  proposals: Proposal[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryProposalsResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1.QueryProposalsResponse";
  value: Uint8Array;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponseAmino {
  /** proposals defines all the requested governance proposals. */
  proposals: ProposalAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryProposalsResponseAminoMsg {
  type: "cosmos-sdk/v1/QueryProposalsResponse";
  value: QueryProposalsResponseAmino;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponseSDKType {
  proposals: ProposalSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** voter defines the voter address for the proposals. */
  voter: string;
}
export interface QueryVoteRequestProtoMsg {
  typeUrl: "/cosmos.gov.v1.QueryVoteRequest";
  value: Uint8Array;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequestAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
  /** voter defines the voter address for the proposals. */
  voter: string;
}
export interface QueryVoteRequestAminoMsg {
  type: "cosmos-sdk/v1/QueryVoteRequest";
  value: QueryVoteRequestAmino;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequestSDKType {
  proposal_id: bigint;
  voter: string;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponse {
  /** vote defines the queried vote. */
  vote?: Vote;
}
export interface QueryVoteResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1.QueryVoteResponse";
  value: Uint8Array;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponseAmino {
  /** vote defines the queried vote. */
  vote?: VoteAmino;
}
export interface QueryVoteResponseAminoMsg {
  type: "cosmos-sdk/v1/QueryVoteResponse";
  value: QueryVoteResponseAmino;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponseSDKType {
  vote?: VoteSDKType;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryVotesRequestProtoMsg {
  typeUrl: "/cosmos.gov.v1.QueryVotesRequest";
  value: Uint8Array;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequestAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryVotesRequestAminoMsg {
  type: "cosmos-sdk/v1/QueryVotesRequest";
  value: QueryVotesRequestAmino;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequestSDKType {
  proposal_id: bigint;
  pagination?: PageRequestSDKType;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponse {
  /** votes defines the queried votes. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryVotesResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1.QueryVotesResponse";
  value: Uint8Array;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponseAmino {
  /** votes defines the queried votes. */
  votes: VoteAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryVotesResponseAminoMsg {
  type: "cosmos-sdk/v1/QueryVotesResponse";
  value: QueryVotesResponseAmino;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponseSDKType {
  votes: VoteSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
  /**
   * params_type defines which parameters to query for, can be one of "voting",
   * "tallying" or "deposit".
   */
  paramsType: string;
}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.gov.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
  /**
   * params_type defines which parameters to query for, can be one of "voting",
   * "tallying" or "deposit".
   */
  params_type: string;
}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/v1/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
  params_type: string;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /**
   * Deprecated: Prefer to use `params` instead.
   * voting_params defines the parameters related to voting.
   */
  /** @deprecated */
  votingParams?: VotingParams;
  /**
   * Deprecated: Prefer to use `params` instead.
   * deposit_params defines the parameters related to deposit.
   */
  /** @deprecated */
  depositParams?: DepositParams;
  /**
   * Deprecated: Prefer to use `params` instead.
   * tally_params defines the parameters related to tally.
   */
  /** @deprecated */
  tallyParams?: TallyParams;
  /**
   * params defines all the paramaters of x/gov module.
   * 
   * Since: cosmos-sdk 0.47
   */
  params?: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /**
   * Deprecated: Prefer to use `params` instead.
   * voting_params defines the parameters related to voting.
   */
  /** @deprecated */
  voting_params?: VotingParamsAmino;
  /**
   * Deprecated: Prefer to use `params` instead.
   * deposit_params defines the parameters related to deposit.
   */
  /** @deprecated */
  deposit_params?: DepositParamsAmino;
  /**
   * Deprecated: Prefer to use `params` instead.
   * tally_params defines the parameters related to tally.
   */
  /** @deprecated */
  tally_params?: TallyParamsAmino;
  /**
   * params defines all the paramaters of x/gov module.
   * 
   * Since: cosmos-sdk 0.47
   */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/v1/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  /** @deprecated */
  voting_params?: VotingParamsSDKType;
  /** @deprecated */
  deposit_params?: DepositParamsSDKType;
  /** @deprecated */
  tally_params?: TallyParamsSDKType;
  params?: ParamsSDKType;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
}
export interface QueryDepositRequestProtoMsg {
  typeUrl: "/cosmos.gov.v1.QueryDepositRequest";
  value: Uint8Array;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequestAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
}
export interface QueryDepositRequestAminoMsg {
  type: "cosmos-sdk/v1/QueryDepositRequest";
  value: QueryDepositRequestAmino;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequestSDKType {
  proposal_id: bigint;
  depositor: string;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponse {
  /** deposit defines the requested deposit. */
  deposit?: Deposit;
}
export interface QueryDepositResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1.QueryDepositResponse";
  value: Uint8Array;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponseAmino {
  /** deposit defines the requested deposit. */
  deposit?: DepositAmino;
}
export interface QueryDepositResponseAminoMsg {
  type: "cosmos-sdk/v1/QueryDepositResponse";
  value: QueryDepositResponseAmino;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponseSDKType {
  deposit?: DepositSDKType;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryDepositsRequestProtoMsg {
  typeUrl: "/cosmos.gov.v1.QueryDepositsRequest";
  value: Uint8Array;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDepositsRequestAminoMsg {
  type: "cosmos-sdk/v1/QueryDepositsRequest";
  value: QueryDepositsRequestAmino;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestSDKType {
  proposal_id: bigint;
  pagination?: PageRequestSDKType;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
  /** deposits defines the requested deposits. */
  deposits: Deposit[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryDepositsResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1.QueryDepositsResponse";
  value: Uint8Array;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseAmino {
  /** deposits defines the requested deposits. */
  deposits: DepositAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDepositsResponseAminoMsg {
  type: "cosmos-sdk/v1/QueryDepositsResponse";
  value: QueryDepositsResponseAmino;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseSDKType {
  deposits: DepositSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
}
export interface QueryTallyResultRequestProtoMsg {
  typeUrl: "/cosmos.gov.v1.QueryTallyResultRequest";
  value: Uint8Array;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequestAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
}
export interface QueryTallyResultRequestAminoMsg {
  type: "cosmos-sdk/v1/QueryTallyResultRequest";
  value: QueryTallyResultRequestAmino;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequestSDKType {
  proposal_id: bigint;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponse {
  /** tally defines the requested tally. */
  tally?: TallyResult;
}
export interface QueryTallyResultResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1.QueryTallyResultResponse";
  value: Uint8Array;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponseAmino {
  /** tally defines the requested tally. */
  tally?: TallyResultAmino;
}
export interface QueryTallyResultResponseAminoMsg {
  type: "cosmos-sdk/v1/QueryTallyResultResponse";
  value: QueryTallyResultResponseAmino;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponseSDKType {
  tally?: TallyResultSDKType;
}
function createBaseQueryConstitutionRequest(): QueryConstitutionRequest {
  return {};
}
export const QueryConstitutionRequest = {
  typeUrl: "/cosmos.gov.v1.QueryConstitutionRequest",
  aminoType: "cosmos-sdk/v1/QueryConstitutionRequest",
  is(o: any): o is QueryConstitutionRequest {
    return o && o.$typeUrl === QueryConstitutionRequest.typeUrl;
  },
  isSDK(o: any): o is QueryConstitutionRequestSDKType {
    return o && o.$typeUrl === QueryConstitutionRequest.typeUrl;
  },
  isAmino(o: any): o is QueryConstitutionRequestAmino {
    return o && o.$typeUrl === QueryConstitutionRequest.typeUrl;
  },
  encode(_: QueryConstitutionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConstitutionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConstitutionRequest();
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
  fromJSON(_: any): QueryConstitutionRequest {
    const obj = createBaseQueryConstitutionRequest();
    return obj;
  },
  toJSON(_: QueryConstitutionRequest): JsonSafe<QueryConstitutionRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryConstitutionRequest>): QueryConstitutionRequest {
    const message = createBaseQueryConstitutionRequest();
    return message;
  },
  fromSDK(_: QueryConstitutionRequestSDKType): QueryConstitutionRequest {
    return {};
  },
  toSDK(_: QueryConstitutionRequest): QueryConstitutionRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryConstitutionRequestAmino): QueryConstitutionRequest {
    const message = createBaseQueryConstitutionRequest();
    return message;
  },
  toAmino(_: QueryConstitutionRequest): QueryConstitutionRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryConstitutionRequestAminoMsg): QueryConstitutionRequest {
    return QueryConstitutionRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConstitutionRequest): QueryConstitutionRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryConstitutionRequest",
      value: QueryConstitutionRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConstitutionRequestProtoMsg): QueryConstitutionRequest {
    return QueryConstitutionRequest.decode(message.value);
  },
  toProto(message: QueryConstitutionRequest): Uint8Array {
    return QueryConstitutionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConstitutionRequest): QueryConstitutionRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryConstitutionRequest",
      value: QueryConstitutionRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryConstitutionResponse(): QueryConstitutionResponse {
  return {
    constitution: ""
  };
}
export const QueryConstitutionResponse = {
  typeUrl: "/cosmos.gov.v1.QueryConstitutionResponse",
  aminoType: "cosmos-sdk/v1/QueryConstitutionResponse",
  is(o: any): o is QueryConstitutionResponse {
    return o && (o.$typeUrl === QueryConstitutionResponse.typeUrl || typeof o.constitution === "string");
  },
  isSDK(o: any): o is QueryConstitutionResponseSDKType {
    return o && (o.$typeUrl === QueryConstitutionResponse.typeUrl || typeof o.constitution === "string");
  },
  isAmino(o: any): o is QueryConstitutionResponseAmino {
    return o && (o.$typeUrl === QueryConstitutionResponse.typeUrl || typeof o.constitution === "string");
  },
  encode(message: QueryConstitutionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.constitution !== undefined) {
      writer.uint32(10).string(message.constitution);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConstitutionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConstitutionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.constitution = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConstitutionResponse {
    const obj = createBaseQueryConstitutionResponse();
    if (isSet(object.constitution)) obj.constitution = String(object.constitution);
    return obj;
  },
  toJSON(message: QueryConstitutionResponse): JsonSafe<QueryConstitutionResponse> {
    const obj: any = {};
    message.constitution !== undefined && (obj.constitution = message.constitution);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryConstitutionResponse>): QueryConstitutionResponse {
    const message = createBaseQueryConstitutionResponse();
    message.constitution = object.constitution ?? "";
    return message;
  },
  fromSDK(object: QueryConstitutionResponseSDKType): QueryConstitutionResponse {
    return {
      constitution: object?.constitution
    };
  },
  toSDK(message: QueryConstitutionResponse): QueryConstitutionResponseSDKType {
    const obj: any = {};
    obj.constitution = message.constitution;
    return obj;
  },
  fromAmino(object: QueryConstitutionResponseAmino): QueryConstitutionResponse {
    const message = createBaseQueryConstitutionResponse();
    if (object.constitution !== undefined && object.constitution !== null) {
      message.constitution = object.constitution;
    }
    return message;
  },
  toAmino(message: QueryConstitutionResponse): QueryConstitutionResponseAmino {
    const obj: any = {};
    obj.constitution = message.constitution === "" ? undefined : message.constitution;
    return obj;
  },
  fromAminoMsg(object: QueryConstitutionResponseAminoMsg): QueryConstitutionResponse {
    return QueryConstitutionResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConstitutionResponse): QueryConstitutionResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryConstitutionResponse",
      value: QueryConstitutionResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConstitutionResponseProtoMsg): QueryConstitutionResponse {
    return QueryConstitutionResponse.decode(message.value);
  },
  toProto(message: QueryConstitutionResponse): Uint8Array {
    return QueryConstitutionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConstitutionResponse): QueryConstitutionResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryConstitutionResponse",
      value: QueryConstitutionResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryProposalRequest(): QueryProposalRequest {
  return {
    proposalId: BigInt(0)
  };
}
export const QueryProposalRequest = {
  typeUrl: "/cosmos.gov.v1.QueryProposalRequest",
  aminoType: "cosmos-sdk/v1/QueryProposalRequest",
  is(o: any): o is QueryProposalRequest {
    return o && (o.$typeUrl === QueryProposalRequest.typeUrl || typeof o.proposalId === "bigint");
  },
  isSDK(o: any): o is QueryProposalRequestSDKType {
    return o && (o.$typeUrl === QueryProposalRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  isAmino(o: any): o is QueryProposalRequestAmino {
    return o && (o.$typeUrl === QueryProposalRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: QueryProposalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== undefined) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalRequest {
    const obj = createBaseQueryProposalRequest();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    return obj;
  },
  toJSON(message: QueryProposalRequest): JsonSafe<QueryProposalRequest> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProposalRequest>): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    return message;
  },
  fromSDK(object: QueryProposalRequestSDKType): QueryProposalRequest {
    return {
      proposalId: object?.proposal_id
    };
  },
  toSDK(message: QueryProposalRequest): QueryProposalRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    return obj;
  },
  fromAmino(object: QueryProposalRequestAmino): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: QueryProposalRequest): QueryProposalRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalRequestAminoMsg): QueryProposalRequest {
    return QueryProposalRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalRequest): QueryProposalRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryProposalRequest",
      value: QueryProposalRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProposalRequestProtoMsg): QueryProposalRequest {
    return QueryProposalRequest.decode(message.value);
  },
  toProto(message: QueryProposalRequest): Uint8Array {
    return QueryProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalRequest): QueryProposalRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryProposalRequest",
      value: QueryProposalRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryProposalResponse(): QueryProposalResponse {
  return {
    proposal: undefined
  };
}
export const QueryProposalResponse = {
  typeUrl: "/cosmos.gov.v1.QueryProposalResponse",
  aminoType: "cosmos-sdk/v1/QueryProposalResponse",
  is(o: any): o is QueryProposalResponse {
    return o && o.$typeUrl === QueryProposalResponse.typeUrl;
  },
  isSDK(o: any): o is QueryProposalResponseSDKType {
    return o && o.$typeUrl === QueryProposalResponse.typeUrl;
  },
  isAmino(o: any): o is QueryProposalResponseAmino {
    return o && o.$typeUrl === QueryProposalResponse.typeUrl;
  },
  encode(message: QueryProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalResponse {
    const obj = createBaseQueryProposalResponse();
    if (isSet(object.proposal)) obj.proposal = Proposal.fromJSON(object.proposal);
    return obj;
  },
  toJSON(message: QueryProposalResponse): JsonSafe<QueryProposalResponse> {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProposalResponse>): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromPartial(object.proposal);
    }
    return message;
  },
  fromSDK(object: QueryProposalResponseSDKType): QueryProposalResponse {
    return {
      proposal: object.proposal ? Proposal.fromSDK(object.proposal) : undefined
    };
  },
  toSDK(message: QueryProposalResponse): QueryProposalResponseSDKType {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toSDK(message.proposal) : undefined);
    return obj;
  },
  fromAmino(object: QueryProposalResponseAmino): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromAmino(object.proposal);
    }
    return message;
  },
  toAmino(message: QueryProposalResponse): QueryProposalResponseAmino {
    const obj: any = {};
    obj.proposal = message.proposal ? Proposal.toAmino(message.proposal) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalResponseAminoMsg): QueryProposalResponse {
    return QueryProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalResponse): QueryProposalResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryProposalResponse",
      value: QueryProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProposalResponseProtoMsg): QueryProposalResponse {
    return QueryProposalResponse.decode(message.value);
  },
  toProto(message: QueryProposalResponse): Uint8Array {
    return QueryProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalResponse): QueryProposalResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryProposalResponse",
      value: QueryProposalResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Proposal.registerTypeUrl();
  }
};
function createBaseQueryProposalsRequest(): QueryProposalsRequest {
  return {
    proposalStatus: 0,
    voter: "",
    depositor: "",
    pagination: undefined
  };
}
export const QueryProposalsRequest = {
  typeUrl: "/cosmos.gov.v1.QueryProposalsRequest",
  aminoType: "cosmos-sdk/v1/QueryProposalsRequest",
  is(o: any): o is QueryProposalsRequest {
    return o && (o.$typeUrl === QueryProposalsRequest.typeUrl || isSet(o.proposalStatus) && typeof o.voter === "string" && typeof o.depositor === "string");
  },
  isSDK(o: any): o is QueryProposalsRequestSDKType {
    return o && (o.$typeUrl === QueryProposalsRequest.typeUrl || isSet(o.proposal_status) && typeof o.voter === "string" && typeof o.depositor === "string");
  },
  isAmino(o: any): o is QueryProposalsRequestAmino {
    return o && (o.$typeUrl === QueryProposalsRequest.typeUrl || isSet(o.proposal_status) && typeof o.voter === "string" && typeof o.depositor === "string");
  },
  encode(message: QueryProposalsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalStatus !== 0) {
      writer.uint32(8).int32(message.proposalStatus);
    }
    if (message.voter !== undefined) {
      writer.uint32(18).string(message.voter);
    }
    if (message.depositor !== undefined) {
      writer.uint32(26).string(message.depositor);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalStatus = reader.int32() as any;
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.depositor = reader.string();
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
  fromJSON(object: any): QueryProposalsRequest {
    const obj = createBaseQueryProposalsRequest();
    if (isSet(object.proposalStatus)) obj.proposalStatus = proposalStatusFromJSON(object.proposalStatus);
    if (isSet(object.voter)) obj.voter = String(object.voter);
    if (isSet(object.depositor)) obj.depositor = String(object.depositor);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryProposalsRequest): JsonSafe<QueryProposalsRequest> {
    const obj: any = {};
    message.proposalStatus !== undefined && (obj.proposalStatus = proposalStatusToJSON(message.proposalStatus));
    message.voter !== undefined && (obj.voter = message.voter);
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProposalsRequest>): QueryProposalsRequest {
    const message = createBaseQueryProposalsRequest();
    message.proposalStatus = object.proposalStatus ?? 0;
    message.voter = object.voter ?? "";
    message.depositor = object.depositor ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryProposalsRequestSDKType): QueryProposalsRequest {
    return {
      proposalStatus: isSet(object.proposal_status) ? proposalStatusFromJSON(object.proposal_status) : -1,
      voter: object?.voter,
      depositor: object?.depositor,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryProposalsRequest): QueryProposalsRequestSDKType {
    const obj: any = {};
    message.proposalStatus !== undefined && (obj.proposal_status = proposalStatusToJSON(message.proposalStatus));
    obj.voter = message.voter;
    obj.depositor = message.depositor;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryProposalsRequestAmino): QueryProposalsRequest {
    const message = createBaseQueryProposalsRequest();
    if (object.proposal_status !== undefined && object.proposal_status !== null) {
      message.proposalStatus = object.proposal_status;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProposalsRequest): QueryProposalsRequestAmino {
    const obj: any = {};
    obj.proposal_status = message.proposalStatus === 0 ? undefined : message.proposalStatus;
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.depositor = message.depositor === "" ? undefined : message.depositor;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsRequestAminoMsg): QueryProposalsRequest {
    return QueryProposalsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalsRequest): QueryProposalsRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryProposalsRequest",
      value: QueryProposalsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProposalsRequestProtoMsg): QueryProposalsRequest {
    return QueryProposalsRequest.decode(message.value);
  },
  toProto(message: QueryProposalsRequest): Uint8Array {
    return QueryProposalsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsRequest): QueryProposalsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryProposalsRequest",
      value: QueryProposalsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryProposalsResponse(): QueryProposalsResponse {
  return {
    proposals: [],
    pagination: undefined
  };
}
export const QueryProposalsResponse = {
  typeUrl: "/cosmos.gov.v1.QueryProposalsResponse",
  aminoType: "cosmos-sdk/v1/QueryProposalsResponse",
  is(o: any): o is QueryProposalsResponse {
    return o && (o.$typeUrl === QueryProposalsResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || Proposal.is(o.proposals[0])));
  },
  isSDK(o: any): o is QueryProposalsResponseSDKType {
    return o && (o.$typeUrl === QueryProposalsResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || Proposal.isSDK(o.proposals[0])));
  },
  isAmino(o: any): o is QueryProposalsResponseAmino {
    return o && (o.$typeUrl === QueryProposalsResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || Proposal.isAmino(o.proposals[0])));
  },
  encode(message: QueryProposalsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryProposalsResponse {
    const obj = createBaseQueryProposalsResponse();
    if (Array.isArray(object?.proposals)) obj.proposals = object.proposals.map((e: any) => Proposal.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryProposalsResponse): JsonSafe<QueryProposalsResponse> {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toJSON(e) : undefined);
    } else {
      obj.proposals = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryProposalsResponse>): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryProposalsResponseSDKType): QueryProposalsResponse {
    return {
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryProposalsResponse): QueryProposalsResponseSDKType {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toSDK(e) : undefined);
    } else {
      obj.proposals = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryProposalsResponseAmino): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProposalsResponse): QueryProposalsResponseAmino {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
    } else {
      obj.proposals = message.proposals;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsResponseAminoMsg): QueryProposalsResponse {
    return QueryProposalsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProposalsResponse): QueryProposalsResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryProposalsResponse",
      value: QueryProposalsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProposalsResponseProtoMsg): QueryProposalsResponse {
    return QueryProposalsResponse.decode(message.value);
  },
  toProto(message: QueryProposalsResponse): Uint8Array {
    return QueryProposalsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsResponse): QueryProposalsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryProposalsResponse",
      value: QueryProposalsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Proposal.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryVoteRequest(): QueryVoteRequest {
  return {
    proposalId: BigInt(0),
    voter: ""
  };
}
export const QueryVoteRequest = {
  typeUrl: "/cosmos.gov.v1.QueryVoteRequest",
  aminoType: "cosmos-sdk/v1/QueryVoteRequest",
  is(o: any): o is QueryVoteRequest {
    return o && (o.$typeUrl === QueryVoteRequest.typeUrl || typeof o.proposalId === "bigint" && typeof o.voter === "string");
  },
  isSDK(o: any): o is QueryVoteRequestSDKType {
    return o && (o.$typeUrl === QueryVoteRequest.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string");
  },
  isAmino(o: any): o is QueryVoteRequestAmino {
    return o && (o.$typeUrl === QueryVoteRequest.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string");
  },
  encode(message: QueryVoteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== undefined) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== undefined) {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVoteRequest {
    const obj = createBaseQueryVoteRequest();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.voter)) obj.voter = String(object.voter);
    return obj;
  },
  toJSON(message: QueryVoteRequest): JsonSafe<QueryVoteRequest> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryVoteRequest>): QueryVoteRequest {
    const message = createBaseQueryVoteRequest();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.voter = object.voter ?? "";
    return message;
  },
  fromSDK(object: QueryVoteRequestSDKType): QueryVoteRequest {
    return {
      proposalId: object?.proposal_id,
      voter: object?.voter
    };
  },
  toSDK(message: QueryVoteRequest): QueryVoteRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    obj.voter = message.voter;
    return obj;
  },
  fromAmino(object: QueryVoteRequestAmino): QueryVoteRequest {
    const message = createBaseQueryVoteRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    return message;
  },
  toAmino(message: QueryVoteRequest): QueryVoteRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.voter = message.voter === "" ? undefined : message.voter;
    return obj;
  },
  fromAminoMsg(object: QueryVoteRequestAminoMsg): QueryVoteRequest {
    return QueryVoteRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVoteRequest): QueryVoteRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryVoteRequest",
      value: QueryVoteRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVoteRequestProtoMsg): QueryVoteRequest {
    return QueryVoteRequest.decode(message.value);
  },
  toProto(message: QueryVoteRequest): Uint8Array {
    return QueryVoteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteRequest): QueryVoteRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryVoteRequest",
      value: QueryVoteRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryVoteResponse(): QueryVoteResponse {
  return {
    vote: undefined
  };
}
export const QueryVoteResponse = {
  typeUrl: "/cosmos.gov.v1.QueryVoteResponse",
  aminoType: "cosmos-sdk/v1/QueryVoteResponse",
  is(o: any): o is QueryVoteResponse {
    return o && o.$typeUrl === QueryVoteResponse.typeUrl;
  },
  isSDK(o: any): o is QueryVoteResponseSDKType {
    return o && o.$typeUrl === QueryVoteResponse.typeUrl;
  },
  isAmino(o: any): o is QueryVoteResponseAmino {
    return o && o.$typeUrl === QueryVoteResponse.typeUrl;
  },
  encode(message: QueryVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVoteResponse {
    const obj = createBaseQueryVoteResponse();
    if (isSet(object.vote)) obj.vote = Vote.fromJSON(object.vote);
    return obj;
  },
  toJSON(message: QueryVoteResponse): JsonSafe<QueryVoteResponse> {
    const obj: any = {};
    message.vote !== undefined && (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryVoteResponse>): QueryVoteResponse {
    const message = createBaseQueryVoteResponse();
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromPartial(object.vote);
    }
    return message;
  },
  fromSDK(object: QueryVoteResponseSDKType): QueryVoteResponse {
    return {
      vote: object.vote ? Vote.fromSDK(object.vote) : undefined
    };
  },
  toSDK(message: QueryVoteResponse): QueryVoteResponseSDKType {
    const obj: any = {};
    message.vote !== undefined && (obj.vote = message.vote ? Vote.toSDK(message.vote) : undefined);
    return obj;
  },
  fromAmino(object: QueryVoteResponseAmino): QueryVoteResponse {
    const message = createBaseQueryVoteResponse();
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromAmino(object.vote);
    }
    return message;
  },
  toAmino(message: QueryVoteResponse): QueryVoteResponseAmino {
    const obj: any = {};
    obj.vote = message.vote ? Vote.toAmino(message.vote) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVoteResponseAminoMsg): QueryVoteResponse {
    return QueryVoteResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVoteResponse): QueryVoteResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryVoteResponse",
      value: QueryVoteResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVoteResponseProtoMsg): QueryVoteResponse {
    return QueryVoteResponse.decode(message.value);
  },
  toProto(message: QueryVoteResponse): Uint8Array {
    return QueryVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteResponse): QueryVoteResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryVoteResponse",
      value: QueryVoteResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Vote.registerTypeUrl();
  }
};
function createBaseQueryVotesRequest(): QueryVotesRequest {
  return {
    proposalId: BigInt(0),
    pagination: undefined
  };
}
export const QueryVotesRequest = {
  typeUrl: "/cosmos.gov.v1.QueryVotesRequest",
  aminoType: "cosmos-sdk/v1/QueryVotesRequest",
  is(o: any): o is QueryVotesRequest {
    return o && (o.$typeUrl === QueryVotesRequest.typeUrl || typeof o.proposalId === "bigint");
  },
  isSDK(o: any): o is QueryVotesRequestSDKType {
    return o && (o.$typeUrl === QueryVotesRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  isAmino(o: any): o is QueryVotesRequestAmino {
    return o && (o.$typeUrl === QueryVotesRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: QueryVotesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== undefined) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
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
  fromJSON(object: any): QueryVotesRequest {
    const obj = createBaseQueryVotesRequest();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryVotesRequest): JsonSafe<QueryVotesRequest> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryVotesRequest>): QueryVotesRequest {
    const message = createBaseQueryVotesRequest();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryVotesRequestSDKType): QueryVotesRequest {
    return {
      proposalId: object?.proposal_id,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryVotesRequest): QueryVotesRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryVotesRequestAmino): QueryVotesRequest {
    const message = createBaseQueryVotesRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotesRequest): QueryVotesRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesRequestAminoMsg): QueryVotesRequest {
    return QueryVotesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVotesRequest): QueryVotesRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryVotesRequest",
      value: QueryVotesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVotesRequestProtoMsg): QueryVotesRequest {
    return QueryVotesRequest.decode(message.value);
  },
  toProto(message: QueryVotesRequest): Uint8Array {
    return QueryVotesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesRequest): QueryVotesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryVotesRequest",
      value: QueryVotesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryVotesResponse(): QueryVotesResponse {
  return {
    votes: [],
    pagination: undefined
  };
}
export const QueryVotesResponse = {
  typeUrl: "/cosmos.gov.v1.QueryVotesResponse",
  aminoType: "cosmos-sdk/v1/QueryVotesResponse",
  is(o: any): o is QueryVotesResponse {
    return o && (o.$typeUrl === QueryVotesResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.is(o.votes[0])));
  },
  isSDK(o: any): o is QueryVotesResponseSDKType {
    return o && (o.$typeUrl === QueryVotesResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.isSDK(o.votes[0])));
  },
  isAmino(o: any): o is QueryVotesResponseAmino {
    return o && (o.$typeUrl === QueryVotesResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.isAmino(o.votes[0])));
  },
  encode(message: QueryVotesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryVotesResponse {
    const obj = createBaseQueryVotesResponse();
    if (Array.isArray(object?.votes)) obj.votes = object.votes.map((e: any) => Vote.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryVotesResponse): JsonSafe<QueryVotesResponse> {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryVotesResponse>): QueryVotesResponse {
    const message = createBaseQueryVotesResponse();
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryVotesResponseSDKType): QueryVotesResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryVotesResponse): QueryVotesResponseSDKType {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toSDK(e) : undefined);
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryVotesResponseAmino): QueryVotesResponse {
    const message = createBaseQueryVotesResponse();
    message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotesResponse): QueryVotesResponseAmino {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = message.votes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesResponseAminoMsg): QueryVotesResponse {
    return QueryVotesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVotesResponse): QueryVotesResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryVotesResponse",
      value: QueryVotesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVotesResponseProtoMsg): QueryVotesResponse {
    return QueryVotesResponse.decode(message.value);
  },
  toProto(message: QueryVotesResponse): Uint8Array {
    return QueryVotesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesResponse): QueryVotesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryVotesResponse",
      value: QueryVotesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Vote.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {
    paramsType: ""
  };
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.gov.v1.QueryParamsRequest",
  aminoType: "cosmos-sdk/v1/QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && (o.$typeUrl === QueryParamsRequest.typeUrl || typeof o.paramsType === "string");
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && (o.$typeUrl === QueryParamsRequest.typeUrl || typeof o.params_type === "string");
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && (o.$typeUrl === QueryParamsRequest.typeUrl || typeof o.params_type === "string");
  },
  encode(message: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.paramsType !== undefined) {
      writer.uint32(10).string(message.paramsType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paramsType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    if (isSet(object.paramsType)) obj.paramsType = String(object.paramsType);
    return obj;
  },
  toJSON(message: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    message.paramsType !== undefined && (obj.paramsType = message.paramsType);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    message.paramsType = object.paramsType ?? "";
    return message;
  },
  fromSDK(object: QueryParamsRequestSDKType): QueryParamsRequest {
    return {
      paramsType: object?.params_type
    };
  },
  toSDK(message: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    obj.params_type = message.paramsType;
    return obj;
  },
  fromAmino(object: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    if (object.params_type !== undefined && object.params_type !== null) {
      message.paramsType = object.params_type;
    }
    return message;
  },
  toAmino(message: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    obj.params_type = message.paramsType === "" ? undefined : message.paramsType;
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryParamsRequest",
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
      typeUrl: "/cosmos.gov.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    votingParams: undefined,
    depositParams: undefined,
    tallyParams: undefined,
    params: undefined
  };
}
export const QueryParamsResponse = {
  typeUrl: "/cosmos.gov.v1.QueryParamsResponse",
  aminoType: "cosmos-sdk/v1/QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.votingParams !== undefined) {
      VotingParams.encode(message.votingParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositParams !== undefined) {
      DepositParams.encode(message.depositParams, writer.uint32(18).fork()).ldelim();
    }
    if (message.tallyParams !== undefined) {
      TallyParams.encode(message.tallyParams, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
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
          message.votingParams = VotingParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.depositParams = DepositParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.tallyParams = TallyParams.decode(reader, reader.uint32());
          break;
        case 4:
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
    if (isSet(object.votingParams)) obj.votingParams = VotingParams.fromJSON(object.votingParams);
    if (isSet(object.depositParams)) obj.depositParams = DepositParams.fromJSON(object.depositParams);
    if (isSet(object.tallyParams)) obj.tallyParams = TallyParams.fromJSON(object.tallyParams);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.votingParams !== undefined && (obj.votingParams = message.votingParams ? VotingParams.toJSON(message.votingParams) : undefined);
    message.depositParams !== undefined && (obj.depositParams = message.depositParams ? DepositParams.toJSON(message.depositParams) : undefined);
    message.tallyParams !== undefined && (obj.tallyParams = message.tallyParams ? TallyParams.toJSON(message.tallyParams) : undefined);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.votingParams !== undefined && object.votingParams !== null) {
      message.votingParams = VotingParams.fromPartial(object.votingParams);
    }
    if (object.depositParams !== undefined && object.depositParams !== null) {
      message.depositParams = DepositParams.fromPartial(object.depositParams);
    }
    if (object.tallyParams !== undefined && object.tallyParams !== null) {
      message.tallyParams = TallyParams.fromPartial(object.tallyParams);
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      votingParams: object.voting_params ? VotingParams.fromSDK(object.voting_params) : undefined,
      depositParams: object.deposit_params ? DepositParams.fromSDK(object.deposit_params) : undefined,
      tallyParams: object.tally_params ? TallyParams.fromSDK(object.tally_params) : undefined,
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.votingParams !== undefined && (obj.voting_params = message.votingParams ? VotingParams.toSDK(message.votingParams) : undefined);
    message.depositParams !== undefined && (obj.deposit_params = message.depositParams ? DepositParams.toSDK(message.depositParams) : undefined);
    message.tallyParams !== undefined && (obj.tally_params = message.tallyParams ? TallyParams.toSDK(message.tallyParams) : undefined);
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.voting_params !== undefined && object.voting_params !== null) {
      message.votingParams = VotingParams.fromAmino(object.voting_params);
    }
    if (object.deposit_params !== undefined && object.deposit_params !== null) {
      message.depositParams = DepositParams.fromAmino(object.deposit_params);
    }
    if (object.tally_params !== undefined && object.tally_params !== null) {
      message.tallyParams = TallyParams.fromAmino(object.tally_params);
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.voting_params = message.votingParams ? VotingParams.toAmino(message.votingParams) : undefined;
    obj.deposit_params = message.depositParams ? DepositParams.toAmino(message.depositParams) : undefined;
    obj.tally_params = message.tallyParams ? TallyParams.toAmino(message.tallyParams) : undefined;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryParamsResponse",
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
      typeUrl: "/cosmos.gov.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    VotingParams.registerTypeUrl();
    DepositParams.registerTypeUrl();
    TallyParams.registerTypeUrl();
    Params.registerTypeUrl();
  }
};
function createBaseQueryDepositRequest(): QueryDepositRequest {
  return {
    proposalId: BigInt(0),
    depositor: ""
  };
}
export const QueryDepositRequest = {
  typeUrl: "/cosmos.gov.v1.QueryDepositRequest",
  aminoType: "cosmos-sdk/v1/QueryDepositRequest",
  is(o: any): o is QueryDepositRequest {
    return o && (o.$typeUrl === QueryDepositRequest.typeUrl || typeof o.proposalId === "bigint" && typeof o.depositor === "string");
  },
  isSDK(o: any): o is QueryDepositRequestSDKType {
    return o && (o.$typeUrl === QueryDepositRequest.typeUrl || typeof o.proposal_id === "bigint" && typeof o.depositor === "string");
  },
  isAmino(o: any): o is QueryDepositRequestAmino {
    return o && (o.$typeUrl === QueryDepositRequest.typeUrl || typeof o.proposal_id === "bigint" && typeof o.depositor === "string");
  },
  encode(message: QueryDepositRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== undefined) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== undefined) {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositRequest {
    const obj = createBaseQueryDepositRequest();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.depositor)) obj.depositor = String(object.depositor);
    return obj;
  },
  toJSON(message: QueryDepositRequest): JsonSafe<QueryDepositRequest> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDepositRequest>): QueryDepositRequest {
    const message = createBaseQueryDepositRequest();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.depositor = object.depositor ?? "";
    return message;
  },
  fromSDK(object: QueryDepositRequestSDKType): QueryDepositRequest {
    return {
      proposalId: object?.proposal_id,
      depositor: object?.depositor
    };
  },
  toSDK(message: QueryDepositRequest): QueryDepositRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    obj.depositor = message.depositor;
    return obj;
  },
  fromAmino(object: QueryDepositRequestAmino): QueryDepositRequest {
    const message = createBaseQueryDepositRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    return message;
  },
  toAmino(message: QueryDepositRequest): QueryDepositRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.depositor = message.depositor === "" ? undefined : message.depositor;
    return obj;
  },
  fromAminoMsg(object: QueryDepositRequestAminoMsg): QueryDepositRequest {
    return QueryDepositRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDepositRequest): QueryDepositRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryDepositRequest",
      value: QueryDepositRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDepositRequestProtoMsg): QueryDepositRequest {
    return QueryDepositRequest.decode(message.value);
  },
  toProto(message: QueryDepositRequest): Uint8Array {
    return QueryDepositRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositRequest): QueryDepositRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryDepositRequest",
      value: QueryDepositRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDepositResponse(): QueryDepositResponse {
  return {
    deposit: undefined
  };
}
export const QueryDepositResponse = {
  typeUrl: "/cosmos.gov.v1.QueryDepositResponse",
  aminoType: "cosmos-sdk/v1/QueryDepositResponse",
  is(o: any): o is QueryDepositResponse {
    return o && o.$typeUrl === QueryDepositResponse.typeUrl;
  },
  isSDK(o: any): o is QueryDepositResponseSDKType {
    return o && o.$typeUrl === QueryDepositResponse.typeUrl;
  },
  isAmino(o: any): o is QueryDepositResponseAmino {
    return o && o.$typeUrl === QueryDepositResponse.typeUrl;
  },
  encode(message: QueryDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deposit !== undefined) {
      Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit = Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositResponse {
    const obj = createBaseQueryDepositResponse();
    if (isSet(object.deposit)) obj.deposit = Deposit.fromJSON(object.deposit);
    return obj;
  },
  toJSON(message: QueryDepositResponse): JsonSafe<QueryDepositResponse> {
    const obj: any = {};
    message.deposit !== undefined && (obj.deposit = message.deposit ? Deposit.toJSON(message.deposit) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDepositResponse>): QueryDepositResponse {
    const message = createBaseQueryDepositResponse();
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Deposit.fromPartial(object.deposit);
    }
    return message;
  },
  fromSDK(object: QueryDepositResponseSDKType): QueryDepositResponse {
    return {
      deposit: object.deposit ? Deposit.fromSDK(object.deposit) : undefined
    };
  },
  toSDK(message: QueryDepositResponse): QueryDepositResponseSDKType {
    const obj: any = {};
    message.deposit !== undefined && (obj.deposit = message.deposit ? Deposit.toSDK(message.deposit) : undefined);
    return obj;
  },
  fromAmino(object: QueryDepositResponseAmino): QueryDepositResponse {
    const message = createBaseQueryDepositResponse();
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Deposit.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message: QueryDepositResponse): QueryDepositResponseAmino {
    const obj: any = {};
    obj.deposit = message.deposit ? Deposit.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositResponseAminoMsg): QueryDepositResponse {
    return QueryDepositResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDepositResponse): QueryDepositResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryDepositResponse",
      value: QueryDepositResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDepositResponseProtoMsg): QueryDepositResponse {
    return QueryDepositResponse.decode(message.value);
  },
  toProto(message: QueryDepositResponse): Uint8Array {
    return QueryDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositResponse): QueryDepositResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryDepositResponse",
      value: QueryDepositResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Deposit.registerTypeUrl();
  }
};
function createBaseQueryDepositsRequest(): QueryDepositsRequest {
  return {
    proposalId: BigInt(0),
    pagination: undefined
  };
}
export const QueryDepositsRequest = {
  typeUrl: "/cosmos.gov.v1.QueryDepositsRequest",
  aminoType: "cosmos-sdk/v1/QueryDepositsRequest",
  is(o: any): o is QueryDepositsRequest {
    return o && (o.$typeUrl === QueryDepositsRequest.typeUrl || typeof o.proposalId === "bigint");
  },
  isSDK(o: any): o is QueryDepositsRequestSDKType {
    return o && (o.$typeUrl === QueryDepositsRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  isAmino(o: any): o is QueryDepositsRequestAmino {
    return o && (o.$typeUrl === QueryDepositsRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: QueryDepositsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== undefined) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
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
  fromJSON(object: any): QueryDepositsRequest {
    const obj = createBaseQueryDepositsRequest();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDepositsRequest): JsonSafe<QueryDepositsRequest> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDepositsRequest>): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryDepositsRequestSDKType): QueryDepositsRequest {
    return {
      proposalId: object?.proposal_id,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDepositsRequest): QueryDepositsRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDepositsRequestAmino): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDepositsRequest): QueryDepositsRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositsRequestAminoMsg): QueryDepositsRequest {
    return QueryDepositsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDepositsRequest): QueryDepositsRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryDepositsRequest",
      value: QueryDepositsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDepositsRequestProtoMsg): QueryDepositsRequest {
    return QueryDepositsRequest.decode(message.value);
  },
  toProto(message: QueryDepositsRequest): Uint8Array {
    return QueryDepositsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositsRequest): QueryDepositsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryDepositsRequest",
      value: QueryDepositsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryDepositsResponse(): QueryDepositsResponse {
  return {
    deposits: [],
    pagination: undefined
  };
}
export const QueryDepositsResponse = {
  typeUrl: "/cosmos.gov.v1.QueryDepositsResponse",
  aminoType: "cosmos-sdk/v1/QueryDepositsResponse",
  is(o: any): o is QueryDepositsResponse {
    return o && (o.$typeUrl === QueryDepositsResponse.typeUrl || Array.isArray(o.deposits) && (!o.deposits.length || Deposit.is(o.deposits[0])));
  },
  isSDK(o: any): o is QueryDepositsResponseSDKType {
    return o && (o.$typeUrl === QueryDepositsResponse.typeUrl || Array.isArray(o.deposits) && (!o.deposits.length || Deposit.isSDK(o.deposits[0])));
  },
  isAmino(o: any): o is QueryDepositsResponseAmino {
    return o && (o.$typeUrl === QueryDepositsResponse.typeUrl || Array.isArray(o.deposits) && (!o.deposits.length || Deposit.isAmino(o.deposits[0])));
  },
  encode(message: QueryDepositsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryDepositsResponse {
    const obj = createBaseQueryDepositsResponse();
    if (Array.isArray(object?.deposits)) obj.deposits = object.deposits.map((e: any) => Deposit.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDepositsResponse): JsonSafe<QueryDepositsResponse> {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toJSON(e) : undefined);
    } else {
      obj.deposits = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDepositsResponse>): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryDepositsResponseSDKType): QueryDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDepositsResponse): QueryDepositsResponseSDKType {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toSDK(e) : undefined);
    } else {
      obj.deposits = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDepositsResponseAmino): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => Deposit.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDepositsResponse): QueryDepositsResponseAmino {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits = message.deposits;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositsResponseAminoMsg): QueryDepositsResponse {
    return QueryDepositsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDepositsResponse): QueryDepositsResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryDepositsResponse",
      value: QueryDepositsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDepositsResponseProtoMsg): QueryDepositsResponse {
    return QueryDepositsResponse.decode(message.value);
  },
  toProto(message: QueryDepositsResponse): Uint8Array {
    return QueryDepositsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositsResponse): QueryDepositsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryDepositsResponse",
      value: QueryDepositsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Deposit.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryTallyResultRequest(): QueryTallyResultRequest {
  return {
    proposalId: BigInt(0)
  };
}
export const QueryTallyResultRequest = {
  typeUrl: "/cosmos.gov.v1.QueryTallyResultRequest",
  aminoType: "cosmos-sdk/v1/QueryTallyResultRequest",
  is(o: any): o is QueryTallyResultRequest {
    return o && (o.$typeUrl === QueryTallyResultRequest.typeUrl || typeof o.proposalId === "bigint");
  },
  isSDK(o: any): o is QueryTallyResultRequestSDKType {
    return o && (o.$typeUrl === QueryTallyResultRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  isAmino(o: any): o is QueryTallyResultRequestAmino {
    return o && (o.$typeUrl === QueryTallyResultRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: QueryTallyResultRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== undefined) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTallyResultRequest {
    const obj = createBaseQueryTallyResultRequest();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    return obj;
  },
  toJSON(message: QueryTallyResultRequest): JsonSafe<QueryTallyResultRequest> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTallyResultRequest>): QueryTallyResultRequest {
    const message = createBaseQueryTallyResultRequest();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    return message;
  },
  fromSDK(object: QueryTallyResultRequestSDKType): QueryTallyResultRequest {
    return {
      proposalId: object?.proposal_id
    };
  },
  toSDK(message: QueryTallyResultRequest): QueryTallyResultRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    return obj;
  },
  fromAmino(object: QueryTallyResultRequestAmino): QueryTallyResultRequest {
    const message = createBaseQueryTallyResultRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: QueryTallyResultRequest): QueryTallyResultRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTallyResultRequestAminoMsg): QueryTallyResultRequest {
    return QueryTallyResultRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTallyResultRequest): QueryTallyResultRequestAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryTallyResultRequest",
      value: QueryTallyResultRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTallyResultRequestProtoMsg): QueryTallyResultRequest {
    return QueryTallyResultRequest.decode(message.value);
  },
  toProto(message: QueryTallyResultRequest): Uint8Array {
    return QueryTallyResultRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTallyResultRequest): QueryTallyResultRequestProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryTallyResultRequest",
      value: QueryTallyResultRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTallyResultResponse(): QueryTallyResultResponse {
  return {
    tally: undefined
  };
}
export const QueryTallyResultResponse = {
  typeUrl: "/cosmos.gov.v1.QueryTallyResultResponse",
  aminoType: "cosmos-sdk/v1/QueryTallyResultResponse",
  is(o: any): o is QueryTallyResultResponse {
    return o && o.$typeUrl === QueryTallyResultResponse.typeUrl;
  },
  isSDK(o: any): o is QueryTallyResultResponseSDKType {
    return o && o.$typeUrl === QueryTallyResultResponse.typeUrl;
  },
  isAmino(o: any): o is QueryTallyResultResponseAmino {
    return o && o.$typeUrl === QueryTallyResultResponse.typeUrl;
  },
  encode(message: QueryTallyResultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tally !== undefined) {
      TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tally = TallyResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTallyResultResponse {
    const obj = createBaseQueryTallyResultResponse();
    if (isSet(object.tally)) obj.tally = TallyResult.fromJSON(object.tally);
    return obj;
  },
  toJSON(message: QueryTallyResultResponse): JsonSafe<QueryTallyResultResponse> {
    const obj: any = {};
    message.tally !== undefined && (obj.tally = message.tally ? TallyResult.toJSON(message.tally) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTallyResultResponse>): QueryTallyResultResponse {
    const message = createBaseQueryTallyResultResponse();
    if (object.tally !== undefined && object.tally !== null) {
      message.tally = TallyResult.fromPartial(object.tally);
    }
    return message;
  },
  fromSDK(object: QueryTallyResultResponseSDKType): QueryTallyResultResponse {
    return {
      tally: object.tally ? TallyResult.fromSDK(object.tally) : undefined
    };
  },
  toSDK(message: QueryTallyResultResponse): QueryTallyResultResponseSDKType {
    const obj: any = {};
    message.tally !== undefined && (obj.tally = message.tally ? TallyResult.toSDK(message.tally) : undefined);
    return obj;
  },
  fromAmino(object: QueryTallyResultResponseAmino): QueryTallyResultResponse {
    const message = createBaseQueryTallyResultResponse();
    if (object.tally !== undefined && object.tally !== null) {
      message.tally = TallyResult.fromAmino(object.tally);
    }
    return message;
  },
  toAmino(message: QueryTallyResultResponse): QueryTallyResultResponseAmino {
    const obj: any = {};
    obj.tally = message.tally ? TallyResult.toAmino(message.tally) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTallyResultResponseAminoMsg): QueryTallyResultResponse {
    return QueryTallyResultResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTallyResultResponse): QueryTallyResultResponseAminoMsg {
    return {
      type: "cosmos-sdk/v1/QueryTallyResultResponse",
      value: QueryTallyResultResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTallyResultResponseProtoMsg): QueryTallyResultResponse {
    return QueryTallyResultResponse.decode(message.value);
  },
  toProto(message: QueryTallyResultResponse): Uint8Array {
    return QueryTallyResultResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTallyResultResponse): QueryTallyResultResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.QueryTallyResultResponse",
      value: QueryTallyResultResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    TallyResult.registerTypeUrl();
  }
};