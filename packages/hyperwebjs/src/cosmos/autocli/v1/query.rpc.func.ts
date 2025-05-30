import { ModuleOptions, ModuleOptionsSDKType } from "./options";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { AppOptionsRequest, AppOptionsRequestSDKType, AppOptionsResponse, AppOptionsResponseSDKType } from "./query";
export const createGetAppOptions = (clientResolver?: RpcResolver) => buildQuery<AppOptionsRequest, AppOptionsResponse>({
  encode: AppOptionsRequest.encode,
  decode: AppOptionsResponse.decode,
  service: "cosmos.autocli.v1.Query",
  method: "AppOptions",
  clientResolver,
  deps: [AppOptionsRequest, AppOptionsResponse]
});