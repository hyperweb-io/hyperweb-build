import * as _7 from "./app/runtime/v1alpha1/module";
import * as _8 from "./app/v1alpha1/config";
import * as _9 from "./app/v1alpha1/module";
import * as _10 from "./app/v1alpha1/query";
import * as _11 from "./auth/module/v1/module";
import * as _12 from "./auth/v1beta1/auth";
import * as _13 from "./auth/v1beta1/genesis";
import * as _14 from "./auth/v1beta1/query";
import * as _15 from "./auth/v1beta1/tx";
import * as _16 from "./authz/module/v1/module";
import * as _17 from "./authz/v1beta1/authz";
import * as _18 from "./authz/v1beta1/event";
import * as _19 from "./authz/v1beta1/genesis";
import * as _20 from "./authz/v1beta1/query";
import * as _21 from "./authz/v1beta1/tx";
import * as _22 from "./autocli/v1/options";
import * as _23 from "./autocli/v1/query";
import * as _24 from "./bank/module/v1/module";
import * as _25 from "./bank/v1beta1/authz";
import * as _26 from "./bank/v1beta1/bank";
import * as _27 from "./bank/v1beta1/genesis";
import * as _28 from "./bank/v1beta1/query";
import * as _29 from "./bank/v1beta1/tx";
import * as _30 from "./base/abci/v1beta1/abci";
import * as _31 from "./base/node/v1beta1/query";
import * as _32 from "./base/query/v1beta1/pagination";
import * as _33 from "./base/reflection/v1beta1/reflection";
import * as _34 from "./base/reflection/v2alpha1/reflection";
import * as _35 from "./base/tendermint/v1beta1/query";
import * as _36 from "./base/tendermint/v1beta1/types";
import * as _37 from "./base/v1beta1/coin";
import * as _38 from "./base/kv/v1beta1/kv";
import * as _39 from "./base/snapshots/v1beta1/snapshot";
import * as _40 from "./base/store/v1beta1/commit_info";
import * as _41 from "./base/store/v1beta1/listening";
import * as _42 from "./circuit/module/v1/module";
import * as _43 from "./circuit/v1/query";
import * as _44 from "./circuit/v1/tx";
import * as _45 from "./circuit/v1/types";
import * as _46 from "./consensus/module/v1/module";
import * as _47 from "./consensus/v1/query";
import * as _48 from "./consensus/v1/tx";
import * as _49 from "./crisis/module/v1/module";
import * as _50 from "./crisis/v1beta1/genesis";
import * as _51 from "./crisis/v1beta1/tx";
import * as _52 from "./crypto/ed25519/keys";
import * as _53 from "./crypto/hd/v1/hd";
import * as _54 from "./crypto/keyring/v1/record";
import * as _55 from "./crypto/multisig/keys";
import * as _56 from "./crypto/secp256k1/keys";
import * as _57 from "./crypto/secp256r1/keys";
import * as _58 from "./distribution/module/v1/module";
import * as _59 from "./distribution/v1beta1/distribution";
import * as _60 from "./distribution/v1beta1/genesis";
import * as _61 from "./distribution/v1beta1/query";
import * as _62 from "./distribution/v1beta1/tx";
import * as _63 from "./evidence/module/v1/module";
import * as _64 from "./evidence/v1beta1/evidence";
import * as _65 from "./evidence/v1beta1/genesis";
import * as _66 from "./evidence/v1beta1/query";
import * as _67 from "./evidence/v1beta1/tx";
import * as _68 from "./feegrant/module/v1/module";
import * as _69 from "./feegrant/v1beta1/feegrant";
import * as _70 from "./feegrant/v1beta1/genesis";
import * as _71 from "./feegrant/v1beta1/query";
import * as _72 from "./feegrant/v1beta1/tx";
import * as _73 from "./genutil/module/v1/module";
import * as _74 from "./genutil/v1beta1/genesis";
import * as _75 from "./gov/module/v1/module";
import * as _76 from "./gov/v1/genesis";
import * as _77 from "./gov/v1/gov";
import * as _78 from "./gov/v1/query";
import * as _79 from "./gov/v1/tx";
import * as _80 from "./gov/v1beta1/genesis";
import * as _81 from "./gov/v1beta1/gov";
import * as _82 from "./gov/v1beta1/query";
import * as _83 from "./gov/v1beta1/tx";
import * as _84 from "./group/module/v1/module";
import * as _85 from "./group/v1/events";
import * as _86 from "./group/v1/genesis";
import * as _87 from "./group/v1/query";
import * as _88 from "./group/v1/tx";
import * as _89 from "./group/v1/types";
import * as _90 from "./mint/module/v1/module";
import * as _91 from "./mint/v1beta1/genesis";
import * as _92 from "./mint/v1beta1/mint";
import * as _93 from "./mint/v1beta1/query";
import * as _94 from "./mint/v1beta1/tx";
import * as _95 from "./msg/textual/v1/textual";
import * as _96 from "./msg/v1/msg";
import * as _97 from "./nft/module/v1/module";
import * as _98 from "./nft/v1beta1/event";
import * as _99 from "./nft/v1beta1/genesis";
import * as _100 from "./nft/v1beta1/nft";
import * as _101 from "./nft/v1beta1/query";
import * as _102 from "./nft/v1beta1/tx";
import * as _103 from "./orm/module/v1alpha1/module";
import * as _104 from "./orm/query/v1alpha1/query";
import * as _105 from "./orm/v1/orm";
import * as _106 from "./orm/v1alpha1/schema";
import * as _107 from "./params/module/v1/module";
import * as _108 from "./params/v1beta1/params";
import * as _109 from "./params/v1beta1/query";
import * as _110 from "./query/v1/query";
import * as _111 from "./reflection/v1/reflection";
import * as _112 from "./slashing/module/v1/module";
import * as _113 from "./slashing/v1beta1/genesis";
import * as _114 from "./slashing/v1beta1/query";
import * as _115 from "./slashing/v1beta1/slashing";
import * as _116 from "./slashing/v1beta1/tx";
import * as _117 from "./staking/module/v1/module";
import * as _118 from "./staking/v1beta1/authz";
import * as _119 from "./staking/v1beta1/genesis";
import * as _120 from "./staking/v1beta1/query";
import * as _121 from "./staking/v1beta1/staking";
import * as _122 from "./staking/v1beta1/tx";
import * as _123 from "./store/internal/kv/v1beta1/kv";
import * as _124 from "./store/snapshots/v1/snapshot";
import * as _125 from "./store/streaming/abci/grpc";
import * as _126 from "./store/v1beta1/commit_info";
import * as _127 from "./store/v1beta1/listening";
import * as _128 from "./tx/config/v1/config";
import * as _129 from "./tx/signing/v1beta1/signing";
import * as _130 from "./tx/v1beta1/service";
import * as _131 from "./tx/v1beta1/tx";
import * as _132 from "./upgrade/module/v1/module";
import * as _133 from "./upgrade/v1beta1/query";
import * as _134 from "./upgrade/v1beta1/tx";
import * as _135 from "./upgrade/v1beta1/upgrade";
import * as _136 from "./vesting/module/v1/module";
import * as _137 from "./vesting/v1beta1/tx";
import * as _138 from "./vesting/v1beta1/vesting";
import * as _139 from "./capability/v1beta1/capability";
import * as _140 from "./capability/v1beta1/genesis";
import * as _200 from "./auth/v1beta1/tx.amino";
import * as _201 from "./authz/v1beta1/tx.amino";
import * as _202 from "./bank/v1beta1/tx.amino";
import * as _203 from "./circuit/v1/tx.amino";
import * as _204 from "./consensus/v1/tx.amino";
import * as _205 from "./crisis/v1beta1/tx.amino";
import * as _206 from "./distribution/v1beta1/tx.amino";
import * as _207 from "./evidence/v1beta1/tx.amino";
import * as _208 from "./feegrant/v1beta1/tx.amino";
import * as _209 from "./gov/v1/tx.amino";
import * as _210 from "./gov/v1beta1/tx.amino";
import * as _211 from "./group/v1/tx.amino";
import * as _212 from "./mint/v1beta1/tx.amino";
import * as _213 from "./nft/v1beta1/tx.amino";
import * as _214 from "./slashing/v1beta1/tx.amino";
import * as _215 from "./staking/v1beta1/tx.amino";
import * as _216 from "./upgrade/v1beta1/tx.amino";
import * as _217 from "./vesting/v1beta1/tx.amino";
import * as _218 from "./auth/v1beta1/tx.registry";
import * as _219 from "./authz/v1beta1/tx.registry";
import * as _220 from "./bank/v1beta1/tx.registry";
import * as _221 from "./circuit/v1/tx.registry";
import * as _222 from "./consensus/v1/tx.registry";
import * as _223 from "./crisis/v1beta1/tx.registry";
import * as _224 from "./distribution/v1beta1/tx.registry";
import * as _225 from "./evidence/v1beta1/tx.registry";
import * as _226 from "./feegrant/v1beta1/tx.registry";
import * as _227 from "./gov/v1/tx.registry";
import * as _228 from "./gov/v1beta1/tx.registry";
import * as _229 from "./group/v1/tx.registry";
import * as _230 from "./mint/v1beta1/tx.registry";
import * as _231 from "./nft/v1beta1/tx.registry";
import * as _232 from "./slashing/v1beta1/tx.registry";
import * as _233 from "./staking/v1beta1/tx.registry";
import * as _234 from "./upgrade/v1beta1/tx.registry";
import * as _235 from "./vesting/v1beta1/tx.registry";
import * as _236 from "./auth/v1beta1/query.lcd";
import * as _237 from "./authz/v1beta1/query.lcd";
import * as _238 from "./bank/v1beta1/query.lcd";
import * as _239 from "./base/node/v1beta1/query.lcd";
import * as _240 from "./base/tendermint/v1beta1/query.lcd";
import * as _241 from "./circuit/v1/query.lcd";
import * as _242 from "./consensus/v1/query.lcd";
import * as _243 from "./distribution/v1beta1/query.lcd";
import * as _244 from "./evidence/v1beta1/query.lcd";
import * as _245 from "./feegrant/v1beta1/query.lcd";
import * as _246 from "./gov/v1/query.lcd";
import * as _247 from "./gov/v1beta1/query.lcd";
import * as _248 from "./group/v1/query.lcd";
import * as _249 from "./mint/v1beta1/query.lcd";
import * as _250 from "./nft/v1beta1/query.lcd";
import * as _251 from "./params/v1beta1/query.lcd";
import * as _252 from "./slashing/v1beta1/query.lcd";
import * as _253 from "./staking/v1beta1/query.lcd";
import * as _254 from "./tx/v1beta1/service.lcd";
import * as _255 from "./upgrade/v1beta1/query.lcd";
import * as _256 from "./app/v1alpha1/query.rpc.func";
import * as _257 from "./auth/v1beta1/query.rpc.func";
import * as _258 from "./authz/v1beta1/query.rpc.func";
import * as _259 from "./autocli/v1/query.rpc.func";
import * as _260 from "./bank/v1beta1/query.rpc.func";
import * as _261 from "./base/node/v1beta1/query.rpc.func";
import * as _262 from "./base/reflection/v1beta1/reflection.rpc.func";
import * as _263 from "./base/reflection/v2alpha1/reflection.rpc.func";
import * as _264 from "./base/tendermint/v1beta1/query.rpc.func";
import * as _265 from "./circuit/v1/query.rpc.func";
import * as _266 from "./consensus/v1/query.rpc.func";
import * as _267 from "./distribution/v1beta1/query.rpc.func";
import * as _268 from "./evidence/v1beta1/query.rpc.func";
import * as _269 from "./feegrant/v1beta1/query.rpc.func";
import * as _270 from "./gov/v1/query.rpc.func";
import * as _271 from "./gov/v1beta1/query.rpc.func";
import * as _272 from "./group/v1/query.rpc.func";
import * as _273 from "./mint/v1beta1/query.rpc.func";
import * as _274 from "./nft/v1beta1/query.rpc.func";
import * as _275 from "./orm/query/v1alpha1/query.rpc.func";
import * as _276 from "./params/v1beta1/query.rpc.func";
import * as _277 from "./reflection/v1/reflection.rpc.func";
import * as _278 from "./slashing/v1beta1/query.rpc.func";
import * as _279 from "./staking/v1beta1/query.rpc.func";
import * as _280 from "./tx/v1beta1/service.rpc.func";
import * as _281 from "./upgrade/v1beta1/query.rpc.func";
import * as _282 from "./app/v1alpha1/query.rpc.Query";
import * as _283 from "./auth/v1beta1/query.rpc.Query";
import * as _284 from "./authz/v1beta1/query.rpc.Query";
import * as _285 from "./autocli/v1/query.rpc.Query";
import * as _286 from "./bank/v1beta1/query.rpc.Query";
import * as _287 from "./base/node/v1beta1/query.rpc.Service";
import * as _288 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _289 from "./circuit/v1/query.rpc.Query";
import * as _290 from "./consensus/v1/query.rpc.Query";
import * as _291 from "./distribution/v1beta1/query.rpc.Query";
import * as _292 from "./evidence/v1beta1/query.rpc.Query";
import * as _293 from "./feegrant/v1beta1/query.rpc.Query";
import * as _294 from "./gov/v1/query.rpc.Query";
import * as _295 from "./gov/v1beta1/query.rpc.Query";
import * as _296 from "./group/v1/query.rpc.Query";
import * as _297 from "./mint/v1beta1/query.rpc.Query";
import * as _298 from "./nft/v1beta1/query.rpc.Query";
import * as _299 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _300 from "./params/v1beta1/query.rpc.Query";
import * as _301 from "./slashing/v1beta1/query.rpc.Query";
import * as _302 from "./staking/v1beta1/query.rpc.Query";
import * as _303 from "./tx/v1beta1/service.rpc.Service";
import * as _304 from "./upgrade/v1beta1/query.rpc.Query";
import * as _305 from "./auth/v1beta1/tx.rpc.func";
import * as _306 from "./authz/v1beta1/tx.rpc.func";
import * as _307 from "./bank/v1beta1/tx.rpc.func";
import * as _308 from "./circuit/v1/tx.rpc.func";
import * as _309 from "./consensus/v1/tx.rpc.func";
import * as _310 from "./crisis/v1beta1/tx.rpc.func";
import * as _311 from "./distribution/v1beta1/tx.rpc.func";
import * as _312 from "./evidence/v1beta1/tx.rpc.func";
import * as _313 from "./feegrant/v1beta1/tx.rpc.func";
import * as _314 from "./gov/v1/tx.rpc.func";
import * as _315 from "./gov/v1beta1/tx.rpc.func";
import * as _316 from "./group/v1/tx.rpc.func";
import * as _317 from "./mint/v1beta1/tx.rpc.func";
import * as _318 from "./nft/v1beta1/tx.rpc.func";
import * as _319 from "./slashing/v1beta1/tx.rpc.func";
import * as _320 from "./staking/v1beta1/tx.rpc.func";
import * as _321 from "./upgrade/v1beta1/tx.rpc.func";
import * as _322 from "./vesting/v1beta1/tx.rpc.func";
import * as _323 from "./auth/v1beta1/tx.rpc.msg";
import * as _324 from "./authz/v1beta1/tx.rpc.msg";
import * as _325 from "./bank/v1beta1/tx.rpc.msg";
import * as _326 from "./circuit/v1/tx.rpc.msg";
import * as _327 from "./consensus/v1/tx.rpc.msg";
import * as _328 from "./crisis/v1beta1/tx.rpc.msg";
import * as _329 from "./distribution/v1beta1/tx.rpc.msg";
import * as _330 from "./evidence/v1beta1/tx.rpc.msg";
import * as _331 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _332 from "./gov/v1/tx.rpc.msg";
import * as _333 from "./gov/v1beta1/tx.rpc.msg";
import * as _334 from "./group/v1/tx.rpc.msg";
import * as _335 from "./mint/v1beta1/tx.rpc.msg";
import * as _336 from "./nft/v1beta1/tx.rpc.msg";
import * as _337 from "./slashing/v1beta1/tx.rpc.msg";
import * as _338 from "./staking/v1beta1/tx.rpc.msg";
import * as _339 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _340 from "./vesting/v1beta1/tx.rpc.msg";
import * as _381 from "./lcd";
import * as _382 from "./rpc.query";
import * as _383 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._7
      };
    }
    export const v1alpha1 = {
      ..._8,
      ..._9,
      ..._10,
      ..._256,
      ..._282
    };
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._11
      };
    }
    export const v1beta1 = {
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._200,
      ..._218,
      ..._236,
      ..._257,
      ..._283,
      ..._305,
      ..._323
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._16
      };
    }
    export const v1beta1 = {
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._201,
      ..._219,
      ..._237,
      ..._258,
      ..._284,
      ..._306,
      ..._324
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._22,
      ..._23,
      ..._259,
      ..._285
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._24
      };
    }
    export const v1beta1 = {
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._202,
      ..._220,
      ..._238,
      ..._260,
      ..._286,
      ..._307,
      ..._325
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._30
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._31,
        ..._239,
        ..._261,
        ..._287
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._32
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._33,
        ..._262
      };
      export const v2alpha1 = {
        ..._34,
        ..._263
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._35,
        ..._36,
        ..._240,
        ..._264,
        ..._288
      };
    }
    export const v1beta1 = {
      ..._37
    };
    export namespace kv {
      export const v1beta1 = {
        ..._38
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._39
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._40,
        ..._41
      };
    }
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._42
      };
    }
    export const v1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._203,
      ..._221,
      ..._241,
      ..._265,
      ..._289,
      ..._308,
      ..._326
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._46
      };
    }
    export const v1 = {
      ..._47,
      ..._48,
      ..._204,
      ..._222,
      ..._242,
      ..._266,
      ..._290,
      ..._309,
      ..._327
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._49
      };
    }
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._205,
      ..._223,
      ..._310,
      ..._328
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._52
    };
    export namespace hd {
      export const v1 = {
        ..._53
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._54
      };
    }
    export const multisig = {
      ..._55
    };
    export const secp256k1 = {
      ..._56
    };
    export const secp256r1 = {
      ..._57
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._58
      };
    }
    export const v1beta1 = {
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._206,
      ..._224,
      ..._243,
      ..._267,
      ..._291,
      ..._311,
      ..._329
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._63
      };
    }
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._207,
      ..._225,
      ..._244,
      ..._268,
      ..._292,
      ..._312,
      ..._330
    };
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._68
      };
    }
    export const v1beta1 = {
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._208,
      ..._226,
      ..._245,
      ..._269,
      ..._293,
      ..._313,
      ..._331
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._73
      };
    }
    export const v1beta1 = {
      ..._74
    };
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._75
      };
    }
    export const v1 = {
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._209,
      ..._227,
      ..._246,
      ..._270,
      ..._294,
      ..._314,
      ..._332
    };
    export const v1beta1 = {
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._210,
      ..._228,
      ..._247,
      ..._271,
      ..._295,
      ..._315,
      ..._333
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._84
      };
    }
    export const v1 = {
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._211,
      ..._229,
      ..._248,
      ..._272,
      ..._296,
      ..._316,
      ..._334
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._90
      };
    }
    export const v1beta1 = {
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._212,
      ..._230,
      ..._249,
      ..._273,
      ..._297,
      ..._317,
      ..._335
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._95
      };
    }
    export const v1 = {
      ..._96
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._97
      };
    }
    export const v1beta1 = {
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._213,
      ..._231,
      ..._250,
      ..._274,
      ..._298,
      ..._318,
      ..._336
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._103
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._104,
        ..._275,
        ..._299
      };
    }
    export const v1 = {
      ..._105
    };
    export const v1alpha1 = {
      ..._106
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._107
      };
    }
    export const v1beta1 = {
      ..._108,
      ..._109,
      ..._251,
      ..._276,
      ..._300
    };
  }
  export namespace query {
    export const v1 = {
      ..._110
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._111,
      ..._277
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._112
      };
    }
    export const v1beta1 = {
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._214,
      ..._232,
      ..._252,
      ..._278,
      ..._301,
      ..._319,
      ..._337
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._117
      };
    }
    export const v1beta1 = {
      ..._118,
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._215,
      ..._233,
      ..._253,
      ..._279,
      ..._302,
      ..._320,
      ..._338
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._123
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._124
      };
    }
    export namespace streaming {
      export const abci = {
        ..._125
      };
    }
    export const v1beta1 = {
      ..._126,
      ..._127
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._128
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._129
      };
    }
    export const v1beta1 = {
      ..._130,
      ..._131,
      ..._254,
      ..._280,
      ..._303
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._132
      };
    }
    export const v1beta1 = {
      ..._133,
      ..._134,
      ..._135,
      ..._216,
      ..._234,
      ..._255,
      ..._281,
      ..._304,
      ..._321,
      ..._339
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._136
      };
    }
    export const v1beta1 = {
      ..._137,
      ..._138,
      ..._217,
      ..._235,
      ..._322,
      ..._340
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._139,
      ..._140
    };
  }
  export const ClientFactory = {
    ..._381,
    ..._382,
    ..._383
  };
}