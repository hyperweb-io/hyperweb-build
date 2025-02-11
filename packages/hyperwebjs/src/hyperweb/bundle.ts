import * as _0 from "./hvm/contract_account";
import * as _1 from "./hvm/contracts";
import * as _2 from "./hvm/genesis";
import * as _3 from "./hvm/params";
import * as _4 from "./hvm/query";
import * as _5 from "./hvm/tx";
import * as _193 from "./hvm/tx.amino";
import * as _194 from "./hvm/tx.registry";
import * as _195 from "./hvm/query.lcd";
import * as _196 from "./hvm/query.rpc.Query";
import * as _197 from "./hvm/tx.rpc.msg";
import * as _321 from "./lcd";
import * as _322 from "./rpc.query";
import * as _323 from "./rpc.tx";
export namespace hyperweb {
  export const hvm = {
    ..._0,
    ..._1,
    ..._2,
    ..._3,
    ..._4,
    ..._5,
    ..._193,
    ..._194,
    ..._195,
    ..._196,
    ..._197
  };
  export const ClientFactory = {
    ..._321,
    ..._322,
    ..._323
  };
}