import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { isSet, DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.gov.v1";
/** VoteOption enumerates the valid vote options for a given governance proposal. */
export enum VoteOption {
  /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
  VOTE_OPTION_UNSPECIFIED = 0,
  /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
  VOTE_OPTION_YES = 1,
  /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
  VOTE_OPTION_ABSTAIN = 2,
  /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
  VOTE_OPTION_NO = 3,
  /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
  VOTE_OPTION_NO_WITH_VETO = 4,
  UNRECOGNIZED = -1,
}
export const VoteOptionSDKType = VoteOption;
export const VoteOptionAmino = VoteOption;
export function voteOptionFromJSON(object: any): VoteOption {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;
    case 1:
    case "VOTE_OPTION_YES":
      return VoteOption.VOTE_OPTION_YES;
    case 2:
    case "VOTE_OPTION_ABSTAIN":
      return VoteOption.VOTE_OPTION_ABSTAIN;
    case 3:
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;
    case 4:
    case "VOTE_OPTION_NO_WITH_VETO":
      return VoteOption.VOTE_OPTION_NO_WITH_VETO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}
export function voteOptionToJSON(object: VoteOption): string {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";
    case VoteOption.VOTE_OPTION_YES:
      return "VOTE_OPTION_YES";
    case VoteOption.VOTE_OPTION_ABSTAIN:
      return "VOTE_OPTION_ABSTAIN";
    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";
    case VoteOption.VOTE_OPTION_NO_WITH_VETO:
      return "VOTE_OPTION_NO_WITH_VETO";
    case VoteOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ProposalStatus enumerates the valid statuses of a proposal. */
export enum ProposalStatus {
  /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status. */
  PROPOSAL_STATUS_UNSPECIFIED = 0,
  /**
   * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
   * period.
   */
  PROPOSAL_STATUS_DEPOSIT_PERIOD = 1,
  /**
   * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
   * period.
   */
  PROPOSAL_STATUS_VOTING_PERIOD = 2,
  /**
   * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
   * passed.
   */
  PROPOSAL_STATUS_PASSED = 3,
  /**
   * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
   * been rejected.
   */
  PROPOSAL_STATUS_REJECTED = 4,
  /**
   * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
   * failed.
   */
  PROPOSAL_STATUS_FAILED = 5,
  UNRECOGNIZED = -1,
}
export const ProposalStatusSDKType = ProposalStatus;
export const ProposalStatusAmino = ProposalStatus;
export function proposalStatusFromJSON(object: any): ProposalStatus {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
    case 1:
    case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;
    case 2:
    case "PROPOSAL_STATUS_VOTING_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;
    case 3:
    case "PROPOSAL_STATUS_PASSED":
      return ProposalStatus.PROPOSAL_STATUS_PASSED;
    case 4:
    case "PROPOSAL_STATUS_REJECTED":
      return ProposalStatus.PROPOSAL_STATUS_REJECTED;
    case 5:
    case "PROPOSAL_STATUS_FAILED":
      return ProposalStatus.PROPOSAL_STATUS_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalStatus.UNRECOGNIZED;
  }
}
export function proposalStatusToJSON(object: ProposalStatus): string {
  switch (object) {
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return "PROPOSAL_STATUS_UNSPECIFIED";
    case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
      return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
      return "PROPOSAL_STATUS_VOTING_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_PASSED:
      return "PROPOSAL_STATUS_PASSED";
    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "PROPOSAL_STATUS_REJECTED";
    case ProposalStatus.PROPOSAL_STATUS_FAILED:
      return "PROPOSAL_STATUS_FAILED";
    case ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** WeightedVoteOption defines a unit of vote for vote split. */
export interface WeightedVoteOption {
  /** option defines the valid vote options, it must not contain duplicate vote options. */
  option: VoteOption;
  /** weight is the vote weight associated with the vote option. */
  weight: string;
}
export interface WeightedVoteOptionProtoMsg {
  typeUrl: "/cosmos.gov.v1.WeightedVoteOption";
  value: Uint8Array;
}
/** WeightedVoteOption defines a unit of vote for vote split. */
export interface WeightedVoteOptionAmino {
  /** option defines the valid vote options, it must not contain duplicate vote options. */
  option: VoteOption;
  /** weight is the vote weight associated with the vote option. */
  weight: string;
}
export interface WeightedVoteOptionAminoMsg {
  type: "cosmos-sdk/v1/WeightedVoteOption";
  value: WeightedVoteOptionAmino;
}
/** WeightedVoteOption defines a unit of vote for vote split. */
export interface WeightedVoteOptionSDKType {
  option: VoteOption;
  weight: string;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface Deposit {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
  /** amount to be deposited by depositor. */
  amount: Coin[];
}
export interface DepositProtoMsg {
  typeUrl: "/cosmos.gov.v1.Deposit";
  value: Uint8Array;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface DepositAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
  /** amount to be deposited by depositor. */
  amount: CoinAmino[];
}
export interface DepositAminoMsg {
  type: "cosmos-sdk/v1/Deposit";
  value: DepositAmino;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface DepositSDKType {
  proposal_id: bigint;
  depositor: string;
  amount: CoinSDKType[];
}
/** Proposal defines the core field members of a governance proposal. */
export interface Proposal {
  /** id defines the unique id of the proposal. */
  id: bigint;
  /** messages are the arbitrary messages to be executed if the proposal passes. */
  messages: Any[];
  /** status defines the proposal status. */
  status: ProposalStatus;
  /**
   * final_tally_result is the final tally result of the proposal. When
   * querying a proposal via gRPC, this field is not populated until the
   * proposal's voting period has ended.
   */
  finalTallyResult?: TallyResult;
  /** submit_time is the time of proposal submission. */
  submitTime?: Date;
  /** deposit_end_time is the end time for deposition. */
  depositEndTime?: Date;
  /** total_deposit is the total deposit on the proposal. */
  totalDeposit: Coin[];
  /** voting_start_time is the starting time to vote on a proposal. */
  votingStartTime?: Date;
  /** voting_end_time is the end time of voting on a proposal. */
  votingEndTime?: Date;
  /**
   * metadata is any arbitrary metadata attached to the proposal.
   * the recommended format of the metadata is to be found here:
   * https://docs.cosmos.network/v0.47/modules/gov#proposal-3
   */
  metadata: string;
  /**
   * title is the title of the proposal
   * 
   * Since: cosmos-sdk 0.47
   */
  title: string;
  /**
   * summary is a short summary of the proposal
   * 
   * Since: cosmos-sdk 0.47
   */
  summary: string;
  /**
   * proposer is the address of the proposal sumbitter
   * 
   * Since: cosmos-sdk 0.47
   */
  proposer: string;
  /**
   * expedited defines if the proposal is expedited
   * 
   * Since: cosmos-sdk 0.50
   */
  expedited: boolean;
  /**
   * failed_reason defines the reason why the proposal failed
   * 
   * Since: cosmos-sdk 0.50
   */
  failedReason: string;
}
export interface ProposalProtoMsg {
  typeUrl: "/cosmos.gov.v1.Proposal";
  value: Uint8Array;
}
/** Proposal defines the core field members of a governance proposal. */
export interface ProposalAmino {
  /** id defines the unique id of the proposal. */
  id: string;
  /** messages are the arbitrary messages to be executed if the proposal passes. */
  messages: AnyAmino[];
  /** status defines the proposal status. */
  status: ProposalStatus;
  /**
   * final_tally_result is the final tally result of the proposal. When
   * querying a proposal via gRPC, this field is not populated until the
   * proposal's voting period has ended.
   */
  final_tally_result?: TallyResultAmino;
  /** submit_time is the time of proposal submission. */
  submit_time?: string;
  /** deposit_end_time is the end time for deposition. */
  deposit_end_time?: string;
  /** total_deposit is the total deposit on the proposal. */
  total_deposit: CoinAmino[];
  /** voting_start_time is the starting time to vote on a proposal. */
  voting_start_time?: string;
  /** voting_end_time is the end time of voting on a proposal. */
  voting_end_time?: string;
  /**
   * metadata is any arbitrary metadata attached to the proposal.
   * the recommended format of the metadata is to be found here:
   * https://docs.cosmos.network/v0.47/modules/gov#proposal-3
   */
  metadata: string;
  /**
   * title is the title of the proposal
   * 
   * Since: cosmos-sdk 0.47
   */
  title: string;
  /**
   * summary is a short summary of the proposal
   * 
   * Since: cosmos-sdk 0.47
   */
  summary: string;
  /**
   * proposer is the address of the proposal sumbitter
   * 
   * Since: cosmos-sdk 0.47
   */
  proposer: string;
  /**
   * expedited defines if the proposal is expedited
   * 
   * Since: cosmos-sdk 0.50
   */
  expedited: boolean;
  /**
   * failed_reason defines the reason why the proposal failed
   * 
   * Since: cosmos-sdk 0.50
   */
  failed_reason: string;
}
export interface ProposalAminoMsg {
  type: "cosmos-sdk/v1/Proposal";
  value: ProposalAmino;
}
/** Proposal defines the core field members of a governance proposal. */
export interface ProposalSDKType {
  id: bigint;
  messages: AnySDKType[];
  status: ProposalStatus;
  final_tally_result?: TallyResultSDKType;
  submit_time?: Date;
  deposit_end_time?: Date;
  total_deposit: CoinSDKType[];
  voting_start_time?: Date;
  voting_end_time?: Date;
  metadata: string;
  title: string;
  summary: string;
  proposer: string;
  expedited: boolean;
  failed_reason: string;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResult {
  /** yes_count is the number of yes votes on a proposal. */
  yesCount: string;
  /** abstain_count is the number of abstain votes on a proposal. */
  abstainCount: string;
  /** no_count is the number of no votes on a proposal. */
  noCount: string;
  /** no_with_veto_count is the number of no with veto votes on a proposal. */
  noWithVetoCount: string;
}
export interface TallyResultProtoMsg {
  typeUrl: "/cosmos.gov.v1.TallyResult";
  value: Uint8Array;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResultAmino {
  /** yes_count is the number of yes votes on a proposal. */
  yes_count: string;
  /** abstain_count is the number of abstain votes on a proposal. */
  abstain_count: string;
  /** no_count is the number of no votes on a proposal. */
  no_count: string;
  /** no_with_veto_count is the number of no with veto votes on a proposal. */
  no_with_veto_count: string;
}
export interface TallyResultAminoMsg {
  type: "cosmos-sdk/v1/TallyResult";
  value: TallyResultAmino;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResultSDKType {
  yes_count: string;
  abstain_count: string;
  no_count: string;
  no_with_veto_count: string;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface Vote {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** voter is the voter address of the proposal. */
  voter: string;
  /** options is the weighted vote options. */
  options: WeightedVoteOption[];
  /**
   * metadata is any arbitrary metadata attached to the vote.
   * the recommended format of the metadata is to be found here: https://docs.cosmos.network/v0.47/modules/gov#vote-5
   */
  metadata: string;
}
export interface VoteProtoMsg {
  typeUrl: "/cosmos.gov.v1.Vote";
  value: Uint8Array;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface VoteAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
  /** voter is the voter address of the proposal. */
  voter: string;
  /** options is the weighted vote options. */
  options: WeightedVoteOptionAmino[];
  /**
   * metadata is any arbitrary metadata attached to the vote.
   * the recommended format of the metadata is to be found here: https://docs.cosmos.network/v0.47/modules/gov#vote-5
   */
  metadata: string;
}
export interface VoteAminoMsg {
  type: "cosmos-sdk/v1/Vote";
  value: VoteAmino;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface VoteSDKType {
  proposal_id: bigint;
  voter: string;
  options: WeightedVoteOptionSDKType[];
  metadata: string;
}
/** DepositParams defines the params for deposits on governance proposals. */
/** @deprecated */
export interface DepositParams {
  /** Minimum deposit for a proposal to enter voting period. */
  minDeposit: Coin[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */
  maxDepositPeriod?: Duration;
}
export interface DepositParamsProtoMsg {
  typeUrl: "/cosmos.gov.v1.DepositParams";
  value: Uint8Array;
}
/** DepositParams defines the params for deposits on governance proposals. */
/** @deprecated */
export interface DepositParamsAmino {
  /** Minimum deposit for a proposal to enter voting period. */
  min_deposit: CoinAmino[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */
  max_deposit_period?: DurationAmino;
}
export interface DepositParamsAminoMsg {
  type: "cosmos-sdk/v1/DepositParams";
  value: DepositParamsAmino;
}
/** DepositParams defines the params for deposits on governance proposals. */
/** @deprecated */
export interface DepositParamsSDKType {
  min_deposit: CoinSDKType[];
  max_deposit_period?: DurationSDKType;
}
/** VotingParams defines the params for voting on governance proposals. */
/** @deprecated */
export interface VotingParams {
  /** Duration of the voting period. */
  votingPeriod?: Duration;
}
export interface VotingParamsProtoMsg {
  typeUrl: "/cosmos.gov.v1.VotingParams";
  value: Uint8Array;
}
/** VotingParams defines the params for voting on governance proposals. */
/** @deprecated */
export interface VotingParamsAmino {
  /** Duration of the voting period. */
  voting_period?: DurationAmino;
}
export interface VotingParamsAminoMsg {
  type: "cosmos-sdk/v1/VotingParams";
  value: VotingParamsAmino;
}
/** VotingParams defines the params for voting on governance proposals. */
/** @deprecated */
export interface VotingParamsSDKType {
  voting_period?: DurationSDKType;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
/** @deprecated */
export interface TallyParams {
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   * considered valid.
   */
  quorum: string;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
  threshold: string;
  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   * vetoed. Default value: 1/3.
   */
  vetoThreshold: string;
}
export interface TallyParamsProtoMsg {
  typeUrl: "/cosmos.gov.v1.TallyParams";
  value: Uint8Array;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
/** @deprecated */
export interface TallyParamsAmino {
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   * considered valid.
   */
  quorum: string;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
  threshold: string;
  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   * vetoed. Default value: 1/3.
   */
  veto_threshold: string;
}
export interface TallyParamsAminoMsg {
  type: "cosmos-sdk/v1/TallyParams";
  value: TallyParamsAmino;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
/** @deprecated */
export interface TallyParamsSDKType {
  quorum: string;
  threshold: string;
  veto_threshold: string;
}
/**
 * Params defines the parameters for the x/gov module.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface Params {
  /** Minimum deposit for a proposal to enter voting period. */
  minDeposit: Coin[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */
  maxDepositPeriod?: Duration;
  /** Duration of the voting period. */
  votingPeriod?: Duration;
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   *  considered valid.
   */
  quorum: string;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
  threshold: string;
  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   *  vetoed. Default value: 1/3.
   */
  vetoThreshold: string;
  /** The ratio representing the proportion of the deposit value that must be paid at proposal submission. */
  minInitialDepositRatio: string;
  /**
   * The cancel ratio which will not be returned back to the depositors when a proposal is cancelled.
   * 
   * Since: cosmos-sdk 0.50
   */
  proposalCancelRatio: string;
  /**
   * The address which will receive (proposal_cancel_ratio * deposit) proposal deposits.
   * If empty, the (proposal_cancel_ratio * deposit) proposal deposits will be burned.
   * 
   * Since: cosmos-sdk 0.50
   */
  proposalCancelDest: string;
  /**
   * Duration of the voting period of an expedited proposal.
   * 
   * Since: cosmos-sdk 0.50
   */
  expeditedVotingPeriod?: Duration;
  /**
   * Minimum proportion of Yes votes for proposal to pass. Default value: 0.67.
   * 
   * Since: cosmos-sdk 0.50
   */
  expeditedThreshold: string;
  /** Minimum expedited deposit for a proposal to enter voting period. */
  expeditedMinDeposit: Coin[];
  /** burn deposits if a proposal does not meet quorum */
  burnVoteQuorum: boolean;
  /** burn deposits if the proposal does not enter voting period */
  burnProposalDepositPrevote: boolean;
  /** burn deposits if quorum with vote type no_veto is met */
  burnVoteVeto: boolean;
  /**
   * The ratio representing the proportion of the deposit value minimum that must be met when making a deposit.
   * Default value: 0.01. Meaning that for a chain with a min_deposit of 100stake, a deposit of 1stake would be
   * required.
   * 
   * Since: cosmos-sdk 0.50
   */
  minDepositRatio: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/cosmos.gov.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the x/gov module.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface ParamsAmino {
  /** Minimum deposit for a proposal to enter voting period. */
  min_deposit: CoinAmino[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */
  max_deposit_period?: DurationAmino;
  /** Duration of the voting period. */
  voting_period?: DurationAmino;
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   *  considered valid.
   */
  quorum: string;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
  threshold: string;
  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   *  vetoed. Default value: 1/3.
   */
  veto_threshold: string;
  /** The ratio representing the proportion of the deposit value that must be paid at proposal submission. */
  min_initial_deposit_ratio: string;
  /**
   * The cancel ratio which will not be returned back to the depositors when a proposal is cancelled.
   * 
   * Since: cosmos-sdk 0.50
   */
  proposal_cancel_ratio: string;
  /**
   * The address which will receive (proposal_cancel_ratio * deposit) proposal deposits.
   * If empty, the (proposal_cancel_ratio * deposit) proposal deposits will be burned.
   * 
   * Since: cosmos-sdk 0.50
   */
  proposal_cancel_dest: string;
  /**
   * Duration of the voting period of an expedited proposal.
   * 
   * Since: cosmos-sdk 0.50
   */
  expedited_voting_period?: DurationAmino;
  /**
   * Minimum proportion of Yes votes for proposal to pass. Default value: 0.67.
   * 
   * Since: cosmos-sdk 0.50
   */
  expedited_threshold: string;
  /** Minimum expedited deposit for a proposal to enter voting period. */
  expedited_min_deposit: CoinAmino[];
  /** burn deposits if a proposal does not meet quorum */
  burn_vote_quorum: boolean;
  /** burn deposits if the proposal does not enter voting period */
  burn_proposal_deposit_prevote: boolean;
  /** burn deposits if quorum with vote type no_veto is met */
  burn_vote_veto: boolean;
  /**
   * The ratio representing the proportion of the deposit value minimum that must be met when making a deposit.
   * Default value: 0.01. Meaning that for a chain with a min_deposit of 100stake, a deposit of 1stake would be
   * required.
   * 
   * Since: cosmos-sdk 0.50
   */
  min_deposit_ratio: string;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/v1/Params";
  value: ParamsAmino;
}
/**
 * Params defines the parameters for the x/gov module.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface ParamsSDKType {
  min_deposit: CoinSDKType[];
  max_deposit_period?: DurationSDKType;
  voting_period?: DurationSDKType;
  quorum: string;
  threshold: string;
  veto_threshold: string;
  min_initial_deposit_ratio: string;
  proposal_cancel_ratio: string;
  proposal_cancel_dest: string;
  expedited_voting_period?: DurationSDKType;
  expedited_threshold: string;
  expedited_min_deposit: CoinSDKType[];
  burn_vote_quorum: boolean;
  burn_proposal_deposit_prevote: boolean;
  burn_vote_veto: boolean;
  min_deposit_ratio: string;
}
function createBaseWeightedVoteOption(): WeightedVoteOption {
  return {
    option: 0,
    weight: ""
  };
}
export const WeightedVoteOption = {
  typeUrl: "/cosmos.gov.v1.WeightedVoteOption",
  aminoType: "cosmos-sdk/v1/WeightedVoteOption",
  is(o: any): o is WeightedVoteOption {
    return o && (o.$typeUrl === WeightedVoteOption.typeUrl || isSet(o.option) && typeof o.weight === "string");
  },
  isSDK(o: any): o is WeightedVoteOptionSDKType {
    return o && (o.$typeUrl === WeightedVoteOption.typeUrl || isSet(o.option) && typeof o.weight === "string");
  },
  isAmino(o: any): o is WeightedVoteOptionAmino {
    return o && (o.$typeUrl === WeightedVoteOption.typeUrl || isSet(o.option) && typeof o.weight === "string");
  },
  encode(message: WeightedVoteOption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.option !== 0) {
      writer.uint32(8).int32(message.option);
    }
    if (message.weight !== undefined) {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WeightedVoteOption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedVoteOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.option = reader.int32() as any;
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WeightedVoteOption {
    const obj = createBaseWeightedVoteOption();
    if (isSet(object.option)) obj.option = voteOptionFromJSON(object.option);
    if (isSet(object.weight)) obj.weight = String(object.weight);
    return obj;
  },
  toJSON(message: WeightedVoteOption): JsonSafe<WeightedVoteOption> {
    const obj: any = {};
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },
  fromPartial(object: DeepPartial<WeightedVoteOption>): WeightedVoteOption {
    const message = createBaseWeightedVoteOption();
    message.option = object.option ?? 0;
    message.weight = object.weight ?? "";
    return message;
  },
  fromSDK(object: WeightedVoteOptionSDKType): WeightedVoteOption {
    return {
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
      weight: object?.weight
    };
  },
  toSDK(message: WeightedVoteOption): WeightedVoteOptionSDKType {
    const obj: any = {};
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    obj.weight = message.weight;
    return obj;
  },
  fromAmino(object: WeightedVoteOptionAmino): WeightedVoteOption {
    const message = createBaseWeightedVoteOption();
    if (object.option !== undefined && object.option !== null) {
      message.option = object.option;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    return message;
  },
  toAmino(message: WeightedVoteOption): WeightedVoteOptionAmino {
    const obj: any = {};
    obj.option = message.option === 0 ? undefined : message.option;
    obj.weight = message.weight === "" ? undefined : message.weight;
    return obj;
  },
  fromAminoMsg(object: WeightedVoteOptionAminoMsg): WeightedVoteOption {
    return WeightedVoteOption.fromAmino(object.value);
  },
  toAminoMsg(message: WeightedVoteOption): WeightedVoteOptionAminoMsg {
    return {
      type: "cosmos-sdk/v1/WeightedVoteOption",
      value: WeightedVoteOption.toAmino(message)
    };
  },
  fromProtoMsg(message: WeightedVoteOptionProtoMsg): WeightedVoteOption {
    return WeightedVoteOption.decode(message.value);
  },
  toProto(message: WeightedVoteOption): Uint8Array {
    return WeightedVoteOption.encode(message).finish();
  },
  toProtoMsg(message: WeightedVoteOption): WeightedVoteOptionProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.WeightedVoteOption",
      value: WeightedVoteOption.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDeposit(): Deposit {
  return {
    proposalId: BigInt(0),
    depositor: "",
    amount: []
  };
}
export const Deposit = {
  typeUrl: "/cosmos.gov.v1.Deposit",
  aminoType: "cosmos-sdk/v1/Deposit",
  is(o: any): o is Deposit {
    return o && (o.$typeUrl === Deposit.typeUrl || typeof o.proposalId === "bigint" && typeof o.depositor === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
  },
  isSDK(o: any): o is DepositSDKType {
    return o && (o.$typeUrl === Deposit.typeUrl || typeof o.proposal_id === "bigint" && typeof o.depositor === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])));
  },
  isAmino(o: any): o is DepositAmino {
    return o && (o.$typeUrl === Deposit.typeUrl || typeof o.proposal_id === "bigint" && typeof o.depositor === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])));
  },
  encode(message: Deposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== undefined) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== undefined) {
      writer.uint32(18).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Deposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Deposit {
    const obj = createBaseDeposit();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.depositor)) obj.depositor = String(object.depositor);
    if (Array.isArray(object?.amount)) obj.amount = object.amount.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: Deposit): JsonSafe<Deposit> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Deposit>): Deposit {
    const message = createBaseDeposit();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: DepositSDKType): Deposit {
    return {
      proposalId: object?.proposal_id,
      depositor: object?.depositor,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: Deposit): DepositSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    obj.depositor = message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAmino(object: DepositAmino): Deposit {
    const message = createBaseDeposit();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Deposit): DepositAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.depositor = message.depositor === "" ? undefined : message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: DepositAminoMsg): Deposit {
    return Deposit.fromAmino(object.value);
  },
  toAminoMsg(message: Deposit): DepositAminoMsg {
    return {
      type: "cosmos-sdk/v1/Deposit",
      value: Deposit.toAmino(message)
    };
  },
  fromProtoMsg(message: DepositProtoMsg): Deposit {
    return Deposit.decode(message.value);
  },
  toProto(message: Deposit): Uint8Array {
    return Deposit.encode(message).finish();
  },
  toProtoMsg(message: Deposit): DepositProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.Deposit",
      value: Deposit.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Coin.registerTypeUrl();
  }
};
function createBaseProposal(): Proposal {
  return {
    id: BigInt(0),
    messages: [],
    status: 0,
    finalTallyResult: undefined,
    submitTime: undefined,
    depositEndTime: undefined,
    totalDeposit: [],
    votingStartTime: undefined,
    votingEndTime: undefined,
    metadata: "",
    title: "",
    summary: "",
    proposer: "",
    expedited: false,
    failedReason: ""
  };
}
export const Proposal = {
  typeUrl: "/cosmos.gov.v1.Proposal",
  aminoType: "cosmos-sdk/v1/Proposal",
  is(o: any): o is Proposal {
    return o && (o.$typeUrl === Proposal.typeUrl || typeof o.id === "bigint" && Array.isArray(o.messages) && (!o.messages.length || Any.is(o.messages[0])) && isSet(o.status) && Array.isArray(o.totalDeposit) && (!o.totalDeposit.length || Coin.is(o.totalDeposit[0])) && typeof o.metadata === "string" && typeof o.title === "string" && typeof o.summary === "string" && typeof o.proposer === "string" && typeof o.expedited === "boolean" && typeof o.failedReason === "string");
  },
  isSDK(o: any): o is ProposalSDKType {
    return o && (o.$typeUrl === Proposal.typeUrl || typeof o.id === "bigint" && Array.isArray(o.messages) && (!o.messages.length || Any.isSDK(o.messages[0])) && isSet(o.status) && Array.isArray(o.total_deposit) && (!o.total_deposit.length || Coin.isSDK(o.total_deposit[0])) && typeof o.metadata === "string" && typeof o.title === "string" && typeof o.summary === "string" && typeof o.proposer === "string" && typeof o.expedited === "boolean" && typeof o.failed_reason === "string");
  },
  isAmino(o: any): o is ProposalAmino {
    return o && (o.$typeUrl === Proposal.typeUrl || typeof o.id === "bigint" && Array.isArray(o.messages) && (!o.messages.length || Any.isAmino(o.messages[0])) && isSet(o.status) && Array.isArray(o.total_deposit) && (!o.total_deposit.length || Coin.isAmino(o.total_deposit[0])) && typeof o.metadata === "string" && typeof o.title === "string" && typeof o.summary === "string" && typeof o.proposer === "string" && typeof o.expedited === "boolean" && typeof o.failed_reason === "string");
  },
  encode(message: Proposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      writer.uint32(8).uint64(message.id);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.finalTallyResult !== undefined) {
      TallyResult.encode(message.finalTallyResult, writer.uint32(34).fork()).ldelim();
    }
    if (message.submitTime !== undefined) {
      Timestamp.encode(toTimestamp(message.submitTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.depositEndTime !== undefined) {
      Timestamp.encode(toTimestamp(message.depositEndTime), writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.totalDeposit) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.votingStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.votingStartTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.votingEndTime !== undefined) {
      Timestamp.encode(toTimestamp(message.votingEndTime), writer.uint32(74).fork()).ldelim();
    }
    if (message.metadata !== undefined) {
      writer.uint32(82).string(message.metadata);
    }
    if (message.title !== undefined) {
      writer.uint32(90).string(message.title);
    }
    if (message.summary !== undefined) {
      writer.uint32(98).string(message.summary);
    }
    if (message.proposer !== undefined) {
      writer.uint32(106).string(message.proposer);
    }
    if (message.expedited !== undefined) {
      writer.uint32(112).bool(message.expedited);
    }
    if (message.failedReason !== undefined) {
      writer.uint32(122).string(message.failedReason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 3:
          message.status = reader.int32() as any;
          break;
        case 4:
          message.finalTallyResult = TallyResult.decode(reader, reader.uint32());
          break;
        case 5:
          message.submitTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.depositEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.totalDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.votingStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.votingEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.metadata = reader.string();
          break;
        case 11:
          message.title = reader.string();
          break;
        case 12:
          message.summary = reader.string();
          break;
        case 13:
          message.proposer = reader.string();
          break;
        case 14:
          message.expedited = reader.bool();
          break;
        case 15:
          message.failedReason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Proposal {
    const obj = createBaseProposal();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (Array.isArray(object?.messages)) obj.messages = object.messages.map((e: any) => Any.fromJSON(e));
    if (isSet(object.status)) obj.status = proposalStatusFromJSON(object.status);
    if (isSet(object.finalTallyResult)) obj.finalTallyResult = TallyResult.fromJSON(object.finalTallyResult);
    if (isSet(object.submitTime)) obj.submitTime = new Date(object.submitTime);
    if (isSet(object.depositEndTime)) obj.depositEndTime = new Date(object.depositEndTime);
    if (Array.isArray(object?.totalDeposit)) obj.totalDeposit = object.totalDeposit.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.votingStartTime)) obj.votingStartTime = new Date(object.votingStartTime);
    if (isSet(object.votingEndTime)) obj.votingEndTime = new Date(object.votingEndTime);
    if (isSet(object.metadata)) obj.metadata = String(object.metadata);
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.summary)) obj.summary = String(object.summary);
    if (isSet(object.proposer)) obj.proposer = String(object.proposer);
    if (isSet(object.expedited)) obj.expedited = Boolean(object.expedited);
    if (isSet(object.failedReason)) obj.failedReason = String(object.failedReason);
    return obj;
  },
  toJSON(message: Proposal): JsonSafe<Proposal> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
    message.finalTallyResult !== undefined && (obj.finalTallyResult = message.finalTallyResult ? TallyResult.toJSON(message.finalTallyResult) : undefined);
    message.submitTime !== undefined && (obj.submitTime = message.submitTime.toISOString());
    message.depositEndTime !== undefined && (obj.depositEndTime = message.depositEndTime.toISOString());
    if (message.totalDeposit) {
      obj.totalDeposit = message.totalDeposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalDeposit = [];
    }
    message.votingStartTime !== undefined && (obj.votingStartTime = message.votingStartTime.toISOString());
    message.votingEndTime !== undefined && (obj.votingEndTime = message.votingEndTime.toISOString());
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.title !== undefined && (obj.title = message.title);
    message.summary !== undefined && (obj.summary = message.summary);
    message.proposer !== undefined && (obj.proposer = message.proposer);
    message.expedited !== undefined && (obj.expedited = message.expedited);
    message.failedReason !== undefined && (obj.failedReason = message.failedReason);
    return obj;
  },
  fromPartial(object: DeepPartial<Proposal>): Proposal {
    const message = createBaseProposal();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    message.status = object.status ?? 0;
    if (object.finalTallyResult !== undefined && object.finalTallyResult !== null) {
      message.finalTallyResult = TallyResult.fromPartial(object.finalTallyResult);
    }
    message.submitTime = object.submitTime ?? undefined;
    message.depositEndTime = object.depositEndTime ?? undefined;
    message.totalDeposit = object.totalDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.votingStartTime = object.votingStartTime ?? undefined;
    message.votingEndTime = object.votingEndTime ?? undefined;
    message.metadata = object.metadata ?? "";
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
    message.proposer = object.proposer ?? "";
    message.expedited = object.expedited ?? false;
    message.failedReason = object.failedReason ?? "";
    return message;
  },
  fromSDK(object: ProposalSDKType): Proposal {
    return {
      id: object?.id,
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromSDK(e)) : [],
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
      finalTallyResult: object.final_tally_result ? TallyResult.fromSDK(object.final_tally_result) : undefined,
      submitTime: object.submit_time ?? undefined,
      depositEndTime: object.deposit_end_time ?? undefined,
      totalDeposit: Array.isArray(object?.total_deposit) ? object.total_deposit.map((e: any) => Coin.fromSDK(e)) : [],
      votingStartTime: object.voting_start_time ?? undefined,
      votingEndTime: object.voting_end_time ?? undefined,
      metadata: object?.metadata,
      title: object?.title,
      summary: object?.summary,
      proposer: object?.proposer,
      expedited: object?.expedited,
      failedReason: object?.failed_reason
    };
  },
  toSDK(message: Proposal): ProposalSDKType {
    const obj: any = {};
    obj.id = message.id;
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.messages = [];
    }
    message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
    message.finalTallyResult !== undefined && (obj.final_tally_result = message.finalTallyResult ? TallyResult.toSDK(message.finalTallyResult) : undefined);
    message.submitTime !== undefined && (obj.submit_time = message.submitTime ?? undefined);
    message.depositEndTime !== undefined && (obj.deposit_end_time = message.depositEndTime ?? undefined);
    if (message.totalDeposit) {
      obj.total_deposit = message.totalDeposit.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.total_deposit = [];
    }
    message.votingStartTime !== undefined && (obj.voting_start_time = message.votingStartTime ?? undefined);
    message.votingEndTime !== undefined && (obj.voting_end_time = message.votingEndTime ?? undefined);
    obj.metadata = message.metadata;
    obj.title = message.title;
    obj.summary = message.summary;
    obj.proposer = message.proposer;
    obj.expedited = message.expedited;
    obj.failed_reason = message.failedReason;
    return obj;
  },
  fromAmino(object: ProposalAmino): Proposal {
    const message = createBaseProposal();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    message.messages = object.messages?.map(e => Any.fromAmino(e)) || [];
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.final_tally_result !== undefined && object.final_tally_result !== null) {
      message.finalTallyResult = TallyResult.fromAmino(object.final_tally_result);
    }
    if (object.submit_time !== undefined && object.submit_time !== null) {
      message.submitTime = fromTimestamp(Timestamp.fromAmino(object.submit_time));
    }
    if (object.deposit_end_time !== undefined && object.deposit_end_time !== null) {
      message.depositEndTime = fromTimestamp(Timestamp.fromAmino(object.deposit_end_time));
    }
    message.totalDeposit = object.total_deposit?.map(e => Coin.fromAmino(e)) || [];
    if (object.voting_start_time !== undefined && object.voting_start_time !== null) {
      message.votingStartTime = fromTimestamp(Timestamp.fromAmino(object.voting_start_time));
    }
    if (object.voting_end_time !== undefined && object.voting_end_time !== null) {
      message.votingEndTime = fromTimestamp(Timestamp.fromAmino(object.voting_end_time));
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = object.summary;
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    if (object.expedited !== undefined && object.expedited !== null) {
      message.expedited = object.expedited;
    }
    if (object.failed_reason !== undefined && object.failed_reason !== null) {
      message.failedReason = object.failed_reason;
    }
    return message;
  },
  toAmino(message: Proposal): ProposalAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.messages = message.messages;
    }
    obj.status = message.status === 0 ? undefined : message.status;
    obj.final_tally_result = message.finalTallyResult ? TallyResult.toAmino(message.finalTallyResult) : undefined;
    obj.submit_time = message.submitTime ? Timestamp.toAmino(toTimestamp(message.submitTime)) : undefined;
    obj.deposit_end_time = message.depositEndTime ? Timestamp.toAmino(toTimestamp(message.depositEndTime)) : undefined;
    if (message.totalDeposit) {
      obj.total_deposit = message.totalDeposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_deposit = message.totalDeposit;
    }
    obj.voting_start_time = message.votingStartTime ? Timestamp.toAmino(toTimestamp(message.votingStartTime)) : undefined;
    obj.voting_end_time = message.votingEndTime ? Timestamp.toAmino(toTimestamp(message.votingEndTime)) : undefined;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.title = message.title === "" ? undefined : message.title;
    obj.summary = message.summary === "" ? undefined : message.summary;
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    obj.expedited = message.expedited === false ? undefined : message.expedited;
    obj.failed_reason = message.failedReason === "" ? undefined : message.failedReason;
    return obj;
  },
  fromAminoMsg(object: ProposalAminoMsg): Proposal {
    return Proposal.fromAmino(object.value);
  },
  toAminoMsg(message: Proposal): ProposalAminoMsg {
    return {
      type: "cosmos-sdk/v1/Proposal",
      value: Proposal.toAmino(message)
    };
  },
  fromProtoMsg(message: ProposalProtoMsg): Proposal {
    return Proposal.decode(message.value);
  },
  toProto(message: Proposal): Uint8Array {
    return Proposal.encode(message).finish();
  },
  toProtoMsg(message: Proposal): ProposalProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.Proposal",
      value: Proposal.encode(message).finish()
    };
  },
  registerTypeUrl() {
    TallyResult.registerTypeUrl();
    Coin.registerTypeUrl();
  }
};
function createBaseTallyResult(): TallyResult {
  return {
    yesCount: "",
    abstainCount: "",
    noCount: "",
    noWithVetoCount: ""
  };
}
export const TallyResult = {
  typeUrl: "/cosmos.gov.v1.TallyResult",
  aminoType: "cosmos-sdk/v1/TallyResult",
  is(o: any): o is TallyResult {
    return o && (o.$typeUrl === TallyResult.typeUrl || typeof o.yesCount === "string" && typeof o.abstainCount === "string" && typeof o.noCount === "string" && typeof o.noWithVetoCount === "string");
  },
  isSDK(o: any): o is TallyResultSDKType {
    return o && (o.$typeUrl === TallyResult.typeUrl || typeof o.yes_count === "string" && typeof o.abstain_count === "string" && typeof o.no_count === "string" && typeof o.no_with_veto_count === "string");
  },
  isAmino(o: any): o is TallyResultAmino {
    return o && (o.$typeUrl === TallyResult.typeUrl || typeof o.yes_count === "string" && typeof o.abstain_count === "string" && typeof o.no_count === "string" && typeof o.no_with_veto_count === "string");
  },
  encode(message: TallyResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.yesCount !== undefined) {
      writer.uint32(10).string(message.yesCount);
    }
    if (message.abstainCount !== undefined) {
      writer.uint32(18).string(message.abstainCount);
    }
    if (message.noCount !== undefined) {
      writer.uint32(26).string(message.noCount);
    }
    if (message.noWithVetoCount !== undefined) {
      writer.uint32(34).string(message.noWithVetoCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TallyResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTallyResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yesCount = reader.string();
          break;
        case 2:
          message.abstainCount = reader.string();
          break;
        case 3:
          message.noCount = reader.string();
          break;
        case 4:
          message.noWithVetoCount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TallyResult {
    const obj = createBaseTallyResult();
    if (isSet(object.yesCount)) obj.yesCount = String(object.yesCount);
    if (isSet(object.abstainCount)) obj.abstainCount = String(object.abstainCount);
    if (isSet(object.noCount)) obj.noCount = String(object.noCount);
    if (isSet(object.noWithVetoCount)) obj.noWithVetoCount = String(object.noWithVetoCount);
    return obj;
  },
  toJSON(message: TallyResult): JsonSafe<TallyResult> {
    const obj: any = {};
    message.yesCount !== undefined && (obj.yesCount = message.yesCount);
    message.abstainCount !== undefined && (obj.abstainCount = message.abstainCount);
    message.noCount !== undefined && (obj.noCount = message.noCount);
    message.noWithVetoCount !== undefined && (obj.noWithVetoCount = message.noWithVetoCount);
    return obj;
  },
  fromPartial(object: DeepPartial<TallyResult>): TallyResult {
    const message = createBaseTallyResult();
    message.yesCount = object.yesCount ?? "";
    message.abstainCount = object.abstainCount ?? "";
    message.noCount = object.noCount ?? "";
    message.noWithVetoCount = object.noWithVetoCount ?? "";
    return message;
  },
  fromSDK(object: TallyResultSDKType): TallyResult {
    return {
      yesCount: object?.yes_count,
      abstainCount: object?.abstain_count,
      noCount: object?.no_count,
      noWithVetoCount: object?.no_with_veto_count
    };
  },
  toSDK(message: TallyResult): TallyResultSDKType {
    const obj: any = {};
    obj.yes_count = message.yesCount;
    obj.abstain_count = message.abstainCount;
    obj.no_count = message.noCount;
    obj.no_with_veto_count = message.noWithVetoCount;
    return obj;
  },
  fromAmino(object: TallyResultAmino): TallyResult {
    const message = createBaseTallyResult();
    if (object.yes_count !== undefined && object.yes_count !== null) {
      message.yesCount = object.yes_count;
    }
    if (object.abstain_count !== undefined && object.abstain_count !== null) {
      message.abstainCount = object.abstain_count;
    }
    if (object.no_count !== undefined && object.no_count !== null) {
      message.noCount = object.no_count;
    }
    if (object.no_with_veto_count !== undefined && object.no_with_veto_count !== null) {
      message.noWithVetoCount = object.no_with_veto_count;
    }
    return message;
  },
  toAmino(message: TallyResult): TallyResultAmino {
    const obj: any = {};
    obj.yes_count = message.yesCount === "" ? undefined : message.yesCount;
    obj.abstain_count = message.abstainCount === "" ? undefined : message.abstainCount;
    obj.no_count = message.noCount === "" ? undefined : message.noCount;
    obj.no_with_veto_count = message.noWithVetoCount === "" ? undefined : message.noWithVetoCount;
    return obj;
  },
  fromAminoMsg(object: TallyResultAminoMsg): TallyResult {
    return TallyResult.fromAmino(object.value);
  },
  toAminoMsg(message: TallyResult): TallyResultAminoMsg {
    return {
      type: "cosmos-sdk/v1/TallyResult",
      value: TallyResult.toAmino(message)
    };
  },
  fromProtoMsg(message: TallyResultProtoMsg): TallyResult {
    return TallyResult.decode(message.value);
  },
  toProto(message: TallyResult): Uint8Array {
    return TallyResult.encode(message).finish();
  },
  toProtoMsg(message: TallyResult): TallyResultProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.TallyResult",
      value: TallyResult.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseVote(): Vote {
  return {
    proposalId: BigInt(0),
    voter: "",
    options: [],
    metadata: ""
  };
}
export const Vote = {
  typeUrl: "/cosmos.gov.v1.Vote",
  aminoType: "cosmos-sdk/v1/Vote",
  is(o: any): o is Vote {
    return o && (o.$typeUrl === Vote.typeUrl || typeof o.proposalId === "bigint" && typeof o.voter === "string" && Array.isArray(o.options) && (!o.options.length || WeightedVoteOption.is(o.options[0])) && typeof o.metadata === "string");
  },
  isSDK(o: any): o is VoteSDKType {
    return o && (o.$typeUrl === Vote.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && Array.isArray(o.options) && (!o.options.length || WeightedVoteOption.isSDK(o.options[0])) && typeof o.metadata === "string");
  },
  isAmino(o: any): o is VoteAmino {
    return o && (o.$typeUrl === Vote.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && Array.isArray(o.options) && (!o.options.length || WeightedVoteOption.isAmino(o.options[0])) && typeof o.metadata === "string");
  },
  encode(message: Vote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== undefined) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== undefined) {
      writer.uint32(18).string(message.voter);
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.metadata !== undefined) {
      writer.uint32(42).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Vote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 4:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;
        case 5:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Vote {
    const obj = createBaseVote();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.voter)) obj.voter = String(object.voter);
    if (Array.isArray(object?.options)) obj.options = object.options.map((e: any) => WeightedVoteOption.fromJSON(e));
    if (isSet(object.metadata)) obj.metadata = String(object.metadata);
    return obj;
  },
  toJSON(message: Vote): JsonSafe<Vote> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },
  fromPartial(object: DeepPartial<Vote>): Vote {
    const message = createBaseVote();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.voter = object.voter ?? "";
    message.options = object.options?.map(e => WeightedVoteOption.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromSDK(object: VoteSDKType): Vote {
    return {
      proposalId: object?.proposal_id,
      voter: object?.voter,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromSDK(e)) : [],
      metadata: object?.metadata
    };
  },
  toSDK(message: Vote): VoteSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    obj.voter = message.voter;
    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toSDK(e) : undefined);
    } else {
      obj.options = [];
    }
    obj.metadata = message.metadata;
    return obj;
  },
  fromAmino(object: VoteAmino): Vote {
    const message = createBaseVote();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    message.options = object.options?.map(e => WeightedVoteOption.fromAmino(e)) || [];
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
  toAmino(message: Vote): VoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.voter = message.voter === "" ? undefined : message.voter;
    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toAmino(e) : undefined);
    } else {
      obj.options = message.options;
    }
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    return obj;
  },
  fromAminoMsg(object: VoteAminoMsg): Vote {
    return Vote.fromAmino(object.value);
  },
  toAminoMsg(message: Vote): VoteAminoMsg {
    return {
      type: "cosmos-sdk/v1/Vote",
      value: Vote.toAmino(message)
    };
  },
  fromProtoMsg(message: VoteProtoMsg): Vote {
    return Vote.decode(message.value);
  },
  toProto(message: Vote): Uint8Array {
    return Vote.encode(message).finish();
  },
  toProtoMsg(message: Vote): VoteProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.Vote",
      value: Vote.encode(message).finish()
    };
  },
  registerTypeUrl() {
    WeightedVoteOption.registerTypeUrl();
  }
};
function createBaseDepositParams(): DepositParams {
  return {
    minDeposit: [],
    maxDepositPeriod: undefined
  };
}
export const DepositParams = {
  typeUrl: "/cosmos.gov.v1.DepositParams",
  aminoType: "cosmos-sdk/v1/DepositParams",
  is(o: any): o is DepositParams {
    return o && (o.$typeUrl === DepositParams.typeUrl || Array.isArray(o.minDeposit) && (!o.minDeposit.length || Coin.is(o.minDeposit[0])));
  },
  isSDK(o: any): o is DepositParamsSDKType {
    return o && (o.$typeUrl === DepositParams.typeUrl || Array.isArray(o.min_deposit) && (!o.min_deposit.length || Coin.isSDK(o.min_deposit[0])));
  },
  isAmino(o: any): o is DepositParamsAmino {
    return o && (o.$typeUrl === DepositParams.typeUrl || Array.isArray(o.min_deposit) && (!o.min_deposit.length || Coin.isAmino(o.min_deposit[0])));
  },
  encode(message: DepositParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.minDeposit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxDepositPeriod !== undefined) {
      Duration.encode(message.maxDepositPeriod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DepositParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.maxDepositPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DepositParams {
    const obj = createBaseDepositParams();
    if (Array.isArray(object?.minDeposit)) obj.minDeposit = object.minDeposit.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.maxDepositPeriod)) obj.maxDepositPeriod = Duration.fromJSON(object.maxDepositPeriod);
    return obj;
  },
  toJSON(message: DepositParams): JsonSafe<DepositParams> {
    const obj: any = {};
    if (message.minDeposit) {
      obj.minDeposit = message.minDeposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.minDeposit = [];
    }
    message.maxDepositPeriod !== undefined && (obj.maxDepositPeriod = message.maxDepositPeriod ? Duration.toJSON(message.maxDepositPeriod) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<DepositParams>): DepositParams {
    const message = createBaseDepositParams();
    message.minDeposit = object.minDeposit?.map(e => Coin.fromPartial(e)) || [];
    if (object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null) {
      message.maxDepositPeriod = Duration.fromPartial(object.maxDepositPeriod);
    }
    return message;
  },
  fromSDK(object: DepositParamsSDKType): DepositParams {
    return {
      minDeposit: Array.isArray(object?.min_deposit) ? object.min_deposit.map((e: any) => Coin.fromSDK(e)) : [],
      maxDepositPeriod: object.max_deposit_period ? Duration.fromSDK(object.max_deposit_period) : undefined
    };
  },
  toSDK(message: DepositParams): DepositParamsSDKType {
    const obj: any = {};
    if (message.minDeposit) {
      obj.min_deposit = message.minDeposit.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.min_deposit = [];
    }
    message.maxDepositPeriod !== undefined && (obj.max_deposit_period = message.maxDepositPeriod ? Duration.toSDK(message.maxDepositPeriod) : undefined);
    return obj;
  },
  fromAmino(object: DepositParamsAmino): DepositParams {
    const message = createBaseDepositParams();
    message.minDeposit = object.min_deposit?.map(e => Coin.fromAmino(e)) || [];
    if (object.max_deposit_period !== undefined && object.max_deposit_period !== null) {
      message.maxDepositPeriod = Duration.fromAmino(object.max_deposit_period);
    }
    return message;
  },
  toAmino(message: DepositParams): DepositParamsAmino {
    const obj: any = {};
    if (message.minDeposit) {
      obj.min_deposit = message.minDeposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.min_deposit = message.minDeposit;
    }
    obj.max_deposit_period = message.maxDepositPeriod ? Duration.toAmino(message.maxDepositPeriod) : undefined;
    return obj;
  },
  fromAminoMsg(object: DepositParamsAminoMsg): DepositParams {
    return DepositParams.fromAmino(object.value);
  },
  toAminoMsg(message: DepositParams): DepositParamsAminoMsg {
    return {
      type: "cosmos-sdk/v1/DepositParams",
      value: DepositParams.toAmino(message)
    };
  },
  fromProtoMsg(message: DepositParamsProtoMsg): DepositParams {
    return DepositParams.decode(message.value);
  },
  toProto(message: DepositParams): Uint8Array {
    return DepositParams.encode(message).finish();
  },
  toProtoMsg(message: DepositParams): DepositParamsProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.DepositParams",
      value: DepositParams.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Coin.registerTypeUrl();
  }
};
function createBaseVotingParams(): VotingParams {
  return {
    votingPeriod: undefined
  };
}
export const VotingParams = {
  typeUrl: "/cosmos.gov.v1.VotingParams",
  aminoType: "cosmos-sdk/v1/VotingParams",
  is(o: any): o is VotingParams {
    return o && o.$typeUrl === VotingParams.typeUrl;
  },
  isSDK(o: any): o is VotingParamsSDKType {
    return o && o.$typeUrl === VotingParams.typeUrl;
  },
  isAmino(o: any): o is VotingParamsAmino {
    return o && o.$typeUrl === VotingParams.typeUrl;
  },
  encode(message: VotingParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.votingPeriod !== undefined) {
      Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VotingParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVotingParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VotingParams {
    const obj = createBaseVotingParams();
    if (isSet(object.votingPeriod)) obj.votingPeriod = Duration.fromJSON(object.votingPeriod);
    return obj;
  },
  toJSON(message: VotingParams): JsonSafe<VotingParams> {
    const obj: any = {};
    message.votingPeriod !== undefined && (obj.votingPeriod = message.votingPeriod ? Duration.toJSON(message.votingPeriod) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<VotingParams>): VotingParams {
    const message = createBaseVotingParams();
    if (object.votingPeriod !== undefined && object.votingPeriod !== null) {
      message.votingPeriod = Duration.fromPartial(object.votingPeriod);
    }
    return message;
  },
  fromSDK(object: VotingParamsSDKType): VotingParams {
    return {
      votingPeriod: object.voting_period ? Duration.fromSDK(object.voting_period) : undefined
    };
  },
  toSDK(message: VotingParams): VotingParamsSDKType {
    const obj: any = {};
    message.votingPeriod !== undefined && (obj.voting_period = message.votingPeriod ? Duration.toSDK(message.votingPeriod) : undefined);
    return obj;
  },
  fromAmino(object: VotingParamsAmino): VotingParams {
    const message = createBaseVotingParams();
    if (object.voting_period !== undefined && object.voting_period !== null) {
      message.votingPeriod = Duration.fromAmino(object.voting_period);
    }
    return message;
  },
  toAmino(message: VotingParams): VotingParamsAmino {
    const obj: any = {};
    obj.voting_period = message.votingPeriod ? Duration.toAmino(message.votingPeriod) : undefined;
    return obj;
  },
  fromAminoMsg(object: VotingParamsAminoMsg): VotingParams {
    return VotingParams.fromAmino(object.value);
  },
  toAminoMsg(message: VotingParams): VotingParamsAminoMsg {
    return {
      type: "cosmos-sdk/v1/VotingParams",
      value: VotingParams.toAmino(message)
    };
  },
  fromProtoMsg(message: VotingParamsProtoMsg): VotingParams {
    return VotingParams.decode(message.value);
  },
  toProto(message: VotingParams): Uint8Array {
    return VotingParams.encode(message).finish();
  },
  toProtoMsg(message: VotingParams): VotingParamsProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.VotingParams",
      value: VotingParams.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTallyParams(): TallyParams {
  return {
    quorum: "",
    threshold: "",
    vetoThreshold: ""
  };
}
export const TallyParams = {
  typeUrl: "/cosmos.gov.v1.TallyParams",
  aminoType: "cosmos-sdk/v1/TallyParams",
  is(o: any): o is TallyParams {
    return o && (o.$typeUrl === TallyParams.typeUrl || typeof o.quorum === "string" && typeof o.threshold === "string" && typeof o.vetoThreshold === "string");
  },
  isSDK(o: any): o is TallyParamsSDKType {
    return o && (o.$typeUrl === TallyParams.typeUrl || typeof o.quorum === "string" && typeof o.threshold === "string" && typeof o.veto_threshold === "string");
  },
  isAmino(o: any): o is TallyParamsAmino {
    return o && (o.$typeUrl === TallyParams.typeUrl || typeof o.quorum === "string" && typeof o.threshold === "string" && typeof o.veto_threshold === "string");
  },
  encode(message: TallyParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quorum !== undefined) {
      writer.uint32(10).string(message.quorum);
    }
    if (message.threshold !== undefined) {
      writer.uint32(18).string(message.threshold);
    }
    if (message.vetoThreshold !== undefined) {
      writer.uint32(26).string(message.vetoThreshold);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TallyParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTallyParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quorum = reader.string();
          break;
        case 2:
          message.threshold = reader.string();
          break;
        case 3:
          message.vetoThreshold = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TallyParams {
    const obj = createBaseTallyParams();
    if (isSet(object.quorum)) obj.quorum = String(object.quorum);
    if (isSet(object.threshold)) obj.threshold = String(object.threshold);
    if (isSet(object.vetoThreshold)) obj.vetoThreshold = String(object.vetoThreshold);
    return obj;
  },
  toJSON(message: TallyParams): JsonSafe<TallyParams> {
    const obj: any = {};
    message.quorum !== undefined && (obj.quorum = message.quorum);
    message.threshold !== undefined && (obj.threshold = message.threshold);
    message.vetoThreshold !== undefined && (obj.vetoThreshold = message.vetoThreshold);
    return obj;
  },
  fromPartial(object: DeepPartial<TallyParams>): TallyParams {
    const message = createBaseTallyParams();
    message.quorum = object.quorum ?? "";
    message.threshold = object.threshold ?? "";
    message.vetoThreshold = object.vetoThreshold ?? "";
    return message;
  },
  fromSDK(object: TallyParamsSDKType): TallyParams {
    return {
      quorum: object?.quorum,
      threshold: object?.threshold,
      vetoThreshold: object?.veto_threshold
    };
  },
  toSDK(message: TallyParams): TallyParamsSDKType {
    const obj: any = {};
    obj.quorum = message.quorum;
    obj.threshold = message.threshold;
    obj.veto_threshold = message.vetoThreshold;
    return obj;
  },
  fromAmino(object: TallyParamsAmino): TallyParams {
    const message = createBaseTallyParams();
    if (object.quorum !== undefined && object.quorum !== null) {
      message.quorum = object.quorum;
    }
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    if (object.veto_threshold !== undefined && object.veto_threshold !== null) {
      message.vetoThreshold = object.veto_threshold;
    }
    return message;
  },
  toAmino(message: TallyParams): TallyParamsAmino {
    const obj: any = {};
    obj.quorum = message.quorum === "" ? undefined : message.quorum;
    obj.threshold = message.threshold === "" ? undefined : message.threshold;
    obj.veto_threshold = message.vetoThreshold === "" ? undefined : message.vetoThreshold;
    return obj;
  },
  fromAminoMsg(object: TallyParamsAminoMsg): TallyParams {
    return TallyParams.fromAmino(object.value);
  },
  toAminoMsg(message: TallyParams): TallyParamsAminoMsg {
    return {
      type: "cosmos-sdk/v1/TallyParams",
      value: TallyParams.toAmino(message)
    };
  },
  fromProtoMsg(message: TallyParamsProtoMsg): TallyParams {
    return TallyParams.decode(message.value);
  },
  toProto(message: TallyParams): Uint8Array {
    return TallyParams.encode(message).finish();
  },
  toProtoMsg(message: TallyParams): TallyParamsProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.TallyParams",
      value: TallyParams.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseParams(): Params {
  return {
    minDeposit: [],
    maxDepositPeriod: undefined,
    votingPeriod: undefined,
    quorum: "",
    threshold: "",
    vetoThreshold: "",
    minInitialDepositRatio: "",
    proposalCancelRatio: "",
    proposalCancelDest: "",
    expeditedVotingPeriod: undefined,
    expeditedThreshold: "",
    expeditedMinDeposit: [],
    burnVoteQuorum: false,
    burnProposalDepositPrevote: false,
    burnVoteVeto: false,
    minDepositRatio: ""
  };
}
export const Params = {
  typeUrl: "/cosmos.gov.v1.Params",
  aminoType: "cosmos-sdk/v1/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.minDeposit) && (!o.minDeposit.length || Coin.is(o.minDeposit[0])) && typeof o.quorum === "string" && typeof o.threshold === "string" && typeof o.vetoThreshold === "string" && typeof o.minInitialDepositRatio === "string" && typeof o.proposalCancelRatio === "string" && typeof o.proposalCancelDest === "string" && typeof o.expeditedThreshold === "string" && Array.isArray(o.expeditedMinDeposit) && (!o.expeditedMinDeposit.length || Coin.is(o.expeditedMinDeposit[0])) && typeof o.burnVoteQuorum === "boolean" && typeof o.burnProposalDepositPrevote === "boolean" && typeof o.burnVoteVeto === "boolean" && typeof o.minDepositRatio === "string");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.min_deposit) && (!o.min_deposit.length || Coin.isSDK(o.min_deposit[0])) && typeof o.quorum === "string" && typeof o.threshold === "string" && typeof o.veto_threshold === "string" && typeof o.min_initial_deposit_ratio === "string" && typeof o.proposal_cancel_ratio === "string" && typeof o.proposal_cancel_dest === "string" && typeof o.expedited_threshold === "string" && Array.isArray(o.expedited_min_deposit) && (!o.expedited_min_deposit.length || Coin.isSDK(o.expedited_min_deposit[0])) && typeof o.burn_vote_quorum === "boolean" && typeof o.burn_proposal_deposit_prevote === "boolean" && typeof o.burn_vote_veto === "boolean" && typeof o.min_deposit_ratio === "string");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.min_deposit) && (!o.min_deposit.length || Coin.isAmino(o.min_deposit[0])) && typeof o.quorum === "string" && typeof o.threshold === "string" && typeof o.veto_threshold === "string" && typeof o.min_initial_deposit_ratio === "string" && typeof o.proposal_cancel_ratio === "string" && typeof o.proposal_cancel_dest === "string" && typeof o.expedited_threshold === "string" && Array.isArray(o.expedited_min_deposit) && (!o.expedited_min_deposit.length || Coin.isAmino(o.expedited_min_deposit[0])) && typeof o.burn_vote_quorum === "boolean" && typeof o.burn_proposal_deposit_prevote === "boolean" && typeof o.burn_vote_veto === "boolean" && typeof o.min_deposit_ratio === "string");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.minDeposit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxDepositPeriod !== undefined) {
      Duration.encode(message.maxDepositPeriod, writer.uint32(18).fork()).ldelim();
    }
    if (message.votingPeriod !== undefined) {
      Duration.encode(message.votingPeriod, writer.uint32(26).fork()).ldelim();
    }
    if (message.quorum !== undefined) {
      writer.uint32(34).string(message.quorum);
    }
    if (message.threshold !== undefined) {
      writer.uint32(42).string(message.threshold);
    }
    if (message.vetoThreshold !== undefined) {
      writer.uint32(50).string(message.vetoThreshold);
    }
    if (message.minInitialDepositRatio !== undefined) {
      writer.uint32(58).string(message.minInitialDepositRatio);
    }
    if (message.proposalCancelRatio !== undefined) {
      writer.uint32(66).string(message.proposalCancelRatio);
    }
    if (message.proposalCancelDest !== undefined) {
      writer.uint32(74).string(message.proposalCancelDest);
    }
    if (message.expeditedVotingPeriod !== undefined) {
      Duration.encode(message.expeditedVotingPeriod, writer.uint32(82).fork()).ldelim();
    }
    if (message.expeditedThreshold !== undefined) {
      writer.uint32(90).string(message.expeditedThreshold);
    }
    for (const v of message.expeditedMinDeposit) {
      Coin.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.burnVoteQuorum !== undefined) {
      writer.uint32(104).bool(message.burnVoteQuorum);
    }
    if (message.burnProposalDepositPrevote !== undefined) {
      writer.uint32(112).bool(message.burnProposalDepositPrevote);
    }
    if (message.burnVoteVeto !== undefined) {
      writer.uint32(120).bool(message.burnVoteVeto);
    }
    if (message.minDepositRatio !== undefined) {
      writer.uint32(130).string(message.minDepositRatio);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.maxDepositPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.votingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.quorum = reader.string();
          break;
        case 5:
          message.threshold = reader.string();
          break;
        case 6:
          message.vetoThreshold = reader.string();
          break;
        case 7:
          message.minInitialDepositRatio = reader.string();
          break;
        case 8:
          message.proposalCancelRatio = reader.string();
          break;
        case 9:
          message.proposalCancelDest = reader.string();
          break;
        case 10:
          message.expeditedVotingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 11:
          message.expeditedThreshold = reader.string();
          break;
        case 12:
          message.expeditedMinDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 13:
          message.burnVoteQuorum = reader.bool();
          break;
        case 14:
          message.burnProposalDepositPrevote = reader.bool();
          break;
        case 15:
          message.burnVoteVeto = reader.bool();
          break;
        case 16:
          message.minDepositRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (Array.isArray(object?.minDeposit)) obj.minDeposit = object.minDeposit.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.maxDepositPeriod)) obj.maxDepositPeriod = Duration.fromJSON(object.maxDepositPeriod);
    if (isSet(object.votingPeriod)) obj.votingPeriod = Duration.fromJSON(object.votingPeriod);
    if (isSet(object.quorum)) obj.quorum = String(object.quorum);
    if (isSet(object.threshold)) obj.threshold = String(object.threshold);
    if (isSet(object.vetoThreshold)) obj.vetoThreshold = String(object.vetoThreshold);
    if (isSet(object.minInitialDepositRatio)) obj.minInitialDepositRatio = String(object.minInitialDepositRatio);
    if (isSet(object.proposalCancelRatio)) obj.proposalCancelRatio = String(object.proposalCancelRatio);
    if (isSet(object.proposalCancelDest)) obj.proposalCancelDest = String(object.proposalCancelDest);
    if (isSet(object.expeditedVotingPeriod)) obj.expeditedVotingPeriod = Duration.fromJSON(object.expeditedVotingPeriod);
    if (isSet(object.expeditedThreshold)) obj.expeditedThreshold = String(object.expeditedThreshold);
    if (Array.isArray(object?.expeditedMinDeposit)) obj.expeditedMinDeposit = object.expeditedMinDeposit.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.burnVoteQuorum)) obj.burnVoteQuorum = Boolean(object.burnVoteQuorum);
    if (isSet(object.burnProposalDepositPrevote)) obj.burnProposalDepositPrevote = Boolean(object.burnProposalDepositPrevote);
    if (isSet(object.burnVoteVeto)) obj.burnVoteVeto = Boolean(object.burnVoteVeto);
    if (isSet(object.minDepositRatio)) obj.minDepositRatio = String(object.minDepositRatio);
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    if (message.minDeposit) {
      obj.minDeposit = message.minDeposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.minDeposit = [];
    }
    message.maxDepositPeriod !== undefined && (obj.maxDepositPeriod = message.maxDepositPeriod ? Duration.toJSON(message.maxDepositPeriod) : undefined);
    message.votingPeriod !== undefined && (obj.votingPeriod = message.votingPeriod ? Duration.toJSON(message.votingPeriod) : undefined);
    message.quorum !== undefined && (obj.quorum = message.quorum);
    message.threshold !== undefined && (obj.threshold = message.threshold);
    message.vetoThreshold !== undefined && (obj.vetoThreshold = message.vetoThreshold);
    message.minInitialDepositRatio !== undefined && (obj.minInitialDepositRatio = message.minInitialDepositRatio);
    message.proposalCancelRatio !== undefined && (obj.proposalCancelRatio = message.proposalCancelRatio);
    message.proposalCancelDest !== undefined && (obj.proposalCancelDest = message.proposalCancelDest);
    message.expeditedVotingPeriod !== undefined && (obj.expeditedVotingPeriod = message.expeditedVotingPeriod ? Duration.toJSON(message.expeditedVotingPeriod) : undefined);
    message.expeditedThreshold !== undefined && (obj.expeditedThreshold = message.expeditedThreshold);
    if (message.expeditedMinDeposit) {
      obj.expeditedMinDeposit = message.expeditedMinDeposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.expeditedMinDeposit = [];
    }
    message.burnVoteQuorum !== undefined && (obj.burnVoteQuorum = message.burnVoteQuorum);
    message.burnProposalDepositPrevote !== undefined && (obj.burnProposalDepositPrevote = message.burnProposalDepositPrevote);
    message.burnVoteVeto !== undefined && (obj.burnVoteVeto = message.burnVoteVeto);
    message.minDepositRatio !== undefined && (obj.minDepositRatio = message.minDepositRatio);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.minDeposit = object.minDeposit?.map(e => Coin.fromPartial(e)) || [];
    if (object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null) {
      message.maxDepositPeriod = Duration.fromPartial(object.maxDepositPeriod);
    }
    if (object.votingPeriod !== undefined && object.votingPeriod !== null) {
      message.votingPeriod = Duration.fromPartial(object.votingPeriod);
    }
    message.quorum = object.quorum ?? "";
    message.threshold = object.threshold ?? "";
    message.vetoThreshold = object.vetoThreshold ?? "";
    message.minInitialDepositRatio = object.minInitialDepositRatio ?? "";
    message.proposalCancelRatio = object.proposalCancelRatio ?? "";
    message.proposalCancelDest = object.proposalCancelDest ?? "";
    if (object.expeditedVotingPeriod !== undefined && object.expeditedVotingPeriod !== null) {
      message.expeditedVotingPeriod = Duration.fromPartial(object.expeditedVotingPeriod);
    }
    message.expeditedThreshold = object.expeditedThreshold ?? "";
    message.expeditedMinDeposit = object.expeditedMinDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.burnVoteQuorum = object.burnVoteQuorum ?? false;
    message.burnProposalDepositPrevote = object.burnProposalDepositPrevote ?? false;
    message.burnVoteVeto = object.burnVoteVeto ?? false;
    message.minDepositRatio = object.minDepositRatio ?? "";
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      minDeposit: Array.isArray(object?.min_deposit) ? object.min_deposit.map((e: any) => Coin.fromSDK(e)) : [],
      maxDepositPeriod: object.max_deposit_period ? Duration.fromSDK(object.max_deposit_period) : undefined,
      votingPeriod: object.voting_period ? Duration.fromSDK(object.voting_period) : undefined,
      quorum: object?.quorum,
      threshold: object?.threshold,
      vetoThreshold: object?.veto_threshold,
      minInitialDepositRatio: object?.min_initial_deposit_ratio,
      proposalCancelRatio: object?.proposal_cancel_ratio,
      proposalCancelDest: object?.proposal_cancel_dest,
      expeditedVotingPeriod: object.expedited_voting_period ? Duration.fromSDK(object.expedited_voting_period) : undefined,
      expeditedThreshold: object?.expedited_threshold,
      expeditedMinDeposit: Array.isArray(object?.expedited_min_deposit) ? object.expedited_min_deposit.map((e: any) => Coin.fromSDK(e)) : [],
      burnVoteQuorum: object?.burn_vote_quorum,
      burnProposalDepositPrevote: object?.burn_proposal_deposit_prevote,
      burnVoteVeto: object?.burn_vote_veto,
      minDepositRatio: object?.min_deposit_ratio
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    if (message.minDeposit) {
      obj.min_deposit = message.minDeposit.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.min_deposit = [];
    }
    message.maxDepositPeriod !== undefined && (obj.max_deposit_period = message.maxDepositPeriod ? Duration.toSDK(message.maxDepositPeriod) : undefined);
    message.votingPeriod !== undefined && (obj.voting_period = message.votingPeriod ? Duration.toSDK(message.votingPeriod) : undefined);
    obj.quorum = message.quorum;
    obj.threshold = message.threshold;
    obj.veto_threshold = message.vetoThreshold;
    obj.min_initial_deposit_ratio = message.minInitialDepositRatio;
    obj.proposal_cancel_ratio = message.proposalCancelRatio;
    obj.proposal_cancel_dest = message.proposalCancelDest;
    message.expeditedVotingPeriod !== undefined && (obj.expedited_voting_period = message.expeditedVotingPeriod ? Duration.toSDK(message.expeditedVotingPeriod) : undefined);
    obj.expedited_threshold = message.expeditedThreshold;
    if (message.expeditedMinDeposit) {
      obj.expedited_min_deposit = message.expeditedMinDeposit.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.expedited_min_deposit = [];
    }
    obj.burn_vote_quorum = message.burnVoteQuorum;
    obj.burn_proposal_deposit_prevote = message.burnProposalDepositPrevote;
    obj.burn_vote_veto = message.burnVoteVeto;
    obj.min_deposit_ratio = message.minDepositRatio;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.minDeposit = object.min_deposit?.map(e => Coin.fromAmino(e)) || [];
    if (object.max_deposit_period !== undefined && object.max_deposit_period !== null) {
      message.maxDepositPeriod = Duration.fromAmino(object.max_deposit_period);
    }
    if (object.voting_period !== undefined && object.voting_period !== null) {
      message.votingPeriod = Duration.fromAmino(object.voting_period);
    }
    if (object.quorum !== undefined && object.quorum !== null) {
      message.quorum = object.quorum;
    }
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    if (object.veto_threshold !== undefined && object.veto_threshold !== null) {
      message.vetoThreshold = object.veto_threshold;
    }
    if (object.min_initial_deposit_ratio !== undefined && object.min_initial_deposit_ratio !== null) {
      message.minInitialDepositRatio = object.min_initial_deposit_ratio;
    }
    if (object.proposal_cancel_ratio !== undefined && object.proposal_cancel_ratio !== null) {
      message.proposalCancelRatio = object.proposal_cancel_ratio;
    }
    if (object.proposal_cancel_dest !== undefined && object.proposal_cancel_dest !== null) {
      message.proposalCancelDest = object.proposal_cancel_dest;
    }
    if (object.expedited_voting_period !== undefined && object.expedited_voting_period !== null) {
      message.expeditedVotingPeriod = Duration.fromAmino(object.expedited_voting_period);
    }
    if (object.expedited_threshold !== undefined && object.expedited_threshold !== null) {
      message.expeditedThreshold = object.expedited_threshold;
    }
    message.expeditedMinDeposit = object.expedited_min_deposit?.map(e => Coin.fromAmino(e)) || [];
    if (object.burn_vote_quorum !== undefined && object.burn_vote_quorum !== null) {
      message.burnVoteQuorum = object.burn_vote_quorum;
    }
    if (object.burn_proposal_deposit_prevote !== undefined && object.burn_proposal_deposit_prevote !== null) {
      message.burnProposalDepositPrevote = object.burn_proposal_deposit_prevote;
    }
    if (object.burn_vote_veto !== undefined && object.burn_vote_veto !== null) {
      message.burnVoteVeto = object.burn_vote_veto;
    }
    if (object.min_deposit_ratio !== undefined && object.min_deposit_ratio !== null) {
      message.minDepositRatio = object.min_deposit_ratio;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.minDeposit) {
      obj.min_deposit = message.minDeposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.min_deposit = message.minDeposit;
    }
    obj.max_deposit_period = message.maxDepositPeriod ? Duration.toAmino(message.maxDepositPeriod) : undefined;
    obj.voting_period = message.votingPeriod ? Duration.toAmino(message.votingPeriod) : undefined;
    obj.quorum = message.quorum === "" ? undefined : message.quorum;
    obj.threshold = message.threshold === "" ? undefined : message.threshold;
    obj.veto_threshold = message.vetoThreshold === "" ? undefined : message.vetoThreshold;
    obj.min_initial_deposit_ratio = message.minInitialDepositRatio === "" ? undefined : message.minInitialDepositRatio;
    obj.proposal_cancel_ratio = message.proposalCancelRatio === "" ? undefined : message.proposalCancelRatio;
    obj.proposal_cancel_dest = message.proposalCancelDest === "" ? undefined : message.proposalCancelDest;
    obj.expedited_voting_period = message.expeditedVotingPeriod ? Duration.toAmino(message.expeditedVotingPeriod) : undefined;
    obj.expedited_threshold = message.expeditedThreshold === "" ? undefined : message.expeditedThreshold;
    if (message.expeditedMinDeposit) {
      obj.expedited_min_deposit = message.expeditedMinDeposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.expedited_min_deposit = message.expeditedMinDeposit;
    }
    obj.burn_vote_quorum = message.burnVoteQuorum === false ? undefined : message.burnVoteQuorum;
    obj.burn_proposal_deposit_prevote = message.burnProposalDepositPrevote === false ? undefined : message.burnProposalDepositPrevote;
    obj.burn_vote_veto = message.burnVoteVeto === false ? undefined : message.burnVoteVeto;
    obj.min_deposit_ratio = message.minDepositRatio === "" ? undefined : message.minDepositRatio;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/v1/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Coin.registerTypeUrl();
  }
};