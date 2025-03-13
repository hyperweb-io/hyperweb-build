import { Timestamp, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { ConfigRequest, ConfigRequestSDKType, ConfigResponse, ConfigResponseSDKType, StatusRequest, StatusRequestSDKType, StatusResponse, StatusResponseSDKType } from "./query";
/** Service defines the gRPC querier service for node related queries. */
export interface Service {
  /** Config queries for the operator configuration. */
  config(request?: ConfigRequest): Promise<ConfigResponse>;
  /** Status queries for the node status. */
  status(request?: StatusRequest): Promise<StatusResponse>;
}
export class ServiceClientImpl implements Service {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Config queries for the operator configuration. */
  config = async (request: ConfigRequest = {}): Promise<ConfigResponse> => {
    const data = ConfigRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.node.v1beta1.Service", "Config", data);
    return promise.then(data => ConfigResponse.decode(new BinaryReader(data)));
  };
  /* Status queries for the node status. */
  status = async (request: StatusRequest = {}): Promise<StatusResponse> => {
    const data = StatusRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.node.v1beta1.Service", "Status", data);
    return promise.then(data => StatusResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new ServiceClientImpl(rpc);
};