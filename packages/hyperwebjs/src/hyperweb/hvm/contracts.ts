import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "hyperweb.hvm";
/** contracts msg */
export interface Contracts {
  index: bigint;
  creator: string;
  code: string;
  source: string;
}
export interface ContractsProtoMsg {
  typeUrl: "/hyperweb.hvm.Contracts";
  value: Uint8Array;
}
/** contracts msg */
export interface ContractsAmino {
  index?: string;
  creator?: string;
  code?: string;
  source?: string;
}
export interface ContractsAminoMsg {
  type: "/hyperweb.hvm.Contracts";
  value: ContractsAmino;
}
/** contracts msg */
export interface ContractsSDKType {
  index: bigint;
  creator: string;
  code: string;
  source: string;
}
function createBaseContracts(): Contracts {
  return {
    index: BigInt(0),
    creator: "",
    code: "",
    source: ""
  };
}
export const Contracts = {
  typeUrl: "/hyperweb.hvm.Contracts",
  is(o: any): o is Contracts {
    return o && (o.$typeUrl === Contracts.typeUrl || typeof o.index === "bigint" && typeof o.creator === "string" && typeof o.code === "string" && typeof o.source === "string");
  },
  isSDK(o: any): o is ContractsSDKType {
    return o && (o.$typeUrl === Contracts.typeUrl || typeof o.index === "bigint" && typeof o.creator === "string" && typeof o.code === "string" && typeof o.source === "string");
  },
  isAmino(o: any): o is ContractsAmino {
    return o && (o.$typeUrl === Contracts.typeUrl || typeof o.index === "bigint" && typeof o.creator === "string" && typeof o.code === "string" && typeof o.source === "string");
  },
  encode(message: Contracts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== undefined) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.creator !== undefined) {
      writer.uint32(18).string(message.creator);
    }
    if (message.code !== undefined) {
      writer.uint32(26).string(message.code);
    }
    if (message.source !== undefined) {
      writer.uint32(34).string(message.source);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Contracts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContracts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.code = reader.string();
          break;
        case 4:
          message.source = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Contracts {
    const obj = createBaseContracts();
    if (isSet(object.index)) obj.index = BigInt(object.index.toString());
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.code)) obj.code = String(object.code);
    if (isSet(object.source)) obj.source = String(object.source);
    return obj;
  },
  toJSON(message: Contracts): JsonSafe<Contracts> {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    message.code !== undefined && (obj.code = message.code);
    message.source !== undefined && (obj.source = message.source);
    return obj;
  },
  fromPartial(object: DeepPartial<Contracts>): Contracts {
    const message = createBaseContracts();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index.toString());
    }
    message.creator = object.creator ?? "";
    message.code = object.code ?? "";
    message.source = object.source ?? "";
    return message;
  },
  fromSDK(object: ContractsSDKType): Contracts {
    return {
      index: object?.index,
      creator: object?.creator,
      code: object?.code,
      source: object?.source
    };
  },
  toSDK(message: Contracts): ContractsSDKType {
    const obj: any = {};
    obj.index = message.index;
    obj.creator = message.creator;
    obj.code = message.code;
    obj.source = message.source;
    return obj;
  },
  fromAmino(object: ContractsAmino): Contracts {
    const message = createBaseContracts();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    return message;
  },
  toAmino(message: Contracts): ContractsAmino {
    const obj: any = {};
    obj.index = message.index !== BigInt(0) ? (message.index?.toString)() : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.code = message.code === "" ? undefined : message.code;
    obj.source = message.source === "" ? undefined : message.source;
    return obj;
  },
  fromAminoMsg(object: ContractsAminoMsg): Contracts {
    return Contracts.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractsProtoMsg): Contracts {
    return Contracts.decode(message.value);
  },
  toProto(message: Contracts): Uint8Array {
    return Contracts.encode(message).finish();
  },
  toProtoMsg(message: Contracts): ContractsProtoMsg {
    return {
      typeUrl: "/hyperweb.hvm.Contracts",
      value: Contracts.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Contracts.typeUrl, Contracts);