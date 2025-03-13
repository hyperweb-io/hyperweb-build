import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Height, HeightSDKType } from "../../../core/client/v1/client";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgTransfer, MsgTransferSDKType, MsgTransferResponse, MsgTransferResponseSDKType } from "./tx";
export const createTransfer = (clientResolver?: SigningClientResolver) => buildTx<MsgTransfer>({
  clientResolver,
  typeUrl: MsgTransfer.typeUrl,
  encoders: toEncoders(MsgTransfer),
  converters: toConverters(MsgTransfer),
  deps: [MsgTransfer]
});