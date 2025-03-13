import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "hyperweb.hvm";
/** contract account */
export interface ContractAccount {
  /** contract account index */
  index: bigint;
  /** account number */
  accountNumber: bigint;
}
export interface ContractAccountProtoMsg {
  typeUrl: "/hyperweb.hvm.ContractAccount";
  value: Uint8Array;
}
/** contract account */
export interface ContractAccountAmino {
  /** contract account index */
  index: string;
  /** account number */
  account_number: string;
}
export interface ContractAccountAminoMsg {
  type: "/hyperweb.hvm.ContractAccount";
  value: ContractAccountAmino;
}
/** contract account */
export interface ContractAccountSDKType {
  index: bigint;
  account_number: bigint;
}
function createBaseContractAccount(): ContractAccount {
  return {
    index: BigInt(0),
    accountNumber: BigInt(0)
  };
}
export const ContractAccount = {
  typeUrl: "/hyperweb.hvm.ContractAccount",
  is(o: any): o is ContractAccount {
    return o && (o.$typeUrl === ContractAccount.typeUrl || typeof o.index === "bigint" && typeof o.accountNumber === "bigint");
  },
  isSDK(o: any): o is ContractAccountSDKType {
    return o && (o.$typeUrl === ContractAccount.typeUrl || typeof o.index === "bigint" && typeof o.account_number === "bigint");
  },
  isAmino(o: any): o is ContractAccountAmino {
    return o && (o.$typeUrl === ContractAccount.typeUrl || typeof o.index === "bigint" && typeof o.account_number === "bigint");
  },
  encode(message: ContractAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== undefined) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.accountNumber !== undefined) {
      writer.uint32(16).uint64(message.accountNumber);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContractAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
          break;
        case 2:
          message.accountNumber = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractAccount {
    const obj = createBaseContractAccount();
    if (isSet(object.index)) obj.index = BigInt(object.index.toString());
    if (isSet(object.accountNumber)) obj.accountNumber = BigInt(object.accountNumber.toString());
    return obj;
  },
  toJSON(message: ContractAccount): JsonSafe<ContractAccount> {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
    message.accountNumber !== undefined && (obj.accountNumber = (message.accountNumber || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ContractAccount>): ContractAccount {
    const message = createBaseContractAccount();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index.toString());
    }
    if (object.accountNumber !== undefined && object.accountNumber !== null) {
      message.accountNumber = BigInt(object.accountNumber.toString());
    }
    return message;
  },
  fromSDK(object: ContractAccountSDKType): ContractAccount {
    return {
      index: object?.index,
      accountNumber: object?.account_number
    };
  },
  toSDK(message: ContractAccount): ContractAccountSDKType {
    const obj: any = {};
    obj.index = message.index;
    obj.account_number = message.accountNumber;
    return obj;
  },
  fromAmino(object: ContractAccountAmino): ContractAccount {
    const message = createBaseContractAccount();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.account_number !== undefined && object.account_number !== null) {
      message.accountNumber = BigInt(object.account_number);
    }
    return message;
  },
  toAmino(message: ContractAccount): ContractAccountAmino {
    const obj: any = {};
    obj.index = message.index !== BigInt(0) ? message.index?.toString() : undefined;
    obj.account_number = message.accountNumber !== BigInt(0) ? message.accountNumber?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ContractAccountAminoMsg): ContractAccount {
    return ContractAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractAccountProtoMsg): ContractAccount {
    return ContractAccount.decode(message.value);
  },
  toProto(message: ContractAccount): Uint8Array {
    return ContractAccount.encode(message).finish();
  },
  toProtoMsg(message: ContractAccount): ContractAccountProtoMsg {
    return {
      typeUrl: "/hyperweb.hvm.ContractAccount",
      value: ContractAccount.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};