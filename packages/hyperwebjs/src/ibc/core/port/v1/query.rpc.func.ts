import { Order, OrderSDKType, Counterparty, CounterpartySDKType } from "../../channel/v1/channel";
import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { QueryAppVersionRequest, QueryAppVersionRequestSDKType, QueryAppVersionResponse, QueryAppVersionResponseSDKType } from "./query";
export const createGetAppVersion = (clientResolver?: RpcResolver) => buildQuery<QueryAppVersionRequest, QueryAppVersionResponse>({
  encode: QueryAppVersionRequest.encode,
  decode: QueryAppVersionResponse.decode,
  service: "ibc.core.port.v1.Query",
  method: "AppVersion",
  clientResolver,
  deps: [QueryAppVersionRequest, QueryAppVersionResponse]
});