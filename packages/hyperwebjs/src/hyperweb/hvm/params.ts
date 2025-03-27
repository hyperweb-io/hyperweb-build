import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial } from "../../helpers";
export const protobufPackage = "hyperweb.hvm";
/** Params defines the parameters for the module. */
export interface Params {}
export interface ParamsProtoMsg {
  typeUrl: "/hyperweb.hvm.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {}
export interface ParamsAminoMsg {
  type: "hvm/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {}
function createBaseParams(): Params {
  return {};
}
export const Params = {
  typeUrl: "/hyperweb.hvm.Params",
  aminoType: "hvm/Params",
  is(o: any): o is Params {
    return o && o.$typeUrl === Params.typeUrl;
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && o.$typeUrl === Params.typeUrl;
  },
  isAmino(o: any): o is ParamsAmino {
    return o && o.$typeUrl === Params.typeUrl;
  },
  encode(_: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
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
  fromJSON(_: any): Params {
    const obj = createBaseParams();
    return obj;
  },
  toJSON(_: Params): JsonSafe<Params> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<Params>): Params {
    const message = createBaseParams();
    return message;
  },
  fromSDK(_: ParamsSDKType): Params {
    return {};
  },
  toSDK(_: Params): ParamsSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: ParamsAmino): Params {
    const message = createBaseParams();
    return message;
  },
  toAmino(_: Params): ParamsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "hvm/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/hyperweb.hvm.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};