import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Period, PeriodSDKType } from "./vesting";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateVestingAccount, MsgCreateVestingAccountSDKType, MsgCreateVestingAccountResponse, MsgCreateVestingAccountResponseSDKType, MsgCreatePermanentLockedAccount, MsgCreatePermanentLockedAccountSDKType, MsgCreatePermanentLockedAccountResponse, MsgCreatePermanentLockedAccountResponseSDKType, MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccountSDKType, MsgCreatePeriodicVestingAccountResponse, MsgCreatePeriodicVestingAccountResponseSDKType } from "./tx";
export const createCreateVestingAccount = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateVestingAccount>({
  clientResolver,
  typeUrl: MsgCreateVestingAccount.typeUrl,
  encoders: toEncoders(MsgCreateVestingAccount),
  converters: toConverters(MsgCreateVestingAccount),
  deps: [MsgCreateVestingAccount]
});
export const createCreatePermanentLockedAccount = (clientResolver?: SigningClientResolver) => buildTx<MsgCreatePermanentLockedAccount>({
  clientResolver,
  typeUrl: MsgCreatePermanentLockedAccount.typeUrl,
  encoders: toEncoders(MsgCreatePermanentLockedAccount),
  converters: toConverters(MsgCreatePermanentLockedAccount),
  deps: [MsgCreatePermanentLockedAccount]
});
export const createCreatePeriodicVestingAccount = (clientResolver?: SigningClientResolver) => buildTx<MsgCreatePeriodicVestingAccount>({
  clientResolver,
  typeUrl: MsgCreatePeriodicVestingAccount.typeUrl,
  encoders: toEncoders(MsgCreatePeriodicVestingAccount),
  converters: toConverters(MsgCreatePeriodicVestingAccount),
  deps: [MsgCreatePeriodicVestingAccount]
});