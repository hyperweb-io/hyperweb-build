import { Config, ConfigSDKType } from "./config";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryConfigRequest, QueryConfigRequestSDKType, QueryConfigResponse, QueryConfigResponseSDKType } from "./query";
export const createGetConfig = (clientResolver?: RpcResolver) => buildQuery<QueryConfigRequest, QueryConfigResponse>({
  encode: QueryConfigRequest.encode,
  decode: QueryConfigResponse.decode,
  service: "cosmos.app.v1alpha1.Query",
  method: "Config",
  clientResolver,
  deps: [QueryConfigRequest, QueryConfigResponse]
});