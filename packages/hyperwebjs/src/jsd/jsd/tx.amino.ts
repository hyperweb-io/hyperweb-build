import { Params, ParamsSDKType } from "./params";
import { MsgUpdateParams, MsgUpdateParamsSDKType, MsgInstantiate, MsgInstantiateSDKType, MsgEval, MsgEvalSDKType } from "./tx";
export const AminoConverter = {
  "/jsd.jsd.MsgUpdateParams": {
    aminoType: "jsd/x/jsd/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/jsd.jsd.MsgInstantiate": {
    aminoType: "/jsd.jsd.MsgInstantiate",
    toAmino: MsgInstantiate.toAmino,
    fromAmino: MsgInstantiate.fromAmino
  },
  "/jsd.jsd.MsgEval": {
    aminoType: "/jsd.jsd.MsgEval",
    toAmino: MsgEval.toAmino,
    fromAmino: MsgEval.fromAmino
  }
};