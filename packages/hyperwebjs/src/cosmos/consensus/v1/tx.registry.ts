import { BlockParams, BlockParamsSDKType, EvidenceParams, EvidenceParamsSDKType, ValidatorParams, ValidatorParamsSDKType, ABCIParams, ABCIParamsSDKType } from "../../../tendermint/types/params";
import { TelescopeGeneratedType } from "../../../types";
import { MsgUpdateParams, MsgUpdateParamsSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/cosmos.consensus.v1.MsgUpdateParams", MsgUpdateParams]];
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.consensus.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.consensus.v1.MsgUpdateParams",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.consensus.v1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/cosmos.consensus.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.consensus.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};