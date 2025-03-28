import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Params, ParamsSDKType } from "./distribution";
import { TelescopeGeneratedType } from "../../../types";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressSDKType, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardSDKType, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionSDKType, MsgFundCommunityPool, MsgFundCommunityPoolSDKType, MsgUpdateParams, MsgUpdateParamsSDKType, MsgCommunityPoolSpend, MsgCommunityPoolSpendSDKType, MsgDepositValidatorRewardsPool, MsgDepositValidatorRewardsPoolSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", MsgSetWithdrawAddress], ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", MsgWithdrawDelegatorReward], ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", MsgWithdrawValidatorCommission], ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", MsgFundCommunityPool], ["/cosmos.distribution.v1beta1.MsgUpdateParams", MsgUpdateParams], ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", MsgCommunityPoolSpend], ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool", MsgDepositValidatorRewardsPool]];
export const MessageComposer = {
  encoded: {
    setWithdrawAddress(value: MsgSetWithdrawAddress) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
        value: MsgSetWithdrawAddress.encode(value).finish()
      };
    },
    withdrawDelegatorReward(value: MsgWithdrawDelegatorReward) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value: MsgWithdrawDelegatorReward.encode(value).finish()
      };
    },
    withdrawValidatorCommission(value: MsgWithdrawValidatorCommission) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
        value: MsgWithdrawValidatorCommission.encode(value).finish()
      };
    },
    fundCommunityPool(value: MsgFundCommunityPool) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
        value: MsgFundCommunityPool.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    communityPoolSpend(value: MsgCommunityPoolSpend) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
        value: MsgCommunityPoolSpend.encode(value).finish()
      };
    },
    depositValidatorRewardsPool(value: MsgDepositValidatorRewardsPool) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool",
        value: MsgDepositValidatorRewardsPool.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    setWithdrawAddress(value: MsgSetWithdrawAddress) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
        value
      };
    },
    withdrawDelegatorReward(value: MsgWithdrawDelegatorReward) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value
      };
    },
    withdrawValidatorCommission(value: MsgWithdrawValidatorCommission) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
        value
      };
    },
    fundCommunityPool(value: MsgFundCommunityPool) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
        value
      };
    },
    communityPoolSpend(value: MsgCommunityPoolSpend) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
        value
      };
    },
    depositValidatorRewardsPool(value: MsgDepositValidatorRewardsPool) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool",
        value
      };
    }
  },
  toJSON: {
    setWithdrawAddress(value: MsgSetWithdrawAddress) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
        value: MsgSetWithdrawAddress.toJSON(value)
      };
    },
    withdrawDelegatorReward(value: MsgWithdrawDelegatorReward) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value: MsgWithdrawDelegatorReward.toJSON(value)
      };
    },
    withdrawValidatorCommission(value: MsgWithdrawValidatorCommission) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
        value: MsgWithdrawValidatorCommission.toJSON(value)
      };
    },
    fundCommunityPool(value: MsgFundCommunityPool) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
        value: MsgFundCommunityPool.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    communityPoolSpend(value: MsgCommunityPoolSpend) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
        value: MsgCommunityPoolSpend.toJSON(value)
      };
    },
    depositValidatorRewardsPool(value: MsgDepositValidatorRewardsPool) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool",
        value: MsgDepositValidatorRewardsPool.toJSON(value)
      };
    }
  },
  fromJSON: {
    setWithdrawAddress(value: any) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
        value: MsgSetWithdrawAddress.fromJSON(value)
      };
    },
    withdrawDelegatorReward(value: any) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value: MsgWithdrawDelegatorReward.fromJSON(value)
      };
    },
    withdrawValidatorCommission(value: any) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
        value: MsgWithdrawValidatorCommission.fromJSON(value)
      };
    },
    fundCommunityPool(value: any) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
        value: MsgFundCommunityPool.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    communityPoolSpend(value: any) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
        value: MsgCommunityPoolSpend.fromJSON(value)
      };
    },
    depositValidatorRewardsPool(value: any) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool",
        value: MsgDepositValidatorRewardsPool.fromJSON(value)
      };
    }
  },
  fromPartial: {
    setWithdrawAddress(value: MsgSetWithdrawAddress) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
        value: MsgSetWithdrawAddress.fromPartial(value)
      };
    },
    withdrawDelegatorReward(value: MsgWithdrawDelegatorReward) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value: MsgWithdrawDelegatorReward.fromPartial(value)
      };
    },
    withdrawValidatorCommission(value: MsgWithdrawValidatorCommission) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
        value: MsgWithdrawValidatorCommission.fromPartial(value)
      };
    },
    fundCommunityPool(value: MsgFundCommunityPool) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
        value: MsgFundCommunityPool.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    communityPoolSpend(value: MsgCommunityPoolSpend) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
        value: MsgCommunityPoolSpend.fromPartial(value)
      };
    },
    depositValidatorRewardsPool(value: MsgDepositValidatorRewardsPool) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool",
        value: MsgDepositValidatorRewardsPool.fromPartial(value)
      };
    }
  }
};