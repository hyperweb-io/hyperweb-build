import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as jsdJsdTxRegistry from "./jsd/tx.registry";
import * as jsdJsdTxAmino from "./jsd/tx.amino";
export const jsdAminoConverters = {
  ...jsdJsdTxAmino.AminoConverter
};
export const jsdProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...jsdJsdTxRegistry.registry];
export const getSigningJsdClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...jsdProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...jsdAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningJsdClient = async ({
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
  } = getSigningJsdClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};