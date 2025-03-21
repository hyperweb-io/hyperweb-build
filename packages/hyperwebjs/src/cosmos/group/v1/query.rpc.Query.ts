import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { GroupInfo, GroupInfoSDKType, GroupPolicyInfo, GroupPolicyInfoSDKType, GroupMember, GroupMemberSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, TallyResult, TallyResultSDKType } from "./types";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryGroupInfoRequest, QueryGroupInfoRequestSDKType, QueryGroupInfoResponse, QueryGroupInfoResponseSDKType, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoRequestSDKType, QueryGroupPolicyInfoResponse, QueryGroupPolicyInfoResponseSDKType, QueryGroupMembersRequest, QueryGroupMembersRequestSDKType, QueryGroupMembersResponse, QueryGroupMembersResponseSDKType, QueryGroupsByAdminRequest, QueryGroupsByAdminRequestSDKType, QueryGroupsByAdminResponse, QueryGroupsByAdminResponseSDKType, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupRequestSDKType, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByGroupResponseSDKType, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminRequestSDKType, QueryGroupPoliciesByAdminResponse, QueryGroupPoliciesByAdminResponseSDKType, QueryProposalRequest, QueryProposalRequestSDKType, QueryProposalResponse, QueryProposalResponseSDKType, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyRequestSDKType, QueryProposalsByGroupPolicyResponse, QueryProposalsByGroupPolicyResponseSDKType, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterRequestSDKType, QueryVoteByProposalVoterResponse, QueryVoteByProposalVoterResponseSDKType, QueryVotesByProposalRequest, QueryVotesByProposalRequestSDKType, QueryVotesByProposalResponse, QueryVotesByProposalResponseSDKType, QueryVotesByVoterRequest, QueryVotesByVoterRequestSDKType, QueryVotesByVoterResponse, QueryVotesByVoterResponseSDKType, QueryGroupsByMemberRequest, QueryGroupsByMemberRequestSDKType, QueryGroupsByMemberResponse, QueryGroupsByMemberResponseSDKType, QueryTallyResultRequest, QueryTallyResultRequestSDKType, QueryTallyResultResponse, QueryTallyResultResponseSDKType, QueryGroupsRequest, QueryGroupsRequestSDKType, QueryGroupsResponse, QueryGroupsResponseSDKType } from "./query";
/** Query is the cosmos.group.v1 Query service. */
export interface Query {
  /** GroupInfo queries group info based on group id. */
  groupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse>;
  /** GroupPolicyInfo queries group policy info based on account address of group policy. */
  groupPolicyInfo(request: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponse>;
  /** GroupMembers queries members of a group by group id. */
  groupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse>;
  /** GroupsByAdmin queries groups by admin address. */
  groupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse>;
  /** GroupPoliciesByGroup queries group policies by group id. */
  groupPoliciesByGroup(request: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponse>;
  /** GroupPoliciesByAdmin queries group policies by admin address. */
  groupPoliciesByAdmin(request: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponse>;
  /** Proposal queries a proposal based on proposal id. */
  proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
  /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */
  proposalsByGroupPolicy(request: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponse>;
  /** VoteByProposalVoter queries a vote by proposal id and voter. */
  voteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse>;
  /** VotesByProposal queries a vote by proposal id. */
  votesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse>;
  /** VotesByVoter queries a vote by voter. */
  votesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse>;
  /** GroupsByMember queries groups by member address. */
  groupsByMember(request: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponse>;
  /**
   * TallyResult returns the tally result of a proposal. If the proposal is
   * still in voting period, then this query computes the current tally state,
   * which might not be final. On the other hand, if the proposal is final,
   * then it simply returns the `final_tally_result` state stored in the
   * proposal itself.
   */
  tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
  /**
   * Groups queries all groups in state.
   * 
   * Since: cosmos-sdk 0.47.1
   */
  groups(request?: QueryGroupsRequest): Promise<QueryGroupsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* GroupInfo queries group info based on group id. */
  groupInfo = async (request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse> => {
    const data = QueryGroupInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupInfo", data);
    return promise.then(data => QueryGroupInfoResponse.decode(new BinaryReader(data)));
  };
  /* GroupPolicyInfo queries group policy info based on account address of group policy. */
  groupPolicyInfo = async (request: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponse> => {
    const data = QueryGroupPolicyInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPolicyInfo", data);
    return promise.then(data => QueryGroupPolicyInfoResponse.decode(new BinaryReader(data)));
  };
  /* GroupMembers queries members of a group by group id. */
  groupMembers = async (request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse> => {
    const data = QueryGroupMembersRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupMembers", data);
    return promise.then(data => QueryGroupMembersResponse.decode(new BinaryReader(data)));
  };
  /* GroupsByAdmin queries groups by admin address. */
  groupsByAdmin = async (request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse> => {
    const data = QueryGroupsByAdminRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByAdmin", data);
    return promise.then(data => QueryGroupsByAdminResponse.decode(new BinaryReader(data)));
  };
  /* GroupPoliciesByGroup queries group policies by group id. */
  groupPoliciesByGroup = async (request: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponse> => {
    const data = QueryGroupPoliciesByGroupRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByGroup", data);
    return promise.then(data => QueryGroupPoliciesByGroupResponse.decode(new BinaryReader(data)));
  };
  /* GroupPoliciesByAdmin queries group policies by admin address. */
  groupPoliciesByAdmin = async (request: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponse> => {
    const data = QueryGroupPoliciesByAdminRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByAdmin", data);
    return promise.then(data => QueryGroupPoliciesByAdminResponse.decode(new BinaryReader(data)));
  };
  /* Proposal queries a proposal based on proposal id. */
  proposal = async (request: QueryProposalRequest): Promise<QueryProposalResponse> => {
    const data = QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "Proposal", data);
    return promise.then(data => QueryProposalResponse.decode(new BinaryReader(data)));
  };
  /* ProposalsByGroupPolicy queries proposals based on account address of group policy. */
  proposalsByGroupPolicy = async (request: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponse> => {
    const data = QueryProposalsByGroupPolicyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "ProposalsByGroupPolicy", data);
    return promise.then(data => QueryProposalsByGroupPolicyResponse.decode(new BinaryReader(data)));
  };
  /* VoteByProposalVoter queries a vote by proposal id and voter. */
  voteByProposalVoter = async (request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse> => {
    const data = QueryVoteByProposalVoterRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "VoteByProposalVoter", data);
    return promise.then(data => QueryVoteByProposalVoterResponse.decode(new BinaryReader(data)));
  };
  /* VotesByProposal queries a vote by proposal id. */
  votesByProposal = async (request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse> => {
    const data = QueryVotesByProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "VotesByProposal", data);
    return promise.then(data => QueryVotesByProposalResponse.decode(new BinaryReader(data)));
  };
  /* VotesByVoter queries a vote by voter. */
  votesByVoter = async (request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse> => {
    const data = QueryVotesByVoterRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "VotesByVoter", data);
    return promise.then(data => QueryVotesByVoterResponse.decode(new BinaryReader(data)));
  };
  /* GroupsByMember queries groups by member address. */
  groupsByMember = async (request: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponse> => {
    const data = QueryGroupsByMemberRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByMember", data);
    return promise.then(data => QueryGroupsByMemberResponse.decode(new BinaryReader(data)));
  };
  /* TallyResult returns the tally result of a proposal. If the proposal is
   still in voting period, then this query computes the current tally state,
   which might not be final. On the other hand, if the proposal is final,
   then it simply returns the `final_tally_result` state stored in the
   proposal itself. */
  tallyResult = async (request: QueryTallyResultRequest): Promise<QueryTallyResultResponse> => {
    const data = QueryTallyResultRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "TallyResult", data);
    return promise.then(data => QueryTallyResultResponse.decode(new BinaryReader(data)));
  };
  /* Groups queries all groups in state.
  
   Since: cosmos-sdk 0.47.1 */
  groups = async (request: QueryGroupsRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryGroupsResponse> => {
    const data = QueryGroupsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "Groups", data);
    return promise.then(data => QueryGroupsResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new QueryClientImpl(rpc);
};