import { AccessConfig, AccessConfigSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgStoreCode, MsgStoreCodeSDKType, MsgStoreCodeResponse, MsgStoreCodeResponseSDKType, MsgInstantiateContract, MsgInstantiateContractSDKType, MsgInstantiateContractResponse, MsgInstantiateContractResponseSDKType, MsgInstantiateContract2, MsgInstantiateContract2SDKType, MsgInstantiateContract2Response, MsgInstantiateContract2ResponseSDKType, MsgExecuteContract, MsgExecuteContractSDKType, MsgExecuteContractResponse, MsgExecuteContractResponseSDKType, MsgMigrateContract, MsgMigrateContractSDKType, MsgMigrateContractResponse, MsgMigrateContractResponseSDKType, MsgUpdateAdmin, MsgUpdateAdminSDKType, MsgUpdateAdminResponse, MsgUpdateAdminResponseSDKType, MsgClearAdmin, MsgClearAdminSDKType, MsgClearAdminResponse, MsgClearAdminResponseSDKType } from "./tx";
export const createStoreCode = (clientResolver?: SigningClientResolver) => buildTx<MsgStoreCode>({
  clientResolver,
  typeUrl: MsgStoreCode.typeUrl,
  encoders: toEncoders(MsgStoreCode),
  converters: toConverters(MsgStoreCode),
  deps: [MsgStoreCode]
});
export const createInstantiateContract = (clientResolver?: SigningClientResolver) => buildTx<MsgInstantiateContract>({
  clientResolver,
  typeUrl: MsgInstantiateContract.typeUrl,
  encoders: toEncoders(MsgInstantiateContract),
  converters: toConverters(MsgInstantiateContract),
  deps: [MsgInstantiateContract]
});
export const createInstantiateContract2 = (clientResolver?: SigningClientResolver) => buildTx<MsgInstantiateContract2>({
  clientResolver,
  typeUrl: MsgInstantiateContract2.typeUrl,
  encoders: toEncoders(MsgInstantiateContract2),
  converters: toConverters(MsgInstantiateContract2),
  deps: [MsgInstantiateContract2]
});
export const createExecuteContract = (clientResolver?: SigningClientResolver) => buildTx<MsgExecuteContract>({
  clientResolver,
  typeUrl: MsgExecuteContract.typeUrl,
  encoders: toEncoders(MsgExecuteContract),
  converters: toConverters(MsgExecuteContract),
  deps: [MsgExecuteContract]
});
export const createMigrateContract = (clientResolver?: SigningClientResolver) => buildTx<MsgMigrateContract>({
  clientResolver,
  typeUrl: MsgMigrateContract.typeUrl,
  encoders: toEncoders(MsgMigrateContract),
  converters: toConverters(MsgMigrateContract),
  deps: [MsgMigrateContract]
});
export const createUpdateAdmin = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateAdmin>({
  clientResolver,
  typeUrl: MsgUpdateAdmin.typeUrl,
  encoders: toEncoders(MsgUpdateAdmin),
  converters: toConverters(MsgUpdateAdmin),
  deps: [MsgUpdateAdmin]
});
export const createClearAdmin = (clientResolver?: SigningClientResolver) => buildTx<MsgClearAdmin>({
  clientResolver,
  typeUrl: MsgClearAdmin.typeUrl,
  encoders: toEncoders(MsgClearAdmin),
  converters: toConverters(MsgClearAdmin),
  deps: [MsgClearAdmin]
});