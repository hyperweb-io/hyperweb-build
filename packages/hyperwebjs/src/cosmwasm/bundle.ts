import * as _154 from "./wasm/v1/authz";
import * as _155 from "./wasm/v1/genesis";
import * as _156 from "./wasm/v1/ibc";
import * as _157 from "./wasm/v1/proposal";
import * as _158 from "./wasm/v1/query";
import * as _159 from "./wasm/v1/tx";
import * as _160 from "./wasm/v1/types";
import * as _341 from "./wasm/v1/tx.amino";
import * as _342 from "./wasm/v1/tx.registry";
import * as _343 from "./wasm/v1/query.lcd";
import * as _344 from "./wasm/v1/query.rpc.func";
import * as _345 from "./wasm/v1/query.rpc.Query";
import * as _346 from "./wasm/v1/tx.rpc.func";
import * as _347 from "./wasm/v1/tx.rpc.msg";
import * as _384 from "./lcd";
import * as _385 from "./rpc.query";
import * as _386 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._341,
      ..._342,
      ..._343,
      ..._344,
      ..._345,
      ..._346,
      ..._347
    };
  }
  export const ClientFactory = {
    ..._384,
    ..._385,
    ..._386
  };
}