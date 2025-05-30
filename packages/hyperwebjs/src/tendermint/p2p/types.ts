import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "tendermint.p2p";
export interface NetAddress {
  id: string;
  ip: string;
  port: number;
}
export interface NetAddressProtoMsg {
  typeUrl: "/tendermint.p2p.NetAddress";
  value: Uint8Array;
}
export interface NetAddressAmino {
  id: string;
  ip: string;
  port: number;
}
export interface NetAddressAminoMsg {
  type: "/tendermint.p2p.NetAddress";
  value: NetAddressAmino;
}
export interface NetAddressSDKType {
  id: string;
  ip: string;
  port: number;
}
export interface ProtocolVersion {
  p2p: bigint;
  block: bigint;
  app: bigint;
}
export interface ProtocolVersionProtoMsg {
  typeUrl: "/tendermint.p2p.ProtocolVersion";
  value: Uint8Array;
}
export interface ProtocolVersionAmino {
  p2p: string;
  block: string;
  app: string;
}
export interface ProtocolVersionAminoMsg {
  type: "/tendermint.p2p.ProtocolVersion";
  value: ProtocolVersionAmino;
}
export interface ProtocolVersionSDKType {
  p2p: bigint;
  block: bigint;
  app: bigint;
}
export interface DefaultNodeInfo {
  protocolVersion: ProtocolVersion;
  defaultNodeId: string;
  listenAddr: string;
  network: string;
  version: string;
  channels: Uint8Array;
  moniker: string;
  other: DefaultNodeInfoOther;
}
export interface DefaultNodeInfoProtoMsg {
  typeUrl: "/tendermint.p2p.DefaultNodeInfo";
  value: Uint8Array;
}
export interface DefaultNodeInfoAmino {
  protocol_version: ProtocolVersionAmino;
  default_node_id: string;
  listen_addr: string;
  network: string;
  version: string;
  channels: string;
  moniker: string;
  other: DefaultNodeInfoOtherAmino;
}
export interface DefaultNodeInfoAminoMsg {
  type: "/tendermint.p2p.DefaultNodeInfo";
  value: DefaultNodeInfoAmino;
}
export interface DefaultNodeInfoSDKType {
  protocol_version: ProtocolVersionSDKType;
  default_node_id: string;
  listen_addr: string;
  network: string;
  version: string;
  channels: Uint8Array;
  moniker: string;
  other: DefaultNodeInfoOtherSDKType;
}
export interface DefaultNodeInfoOther {
  txIndex: string;
  rpcAddress: string;
}
export interface DefaultNodeInfoOtherProtoMsg {
  typeUrl: "/tendermint.p2p.DefaultNodeInfoOther";
  value: Uint8Array;
}
export interface DefaultNodeInfoOtherAmino {
  tx_index: string;
  rpc_address: string;
}
export interface DefaultNodeInfoOtherAminoMsg {
  type: "/tendermint.p2p.DefaultNodeInfoOther";
  value: DefaultNodeInfoOtherAmino;
}
export interface DefaultNodeInfoOtherSDKType {
  tx_index: string;
  rpc_address: string;
}
function createBaseNetAddress(): NetAddress {
  return {
    id: "",
    ip: "",
    port: 0
  };
}
export const NetAddress = {
  typeUrl: "/tendermint.p2p.NetAddress",
  is(o: any): o is NetAddress {
    return o && (o.$typeUrl === NetAddress.typeUrl || typeof o.id === "string" && typeof o.ip === "string" && typeof o.port === "number");
  },
  isSDK(o: any): o is NetAddressSDKType {
    return o && (o.$typeUrl === NetAddress.typeUrl || typeof o.id === "string" && typeof o.ip === "string" && typeof o.port === "number");
  },
  isAmino(o: any): o is NetAddressAmino {
    return o && (o.$typeUrl === NetAddress.typeUrl || typeof o.id === "string" && typeof o.ip === "string" && typeof o.port === "number");
  },
  encode(message: NetAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.ip !== undefined) {
      writer.uint32(18).string(message.ip);
    }
    if (message.port !== undefined) {
      writer.uint32(24).uint32(message.port);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NetAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.ip = reader.string();
          break;
        case 3:
          message.port = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NetAddress {
    const obj = createBaseNetAddress();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.ip)) obj.ip = String(object.ip);
    if (isSet(object.port)) obj.port = Number(object.port);
    return obj;
  },
  toJSON(message: NetAddress): JsonSafe<NetAddress> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.ip !== undefined && (obj.ip = message.ip);
    message.port !== undefined && (obj.port = Math.round(message.port));
    return obj;
  },
  fromPartial(object: DeepPartial<NetAddress>): NetAddress {
    const message = createBaseNetAddress();
    message.id = object.id ?? "";
    message.ip = object.ip ?? "";
    message.port = object.port ?? 0;
    return message;
  },
  fromSDK(object: NetAddressSDKType): NetAddress {
    return {
      id: object?.id,
      ip: object?.ip,
      port: object?.port
    };
  },
  toSDK(message: NetAddress): NetAddressSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.ip = message.ip;
    obj.port = message.port;
    return obj;
  },
  fromAmino(object: NetAddressAmino): NetAddress {
    const message = createBaseNetAddress();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = object.ip;
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    }
    return message;
  },
  toAmino(message: NetAddress): NetAddressAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.ip = message.ip === "" ? undefined : message.ip;
    obj.port = message.port === 0 ? undefined : message.port;
    return obj;
  },
  fromAminoMsg(object: NetAddressAminoMsg): NetAddress {
    return NetAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: NetAddressProtoMsg): NetAddress {
    return NetAddress.decode(message.value);
  },
  toProto(message: NetAddress): Uint8Array {
    return NetAddress.encode(message).finish();
  },
  toProtoMsg(message: NetAddress): NetAddressProtoMsg {
    return {
      typeUrl: "/tendermint.p2p.NetAddress",
      value: NetAddress.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseProtocolVersion(): ProtocolVersion {
  return {
    p2p: BigInt(0),
    block: BigInt(0),
    app: BigInt(0)
  };
}
export const ProtocolVersion = {
  typeUrl: "/tendermint.p2p.ProtocolVersion",
  is(o: any): o is ProtocolVersion {
    return o && (o.$typeUrl === ProtocolVersion.typeUrl || typeof o.p2p === "bigint" && typeof o.block === "bigint" && typeof o.app === "bigint");
  },
  isSDK(o: any): o is ProtocolVersionSDKType {
    return o && (o.$typeUrl === ProtocolVersion.typeUrl || typeof o.p2p === "bigint" && typeof o.block === "bigint" && typeof o.app === "bigint");
  },
  isAmino(o: any): o is ProtocolVersionAmino {
    return o && (o.$typeUrl === ProtocolVersion.typeUrl || typeof o.p2p === "bigint" && typeof o.block === "bigint" && typeof o.app === "bigint");
  },
  encode(message: ProtocolVersion, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.p2p !== undefined) {
      writer.uint32(8).uint64(message.p2p);
    }
    if (message.block !== undefined) {
      writer.uint32(16).uint64(message.block);
    }
    if (message.app !== undefined) {
      writer.uint32(24).uint64(message.app);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProtocolVersion {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtocolVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p2p = reader.uint64();
          break;
        case 2:
          message.block = reader.uint64();
          break;
        case 3:
          message.app = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProtocolVersion {
    const obj = createBaseProtocolVersion();
    if (isSet(object.p2p)) obj.p2p = BigInt(object.p2p.toString());
    if (isSet(object.block)) obj.block = BigInt(object.block.toString());
    if (isSet(object.app)) obj.app = BigInt(object.app.toString());
    return obj;
  },
  toJSON(message: ProtocolVersion): JsonSafe<ProtocolVersion> {
    const obj: any = {};
    message.p2p !== undefined && (obj.p2p = (message.p2p || BigInt(0)).toString());
    message.block !== undefined && (obj.block = (message.block || BigInt(0)).toString());
    message.app !== undefined && (obj.app = (message.app || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ProtocolVersion>): ProtocolVersion {
    const message = createBaseProtocolVersion();
    if (object.p2p !== undefined && object.p2p !== null) {
      message.p2p = BigInt(object.p2p.toString());
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = BigInt(object.block.toString());
    }
    if (object.app !== undefined && object.app !== null) {
      message.app = BigInt(object.app.toString());
    }
    return message;
  },
  fromSDK(object: ProtocolVersionSDKType): ProtocolVersion {
    return {
      p2p: object?.p2p,
      block: object?.block,
      app: object?.app
    };
  },
  toSDK(message: ProtocolVersion): ProtocolVersionSDKType {
    const obj: any = {};
    obj.p2p = message.p2p;
    obj.block = message.block;
    obj.app = message.app;
    return obj;
  },
  fromAmino(object: ProtocolVersionAmino): ProtocolVersion {
    const message = createBaseProtocolVersion();
    if (object.p2p !== undefined && object.p2p !== null) {
      message.p2p = BigInt(object.p2p);
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = BigInt(object.block);
    }
    if (object.app !== undefined && object.app !== null) {
      message.app = BigInt(object.app);
    }
    return message;
  },
  toAmino(message: ProtocolVersion): ProtocolVersionAmino {
    const obj: any = {};
    obj.p2p = message.p2p !== BigInt(0) ? message.p2p?.toString() : undefined;
    obj.block = message.block !== BigInt(0) ? message.block?.toString() : undefined;
    obj.app = message.app !== BigInt(0) ? message.app?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ProtocolVersionAminoMsg): ProtocolVersion {
    return ProtocolVersion.fromAmino(object.value);
  },
  fromProtoMsg(message: ProtocolVersionProtoMsg): ProtocolVersion {
    return ProtocolVersion.decode(message.value);
  },
  toProto(message: ProtocolVersion): Uint8Array {
    return ProtocolVersion.encode(message).finish();
  },
  toProtoMsg(message: ProtocolVersion): ProtocolVersionProtoMsg {
    return {
      typeUrl: "/tendermint.p2p.ProtocolVersion",
      value: ProtocolVersion.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDefaultNodeInfo(): DefaultNodeInfo {
  return {
    protocolVersion: ProtocolVersion.fromPartial({}),
    defaultNodeId: "",
    listenAddr: "",
    network: "",
    version: "",
    channels: new Uint8Array(),
    moniker: "",
    other: DefaultNodeInfoOther.fromPartial({})
  };
}
export const DefaultNodeInfo = {
  typeUrl: "/tendermint.p2p.DefaultNodeInfo",
  is(o: any): o is DefaultNodeInfo {
    return o && (o.$typeUrl === DefaultNodeInfo.typeUrl || ProtocolVersion.is(o.protocolVersion) && typeof o.defaultNodeId === "string" && typeof o.listenAddr === "string" && typeof o.network === "string" && typeof o.version === "string" && (o.channels instanceof Uint8Array || typeof o.channels === "string") && typeof o.moniker === "string" && DefaultNodeInfoOther.is(o.other));
  },
  isSDK(o: any): o is DefaultNodeInfoSDKType {
    return o && (o.$typeUrl === DefaultNodeInfo.typeUrl || ProtocolVersion.isSDK(o.protocol_version) && typeof o.default_node_id === "string" && typeof o.listen_addr === "string" && typeof o.network === "string" && typeof o.version === "string" && (o.channels instanceof Uint8Array || typeof o.channels === "string") && typeof o.moniker === "string" && DefaultNodeInfoOther.isSDK(o.other));
  },
  isAmino(o: any): o is DefaultNodeInfoAmino {
    return o && (o.$typeUrl === DefaultNodeInfo.typeUrl || ProtocolVersion.isAmino(o.protocol_version) && typeof o.default_node_id === "string" && typeof o.listen_addr === "string" && typeof o.network === "string" && typeof o.version === "string" && (o.channels instanceof Uint8Array || typeof o.channels === "string") && typeof o.moniker === "string" && DefaultNodeInfoOther.isAmino(o.other));
  },
  encode(message: DefaultNodeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.protocolVersion !== undefined) {
      ProtocolVersion.encode(message.protocolVersion, writer.uint32(10).fork()).ldelim();
    }
    if (message.defaultNodeId !== undefined) {
      writer.uint32(18).string(message.defaultNodeId);
    }
    if (message.listenAddr !== undefined) {
      writer.uint32(26).string(message.listenAddr);
    }
    if (message.network !== undefined) {
      writer.uint32(34).string(message.network);
    }
    if (message.version !== undefined) {
      writer.uint32(42).string(message.version);
    }
    if (message.channels.length !== 0) {
      writer.uint32(50).bytes(message.channels);
    }
    if (message.moniker !== undefined) {
      writer.uint32(58).string(message.moniker);
    }
    if (message.other !== undefined) {
      DefaultNodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DefaultNodeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefaultNodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocolVersion = ProtocolVersion.decode(reader, reader.uint32());
          break;
        case 2:
          message.defaultNodeId = reader.string();
          break;
        case 3:
          message.listenAddr = reader.string();
          break;
        case 4:
          message.network = reader.string();
          break;
        case 5:
          message.version = reader.string();
          break;
        case 6:
          message.channels = reader.bytes();
          break;
        case 7:
          message.moniker = reader.string();
          break;
        case 8:
          message.other = DefaultNodeInfoOther.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DefaultNodeInfo {
    const obj = createBaseDefaultNodeInfo();
    if (isSet(object.protocolVersion)) obj.protocolVersion = ProtocolVersion.fromJSON(object.protocolVersion);
    if (isSet(object.defaultNodeId)) obj.defaultNodeId = String(object.defaultNodeId);
    if (isSet(object.listenAddr)) obj.listenAddr = String(object.listenAddr);
    if (isSet(object.network)) obj.network = String(object.network);
    if (isSet(object.version)) obj.version = String(object.version);
    if (isSet(object.channels)) obj.channels = bytesFromBase64(object.channels);
    if (isSet(object.moniker)) obj.moniker = String(object.moniker);
    if (isSet(object.other)) obj.other = DefaultNodeInfoOther.fromJSON(object.other);
    return obj;
  },
  toJSON(message: DefaultNodeInfo): JsonSafe<DefaultNodeInfo> {
    const obj: any = {};
    message.protocolVersion !== undefined && (obj.protocolVersion = message.protocolVersion ? ProtocolVersion.toJSON(message.protocolVersion) : undefined);
    message.defaultNodeId !== undefined && (obj.defaultNodeId = message.defaultNodeId);
    message.listenAddr !== undefined && (obj.listenAddr = message.listenAddr);
    message.network !== undefined && (obj.network = message.network);
    message.version !== undefined && (obj.version = message.version);
    message.channels !== undefined && (obj.channels = base64FromBytes(message.channels !== undefined ? message.channels : new Uint8Array()));
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.other !== undefined && (obj.other = message.other ? DefaultNodeInfoOther.toJSON(message.other) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<DefaultNodeInfo>): DefaultNodeInfo {
    const message = createBaseDefaultNodeInfo();
    if (object.protocolVersion !== undefined && object.protocolVersion !== null) {
      message.protocolVersion = ProtocolVersion.fromPartial(object.protocolVersion);
    }
    message.defaultNodeId = object.defaultNodeId ?? "";
    message.listenAddr = object.listenAddr ?? "";
    message.network = object.network ?? "";
    message.version = object.version ?? "";
    message.channels = object.channels ?? new Uint8Array();
    message.moniker = object.moniker ?? "";
    if (object.other !== undefined && object.other !== null) {
      message.other = DefaultNodeInfoOther.fromPartial(object.other);
    }
    return message;
  },
  fromSDK(object: DefaultNodeInfoSDKType): DefaultNodeInfo {
    return {
      protocolVersion: object.protocol_version ? ProtocolVersion.fromSDK(object.protocol_version) : undefined,
      defaultNodeId: object?.default_node_id,
      listenAddr: object?.listen_addr,
      network: object?.network,
      version: object?.version,
      channels: object?.channels,
      moniker: object?.moniker,
      other: object.other ? DefaultNodeInfoOther.fromSDK(object.other) : undefined
    };
  },
  toSDK(message: DefaultNodeInfo): DefaultNodeInfoSDKType {
    const obj: any = {};
    message.protocolVersion !== undefined && (obj.protocol_version = message.protocolVersion ? ProtocolVersion.toSDK(message.protocolVersion) : undefined);
    obj.default_node_id = message.defaultNodeId;
    obj.listen_addr = message.listenAddr;
    obj.network = message.network;
    obj.version = message.version;
    obj.channels = message.channels;
    obj.moniker = message.moniker;
    message.other !== undefined && (obj.other = message.other ? DefaultNodeInfoOther.toSDK(message.other) : undefined);
    return obj;
  },
  fromAmino(object: DefaultNodeInfoAmino): DefaultNodeInfo {
    const message = createBaseDefaultNodeInfo();
    if (object.protocol_version !== undefined && object.protocol_version !== null) {
      message.protocolVersion = ProtocolVersion.fromAmino(object.protocol_version);
    }
    if (object.default_node_id !== undefined && object.default_node_id !== null) {
      message.defaultNodeId = object.default_node_id;
    }
    if (object.listen_addr !== undefined && object.listen_addr !== null) {
      message.listenAddr = object.listen_addr;
    }
    if (object.network !== undefined && object.network !== null) {
      message.network = object.network;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.channels !== undefined && object.channels !== null) {
      message.channels = bytesFromBase64(object.channels);
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    }
    if (object.other !== undefined && object.other !== null) {
      message.other = DefaultNodeInfoOther.fromAmino(object.other);
    }
    return message;
  },
  toAmino(message: DefaultNodeInfo): DefaultNodeInfoAmino {
    const obj: any = {};
    obj.protocol_version = message.protocolVersion ? ProtocolVersion.toAmino(message.protocolVersion) : undefined;
    obj.default_node_id = message.defaultNodeId === "" ? undefined : message.defaultNodeId;
    obj.listen_addr = message.listenAddr === "" ? undefined : message.listenAddr;
    obj.network = message.network === "" ? undefined : message.network;
    obj.version = message.version === "" ? undefined : message.version;
    obj.channels = message.channels ? base64FromBytes(message.channels) : undefined;
    obj.moniker = message.moniker === "" ? undefined : message.moniker;
    obj.other = message.other ? DefaultNodeInfoOther.toAmino(message.other) : undefined;
    return obj;
  },
  fromAminoMsg(object: DefaultNodeInfoAminoMsg): DefaultNodeInfo {
    return DefaultNodeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: DefaultNodeInfoProtoMsg): DefaultNodeInfo {
    return DefaultNodeInfo.decode(message.value);
  },
  toProto(message: DefaultNodeInfo): Uint8Array {
    return DefaultNodeInfo.encode(message).finish();
  },
  toProtoMsg(message: DefaultNodeInfo): DefaultNodeInfoProtoMsg {
    return {
      typeUrl: "/tendermint.p2p.DefaultNodeInfo",
      value: DefaultNodeInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ProtocolVersion.registerTypeUrl();
    DefaultNodeInfoOther.registerTypeUrl();
  }
};
function createBaseDefaultNodeInfoOther(): DefaultNodeInfoOther {
  return {
    txIndex: "",
    rpcAddress: ""
  };
}
export const DefaultNodeInfoOther = {
  typeUrl: "/tendermint.p2p.DefaultNodeInfoOther",
  is(o: any): o is DefaultNodeInfoOther {
    return o && (o.$typeUrl === DefaultNodeInfoOther.typeUrl || typeof o.txIndex === "string" && typeof o.rpcAddress === "string");
  },
  isSDK(o: any): o is DefaultNodeInfoOtherSDKType {
    return o && (o.$typeUrl === DefaultNodeInfoOther.typeUrl || typeof o.tx_index === "string" && typeof o.rpc_address === "string");
  },
  isAmino(o: any): o is DefaultNodeInfoOtherAmino {
    return o && (o.$typeUrl === DefaultNodeInfoOther.typeUrl || typeof o.tx_index === "string" && typeof o.rpc_address === "string");
  },
  encode(message: DefaultNodeInfoOther, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txIndex !== undefined) {
      writer.uint32(10).string(message.txIndex);
    }
    if (message.rpcAddress !== undefined) {
      writer.uint32(18).string(message.rpcAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DefaultNodeInfoOther {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefaultNodeInfoOther();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txIndex = reader.string();
          break;
        case 2:
          message.rpcAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DefaultNodeInfoOther {
    const obj = createBaseDefaultNodeInfoOther();
    if (isSet(object.txIndex)) obj.txIndex = String(object.txIndex);
    if (isSet(object.rpcAddress)) obj.rpcAddress = String(object.rpcAddress);
    return obj;
  },
  toJSON(message: DefaultNodeInfoOther): JsonSafe<DefaultNodeInfoOther> {
    const obj: any = {};
    message.txIndex !== undefined && (obj.txIndex = message.txIndex);
    message.rpcAddress !== undefined && (obj.rpcAddress = message.rpcAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<DefaultNodeInfoOther>): DefaultNodeInfoOther {
    const message = createBaseDefaultNodeInfoOther();
    message.txIndex = object.txIndex ?? "";
    message.rpcAddress = object.rpcAddress ?? "";
    return message;
  },
  fromSDK(object: DefaultNodeInfoOtherSDKType): DefaultNodeInfoOther {
    return {
      txIndex: object?.tx_index,
      rpcAddress: object?.rpc_address
    };
  },
  toSDK(message: DefaultNodeInfoOther): DefaultNodeInfoOtherSDKType {
    const obj: any = {};
    obj.tx_index = message.txIndex;
    obj.rpc_address = message.rpcAddress;
    return obj;
  },
  fromAmino(object: DefaultNodeInfoOtherAmino): DefaultNodeInfoOther {
    const message = createBaseDefaultNodeInfoOther();
    if (object.tx_index !== undefined && object.tx_index !== null) {
      message.txIndex = object.tx_index;
    }
    if (object.rpc_address !== undefined && object.rpc_address !== null) {
      message.rpcAddress = object.rpc_address;
    }
    return message;
  },
  toAmino(message: DefaultNodeInfoOther): DefaultNodeInfoOtherAmino {
    const obj: any = {};
    obj.tx_index = message.txIndex === "" ? undefined : message.txIndex;
    obj.rpc_address = message.rpcAddress === "" ? undefined : message.rpcAddress;
    return obj;
  },
  fromAminoMsg(object: DefaultNodeInfoOtherAminoMsg): DefaultNodeInfoOther {
    return DefaultNodeInfoOther.fromAmino(object.value);
  },
  fromProtoMsg(message: DefaultNodeInfoOtherProtoMsg): DefaultNodeInfoOther {
    return DefaultNodeInfoOther.decode(message.value);
  },
  toProto(message: DefaultNodeInfoOther): Uint8Array {
    return DefaultNodeInfoOther.encode(message).finish();
  },
  toProtoMsg(message: DefaultNodeInfoOther): DefaultNodeInfoOtherProtoMsg {
    return {
      typeUrl: "/tendermint.p2p.DefaultNodeInfoOther",
      value: DefaultNodeInfoOther.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};