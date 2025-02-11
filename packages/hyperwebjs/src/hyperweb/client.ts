import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as hyperwebHvmTxRegistry from "./hvm/tx.registry";
import * as hyperwebHvmTxAmino from "./hvm/tx.amino";
export const hyperwebAminoConverters = {
  ...hyperwebHvmTxAmino.AminoConverter
};
export const hyperwebProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...hyperwebHvmTxRegistry.registry];
export const getSigningHyperwebClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...hyperwebProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...hyperwebAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningHyperwebClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningHyperwebClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};