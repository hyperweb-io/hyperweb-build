import * as _0 from "./hvm/contract_account";
import * as _1 from "./hvm/contracts";
import * as _2 from "./hvm/genesis";
import * as _3 from "./hvm/params";
import * as _4 from "./hvm/query";
import * as _5 from "./hvm/tx";
import * as _193 from "./hvm/tx.amino";
import * as _194 from "./hvm/tx.registry";
import * as _195 from "./hvm/query.lcd";
import * as _196 from "./hvm/query.rpc.func";
import * as _197 from "./hvm/query.rpc.Query";
import * as _198 from "./hvm/tx.rpc.func";
import * as _199 from "./hvm/tx.rpc.msg";
import * as _378 from "./lcd";
import * as _379 from "./rpc.query";
import * as _380 from "./rpc.tx";
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
    ..._197,
    ..._198,
    ..._199
  };
  export const ClientFactory = {
    ..._378,
    ..._379,
    ..._380
  };
}