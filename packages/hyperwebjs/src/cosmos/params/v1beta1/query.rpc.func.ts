import { ParamChange, ParamChangeSDKType } from "./params";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QuerySubspacesRequest, QuerySubspacesRequestSDKType, QuerySubspacesResponse, QuerySubspacesResponseSDKType } from "./query";
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.params.v1beta1.Query",
  method: "Params",
  clientResolver,
  deps: [QueryParamsRequest, QueryParamsResponse]
});
export const createGetSubspaces = (clientResolver?: RpcResolver) => buildQuery<QuerySubspacesRequest, QuerySubspacesResponse>({
  encode: QuerySubspacesRequest.encode,
  decode: QuerySubspacesResponse.decode,
  service: "cosmos.params.v1beta1.Query",
  method: "Subspaces",
  clientResolver,
  deps: [QuerySubspacesRequest, QuerySubspacesResponse]
});