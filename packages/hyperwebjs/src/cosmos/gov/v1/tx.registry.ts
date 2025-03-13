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
import { TelescopeGeneratedType } from "../../../types";
import { MsgSubmitProposal, MsgSubmitProposalSDKType, MsgExecLegacyContent, MsgExecLegacyContentSDKType, MsgVote, MsgVoteSDKType, MsgVoteWeighted, MsgVoteWeightedSDKType, MsgDeposit, MsgDepositSDKType, MsgUpdateParams, MsgUpdateParamsSDKType, MsgCancelProposal, MsgCancelProposalSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/cosmos.gov.v1.MsgSubmitProposal", MsgSubmitProposal], ["/cosmos.gov.v1.MsgExecLegacyContent", MsgExecLegacyContent], ["/cosmos.gov.v1.MsgVote", MsgVote], ["/cosmos.gov.v1.MsgVoteWeighted", MsgVoteWeighted], ["/cosmos.gov.v1.MsgDeposit", MsgDeposit], ["/cosmos.gov.v1.MsgUpdateParams", MsgUpdateParams], ["/cosmos.gov.v1.MsgCancelProposal", MsgCancelProposal]];
export const MessageComposer = {
  encoded: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
        value: MsgSubmitProposal.encode(value).finish()
      };
    },
    execLegacyContent(value: MsgExecLegacyContent) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
        value: MsgExecLegacyContent.encode(value).finish()
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgVote",
        value: MsgVote.encode(value).finish()
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
        value: MsgVoteWeighted.encode(value).finish()
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgDeposit",
        value: MsgDeposit.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    cancelProposal(value: MsgCancelProposal) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgCancelProposal",
        value: MsgCancelProposal.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
        value
      };
    },
    execLegacyContent(value: MsgExecLegacyContent) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
        value
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgVote",
        value
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
        value
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgDeposit",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
        value
      };
    },
    cancelProposal(value: MsgCancelProposal) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgCancelProposal",
        value
      };
    }
  },
  toJSON: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
        value: MsgSubmitProposal.toJSON(value)
      };
    },
    execLegacyContent(value: MsgExecLegacyContent) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
        value: MsgExecLegacyContent.toJSON(value)
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgVote",
        value: MsgVote.toJSON(value)
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
        value: MsgVoteWeighted.toJSON(value)
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgDeposit",
        value: MsgDeposit.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    cancelProposal(value: MsgCancelProposal) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgCancelProposal",
        value: MsgCancelProposal.toJSON(value)
      };
    }
  },
  fromJSON: {
    submitProposal(value: any) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromJSON(value)
      };
    },
    execLegacyContent(value: any) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
        value: MsgExecLegacyContent.fromJSON(value)
      };
    },
    vote(value: any) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgVote",
        value: MsgVote.fromJSON(value)
      };
    },
    voteWeighted(value: any) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
        value: MsgVoteWeighted.fromJSON(value)
      };
    },
    deposit(value: any) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgDeposit",
        value: MsgDeposit.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    cancelProposal(value: any) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgCancelProposal",
        value: MsgCancelProposal.fromJSON(value)
      };
    }
  },
  fromPartial: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromPartial(value)
      };
    },
    execLegacyContent(value: MsgExecLegacyContent) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
        value: MsgExecLegacyContent.fromPartial(value)
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgVote",
        value: MsgVote.fromPartial(value)
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
        value: MsgVoteWeighted.fromPartial(value)
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgDeposit",
        value: MsgDeposit.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    cancelProposal(value: MsgCancelProposal) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgCancelProposal",
        value: MsgCancelProposal.fromPartial(value)
      };
    }
  }
};