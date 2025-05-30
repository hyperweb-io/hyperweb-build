import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BasicAllowance, BasicAllowanceProtoMsg, BasicAllowanceSDKType, PeriodicAllowance, PeriodicAllowanceProtoMsg, PeriodicAllowanceSDKType, AllowedMsgAllowance, AllowedMsgAllowanceProtoMsg, AllowedMsgAllowanceSDKType } from "./feegrant";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.feegrant.v1beta1";
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowance {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee: string;
  /** allowance can be any of basic, periodic, allowed fee allowance. */
  allowance?: BasicAllowance | PeriodicAllowance | AllowedMsgAllowance | Any | undefined;
}
export interface MsgGrantAllowanceProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance";
  value: Uint8Array;
}
export type MsgGrantAllowanceEncoded = Omit<MsgGrantAllowance, "allowance"> & {
  /** allowance can be any of basic, periodic, allowed fee allowance. */allowance?: BasicAllowanceProtoMsg | PeriodicAllowanceProtoMsg | AllowedMsgAllowanceProtoMsg | AnyProtoMsg | undefined;
};
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowanceAmino {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee: string;
  /** allowance can be any of basic, periodic, allowed fee allowance. */
  allowance?: AnyAmino;
}
export interface MsgGrantAllowanceAminoMsg {
  type: "cosmos-sdk/MsgGrantAllowance";
  value: MsgGrantAllowanceAmino;
}
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowanceSDKType {
  granter: string;
  grantee: string;
  allowance?: BasicAllowanceSDKType | PeriodicAllowanceSDKType | AllowedMsgAllowanceSDKType | AnySDKType | undefined;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponse {}
export interface MsgGrantAllowanceResponseProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse";
  value: Uint8Array;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponseAmino {}
export interface MsgGrantAllowanceResponseAminoMsg {
  type: "cosmos-sdk/MsgGrantAllowanceResponse";
  value: MsgGrantAllowanceResponseAmino;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponseSDKType {}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowance {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee: string;
}
export interface MsgRevokeAllowanceProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance";
  value: Uint8Array;
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowanceAmino {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee: string;
}
export interface MsgRevokeAllowanceAminoMsg {
  type: "cosmos-sdk/MsgRevokeAllowance";
  value: MsgRevokeAllowanceAmino;
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowanceSDKType {
  granter: string;
  grantee: string;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponse {}
export interface MsgRevokeAllowanceResponseProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse";
  value: Uint8Array;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponseAmino {}
export interface MsgRevokeAllowanceResponseAminoMsg {
  type: "cosmos-sdk/MsgRevokeAllowanceResponse";
  value: MsgRevokeAllowanceResponseAmino;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponseSDKType {}
/**
 * MsgPruneAllowances prunes expired fee allowances.
 * 
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowances {
  /** pruner is the address of the user pruning expired allowances. */
  pruner: string;
}
export interface MsgPruneAllowancesProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances";
  value: Uint8Array;
}
/**
 * MsgPruneAllowances prunes expired fee allowances.
 * 
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowancesAmino {
  /** pruner is the address of the user pruning expired allowances. */
  pruner: string;
}
export interface MsgPruneAllowancesAminoMsg {
  type: "cosmos-sdk/MsgPruneAllowances";
  value: MsgPruneAllowancesAmino;
}
/**
 * MsgPruneAllowances prunes expired fee allowances.
 * 
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowancesSDKType {
  pruner: string;
}
/**
 * MsgPruneAllowancesResponse defines the Msg/PruneAllowancesResponse response type.
 * 
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowancesResponse {}
export interface MsgPruneAllowancesResponseProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowancesResponse";
  value: Uint8Array;
}
/**
 * MsgPruneAllowancesResponse defines the Msg/PruneAllowancesResponse response type.
 * 
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowancesResponseAmino {}
export interface MsgPruneAllowancesResponseAminoMsg {
  type: "cosmos-sdk/MsgPruneAllowancesResponse";
  value: MsgPruneAllowancesResponseAmino;
}
/**
 * MsgPruneAllowancesResponse defines the Msg/PruneAllowancesResponse response type.
 * 
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowancesResponseSDKType {}
function createBaseMsgGrantAllowance(): MsgGrantAllowance {
  return {
    granter: "",
    grantee: "",
    allowance: undefined
  };
}
export const MsgGrantAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
  aminoType: "cosmos-sdk/MsgGrantAllowance",
  is(o: any): o is MsgGrantAllowance {
    return o && (o.$typeUrl === MsgGrantAllowance.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  isSDK(o: any): o is MsgGrantAllowanceSDKType {
    return o && (o.$typeUrl === MsgGrantAllowance.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  isAmino(o: any): o is MsgGrantAllowanceAmino {
    return o && (o.$typeUrl === MsgGrantAllowance.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  encode(message: MsgGrantAllowance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== undefined) {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== undefined) {
      writer.uint32(18).string(message.grantee);
    }
    if (message.allowance !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.allowance), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantAllowance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.allowance = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgGrantAllowance {
    const obj = createBaseMsgGrantAllowance();
    if (isSet(object.granter)) obj.granter = String(object.granter);
    if (isSet(object.grantee)) obj.grantee = String(object.grantee);
    if (isSet(object.allowance)) obj.allowance = GlobalDecoderRegistry.fromJSON(object.allowance);
    return obj;
  },
  toJSON(message: MsgGrantAllowance): JsonSafe<MsgGrantAllowance> {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.allowance !== undefined && (obj.allowance = message.allowance ? GlobalDecoderRegistry.toJSON(message.allowance) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgGrantAllowance>): MsgGrantAllowance {
    const message = createBaseMsgGrantAllowance();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    if (object.allowance !== undefined && object.allowance !== null) {
      message.allowance = GlobalDecoderRegistry.fromPartial(object.allowance);
    }
    return message;
  },
  fromSDK(object: MsgGrantAllowanceSDKType): MsgGrantAllowance {
    return {
      granter: object?.granter,
      grantee: object?.grantee,
      allowance: object.allowance ? GlobalDecoderRegistry.fromSDK(object.allowance) : undefined
    };
  },
  toSDK(message: MsgGrantAllowance): MsgGrantAllowanceSDKType {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    message.allowance !== undefined && (obj.allowance = message.allowance ? GlobalDecoderRegistry.toSDK(message.allowance) : undefined);
    return obj;
  },
  fromAmino(object: MsgGrantAllowanceAmino): MsgGrantAllowance {
    const message = createBaseMsgGrantAllowance();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.allowance !== undefined && object.allowance !== null) {
      message.allowance = GlobalDecoderRegistry.fromAminoMsg(object.allowance);
    }
    return message;
  },
  toAmino(message: MsgGrantAllowance): MsgGrantAllowanceAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.allowance = message.allowance ? GlobalDecoderRegistry.toAminoMsg(message.allowance) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgGrantAllowanceAminoMsg): MsgGrantAllowance {
    return MsgGrantAllowance.fromAmino(object.value);
  },
  toAminoMsg(message: MsgGrantAllowance): MsgGrantAllowanceAminoMsg {
    return {
      type: "cosmos-sdk/MsgGrantAllowance",
      value: MsgGrantAllowance.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgGrantAllowanceProtoMsg): MsgGrantAllowance {
    return MsgGrantAllowance.decode(message.value);
  },
  toProto(message: MsgGrantAllowance): Uint8Array {
    return MsgGrantAllowance.encode(message).finish();
  },
  toProtoMsg(message: MsgGrantAllowance): MsgGrantAllowanceProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
      value: MsgGrantAllowance.encode(message).finish()
    };
  },
  registerTypeUrl() {
    BasicAllowance.registerTypeUrl();
    PeriodicAllowance.registerTypeUrl();
    AllowedMsgAllowance.registerTypeUrl();
  }
};
function createBaseMsgGrantAllowanceResponse(): MsgGrantAllowanceResponse {
  return {};
}
export const MsgGrantAllowanceResponse = {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse",
  aminoType: "cosmos-sdk/MsgGrantAllowanceResponse",
  is(o: any): o is MsgGrantAllowanceResponse {
    return o && o.$typeUrl === MsgGrantAllowanceResponse.typeUrl;
  },
  isSDK(o: any): o is MsgGrantAllowanceResponseSDKType {
    return o && o.$typeUrl === MsgGrantAllowanceResponse.typeUrl;
  },
  isAmino(o: any): o is MsgGrantAllowanceResponseAmino {
    return o && o.$typeUrl === MsgGrantAllowanceResponse.typeUrl;
  },
  encode(_: MsgGrantAllowanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantAllowanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantAllowanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgGrantAllowanceResponse {
    const obj = createBaseMsgGrantAllowanceResponse();
    return obj;
  },
  toJSON(_: MsgGrantAllowanceResponse): JsonSafe<MsgGrantAllowanceResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgGrantAllowanceResponse>): MsgGrantAllowanceResponse {
    const message = createBaseMsgGrantAllowanceResponse();
    return message;
  },
  fromSDK(_: MsgGrantAllowanceResponseSDKType): MsgGrantAllowanceResponse {
    return {};
  },
  toSDK(_: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgGrantAllowanceResponseAmino): MsgGrantAllowanceResponse {
    const message = createBaseMsgGrantAllowanceResponse();
    return message;
  },
  toAmino(_: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGrantAllowanceResponseAminoMsg): MsgGrantAllowanceResponse {
    return MsgGrantAllowanceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgGrantAllowanceResponse",
      value: MsgGrantAllowanceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgGrantAllowanceResponseProtoMsg): MsgGrantAllowanceResponse {
    return MsgGrantAllowanceResponse.decode(message.value);
  },
  toProto(message: MsgGrantAllowanceResponse): Uint8Array {
    return MsgGrantAllowanceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse",
      value: MsgGrantAllowanceResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgRevokeAllowance(): MsgRevokeAllowance {
  return {
    granter: "",
    grantee: ""
  };
}
export const MsgRevokeAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
  aminoType: "cosmos-sdk/MsgRevokeAllowance",
  is(o: any): o is MsgRevokeAllowance {
    return o && (o.$typeUrl === MsgRevokeAllowance.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  isSDK(o: any): o is MsgRevokeAllowanceSDKType {
    return o && (o.$typeUrl === MsgRevokeAllowance.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  isAmino(o: any): o is MsgRevokeAllowanceAmino {
    return o && (o.$typeUrl === MsgRevokeAllowance.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  encode(message: MsgRevokeAllowance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== undefined) {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== undefined) {
      writer.uint32(18).string(message.grantee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeAllowance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRevokeAllowance {
    const obj = createBaseMsgRevokeAllowance();
    if (isSet(object.granter)) obj.granter = String(object.granter);
    if (isSet(object.grantee)) obj.grantee = String(object.grantee);
    return obj;
  },
  toJSON(message: MsgRevokeAllowance): JsonSafe<MsgRevokeAllowance> {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgRevokeAllowance>): MsgRevokeAllowance {
    const message = createBaseMsgRevokeAllowance();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromSDK(object: MsgRevokeAllowanceSDKType): MsgRevokeAllowance {
    return {
      granter: object?.granter,
      grantee: object?.grantee
    };
  },
  toSDK(message: MsgRevokeAllowance): MsgRevokeAllowanceSDKType {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    return obj;
  },
  fromAmino(object: MsgRevokeAllowanceAmino): MsgRevokeAllowance {
    const message = createBaseMsgRevokeAllowance();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    return message;
  },
  toAmino(message: MsgRevokeAllowance): MsgRevokeAllowanceAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeAllowanceAminoMsg): MsgRevokeAllowance {
    return MsgRevokeAllowance.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevokeAllowance): MsgRevokeAllowanceAminoMsg {
    return {
      type: "cosmos-sdk/MsgRevokeAllowance",
      value: MsgRevokeAllowance.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevokeAllowanceProtoMsg): MsgRevokeAllowance {
    return MsgRevokeAllowance.decode(message.value);
  },
  toProto(message: MsgRevokeAllowance): Uint8Array {
    return MsgRevokeAllowance.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeAllowance): MsgRevokeAllowanceProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
      value: MsgRevokeAllowance.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgRevokeAllowanceResponse(): MsgRevokeAllowanceResponse {
  return {};
}
export const MsgRevokeAllowanceResponse = {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse",
  aminoType: "cosmos-sdk/MsgRevokeAllowanceResponse",
  is(o: any): o is MsgRevokeAllowanceResponse {
    return o && o.$typeUrl === MsgRevokeAllowanceResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRevokeAllowanceResponseSDKType {
    return o && o.$typeUrl === MsgRevokeAllowanceResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRevokeAllowanceResponseAmino {
    return o && o.$typeUrl === MsgRevokeAllowanceResponse.typeUrl;
  },
  encode(_: MsgRevokeAllowanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeAllowanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllowanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRevokeAllowanceResponse {
    const obj = createBaseMsgRevokeAllowanceResponse();
    return obj;
  },
  toJSON(_: MsgRevokeAllowanceResponse): JsonSafe<MsgRevokeAllowanceResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgRevokeAllowanceResponse>): MsgRevokeAllowanceResponse {
    const message = createBaseMsgRevokeAllowanceResponse();
    return message;
  },
  fromSDK(_: MsgRevokeAllowanceResponseSDKType): MsgRevokeAllowanceResponse {
    return {};
  },
  toSDK(_: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgRevokeAllowanceResponseAmino): MsgRevokeAllowanceResponse {
    const message = createBaseMsgRevokeAllowanceResponse();
    return message;
  },
  toAmino(_: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeAllowanceResponseAminoMsg): MsgRevokeAllowanceResponse {
    return MsgRevokeAllowanceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRevokeAllowanceResponse",
      value: MsgRevokeAllowanceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevokeAllowanceResponseProtoMsg): MsgRevokeAllowanceResponse {
    return MsgRevokeAllowanceResponse.decode(message.value);
  },
  toProto(message: MsgRevokeAllowanceResponse): Uint8Array {
    return MsgRevokeAllowanceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse",
      value: MsgRevokeAllowanceResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgPruneAllowances(): MsgPruneAllowances {
  return {
    pruner: ""
  };
}
export const MsgPruneAllowances = {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
  aminoType: "cosmos-sdk/MsgPruneAllowances",
  is(o: any): o is MsgPruneAllowances {
    return o && (o.$typeUrl === MsgPruneAllowances.typeUrl || typeof o.pruner === "string");
  },
  isSDK(o: any): o is MsgPruneAllowancesSDKType {
    return o && (o.$typeUrl === MsgPruneAllowances.typeUrl || typeof o.pruner === "string");
  },
  isAmino(o: any): o is MsgPruneAllowancesAmino {
    return o && (o.$typeUrl === MsgPruneAllowances.typeUrl || typeof o.pruner === "string");
  },
  encode(message: MsgPruneAllowances, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pruner !== undefined) {
      writer.uint32(10).string(message.pruner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPruneAllowances {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPruneAllowances();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pruner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPruneAllowances {
    const obj = createBaseMsgPruneAllowances();
    if (isSet(object.pruner)) obj.pruner = String(object.pruner);
    return obj;
  },
  toJSON(message: MsgPruneAllowances): JsonSafe<MsgPruneAllowances> {
    const obj: any = {};
    message.pruner !== undefined && (obj.pruner = message.pruner);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgPruneAllowances>): MsgPruneAllowances {
    const message = createBaseMsgPruneAllowances();
    message.pruner = object.pruner ?? "";
    return message;
  },
  fromSDK(object: MsgPruneAllowancesSDKType): MsgPruneAllowances {
    return {
      pruner: object?.pruner
    };
  },
  toSDK(message: MsgPruneAllowances): MsgPruneAllowancesSDKType {
    const obj: any = {};
    obj.pruner = message.pruner;
    return obj;
  },
  fromAmino(object: MsgPruneAllowancesAmino): MsgPruneAllowances {
    const message = createBaseMsgPruneAllowances();
    if (object.pruner !== undefined && object.pruner !== null) {
      message.pruner = object.pruner;
    }
    return message;
  },
  toAmino(message: MsgPruneAllowances): MsgPruneAllowancesAmino {
    const obj: any = {};
    obj.pruner = message.pruner === "" ? undefined : message.pruner;
    return obj;
  },
  fromAminoMsg(object: MsgPruneAllowancesAminoMsg): MsgPruneAllowances {
    return MsgPruneAllowances.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPruneAllowances): MsgPruneAllowancesAminoMsg {
    return {
      type: "cosmos-sdk/MsgPruneAllowances",
      value: MsgPruneAllowances.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPruneAllowancesProtoMsg): MsgPruneAllowances {
    return MsgPruneAllowances.decode(message.value);
  },
  toProto(message: MsgPruneAllowances): Uint8Array {
    return MsgPruneAllowances.encode(message).finish();
  },
  toProtoMsg(message: MsgPruneAllowances): MsgPruneAllowancesProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
      value: MsgPruneAllowances.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgPruneAllowancesResponse(): MsgPruneAllowancesResponse {
  return {};
}
export const MsgPruneAllowancesResponse = {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowancesResponse",
  aminoType: "cosmos-sdk/MsgPruneAllowancesResponse",
  is(o: any): o is MsgPruneAllowancesResponse {
    return o && o.$typeUrl === MsgPruneAllowancesResponse.typeUrl;
  },
  isSDK(o: any): o is MsgPruneAllowancesResponseSDKType {
    return o && o.$typeUrl === MsgPruneAllowancesResponse.typeUrl;
  },
  isAmino(o: any): o is MsgPruneAllowancesResponseAmino {
    return o && o.$typeUrl === MsgPruneAllowancesResponse.typeUrl;
  },
  encode(_: MsgPruneAllowancesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPruneAllowancesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPruneAllowancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgPruneAllowancesResponse {
    const obj = createBaseMsgPruneAllowancesResponse();
    return obj;
  },
  toJSON(_: MsgPruneAllowancesResponse): JsonSafe<MsgPruneAllowancesResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgPruneAllowancesResponse>): MsgPruneAllowancesResponse {
    const message = createBaseMsgPruneAllowancesResponse();
    return message;
  },
  fromSDK(_: MsgPruneAllowancesResponseSDKType): MsgPruneAllowancesResponse {
    return {};
  },
  toSDK(_: MsgPruneAllowancesResponse): MsgPruneAllowancesResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgPruneAllowancesResponseAmino): MsgPruneAllowancesResponse {
    const message = createBaseMsgPruneAllowancesResponse();
    return message;
  },
  toAmino(_: MsgPruneAllowancesResponse): MsgPruneAllowancesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPruneAllowancesResponseAminoMsg): MsgPruneAllowancesResponse {
    return MsgPruneAllowancesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPruneAllowancesResponse): MsgPruneAllowancesResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgPruneAllowancesResponse",
      value: MsgPruneAllowancesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPruneAllowancesResponseProtoMsg): MsgPruneAllowancesResponse {
    return MsgPruneAllowancesResponse.decode(message.value);
  },
  toProto(message: MsgPruneAllowancesResponse): Uint8Array {
    return MsgPruneAllowancesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPruneAllowancesResponse): MsgPruneAllowancesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowancesResponse",
      value: MsgPruneAllowancesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};