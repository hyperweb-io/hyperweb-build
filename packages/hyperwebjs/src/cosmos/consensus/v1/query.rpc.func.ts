import { ConsensusParams, ConsensusParamsSDKType } from "../../../tendermint/types/params";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.consensus.v1.Query",
  method: "Params",
  clientResolver,
  deps: [QueryParamsRequest, QueryParamsResponse]
});