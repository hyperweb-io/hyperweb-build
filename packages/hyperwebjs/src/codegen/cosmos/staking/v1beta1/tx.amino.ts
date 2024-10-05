import { Description, DescriptionSDKType, CommissionRates, CommissionRatesSDKType, Params, ParamsSDKType } from "./staking";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { MsgCreateValidator, MsgCreateValidatorSDKType, MsgEditValidator, MsgEditValidatorSDKType, MsgDelegate, MsgDelegateSDKType, MsgBeginRedelegate, MsgBeginRedelegateSDKType, MsgUndelegate, MsgUndelegateSDKType, MsgCancelUnbondingDelegation, MsgCancelUnbondingDelegationSDKType, MsgUpdateParams, MsgUpdateParamsSDKType } from "./tx";
export const AminoConverter = {
  "/cosmos.staking.v1beta1.MsgCreateValidator": {
    aminoType: "cosmos-sdk/MsgCreateValidator",
    toAmino: MsgCreateValidator.toAmino,
    fromAmino: MsgCreateValidator.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgEditValidator": {
    aminoType: "cosmos-sdk/MsgEditValidator",
    toAmino: MsgEditValidator.toAmino,
    fromAmino: MsgEditValidator.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgDelegate": {
    aminoType: "cosmos-sdk/MsgDelegate",
    toAmino: MsgDelegate.toAmino,
    fromAmino: MsgDelegate.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
    aminoType: "cosmos-sdk/MsgBeginRedelegate",
    toAmino: MsgBeginRedelegate.toAmino,
    fromAmino: MsgBeginRedelegate.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgUndelegate": {
    aminoType: "cosmos-sdk/MsgUndelegate",
    toAmino: MsgUndelegate.toAmino,
    fromAmino: MsgUndelegate.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
    aminoType: "cosmos-sdk/MsgCancelUnbondingDelegation",
    toAmino: MsgCancelUnbondingDelegation.toAmino,
    fromAmino: MsgCancelUnbondingDelegation.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/staking/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};