import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { MsgVerifyInvariant, MsgVerifyInvariantSDKType, MsgUpdateParams, MsgUpdateParamsSDKType } from "./tx";
export const AminoConverter = {
  "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
    aminoType: "cosmos-sdk/MsgVerifyInvariant",
    toAmino: MsgVerifyInvariant.toAmino,
    fromAmino: MsgVerifyInvariant.fromAmino
  },
  "/cosmos.crisis.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/crisis/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};