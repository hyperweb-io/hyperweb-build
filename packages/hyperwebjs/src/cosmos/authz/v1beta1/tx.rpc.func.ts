import { Grant, GrantSDKType } from "./authz";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgGrant, MsgGrantSDKType, MsgGrantResponse, MsgGrantResponseSDKType, MsgExec, MsgExecSDKType, MsgExecResponse, MsgExecResponseSDKType, MsgRevoke, MsgRevokeSDKType, MsgRevokeResponse, MsgRevokeResponseSDKType } from "./tx";
export const createGrant = (clientResolver?: SigningClientResolver) => buildTx<MsgGrant>({
  clientResolver,
  typeUrl: MsgGrant.typeUrl,
  encoders: toEncoders(MsgGrant),
  converters: toConverters(MsgGrant),
  deps: [MsgGrant]
});
export const createExec = (clientResolver?: SigningClientResolver) => buildTx<MsgExec>({
  clientResolver,
  typeUrl: MsgExec.typeUrl,
  encoders: toEncoders(MsgExec),
  converters: toConverters(MsgExec),
  deps: [MsgExec]
});
export const createRevoke = (clientResolver?: SigningClientResolver) => buildTx<MsgRevoke>({
  clientResolver,
  typeUrl: MsgRevoke.typeUrl,
  encoders: toEncoders(MsgRevoke),
  converters: toConverters(MsgRevoke),
  deps: [MsgRevoke]
});