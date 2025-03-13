import { Description, DescriptionSDKType, CommissionRates, CommissionRatesSDKType, Params, ParamsSDKType } from "./staking";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { TelescopeGeneratedType } from "../../../types";
import { MsgCreateValidator, MsgCreateValidatorSDKType, MsgEditValidator, MsgEditValidatorSDKType, MsgDelegate, MsgDelegateSDKType, MsgBeginRedelegate, MsgBeginRedelegateSDKType, MsgUndelegate, MsgUndelegateSDKType, MsgCancelUnbondingDelegation, MsgCancelUnbondingDelegationSDKType, MsgUpdateParams, MsgUpdateParamsSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/cosmos.staking.v1beta1.MsgCreateValidator", MsgCreateValidator], ["/cosmos.staking.v1beta1.MsgEditValidator", MsgEditValidator], ["/cosmos.staking.v1beta1.MsgDelegate", MsgDelegate], ["/cosmos.staking.v1beta1.MsgBeginRedelegate", MsgBeginRedelegate], ["/cosmos.staking.v1beta1.MsgUndelegate", MsgUndelegate], ["/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation", MsgCancelUnbondingDelegation], ["/cosmos.staking.v1beta1.MsgUpdateParams", MsgUpdateParams]];
export const MessageComposer = {
  encoded: {
    createValidator(value: MsgCreateValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
        value: MsgCreateValidator.encode(value).finish()
      };
    },
    editValidator(value: MsgEditValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
        value: MsgEditValidator.encode(value).finish()
      };
    },
    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: MsgDelegate.encode(value).finish()
      };
    },
    beginRedelegate(value: MsgBeginRedelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value: MsgBeginRedelegate.encode(value).finish()
      };
    },
    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value: MsgUndelegate.encode(value).finish()
      };
    },
    cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
        value: MsgCancelUnbondingDelegation.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createValidator(value: MsgCreateValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
        value
      };
    },
    editValidator(value: MsgEditValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
        value
      };
    },
    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value
      };
    },
    beginRedelegate(value: MsgBeginRedelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value
      };
    },
    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value
      };
    },
    cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams",
        value
      };
    }
  },
  toJSON: {
    createValidator(value: MsgCreateValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
        value: MsgCreateValidator.toJSON(value)
      };
    },
    editValidator(value: MsgEditValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
        value: MsgEditValidator.toJSON(value)
      };
    },
    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: MsgDelegate.toJSON(value)
      };
    },
    beginRedelegate(value: MsgBeginRedelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value: MsgBeginRedelegate.toJSON(value)
      };
    },
    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value: MsgUndelegate.toJSON(value)
      };
    },
    cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
        value: MsgCancelUnbondingDelegation.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    }
  },
  fromJSON: {
    createValidator(value: any) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
        value: MsgCreateValidator.fromJSON(value)
      };
    },
    editValidator(value: any) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
        value: MsgEditValidator.fromJSON(value)
      };
    },
    delegate(value: any) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: MsgDelegate.fromJSON(value)
      };
    },
    beginRedelegate(value: any) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value: MsgBeginRedelegate.fromJSON(value)
      };
    },
    undelegate(value: any) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value: MsgUndelegate.fromJSON(value)
      };
    },
    cancelUnbondingDelegation(value: any) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
        value: MsgCancelUnbondingDelegation.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createValidator(value: MsgCreateValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
        value: MsgCreateValidator.fromPartial(value)
      };
    },
    editValidator(value: MsgEditValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
        value: MsgEditValidator.fromPartial(value)
      };
    },
    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: MsgDelegate.fromPartial(value)
      };
    },
    beginRedelegate(value: MsgBeginRedelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value: MsgBeginRedelegate.fromPartial(value)
      };
    },
    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value: MsgUndelegate.fromPartial(value)
      };
    },
    cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
        value: MsgCancelUnbondingDelegation.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};