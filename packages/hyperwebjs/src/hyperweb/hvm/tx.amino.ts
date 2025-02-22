import { Params, ParamsSDKType } from "./params";
import { MsgUpdateParams, MsgUpdateParamsSDKType, MsgInstantiate, MsgInstantiateSDKType, MsgEval, MsgEvalSDKType } from "./tx";
export const AminoConverter = {
  "/hyperweb.hvm.MsgUpdateParams": {
    aminoType: "hvm/x/hvm/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/hyperweb.hvm.MsgInstantiate": {
    aminoType: "/hyperweb.hvm.MsgInstantiate",
    toAmino: MsgInstantiate.toAmino,
    fromAmino: MsgInstantiate.fromAmino
  },
  "/hyperweb.hvm.MsgEval": {
    aminoType: "/hyperweb.hvm.MsgEval",
    toAmino: MsgEval.toAmino,
    fromAmino: MsgEval.fromAmino
  }
};