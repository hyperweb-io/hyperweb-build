import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "cosmos.gov.module.v1";
/** Module is the config object of the gov module. */
export interface Module {
  /**
   * max_metadata_len defines the maximum proposal metadata length.
   * Defaults to 255 if not explicitly set.
   */
  maxMetadataLen: bigint;
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.gov.module.v1.Module";
  value: Uint8Array;
}
/** Module is the config object of the gov module. */
export interface ModuleAmino {
  /**
   * max_metadata_len defines the maximum proposal metadata length.
   * Defaults to 255 if not explicitly set.
   */
  max_metadata_len: string;
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}
/** Module is the config object of the gov module. */
export interface ModuleSDKType {
  max_metadata_len: bigint;
  authority: string;
}
function createBaseModule(): Module {
  return {
    maxMetadataLen: BigInt(0),
    authority: ""
  };
}
export const Module = {
  typeUrl: "/cosmos.gov.module.v1.Module",
  aminoType: "cosmos-sdk/Module",
  is(o: any): o is Module {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.maxMetadataLen === "bigint" && typeof o.authority === "string");
  },
  isSDK(o: any): o is ModuleSDKType {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.max_metadata_len === "bigint" && typeof o.authority === "string");
  },
  isAmino(o: any): o is ModuleAmino {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.max_metadata_len === "bigint" && typeof o.authority === "string");
  },
  encode(message: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxMetadataLen !== undefined) {
      writer.uint32(8).uint64(message.maxMetadataLen);
    }
    if (message.authority !== undefined) {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxMetadataLen = reader.uint64();
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Module {
    const obj = createBaseModule();
    if (isSet(object.maxMetadataLen)) obj.maxMetadataLen = BigInt(object.maxMetadataLen.toString());
    if (isSet(object.authority)) obj.authority = String(object.authority);
    return obj;
  },
  toJSON(message: Module): JsonSafe<Module> {
    const obj: any = {};
    message.maxMetadataLen !== undefined && (obj.maxMetadataLen = (message.maxMetadataLen || BigInt(0)).toString());
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial(object: DeepPartial<Module>): Module {
    const message = createBaseModule();
    if (object.maxMetadataLen !== undefined && object.maxMetadataLen !== null) {
      message.maxMetadataLen = BigInt(object.maxMetadataLen.toString());
    }
    message.authority = object.authority ?? "";
    return message;
  },
  fromSDK(object: ModuleSDKType): Module {
    return {
      maxMetadataLen: object?.max_metadata_len,
      authority: object?.authority
    };
  },
  toSDK(message: Module): ModuleSDKType {
    const obj: any = {};
    obj.max_metadata_len = message.maxMetadataLen;
    obj.authority = message.authority;
    return obj;
  },
  fromAmino(object: ModuleAmino): Module {
    const message = createBaseModule();
    if (object.max_metadata_len !== undefined && object.max_metadata_len !== null) {
      message.maxMetadataLen = BigInt(object.max_metadata_len);
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: Module): ModuleAmino {
    const obj: any = {};
    obj.max_metadata_len = message.maxMetadataLen !== BigInt(0) ? message.maxMetadataLen?.toString() : undefined;
    obj.authority = message.authority === "" ? undefined : message.authority;
    return obj;
  },
  fromAminoMsg(object: ModuleAminoMsg): Module {
    return Module.fromAmino(object.value);
  },
  toAminoMsg(message: Module): ModuleAminoMsg {
    return {
      type: "cosmos-sdk/Module",
      value: Module.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleProtoMsg): Module {
    return Module.decode(message.value);
  },
  toProto(message: Module): Uint8Array {
    return Module.encode(message).finish();
  },
  toProtoMsg(message: Module): ModuleProtoMsg {
    return {
      typeUrl: "/cosmos.gov.module.v1.Module",
      value: Module.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};