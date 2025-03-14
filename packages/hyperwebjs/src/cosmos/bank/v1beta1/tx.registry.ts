import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Input, InputSDKType, Output, OutputSDKType, Params, ParamsSDKType, SendEnabled, SendEnabledSDKType } from "./bank";
import { TelescopeGeneratedType } from "../../../types";
import { MsgSend, MsgSendSDKType, MsgMultiSend, MsgMultiSendSDKType, MsgUpdateParams, MsgUpdateParamsSDKType, MsgSetSendEnabled, MsgSetSendEnabledSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/cosmos.bank.v1beta1.MsgSend", MsgSend], ["/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend], ["/cosmos.bank.v1beta1.MsgUpdateParams", MsgUpdateParams], ["/cosmos.bank.v1beta1.MsgSetSendEnabled", MsgSetSendEnabled]];
export const MessageComposer = {
  encoded: {
    send(value: MsgSend) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: MsgSend.encode(value).finish()
      };
    },
    multiSend(value: MsgMultiSend) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value: MsgMultiSend.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    setSendEnabled(value: MsgSetSendEnabled) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabled",
        value: MsgSetSendEnabled.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    send(value: MsgSend) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value
      };
    },
    multiSend(value: MsgMultiSend) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
        value
      };
    },
    setSendEnabled(value: MsgSetSendEnabled) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabled",
        value
      };
    }
  },
  toJSON: {
    send(value: MsgSend) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: MsgSend.toJSON(value)
      };
    },
    multiSend(value: MsgMultiSend) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value: MsgMultiSend.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    setSendEnabled(value: MsgSetSendEnabled) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabled",
        value: MsgSetSendEnabled.toJSON(value)
      };
    }
  },
  fromJSON: {
    send(value: any) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: MsgSend.fromJSON(value)
      };
    },
    multiSend(value: any) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value: MsgMultiSend.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    setSendEnabled(value: any) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabled",
        value: MsgSetSendEnabled.fromJSON(value)
      };
    }
  },
  fromPartial: {
    send(value: MsgSend) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: MsgSend.fromPartial(value)
      };
    },
    multiSend(value: MsgMultiSend) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value: MsgMultiSend.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    setSendEnabled(value: MsgSetSendEnabled) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabled",
        value: MsgSetSendEnabled.fromPartial(value)
      };
    }
  }
};