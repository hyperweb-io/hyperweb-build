import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Contracts, ContractsAmino, ContractsSDKType } from "./contracts";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "jsd.jsd";
/** GenesisState defines the jsd module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  contractsList: Contracts[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/jsd.jsd.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the jsd module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the module. */
  params: ParamsAmino;
  contractsList?: ContractsAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/jsd.jsd.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the jsd module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  contractsList: ContractsSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    contractsList: []
  };
}
export const GenesisState = {
  typeUrl: "/jsd.jsd.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.contractsList) && (!o.contractsList.length || Contracts.is(o.contractsList[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.contractsList) && (!o.contractsList.length || Contracts.isSDK(o.contractsList[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.contractsList) && (!o.contractsList.length || Contracts.isAmino(o.contractsList[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.contractsList) {
      Contracts.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.contractsList.push(Contracts.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.contractsList)) obj.contractsList = object.contractsList.map((e: any) => Contracts.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.contractsList) {
      obj.contractsList = message.contractsList.map(e => e ? Contracts.toJSON(e) : undefined);
    } else {
      obj.contractsList = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.contractsList = object.contractsList?.map(e => Contracts.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      contractsList: Array.isArray(object?.contractsList) ? object.contractsList.map((e: any) => Contracts.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.contractsList) {
      obj.contractsList = message.contractsList.map(e => e ? Contracts.toSDK(e) : undefined);
    } else {
      obj.contractsList = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.contractsList = object.contractsList?.map(e => Contracts.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.contractsList) {
      obj.contractsList = message.contractsList.map(e => e ? Contracts.toAmino(e) : undefined);
    } else {
      obj.contractsList = message.contractsList;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/jsd.jsd.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);