import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ConnectionEnd, ConnectionEndSDKType, IdentifiedConnection, IdentifiedConnectionSDKType } from "./connection";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { QueryConnectionRequest, QueryConnectionRequestSDKType, QueryConnectionResponse, QueryConnectionResponseSDKType, QueryConnectionsRequest, QueryConnectionsRequestSDKType, QueryConnectionsResponse, QueryConnectionsResponseSDKType, QueryClientConnectionsRequest, QueryClientConnectionsRequestSDKType, QueryClientConnectionsResponse, QueryClientConnectionsResponseSDKType, QueryConnectionClientStateRequest, QueryConnectionClientStateRequestSDKType, QueryConnectionClientStateResponse, QueryConnectionClientStateResponseSDKType, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateRequestSDKType, QueryConnectionConsensusStateResponse, QueryConnectionConsensusStateResponseSDKType } from "./query";
export const createGetConnection = (clientResolver?: RpcResolver) => buildQuery<QueryConnectionRequest, QueryConnectionResponse>({
  encode: QueryConnectionRequest.encode,
  decode: QueryConnectionResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "Connection",
  clientResolver,
  deps: [QueryConnectionRequest, QueryConnectionResponse]
});
export const createGetConnections = (clientResolver?: RpcResolver) => buildQuery<QueryConnectionsRequest, QueryConnectionsResponse>({
  encode: QueryConnectionsRequest.encode,
  decode: QueryConnectionsResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "Connections",
  clientResolver,
  deps: [QueryConnectionsRequest, QueryConnectionsResponse]
});
export const createGetClientConnections = (clientResolver?: RpcResolver) => buildQuery<QueryClientConnectionsRequest, QueryClientConnectionsResponse>({
  encode: QueryClientConnectionsRequest.encode,
  decode: QueryClientConnectionsResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "ClientConnections",
  clientResolver,
  deps: [QueryClientConnectionsRequest, QueryClientConnectionsResponse]
});
export const createGetConnectionClientState = (clientResolver?: RpcResolver) => buildQuery<QueryConnectionClientStateRequest, QueryConnectionClientStateResponse>({
  encode: QueryConnectionClientStateRequest.encode,
  decode: QueryConnectionClientStateResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "ConnectionClientState",
  clientResolver,
  deps: [QueryConnectionClientStateRequest, QueryConnectionClientStateResponse]
});
export const createGetConnectionConsensusState = (clientResolver?: RpcResolver) => buildQuery<QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse>({
  encode: QueryConnectionConsensusStateRequest.encode,
  decode: QueryConnectionConsensusStateResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "ConnectionConsensusState",
  clientResolver,
  deps: [QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse]
});