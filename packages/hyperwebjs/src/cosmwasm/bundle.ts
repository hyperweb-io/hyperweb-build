import * as _159 from "./wasm/v1/authz";
import * as _160 from "./wasm/v1/genesis";
import * as _161 from "./wasm/v1/ibc";
import * as _162 from "./wasm/v1/proposal";
import * as _163 from "./wasm/v1/query";
import * as _164 from "./wasm/v1/tx";
import * as _165 from "./wasm/v1/types";
import * as _305 from "./wasm/v1/tx.amino";
import * as _306 from "./wasm/v1/tx.registry";
import * as _307 from "./wasm/v1/query.lcd";
import * as _308 from "./wasm/v1/query.rpc.Query";
import * as _309 from "./wasm/v1/tx.rpc.msg";
import * as _340 from "./lcd";
import * as _341 from "./rpc.query";
import * as _342 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._305,
      ..._306,
      ..._307,
      ..._308,
      ..._309
    };
  }
  export const ClientFactory = {
    ..._340,
    ..._341,
    ..._342
  };
}