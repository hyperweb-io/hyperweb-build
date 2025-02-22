import * as _174 from "./applications/transfer/v1/genesis";
import * as _175 from "./applications/transfer/v1/query";
import * as _176 from "./applications/transfer/v1/transfer";
import * as _177 from "./applications/transfer/v1/tx";
import * as _178 from "./applications/transfer/v2/packet";
import * as _179 from "./core/channel/v1/channel";
import * as _180 from "./core/channel/v1/genesis";
import * as _181 from "./core/channel/v1/query";
import * as _182 from "./core/channel/v1/tx";
import * as _183 from "./core/client/v1/client";
import * as _184 from "./core/client/v1/genesis";
import * as _185 from "./core/client/v1/query";
import * as _186 from "./core/client/v1/tx";
import * as _187 from "./core/commitment/v1/commitment";
import * as _188 from "./core/connection/v1/connection";
import * as _189 from "./core/connection/v1/genesis";
import * as _190 from "./core/connection/v1/query";
import * as _191 from "./core/connection/v1/tx";
import * as _192 from "./core/port/v1/query";
import * as _193 from "./core/types/v1/genesis";
import * as _194 from "./lightclients/localhost/v1/localhost";
import * as _195 from "./lightclients/solomachine/v1/solomachine";
import * as _196 from "./lightclients/solomachine/v2/solomachine";
import * as _197 from "./lightclients/tendermint/v1/tendermint";
import * as _310 from "./applications/transfer/v1/tx.amino";
import * as _311 from "./core/channel/v1/tx.amino";
import * as _312 from "./core/client/v1/tx.amino";
import * as _313 from "./core/connection/v1/tx.amino";
import * as _314 from "./applications/transfer/v1/tx.registry";
import * as _315 from "./core/channel/v1/tx.registry";
import * as _316 from "./core/client/v1/tx.registry";
import * as _317 from "./core/connection/v1/tx.registry";
import * as _318 from "./applications/transfer/v1/query.lcd";
import * as _319 from "./core/channel/v1/query.lcd";
import * as _320 from "./core/client/v1/query.lcd";
import * as _321 from "./core/connection/v1/query.lcd";
import * as _322 from "./applications/transfer/v1/query.rpc.Query";
import * as _323 from "./core/channel/v1/query.rpc.Query";
import * as _324 from "./core/client/v1/query.rpc.Query";
import * as _325 from "./core/connection/v1/query.rpc.Query";
import * as _326 from "./core/port/v1/query.rpc.Query";
import * as _327 from "./applications/transfer/v1/tx.rpc.msg";
import * as _328 from "./core/channel/v1/tx.rpc.msg";
import * as _329 from "./core/client/v1/tx.rpc.msg";
import * as _330 from "./core/connection/v1/tx.rpc.msg";
import * as _343 from "./lcd";
import * as _344 from "./rpc.query";
import * as _345 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._174,
        ..._175,
        ..._176,
        ..._177,
        ..._310,
        ..._314,
        ..._318,
        ..._322,
        ..._327
      };
      export const v2 = {
        ..._178
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._179,
        ..._180,
        ..._181,
        ..._182,
        ..._311,
        ..._315,
        ..._319,
        ..._323,
        ..._328
      };
    }
    export namespace client {
      export const v1 = {
        ..._183,
        ..._184,
        ..._185,
        ..._186,
        ..._312,
        ..._316,
        ..._320,
        ..._324,
        ..._329
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._187
      };
    }
    export namespace connection {
      export const v1 = {
        ..._188,
        ..._189,
        ..._190,
        ..._191,
        ..._313,
        ..._317,
        ..._321,
        ..._325,
        ..._330
      };
    }
    export namespace port {
      export const v1 = {
        ..._192,
        ..._326
      };
    }
    export namespace types {
      export const v1 = {
        ..._193
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._194
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._195
      };
      export const v2 = {
        ..._196
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._197
      };
    }
  }
  export const ClientFactory = {
    ..._343,
    ..._344,
    ..._345
  };
}