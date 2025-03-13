import { Plan, PlanSDKType } from "./upgrade";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSoftwareUpgrade, MsgSoftwareUpgradeSDKType, MsgSoftwareUpgradeResponse, MsgSoftwareUpgradeResponseSDKType, MsgCancelUpgrade, MsgCancelUpgradeSDKType, MsgCancelUpgradeResponse, MsgCancelUpgradeResponseSDKType } from "./tx";
export const createSoftwareUpgrade = (clientResolver?: SigningClientResolver) => buildTx<MsgSoftwareUpgrade>({
  clientResolver,
  typeUrl: MsgSoftwareUpgrade.typeUrl,
  encoders: toEncoders(MsgSoftwareUpgrade),
  converters: toConverters(MsgSoftwareUpgrade),
  deps: [MsgSoftwareUpgrade]
});
export const createCancelUpgrade = (clientResolver?: SigningClientResolver) => buildTx<MsgCancelUpgrade>({
  clientResolver,
  typeUrl: MsgCancelUpgrade.typeUrl,
  encoders: toEncoders(MsgCancelUpgrade),
  converters: toConverters(MsgCancelUpgrade),
  deps: [MsgCancelUpgrade]
});