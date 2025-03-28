import { Timestamp, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { ConfigRequest, ConfigRequestSDKType, ConfigResponse, ConfigResponseSDKType, StatusRequest, StatusRequestSDKType, StatusResponse, StatusResponseSDKType } from "./query";
export const createGetConfig = (clientResolver?: RpcResolver) => buildQuery<ConfigRequest, ConfigResponse>({
  encode: ConfigRequest.encode,
  decode: ConfigResponse.decode,
  service: "cosmos.base.node.v1beta1.Service",
  method: "Config",
  clientResolver,
  deps: [ConfigRequest, ConfigResponse]
});
export const createGetStatus = (clientResolver?: RpcResolver) => buildQuery<StatusRequest, StatusResponse>({
  encode: StatusRequest.encode,
  decode: StatusResponse.decode,
  service: "cosmos.base.node.v1beta1.Service",
  method: "Status",
  clientResolver,
  deps: [StatusRequest, StatusResponse]
});