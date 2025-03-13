import { Params, ParamsSDKType } from "./params";
import { buildTx, ISigningClient, SigningClientResolver } from "../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgUpdateParams, MsgUpdateParamsSDKType, MsgUpdateParamsResponse, MsgUpdateParamsResponseSDKType, MsgInstantiate, MsgInstantiateSDKType, MsgInstantiateResponse, MsgInstantiateResponseSDKType, MsgEval, MsgEvalSDKType, MsgEvalResponse, MsgEvalResponseSDKType } from "./tx";
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams),
  deps: [MsgUpdateParams]
});
export const createInstantiate = (clientResolver?: SigningClientResolver) => buildTx<MsgInstantiate>({
  clientResolver,
  typeUrl: MsgInstantiate.typeUrl,
  encoders: toEncoders(MsgInstantiate),
  converters: toConverters(MsgInstantiate),
  deps: [MsgInstantiate]
});
export const createEval = (clientResolver?: SigningClientResolver) => buildTx<MsgEval>({
  clientResolver,
  typeUrl: MsgEval.typeUrl,
  encoders: toEncoders(MsgEval),
  converters: toConverters(MsgEval),
  deps: [MsgEval]
});