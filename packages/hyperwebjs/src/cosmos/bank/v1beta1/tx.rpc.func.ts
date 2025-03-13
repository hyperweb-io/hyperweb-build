import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Input, InputSDKType, Output, OutputSDKType, Params, ParamsSDKType, SendEnabled, SendEnabledSDKType } from "./bank";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSend, MsgSendSDKType, MsgSendResponse, MsgSendResponseSDKType, MsgMultiSend, MsgMultiSendSDKType, MsgMultiSendResponse, MsgMultiSendResponseSDKType, MsgUpdateParams, MsgUpdateParamsSDKType, MsgUpdateParamsResponse, MsgUpdateParamsResponseSDKType, MsgSetSendEnabled, MsgSetSendEnabledSDKType, MsgSetSendEnabledResponse, MsgSetSendEnabledResponseSDKType } from "./tx";
export const createSend = (clientResolver?: SigningClientResolver) => buildTx<MsgSend>({
  clientResolver,
  typeUrl: MsgSend.typeUrl,
  encoders: toEncoders(MsgSend),
  converters: toConverters(MsgSend),
  deps: [MsgSend]
});
export const createMultiSend = (clientResolver?: SigningClientResolver) => buildTx<MsgMultiSend>({
  clientResolver,
  typeUrl: MsgMultiSend.typeUrl,
  encoders: toEncoders(MsgMultiSend),
  converters: toConverters(MsgMultiSend),
  deps: [MsgMultiSend]
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams),
  deps: [MsgUpdateParams]
});
export const createSetSendEnabled = (clientResolver?: SigningClientResolver) => buildTx<MsgSetSendEnabled>({
  clientResolver,
  typeUrl: MsgSetSendEnabled.typeUrl,
  encoders: toEncoders(MsgSetSendEnabled),
  converters: toConverters(MsgSetSendEnabled),
  deps: [MsgSetSendEnabled]
});