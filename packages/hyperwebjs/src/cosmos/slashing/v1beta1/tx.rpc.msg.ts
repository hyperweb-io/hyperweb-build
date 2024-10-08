import { Params, ParamsSDKType } from "./slashing";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUnjail, MsgUnjailSDKType, MsgUnjailResponse, MsgUnjailResponseSDKType, MsgUpdateParams, MsgUpdateParamsSDKType, MsgUpdateParamsResponse, MsgUpdateParamsResponseSDKType } from "./tx";
/** Msg defines the slashing Msg service. */
export interface Msg {
  /**
   * Unjail defines a method for unjailing a jailed validator, thus returning
   * them into the bonded validator set, so they can begin receiving provisions
   * and rewards again.
   */
  unjail(request: MsgUnjail): Promise<MsgUnjailResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/slashing module
   * parameters. The authority defaults to the x/gov module account.
   * 
   * Since: cosmos-sdk 0.47
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Unjail defines a method for unjailing a jailed validator, thus returning
   them into the bonded validator set, so they can begin receiving provisions
   and rewards again. */
  unjail = async (request: MsgUnjail): Promise<MsgUnjailResponse> => {
    const data = MsgUnjail.encode(request).finish();
    const promise = this.rpc.request("cosmos.slashing.v1beta1.Msg", "Unjail", data);
    return promise.then(data => MsgUnjailResponse.decode(new BinaryReader(data)));
  };
  /* UpdateParams defines a governance operation for updating the x/slashing module
   parameters. The authority defaults to the x/gov module account.
  
   Since: cosmos-sdk 0.47 */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.slashing.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};