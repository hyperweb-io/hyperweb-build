import * as _169 from "./applications/transfer/v1/genesis";
import * as _170 from "./applications/transfer/v1/query";
import * as _171 from "./applications/transfer/v1/transfer";
import * as _172 from "./applications/transfer/v1/tx";
import * as _173 from "./applications/transfer/v2/packet";
import * as _174 from "./core/channel/v1/channel";
import * as _175 from "./core/channel/v1/genesis";
import * as _176 from "./core/channel/v1/query";
import * as _177 from "./core/channel/v1/tx";
import * as _178 from "./core/client/v1/client";
import * as _179 from "./core/client/v1/genesis";
import * as _180 from "./core/client/v1/query";
import * as _181 from "./core/client/v1/tx";
import * as _182 from "./core/commitment/v1/commitment";
import * as _183 from "./core/connection/v1/connection";
import * as _184 from "./core/connection/v1/genesis";
import * as _185 from "./core/connection/v1/query";
import * as _186 from "./core/connection/v1/tx";
import * as _187 from "./core/port/v1/query";
import * as _188 from "./core/types/v1/genesis";
import * as _189 from "./lightclients/localhost/v1/localhost";
import * as _190 from "./lightclients/solomachine/v1/solomachine";
import * as _191 from "./lightclients/solomachine/v2/solomachine";
import * as _192 from "./lightclients/tendermint/v1/tendermint";
import * as _348 from "./applications/transfer/v1/tx.amino";
import * as _349 from "./core/channel/v1/tx.amino";
import * as _350 from "./core/client/v1/tx.amino";
import * as _351 from "./core/connection/v1/tx.amino";
import * as _352 from "./applications/transfer/v1/tx.registry";
import * as _353 from "./core/channel/v1/tx.registry";
import * as _354 from "./core/client/v1/tx.registry";
import * as _355 from "./core/connection/v1/tx.registry";
import * as _356 from "./applications/transfer/v1/query.lcd";
import * as _357 from "./core/channel/v1/query.lcd";
import * as _358 from "./core/client/v1/query.lcd";
import * as _359 from "./core/connection/v1/query.lcd";
import * as _360 from "./applications/transfer/v1/query.rpc.func";
import * as _361 from "./core/channel/v1/query.rpc.func";
import * as _362 from "./core/client/v1/query.rpc.func";
import * as _363 from "./core/connection/v1/query.rpc.func";
import * as _364 from "./core/port/v1/query.rpc.func";
import * as _365 from "./applications/transfer/v1/query.rpc.Query";
import * as _366 from "./core/channel/v1/query.rpc.Query";
import * as _367 from "./core/client/v1/query.rpc.Query";
import * as _368 from "./core/connection/v1/query.rpc.Query";
import * as _369 from "./core/port/v1/query.rpc.Query";
import * as _370 from "./applications/transfer/v1/tx.rpc.func";
import * as _371 from "./core/channel/v1/tx.rpc.func";
import * as _372 from "./core/client/v1/tx.rpc.func";
import * as _373 from "./core/connection/v1/tx.rpc.func";
import * as _374 from "./applications/transfer/v1/tx.rpc.msg";
import * as _375 from "./core/channel/v1/tx.rpc.msg";
import * as _376 from "./core/client/v1/tx.rpc.msg";
import * as _377 from "./core/connection/v1/tx.rpc.msg";
import * as _387 from "./lcd";
import * as _388 from "./rpc.query";
import * as _389 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._169,
        ..._170,
        ..._171,
        ..._172,
        ..._348,
        ..._352,
        ..._356,
        ..._360,
        ..._365,
        ..._370,
        ..._374
      };
      export const v2 = {
        ..._173
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._174,
        ..._175,
        ..._176,
        ..._177,
        ..._349,
        ..._353,
        ..._357,
        ..._361,
        ..._366,
        ..._371,
        ..._375
      };
    }
    export namespace client {
      export const v1 = {
        ..._178,
        ..._179,
        ..._180,
        ..._181,
        ..._350,
        ..._354,
        ..._358,
        ..._362,
        ..._367,
        ..._372,
        ..._376
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._182
      };
    }
    export namespace connection {
      export const v1 = {
        ..._183,
        ..._184,
        ..._185,
        ..._186,
        ..._351,
        ..._355,
        ..._359,
        ..._363,
        ..._368,
        ..._373,
        ..._377
      };
    }
    export namespace port {
      export const v1 = {
        ..._187,
        ..._364,
        ..._369
      };
    }
    export namespace types {
      export const v1 = {
        ..._188
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._189
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._190
      };
      export const v2 = {
        ..._191
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._192
      };
    }
  }
  export const ClientFactory = {
    ..._387,
    ..._388,
    ..._389
  };
}