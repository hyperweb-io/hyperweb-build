import { Params, ParamsSDKType } from "./mint";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryInflationRequest, QueryInflationRequestSDKType, QueryInflationResponse, QueryInflationResponseSDKType, QueryAnnualProvisionsRequest, QueryAnnualProvisionsRequestSDKType, QueryAnnualProvisionsResponse, QueryAnnualProvisionsResponseSDKType } from "./query";
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.mint.v1beta1.Query",
  method: "Params",
  clientResolver,
  deps: [QueryParamsRequest, QueryParamsResponse]
});
export const createGetInflation = (clientResolver?: RpcResolver) => buildQuery<QueryInflationRequest, QueryInflationResponse>({
  encode: QueryInflationRequest.encode,
  decode: QueryInflationResponse.decode,
  service: "cosmos.mint.v1beta1.Query",
  method: "Inflation",
  clientResolver,
  deps: [QueryInflationRequest, QueryInflationResponse]
});
export const createGetAnnualProvisions = (clientResolver?: RpcResolver) => buildQuery<QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse>({
  encode: QueryAnnualProvisionsRequest.encode,
  decode: QueryAnnualProvisionsResponse.decode,
  service: "cosmos.mint.v1beta1.Query",
  method: "AnnualProvisions",
  clientResolver,
  deps: [QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse]
});