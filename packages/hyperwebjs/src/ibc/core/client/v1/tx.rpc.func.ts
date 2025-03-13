import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateClient, MsgCreateClientSDKType, MsgCreateClientResponse, MsgCreateClientResponseSDKType, MsgUpdateClient, MsgUpdateClientSDKType, MsgUpdateClientResponse, MsgUpdateClientResponseSDKType, MsgUpgradeClient, MsgUpgradeClientSDKType, MsgUpgradeClientResponse, MsgUpgradeClientResponseSDKType, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourSDKType, MsgSubmitMisbehaviourResponse, MsgSubmitMisbehaviourResponseSDKType } from "./tx";
export const createCreateClient = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateClient>({
  clientResolver,
  typeUrl: MsgCreateClient.typeUrl,
  encoders: toEncoders(MsgCreateClient),
  converters: toConverters(MsgCreateClient),
  deps: [MsgCreateClient]
});
export const createUpdateClient = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateClient>({
  clientResolver,
  typeUrl: MsgUpdateClient.typeUrl,
  encoders: toEncoders(MsgUpdateClient),
  converters: toConverters(MsgUpdateClient),
  deps: [MsgUpdateClient]
});
export const createUpgradeClient = (clientResolver?: SigningClientResolver) => buildTx<MsgUpgradeClient>({
  clientResolver,
  typeUrl: MsgUpgradeClient.typeUrl,
  encoders: toEncoders(MsgUpgradeClient),
  converters: toConverters(MsgUpgradeClient),
  deps: [MsgUpgradeClient]
});
export const createSubmitMisbehaviour = (clientResolver?: SigningClientResolver) => buildTx<MsgSubmitMisbehaviour>({
  clientResolver,
  typeUrl: MsgSubmitMisbehaviour.typeUrl,
  encoders: toEncoders(MsgSubmitMisbehaviour),
  converters: toConverters(MsgSubmitMisbehaviour),
  deps: [MsgSubmitMisbehaviour]
});