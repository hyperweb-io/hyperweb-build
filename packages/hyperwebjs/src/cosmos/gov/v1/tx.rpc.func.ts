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
import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSubmitProposal, MsgSubmitProposalSDKType, MsgSubmitProposalResponse, MsgSubmitProposalResponseSDKType, MsgExecLegacyContent, MsgExecLegacyContentSDKType, MsgExecLegacyContentResponse, MsgExecLegacyContentResponseSDKType, MsgVote, MsgVoteSDKType, MsgVoteResponse, MsgVoteResponseSDKType, MsgVoteWeighted, MsgVoteWeightedSDKType, MsgVoteWeightedResponse, MsgVoteWeightedResponseSDKType, MsgDeposit, MsgDepositSDKType, MsgDepositResponse, MsgDepositResponseSDKType, MsgUpdateParams, MsgUpdateParamsSDKType, MsgUpdateParamsResponse, MsgUpdateParamsResponseSDKType, MsgCancelProposal, MsgCancelProposalSDKType, MsgCancelProposalResponse, MsgCancelProposalResponseSDKType } from "./tx";
export const createSubmitProposal = (clientResolver?: SigningClientResolver) => buildTx<MsgSubmitProposal>({
  clientResolver,
  typeUrl: MsgSubmitProposal.typeUrl,
  encoders: toEncoders(MsgSubmitProposal),
  converters: toConverters(MsgSubmitProposal),
  deps: [MsgSubmitProposal]
});
export const createExecLegacyContent = (clientResolver?: SigningClientResolver) => buildTx<MsgExecLegacyContent>({
  clientResolver,
  typeUrl: MsgExecLegacyContent.typeUrl,
  encoders: toEncoders(MsgExecLegacyContent),
  converters: toConverters(MsgExecLegacyContent),
  deps: [MsgExecLegacyContent]
});
export const createVote = (clientResolver?: SigningClientResolver) => buildTx<MsgVote>({
  clientResolver,
  typeUrl: MsgVote.typeUrl,
  encoders: toEncoders(MsgVote),
  converters: toConverters(MsgVote),
  deps: [MsgVote]
});
export const createVoteWeighted = (clientResolver?: SigningClientResolver) => buildTx<MsgVoteWeighted>({
  clientResolver,
  typeUrl: MsgVoteWeighted.typeUrl,
  encoders: toEncoders(MsgVoteWeighted),
  converters: toConverters(MsgVoteWeighted),
  deps: [MsgVoteWeighted]
});
export const createDeposit = (clientResolver?: SigningClientResolver) => buildTx<MsgDeposit>({
  clientResolver,
  typeUrl: MsgDeposit.typeUrl,
  encoders: toEncoders(MsgDeposit),
  converters: toConverters(MsgDeposit),
  deps: [MsgDeposit]
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams),
  deps: [MsgUpdateParams]
});
export const createCancelProposal = (clientResolver?: SigningClientResolver) => buildTx<MsgCancelProposal>({
  clientResolver,
  typeUrl: MsgCancelProposal.typeUrl,
  encoders: toEncoders(MsgCancelProposal),
  converters: toConverters(MsgCancelProposal),
  deps: [MsgCancelProposal]
});