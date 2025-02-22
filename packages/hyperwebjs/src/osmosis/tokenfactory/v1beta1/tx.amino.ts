import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataSDKType, Params, ParamsSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { MsgCreateDenom, MsgCreateDenomSDKType, MsgMint, MsgMintSDKType, MsgBurn, MsgBurnSDKType, MsgChangeAdmin, MsgChangeAdminSDKType, MsgSetDenomMetadata, MsgSetDenomMetadataSDKType, MsgForceTransfer, MsgForceTransferSDKType, MsgUpdateParams, MsgUpdateParamsSDKType } from "./tx";
export const AminoConverter = {
  "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
    aminoType: "osmosis/tokenfactory/create-denom",
    toAmino: MsgCreateDenom.toAmino,
    fromAmino: MsgCreateDenom.fromAmino
  },
  "/osmosis.tokenfactory.v1beta1.MsgMint": {
    aminoType: "osmosis/tokenfactory/mint",
    toAmino: MsgMint.toAmino,
    fromAmino: MsgMint.fromAmino
  },
  "/osmosis.tokenfactory.v1beta1.MsgBurn": {
    aminoType: "osmosis/tokenfactory/burn",
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino
  },
  "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
    aminoType: "osmosis/tokenfactory/change-admin",
    toAmino: MsgChangeAdmin.toAmino,
    fromAmino: MsgChangeAdmin.fromAmino
  },
  "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
    aminoType: "osmosis/tokenfactory/set-denom-metadata",
    toAmino: MsgSetDenomMetadata.toAmino,
    fromAmino: MsgSetDenomMetadata.fromAmino
  },
  "/osmosis.tokenfactory.v1beta1.MsgForceTransfer": {
    aminoType: "osmosis/tokenfactory/force-transfer",
    toAmino: MsgForceTransfer.toAmino,
    fromAmino: MsgForceTransfer.fromAmino
  },
  "/osmosis.tokenfactory.v1beta1.MsgUpdateParams": {
    aminoType: "osmosis/tokenfactory/update-params",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};