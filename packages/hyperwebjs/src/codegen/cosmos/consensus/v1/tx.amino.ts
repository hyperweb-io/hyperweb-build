import { BlockParams, BlockParamsSDKType, EvidenceParams, EvidenceParamsSDKType, ValidatorParams, ValidatorParamsSDKType, ABCIParams, ABCIParamsSDKType } from "../../../tendermint/types/params";
import { MsgUpdateParams, MsgUpdateParamsSDKType } from "./tx";
export const AminoConverter = {
  "/cosmos.consensus.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/consensus/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};