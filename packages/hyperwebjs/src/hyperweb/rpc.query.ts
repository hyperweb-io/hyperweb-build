import { Rpc } from "../helpers";
export const createRPCQueryClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => {
  return {
    hyperweb: {
      hvm: (await import("./hvm/query.rpc.Query")).createClientImpl(rpc)
    },
    cosmos: {
      app: {
        v1alpha1: (await import("../cosmos/app/v1alpha1/query.rpc.Query")).createClientImpl(rpc)
      },
      auth: {
        v1beta1: (await import("../cosmos/auth/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      authz: {
        v1beta1: (await import("../cosmos/authz/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      autocli: {
        v1: (await import("../cosmos/autocli/v1/query.rpc.Query")).createClientImpl(rpc)
      },
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      base: {
        node: {
          v1beta1: (await import("../cosmos/base/node/v1beta1/query.rpc.Service")).createClientImpl(rpc)
        },
        tendermint: {
          v1beta1: (await import("../cosmos/base/tendermint/v1beta1/query.rpc.Service")).createClientImpl(rpc)
        }
      },
      circuit: {
        v1: (await import("../cosmos/circuit/v1/query.rpc.Query")).createClientImpl(rpc)
      },
      consensus: {
        v1: (await import("../cosmos/consensus/v1/query.rpc.Query")).createClientImpl(rpc)
      },
      distribution: {
        v1beta1: (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      evidence: {
        v1beta1: (await import("../cosmos/evidence/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      feegrant: {
        v1beta1: (await import("../cosmos/feegrant/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      gov: {
        v1: (await import("../cosmos/gov/v1/query.rpc.Query")).createClientImpl(rpc),
        v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      group: {
        v1: (await import("../cosmos/group/v1/query.rpc.Query")).createClientImpl(rpc)
      },
      mint: {
        v1beta1: (await import("../cosmos/mint/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      nft: {
        v1beta1: (await import("../cosmos/nft/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      orm: {
        query: {
          v1alpha1: (await import("../cosmos/orm/query/v1alpha1/query.rpc.Query")).createClientImpl(rpc)
        }
      },
      params: {
        v1beta1: (await import("../cosmos/params/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      slashing: {
        v1beta1: (await import("../cosmos/slashing/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      staking: {
        v1beta1: (await import("../cosmos/staking/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      tx: {
        v1beta1: (await import("../cosmos/tx/v1beta1/service.rpc.Service")).createClientImpl(rpc)
      },
      upgrade: {
        v1beta1: (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      }
    }
  };
};