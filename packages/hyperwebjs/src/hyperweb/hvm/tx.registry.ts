import { Params, ParamsSDKType } from "./params";
import { TelescopeGeneratedType } from "../../types";
import { MsgUpdateParams, MsgUpdateParamsSDKType, MsgInstantiate, MsgInstantiateSDKType, MsgEval, MsgEvalSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/hyperweb.hvm.MsgUpdateParams", MsgUpdateParams], ["/hyperweb.hvm.MsgInstantiate", MsgInstantiate], ["/hyperweb.hvm.MsgEval", MsgEval]];
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/hyperweb.hvm.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    instantiate(value: MsgInstantiate) {
      return {
        typeUrl: "/hyperweb.hvm.MsgInstantiate",
        value: MsgInstantiate.encode(value).finish()
      };
    },
    eval(value: MsgEval) {
      return {
        typeUrl: "/hyperweb.hvm.MsgEval",
        value: MsgEval.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/hyperweb.hvm.MsgUpdateParams",
        value
      };
    },
    instantiate(value: MsgInstantiate) {
      return {
        typeUrl: "/hyperweb.hvm.MsgInstantiate",
        value
      };
    },
    eval(value: MsgEval) {
      return {
        typeUrl: "/hyperweb.hvm.MsgEval",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/hyperweb.hvm.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    instantiate(value: MsgInstantiate) {
      return {
        typeUrl: "/hyperweb.hvm.MsgInstantiate",
        value: MsgInstantiate.toJSON(value)
      };
    },
    eval(value: MsgEval) {
      return {
        typeUrl: "/hyperweb.hvm.MsgEval",
        value: MsgEval.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/hyperweb.hvm.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    instantiate(value: any) {
      return {
        typeUrl: "/hyperweb.hvm.MsgInstantiate",
        value: MsgInstantiate.fromJSON(value)
      };
    },
    eval(value: any) {
      return {
        typeUrl: "/hyperweb.hvm.MsgEval",
        value: MsgEval.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/hyperweb.hvm.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    instantiate(value: MsgInstantiate) {
      return {
        typeUrl: "/hyperweb.hvm.MsgInstantiate",
        value: MsgInstantiate.fromPartial(value)
      };
    },
    eval(value: MsgEval) {
      return {
        typeUrl: "/hyperweb.hvm.MsgEval",
        value: MsgEval.fromPartial(value)
      };
    }
  }
};