import * as _6 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _7 from "./tokenfactory/v1beta1/genesis";
import * as _8 from "./tokenfactory/v1beta1/params";
import * as _9 from "./tokenfactory/v1beta1/query";
import * as _10 from "./tokenfactory/v1beta1/tx";
import * as _203 from "./tokenfactory/v1beta1/tx.amino";
import * as _204 from "./tokenfactory/v1beta1/tx.registry";
import * as _205 from "./tokenfactory/v1beta1/query.lcd";
import * as _206 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _207 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _334 from "./lcd";
import * as _335 from "./rpc.query";
import * as _336 from "./rpc.tx";
export namespace osmosis {
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._203,
      ..._204,
      ..._205,
      ..._206,
      ..._207
    };
  }
  export const ClientFactory = {
    ..._334,
    ..._335,
    ..._336
  };
}