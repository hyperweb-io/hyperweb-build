import { Params, ParamsSDKType } from "./params";
import { TelescopeGeneratedType } from "../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgUpdateParamsSDKType, MsgInstantiate, MsgInstantiateSDKType, MsgEval, MsgEvalSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/jsd.jsd.MsgUpdateParams", MsgUpdateParams], ["/jsd.jsd.MsgInstantiate", MsgInstantiate], ["/jsd.jsd.MsgEval", MsgEval]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/jsd.jsd.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    instantiate(value: MsgInstantiate) {
      return {
        typeUrl: "/jsd.jsd.MsgInstantiate",
        value: MsgInstantiate.encode(value).finish()
      };
    },
    eval(value: MsgEval) {
      return {
        typeUrl: "/jsd.jsd.MsgEval",
        value: MsgEval.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/jsd.jsd.MsgUpdateParams",
        value
      };
    },
    instantiate(value: MsgInstantiate) {
      return {
        typeUrl: "/jsd.jsd.MsgInstantiate",
        value
      };
    },
    eval(value: MsgEval) {
      return {
        typeUrl: "/jsd.jsd.MsgEval",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/jsd.jsd.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    instantiate(value: MsgInstantiate) {
      return {
        typeUrl: "/jsd.jsd.MsgInstantiate",
        value: MsgInstantiate.toJSON(value)
      };
    },
    eval(value: MsgEval) {
      return {
        typeUrl: "/jsd.jsd.MsgEval",
        value: MsgEval.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/jsd.jsd.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    instantiate(value: any) {
      return {
        typeUrl: "/jsd.jsd.MsgInstantiate",
        value: MsgInstantiate.fromJSON(value)
      };
    },
    eval(value: any) {
      return {
        typeUrl: "/jsd.jsd.MsgEval",
        value: MsgEval.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/jsd.jsd.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    instantiate(value: MsgInstantiate) {
      return {
        typeUrl: "/jsd.jsd.MsgInstantiate",
        value: MsgInstantiate.fromPartial(value)
      };
    },
    eval(value: MsgEval) {
      return {
        typeUrl: "/jsd.jsd.MsgEval",
        value: MsgEval.fromPartial(value)
      };
    }
  }
};