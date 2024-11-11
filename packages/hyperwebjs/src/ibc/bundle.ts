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
import * as _300 from "./applications/transfer/v1/tx.amino";
import * as _301 from "./core/channel/v1/tx.amino";
import * as _302 from "./core/client/v1/tx.amino";
import * as _303 from "./core/connection/v1/tx.amino";
import * as _304 from "./applications/transfer/v1/tx.registry";
import * as _305 from "./core/channel/v1/tx.registry";
import * as _306 from "./core/client/v1/tx.registry";
import * as _307 from "./core/connection/v1/tx.registry";
import * as _308 from "./applications/transfer/v1/query.lcd";
import * as _309 from "./core/channel/v1/query.lcd";
import * as _310 from "./core/client/v1/query.lcd";
import * as _311 from "./core/connection/v1/query.lcd";
import * as _312 from "./applications/transfer/v1/query.rpc.Query";
import * as _313 from "./core/channel/v1/query.rpc.Query";
import * as _314 from "./core/client/v1/query.rpc.Query";
import * as _315 from "./core/connection/v1/query.rpc.Query";
import * as _316 from "./core/port/v1/query.rpc.Query";
import * as _317 from "./applications/transfer/v1/tx.rpc.msg";
import * as _318 from "./core/channel/v1/tx.rpc.msg";
import * as _319 from "./core/client/v1/tx.rpc.msg";
import * as _320 from "./core/connection/v1/tx.rpc.msg";
import * as _330 from "./lcd";
import * as _331 from "./rpc.query";
import * as _332 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._169,
        ..._170,
        ..._171,
        ..._172,
        ..._300,
        ..._304,
        ..._308,
        ..._312,
        ..._317
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
        ..._301,
        ..._305,
        ..._309,
        ..._313,
        ..._318
      };
    }
    export namespace client {
      export const v1 = {
        ..._178,
        ..._179,
        ..._180,
        ..._181,
        ..._302,
        ..._306,
        ..._310,
        ..._314,
        ..._319
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
        ..._303,
        ..._307,
        ..._311,
        ..._315,
        ..._320
      };
    }
    export namespace port {
      export const v1 = {
        ..._187,
        ..._316
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
    ..._330,
    ..._331,
    ..._332
  };
}