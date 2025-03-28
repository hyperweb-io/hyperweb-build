import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BasicAllowance, BasicAllowanceSDKType, PeriodicAllowance, PeriodicAllowanceSDKType, AllowedMsgAllowance, AllowedMsgAllowanceSDKType } from "./feegrant";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgGrantAllowance, MsgGrantAllowanceSDKType, MsgGrantAllowanceResponse, MsgGrantAllowanceResponseSDKType, MsgRevokeAllowance, MsgRevokeAllowanceSDKType, MsgRevokeAllowanceResponse, MsgRevokeAllowanceResponseSDKType, MsgPruneAllowances, MsgPruneAllowancesSDKType, MsgPruneAllowancesResponse, MsgPruneAllowancesResponseSDKType } from "./tx";
/** Msg defines the feegrant msg service. */
export interface Msg {
  /**
   * GrantAllowance grants fee allowance to the grantee on the granter's
   * account with the provided expiration time.
   */
  grantAllowance(request: MsgGrantAllowance): Promise<MsgGrantAllowanceResponse>;
  /**
   * RevokeAllowance revokes any fee allowance of granter's account that
   * has been granted to the grantee.
   */
  revokeAllowance(request: MsgRevokeAllowance): Promise<MsgRevokeAllowanceResponse>;
  /**
   * PruneAllowances prunes expired fee allowances, currently up to 75 at a time.
   * 
   * Since cosmos-sdk 0.50
   */
  pruneAllowances(request: MsgPruneAllowances): Promise<MsgPruneAllowancesResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* GrantAllowance grants fee allowance to the grantee on the granter's
   account with the provided expiration time. */
  grantAllowance = async (request: MsgGrantAllowance): Promise<MsgGrantAllowanceResponse> => {
    const data = MsgGrantAllowance.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "GrantAllowance", data);
    return promise.then(data => MsgGrantAllowanceResponse.decode(new BinaryReader(data)));
  };
  /* RevokeAllowance revokes any fee allowance of granter's account that
   has been granted to the grantee. */
  revokeAllowance = async (request: MsgRevokeAllowance): Promise<MsgRevokeAllowanceResponse> => {
    const data = MsgRevokeAllowance.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "RevokeAllowance", data);
    return promise.then(data => MsgRevokeAllowanceResponse.decode(new BinaryReader(data)));
  };
  /* PruneAllowances prunes expired fee allowances, currently up to 75 at a time.
  
   Since cosmos-sdk 0.50 */
  pruneAllowances = async (request: MsgPruneAllowances): Promise<MsgPruneAllowancesResponse> => {
    const data = MsgPruneAllowances.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "PruneAllowances", data);
    return promise.then(data => MsgPruneAllowancesResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};