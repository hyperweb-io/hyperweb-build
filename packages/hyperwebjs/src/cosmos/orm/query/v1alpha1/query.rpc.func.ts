import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Timestamp, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../../../google/protobuf/duration";
import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { GetRequest, GetRequestSDKType, GetResponse, GetResponseSDKType, ListRequest, ListRequestSDKType, ListResponse, ListResponseSDKType } from "./query";
export const createGetGet = (clientResolver?: RpcResolver) => buildQuery<GetRequest, GetResponse>({
  encode: GetRequest.encode,
  decode: GetResponse.decode,
  service: "cosmos.orm.query.v1alpha1.Query",
  method: "Get",
  clientResolver,
  deps: [GetRequest, GetResponse]
});
export const createGetList = (clientResolver?: RpcResolver) => buildQuery<ListRequest, ListResponse>({
  encode: ListRequest.encode,
  decode: ListResponse.decode,
  service: "cosmos.orm.query.v1alpha1.Query",
  method: "List",
  clientResolver,
  deps: [ListRequest, ListResponse]
});