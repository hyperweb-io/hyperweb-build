import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Params, ParamsSDKType } from "./distribution";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressSDKType, MsgSetWithdrawAddressResponse, MsgSetWithdrawAddressResponseSDKType, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardSDKType, MsgWithdrawDelegatorRewardResponse, MsgWithdrawDelegatorRewardResponseSDKType, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionSDKType, MsgWithdrawValidatorCommissionResponse, MsgWithdrawValidatorCommissionResponseSDKType, MsgFundCommunityPool, MsgFundCommunityPoolSDKType, MsgFundCommunityPoolResponse, MsgFundCommunityPoolResponseSDKType, MsgUpdateParams, MsgUpdateParamsSDKType, MsgUpdateParamsResponse, MsgUpdateParamsResponseSDKType, MsgCommunityPoolSpend, MsgCommunityPoolSpendSDKType, MsgCommunityPoolSpendResponse, MsgCommunityPoolSpendResponseSDKType, MsgDepositValidatorRewardsPool, MsgDepositValidatorRewardsPoolSDKType, MsgDepositValidatorRewardsPoolResponse, MsgDepositValidatorRewardsPoolResponseSDKType } from "./tx";
export const createSetWithdrawAddress = (clientResolver?: SigningClientResolver) => buildTx<MsgSetWithdrawAddress>({
  clientResolver,
  typeUrl: MsgSetWithdrawAddress.typeUrl,
  encoders: toEncoders(MsgSetWithdrawAddress),
  converters: toConverters(MsgSetWithdrawAddress),
  deps: [MsgSetWithdrawAddress]
});
export const createWithdrawDelegatorReward = (clientResolver?: SigningClientResolver) => buildTx<MsgWithdrawDelegatorReward>({
  clientResolver,
  typeUrl: MsgWithdrawDelegatorReward.typeUrl,
  encoders: toEncoders(MsgWithdrawDelegatorReward),
  converters: toConverters(MsgWithdrawDelegatorReward),
  deps: [MsgWithdrawDelegatorReward]
});
export const createWithdrawValidatorCommission = (clientResolver?: SigningClientResolver) => buildTx<MsgWithdrawValidatorCommission>({
  clientResolver,
  typeUrl: MsgWithdrawValidatorCommission.typeUrl,
  encoders: toEncoders(MsgWithdrawValidatorCommission),
  converters: toConverters(MsgWithdrawValidatorCommission),
  deps: [MsgWithdrawValidatorCommission]
});
export const createFundCommunityPool = (clientResolver?: SigningClientResolver) => buildTx<MsgFundCommunityPool>({
  clientResolver,
  typeUrl: MsgFundCommunityPool.typeUrl,
  encoders: toEncoders(MsgFundCommunityPool),
  converters: toConverters(MsgFundCommunityPool),
  deps: [MsgFundCommunityPool]
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams),
  deps: [MsgUpdateParams]
});
export const createCommunityPoolSpend = (clientResolver?: SigningClientResolver) => buildTx<MsgCommunityPoolSpend>({
  clientResolver,
  typeUrl: MsgCommunityPoolSpend.typeUrl,
  encoders: toEncoders(MsgCommunityPoolSpend),
  converters: toConverters(MsgCommunityPoolSpend),
  deps: [MsgCommunityPoolSpend]
});
export const createDepositValidatorRewardsPool = (clientResolver?: SigningClientResolver) => buildTx<MsgDepositValidatorRewardsPool>({
  clientResolver,
  typeUrl: MsgDepositValidatorRewardsPool.typeUrl,
  encoders: toEncoders(MsgDepositValidatorRewardsPool),
  converters: toConverters(MsgDepositValidatorRewardsPool),
  deps: [MsgDepositValidatorRewardsPool]
});