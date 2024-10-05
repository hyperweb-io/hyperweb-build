import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BasicAllowance, BasicAllowanceSDKType, PeriodicAllowance, PeriodicAllowanceSDKType, AllowedMsgAllowance, AllowedMsgAllowanceSDKType } from "./feegrant";
import { MsgGrantAllowance, MsgGrantAllowanceSDKType, MsgRevokeAllowance, MsgRevokeAllowanceSDKType, MsgPruneAllowances, MsgPruneAllowancesSDKType } from "./tx";
export const AminoConverter = {
  "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
    aminoType: "cosmos-sdk/MsgGrantAllowance",
    toAmino: MsgGrantAllowance.toAmino,
    fromAmino: MsgGrantAllowance.fromAmino
  },
  "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
    aminoType: "cosmos-sdk/MsgRevokeAllowance",
    toAmino: MsgRevokeAllowance.toAmino,
    fromAmino: MsgRevokeAllowance.fromAmino
  },
  "/cosmos.feegrant.v1beta1.MsgPruneAllowances": {
    aminoType: "cosmos-sdk/MsgPruneAllowances",
    toAmino: MsgPruneAllowances.toAmino,
    fromAmino: MsgPruneAllowances.fromAmino
  }
};