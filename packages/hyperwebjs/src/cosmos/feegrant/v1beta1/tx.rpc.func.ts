import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BasicAllowance, BasicAllowanceSDKType, PeriodicAllowance, PeriodicAllowanceSDKType, AllowedMsgAllowance, AllowedMsgAllowanceSDKType } from "./feegrant";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgGrantAllowance, MsgGrantAllowanceSDKType, MsgGrantAllowanceResponse, MsgGrantAllowanceResponseSDKType, MsgRevokeAllowance, MsgRevokeAllowanceSDKType, MsgRevokeAllowanceResponse, MsgRevokeAllowanceResponseSDKType, MsgPruneAllowances, MsgPruneAllowancesSDKType, MsgPruneAllowancesResponse, MsgPruneAllowancesResponseSDKType } from "./tx";
export const createGrantAllowance = (clientResolver?: SigningClientResolver) => buildTx<MsgGrantAllowance>({
  clientResolver,
  typeUrl: MsgGrantAllowance.typeUrl,
  encoders: toEncoders(MsgGrantAllowance),
  converters: toConverters(MsgGrantAllowance),
  deps: [MsgGrantAllowance]
});
export const createRevokeAllowance = (clientResolver?: SigningClientResolver) => buildTx<MsgRevokeAllowance>({
  clientResolver,
  typeUrl: MsgRevokeAllowance.typeUrl,
  encoders: toEncoders(MsgRevokeAllowance),
  converters: toConverters(MsgRevokeAllowance),
  deps: [MsgRevokeAllowance]
});
export const createPruneAllowances = (clientResolver?: SigningClientResolver) => buildTx<MsgPruneAllowances>({
  clientResolver,
  typeUrl: MsgPruneAllowances.typeUrl,
  encoders: toEncoders(MsgPruneAllowances),
  converters: toConverters(MsgPruneAllowances),
  deps: [MsgPruneAllowances]
});