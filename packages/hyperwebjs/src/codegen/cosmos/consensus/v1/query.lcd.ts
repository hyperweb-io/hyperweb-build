import { ConsensusParams, ConsensusParamsSDKType } from "../../../tendermint/types/params";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Params queries the parameters of x/consensus module. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `cosmos/consensus/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  };
}