import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Timestamp, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../../../google/protobuf/duration";
import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { GetRequest, GetRequestSDKType, GetResponse, GetResponseSDKType, ListRequest, ListRequestSDKType, ListResponse, ListResponseSDKType } from "./query";
/** Query is a generic gRPC service for querying ORM data. */
export interface Query {
  /** Get queries an ORM table against an unique index. */
  get(request: GetRequest): Promise<GetResponse>;
  /** List queries an ORM table against an index. */
  list(request: ListRequest): Promise<ListResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Get queries an ORM table against an unique index. */
  get = async (request: GetRequest): Promise<GetResponse> => {
    const data = GetRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.orm.query.v1alpha1.Query", "Get", data);
    return promise.then(data => GetResponse.decode(new BinaryReader(data)));
  };
  /* List queries an ORM table against an index. */
  list = async (request: ListRequest): Promise<ListResponse> => {
    const data = ListRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.orm.query.v1alpha1.Query", "List", data);
    return promise.then(data => ListResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    get(request: GetRequest): Promise<GetResponse> {
      return queryService.get(request);
    },
    list(request: ListRequest): Promise<ListResponse> {
      return queryService.list(request);
    }
  };
};