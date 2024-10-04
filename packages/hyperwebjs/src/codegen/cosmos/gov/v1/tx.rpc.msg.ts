import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, VoteOptionSDKType, WeightedVoteOption, WeightedVoteOptionSDKType, Params, ParamsSDKType } from "./gov";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { CommunityPoolSpendProposal, CommunityPoolSpendProposalSDKType, CommunityPoolSpendProposalWithDeposit, CommunityPoolSpendProposalWithDepositSDKType } from "../../distribution/v1beta1/distribution";
import { TextProposal, TextProposalSDKType } from "../v1beta1/gov";
import { ParameterChangeProposal, ParameterChangeProposalSDKType } from "../../params/v1beta1/params";
import { SoftwareUpgradeProposal, SoftwareUpgradeProposalSDKType, CancelSoftwareUpgradeProposal, CancelSoftwareUpgradeProposalSDKType } from "../../upgrade/v1beta1/upgrade";
import { StoreCodeProposal, StoreCodeProposalSDKType, InstantiateContractProposal, InstantiateContractProposalSDKType, InstantiateContract2Proposal, InstantiateContract2ProposalSDKType, MigrateContractProposal, MigrateContractProposalSDKType, SudoContractProposal, SudoContractProposalSDKType, ExecuteContractProposal, ExecuteContractProposalSDKType, UpdateAdminProposal, UpdateAdminProposalSDKType, ClearAdminProposal, ClearAdminProposalSDKType, PinCodesProposal, PinCodesProposalSDKType, UnpinCodesProposal, UnpinCodesProposalSDKType, UpdateInstantiateConfigProposal, UpdateInstantiateConfigProposalSDKType, StoreAndInstantiateContractProposal, StoreAndInstantiateContractProposalSDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { ClientUpdateProposal, ClientUpdateProposalSDKType, UpgradeProposal, UpgradeProposalSDKType } from "../../../ibc/core/client/v1/client";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSubmitProposal, MsgSubmitProposalSDKType, MsgSubmitProposalResponse, MsgSubmitProposalResponseSDKType, MsgExecLegacyContent, MsgExecLegacyContentSDKType, MsgExecLegacyContentResponse, MsgExecLegacyContentResponseSDKType, MsgVote, MsgVoteSDKType, MsgVoteResponse, MsgVoteResponseSDKType, MsgVoteWeighted, MsgVoteWeightedSDKType, MsgVoteWeightedResponse, MsgVoteWeightedResponseSDKType, MsgDeposit, MsgDepositSDKType, MsgDepositResponse, MsgDepositResponseSDKType, MsgUpdateParams, MsgUpdateParamsSDKType, MsgUpdateParamsResponse, MsgUpdateParamsResponseSDKType, MsgCancelProposal, MsgCancelProposalSDKType, MsgCancelProposalResponse, MsgCancelProposalResponseSDKType } from "./tx";
/** Msg defines the gov Msg service. */
export interface Msg {
  /** SubmitProposal defines a method to create new proposal given the messages. */
  submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
  /**
   * ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
   * to execute a legacy content-based proposal.
   */
  execLegacyContent(request: MsgExecLegacyContent): Promise<MsgExecLegacyContentResponse>;
  /** Vote defines a method to add a vote on a specific proposal. */
  vote(request: MsgVote): Promise<MsgVoteResponse>;
  /** VoteWeighted defines a method to add a weighted vote on a specific proposal. */
  voteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse>;
  /** Deposit defines a method to add deposit on a specific proposal. */
  deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/gov module
   * parameters. The authority is defined in the keeper.
   * 
   * Since: cosmos-sdk 0.47
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * CancelProposal defines a method to cancel governance proposal
   * 
   * Since: cosmos-sdk 0.50
   */
  cancelProposal(request: MsgCancelProposal): Promise<MsgCancelProposalResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* SubmitProposal defines a method to create new proposal given the messages. */
  submitProposal = async (request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse> => {
    const data = MsgSubmitProposal.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "SubmitProposal", data);
    return promise.then(data => MsgSubmitProposalResponse.decode(new BinaryReader(data)));
  };
  /* ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
   to execute a legacy content-based proposal. */
  execLegacyContent = async (request: MsgExecLegacyContent): Promise<MsgExecLegacyContentResponse> => {
    const data = MsgExecLegacyContent.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "ExecLegacyContent", data);
    return promise.then(data => MsgExecLegacyContentResponse.decode(new BinaryReader(data)));
  };
  /* Vote defines a method to add a vote on a specific proposal. */
  vote = async (request: MsgVote): Promise<MsgVoteResponse> => {
    const data = MsgVote.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "Vote", data);
    return promise.then(data => MsgVoteResponse.decode(new BinaryReader(data)));
  };
  /* VoteWeighted defines a method to add a weighted vote on a specific proposal. */
  voteWeighted = async (request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse> => {
    const data = MsgVoteWeighted.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "VoteWeighted", data);
    return promise.then(data => MsgVoteWeightedResponse.decode(new BinaryReader(data)));
  };
  /* Deposit defines a method to add deposit on a specific proposal. */
  deposit = async (request: MsgDeposit): Promise<MsgDepositResponse> => {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new BinaryReader(data)));
  };
  /* UpdateParams defines a governance operation for updating the x/gov module
   parameters. The authority is defined in the keeper.
  
   Since: cosmos-sdk 0.47 */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* CancelProposal defines a method to cancel governance proposal
  
   Since: cosmos-sdk 0.50 */
  cancelProposal = async (request: MsgCancelProposal): Promise<MsgCancelProposalResponse> => {
    const data = MsgCancelProposal.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "CancelProposal", data);
    return promise.then(data => MsgCancelProposalResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};