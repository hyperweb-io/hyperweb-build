import { TelescopeInput } from '@cosmology/telescope';
import telescope from '@cosmology/telescope';
import { join } from 'path';
import { rimrafSync as rimraf } from 'rimraf';

const protoDirs = [join(__dirname, '../jsd/proto'), join(__dirname, '../cosmos-sdk/proto'), join(__dirname, '../proto')];
const outPath = join(__dirname, '../src/codegen');
rimraf(outPath);

export const options: TelescopeInput = {
  protoDirs,
  outPath,
  options: {
    env: 'v-next',
    removeUnusedImports: false,
    classesUseArrowFunctions: true,

    interfaces: {
      enabled: true,
      useGlobalDecoderRegistry: true,
      useUnionTypes: true
    },

    prototypes: {
      enabled: true,
      addTypeUrlToObjects: true,
      addTypeUrlToDecoders: true,
      addAminoTypeToObjects: true,
      excluded: {
        packages: ['google.api.**', 'google.logging.**', 'google.protobuf.**']
      },
      parser: {
        keepCase: false
      },
      methods: {
        encode: true,
        decode: true,
        fromJSON: true,
        toJSON: true,
        fromPartial: true,
        toSDK: true,
        fromSDK: true,
        toAmino: true,
        fromAmino: true,
        toProto: true,
        fromProto: true
      },
      strictNullCheckForPrototypeMethods: true,
      paginationDefaultFromPartial: true,
      includePackageVar: true,
      fieldDefaultIsOptional: false,
      useOptionalNullable: true,
      allowUndefinedTypes: false,
      allowEncodeDefaultScalars: true,
      typingsFormat: {
        customTypes: {
          useCosmosSDKDec: true
        },
        num64: 'bigint',
        useDeepPartial: true,
        useExact: false,
        timestamp: 'date',
        duration: 'duration',
        useTelescopeGeneratedType: true
      }
    },

    bundle: {
      enabled: true
    },

    stargateClients: {
      enabled: true,
      includeCosmosDefaultTypes: true
    },

    lcdClients: {
      enabled: true
    },

    rpcClients: {
      enabled: true,
      extensions: true,
      camelCase: true,
      useConnectComet: true
    },

    aminoEncoding: {
      enabled: true
    }
  }
};


telescope(options)
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
