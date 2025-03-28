import { Counterparty, CounterpartySDKType, Version, VersionSDKType } from "./connection";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightSDKType } from "../../client/v1/client";
import { TelescopeGeneratedType } from "../../../../types";
import { MsgConnectionOpenInit, MsgConnectionOpenInitSDKType, MsgConnectionOpenTry, MsgConnectionOpenTrySDKType, MsgConnectionOpenAck, MsgConnectionOpenAckSDKType, MsgConnectionOpenConfirm, MsgConnectionOpenConfirmSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/ibc.core.connection.v1.MsgConnectionOpenInit", MsgConnectionOpenInit], ["/ibc.core.connection.v1.MsgConnectionOpenTry", MsgConnectionOpenTry], ["/ibc.core.connection.v1.MsgConnectionOpenAck", MsgConnectionOpenAck], ["/ibc.core.connection.v1.MsgConnectionOpenConfirm", MsgConnectionOpenConfirm]];
export const MessageComposer = {
  encoded: {
    connectionOpenInit(value: MsgConnectionOpenInit) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
        value: MsgConnectionOpenInit.encode(value).finish()
      };
    },
    connectionOpenTry(value: MsgConnectionOpenTry) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
        value: MsgConnectionOpenTry.encode(value).finish()
      };
    },
    connectionOpenAck(value: MsgConnectionOpenAck) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
        value: MsgConnectionOpenAck.encode(value).finish()
      };
    },
    connectionOpenConfirm(value: MsgConnectionOpenConfirm) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
        value: MsgConnectionOpenConfirm.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    connectionOpenInit(value: MsgConnectionOpenInit) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
        value
      };
    },
    connectionOpenTry(value: MsgConnectionOpenTry) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
        value
      };
    },
    connectionOpenAck(value: MsgConnectionOpenAck) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
        value
      };
    },
    connectionOpenConfirm(value: MsgConnectionOpenConfirm) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
        value
      };
    }
  },
  toJSON: {
    connectionOpenInit(value: MsgConnectionOpenInit) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
        value: MsgConnectionOpenInit.toJSON(value)
      };
    },
    connectionOpenTry(value: MsgConnectionOpenTry) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
        value: MsgConnectionOpenTry.toJSON(value)
      };
    },
    connectionOpenAck(value: MsgConnectionOpenAck) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
        value: MsgConnectionOpenAck.toJSON(value)
      };
    },
    connectionOpenConfirm(value: MsgConnectionOpenConfirm) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
        value: MsgConnectionOpenConfirm.toJSON(value)
      };
    }
  },
  fromJSON: {
    connectionOpenInit(value: any) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
        value: MsgConnectionOpenInit.fromJSON(value)
      };
    },
    connectionOpenTry(value: any) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
        value: MsgConnectionOpenTry.fromJSON(value)
      };
    },
    connectionOpenAck(value: any) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
        value: MsgConnectionOpenAck.fromJSON(value)
      };
    },
    connectionOpenConfirm(value: any) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
        value: MsgConnectionOpenConfirm.fromJSON(value)
      };
    }
  },
  fromPartial: {
    connectionOpenInit(value: MsgConnectionOpenInit) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
        value: MsgConnectionOpenInit.fromPartial(value)
      };
    },
    connectionOpenTry(value: MsgConnectionOpenTry) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
        value: MsgConnectionOpenTry.fromPartial(value)
      };
    },
    connectionOpenAck(value: MsgConnectionOpenAck) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
        value: MsgConnectionOpenAck.fromPartial(value)
      };
    },
    connectionOpenConfirm(value: MsgConnectionOpenConfirm) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
        value: MsgConnectionOpenConfirm.fromPartial(value)
      };
    }
  }
};