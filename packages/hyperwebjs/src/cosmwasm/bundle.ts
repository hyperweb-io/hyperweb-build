import * as _154 from "./wasm/v1/authz";
import * as _155 from "./wasm/v1/genesis";
import * as _156 from "./wasm/v1/ibc";
import * as _157 from "./wasm/v1/proposal";
import * as _158 from "./wasm/v1/query";
import * as _159 from "./wasm/v1/tx";
import * as _160 from "./wasm/v1/types";
import * as _295 from "./wasm/v1/tx.amino";
import * as _296 from "./wasm/v1/tx.registry";
import * as _297 from "./wasm/v1/query.lcd";
import * as _298 from "./wasm/v1/query.rpc.Query";
import * as _299 from "./wasm/v1/tx.rpc.msg";
import * as _327 from "./lcd";
import * as _328 from "./rpc.query";
import * as _329 from "./rpc.tx";
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
      ..._295,
      ..._296,
      ..._297,
      ..._298,
      ..._299
    };
  }
  export const ClientFactory = {
    ..._327,
    ..._328,
    ..._329
  };
}