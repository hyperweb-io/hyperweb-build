import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { TelescopeGeneratedType } from "../../../types";
import { MsgVerifyInvariant, MsgVerifyInvariantSDKType, MsgUpdateParams, MsgUpdateParamsSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/cosmos.crisis.v1beta1.MsgVerifyInvariant", MsgVerifyInvariant], ["/cosmos.crisis.v1beta1.MsgUpdateParams", MsgUpdateParams]];
export const MessageComposer = {
  encoded: {
    verifyInvariant(value: MsgVerifyInvariant) {
      return {
        typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
        value: MsgVerifyInvariant.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.crisis.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    verifyInvariant(value: MsgVerifyInvariant) {
      return {
        typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.crisis.v1beta1.MsgUpdateParams",
        value
      };
    }
  },
  toJSON: {
    verifyInvariant(value: MsgVerifyInvariant) {
      return {
        typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
        value: MsgVerifyInvariant.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.crisis.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    }
  },
  fromJSON: {
    verifyInvariant(value: any) {
      return {
        typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
        value: MsgVerifyInvariant.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/cosmos.crisis.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    verifyInvariant(value: MsgVerifyInvariant) {
      return {
        typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
        value: MsgVerifyInvariant.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.crisis.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};