import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { TelescopeGeneratedType } from "../../../../types";
import { MsgCreateClient, MsgCreateClientSDKType, MsgUpdateClient, MsgUpdateClientSDKType, MsgUpgradeClient, MsgUpgradeClientSDKType, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/ibc.core.client.v1.MsgCreateClient", MsgCreateClient], ["/ibc.core.client.v1.MsgUpdateClient", MsgUpdateClient], ["/ibc.core.client.v1.MsgUpgradeClient", MsgUpgradeClient], ["/ibc.core.client.v1.MsgSubmitMisbehaviour", MsgSubmitMisbehaviour]];
export const MessageComposer = {
  encoded: {
    createClient(value: MsgCreateClient) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgCreateClient",
        value: MsgCreateClient.encode(value).finish()
      };
    },
    updateClient(value: MsgUpdateClient) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
        value: MsgUpdateClient.encode(value).finish()
      };
    },
    upgradeClient(value: MsgUpgradeClient) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
        value: MsgUpgradeClient.encode(value).finish()
      };
    },
    submitMisbehaviour(value: MsgSubmitMisbehaviour) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
        value: MsgSubmitMisbehaviour.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createClient(value: MsgCreateClient) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgCreateClient",
        value
      };
    },
    updateClient(value: MsgUpdateClient) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
        value
      };
    },
    upgradeClient(value: MsgUpgradeClient) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
        value
      };
    },
    submitMisbehaviour(value: MsgSubmitMisbehaviour) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
        value
      };
    }
  },
  toJSON: {
    createClient(value: MsgCreateClient) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgCreateClient",
        value: MsgCreateClient.toJSON(value)
      };
    },
    updateClient(value: MsgUpdateClient) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
        value: MsgUpdateClient.toJSON(value)
      };
    },
    upgradeClient(value: MsgUpgradeClient) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
        value: MsgUpgradeClient.toJSON(value)
      };
    },
    submitMisbehaviour(value: MsgSubmitMisbehaviour) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
        value: MsgSubmitMisbehaviour.toJSON(value)
      };
    }
  },
  fromJSON: {
    createClient(value: any) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgCreateClient",
        value: MsgCreateClient.fromJSON(value)
      };
    },
    updateClient(value: any) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
        value: MsgUpdateClient.fromJSON(value)
      };
    },
    upgradeClient(value: any) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
        value: MsgUpgradeClient.fromJSON(value)
      };
    },
    submitMisbehaviour(value: any) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
        value: MsgSubmitMisbehaviour.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createClient(value: MsgCreateClient) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgCreateClient",
        value: MsgCreateClient.fromPartial(value)
      };
    },
    updateClient(value: MsgUpdateClient) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
        value: MsgUpdateClient.fromPartial(value)
      };
    },
    upgradeClient(value: MsgUpgradeClient) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
        value: MsgUpgradeClient.fromPartial(value)
      };
    },
    submitMisbehaviour(value: MsgSubmitMisbehaviour) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
        value: MsgSubmitMisbehaviour.fromPartial(value)
      };
    }
  }
};