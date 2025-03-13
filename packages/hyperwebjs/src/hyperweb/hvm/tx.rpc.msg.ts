import { Params, ParamsSDKType } from "./params";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { MsgUpdateParams, MsgUpdateParamsSDKType, MsgUpdateParamsResponse, MsgUpdateParamsResponseSDKType, MsgInstantiate, MsgInstantiateSDKType, MsgInstantiateResponse, MsgInstantiateResponseSDKType, MsgEval, MsgEvalSDKType, MsgEvalResponse, MsgEvalResponseSDKType } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** init */
  instantiate(request: MsgInstantiate): Promise<MsgInstantiateResponse>;
  /** eval */
  eval(request: MsgEval): Promise<MsgEvalResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* UpdateParams defines a (governance) operation for updating the module
   parameters. The authority defaults to the x/gov module account. */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("hyperweb.hvm.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* init */
  instantiate = async (request: MsgInstantiate): Promise<MsgInstantiateResponse> => {
    const data = MsgInstantiate.encode(request).finish();
    const promise = this.rpc.request("hyperweb.hvm.Msg", "Instantiate", data);
    return promise.then(data => MsgInstantiateResponse.decode(new BinaryReader(data)));
  };
  /* eval */
  eval = async (request: MsgEval): Promise<MsgEvalResponse> => {
    const data = MsgEval.encode(request).finish();
    const promise = this.rpc.request("hyperweb.hvm.Msg", "Eval", data);
    return promise.then(data => MsgEvalResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};