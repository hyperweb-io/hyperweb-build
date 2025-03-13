import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Channel, ChannelSDKType, IdentifiedChannel, IdentifiedChannelSDKType, PacketState, PacketStateSDKType } from "./channel";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { QueryChannelRequest, QueryChannelRequestSDKType, QueryChannelResponse, QueryChannelResponseSDKType, QueryChannelsRequest, QueryChannelsRequestSDKType, QueryChannelsResponse, QueryChannelsResponseSDKType, QueryConnectionChannelsRequest, QueryConnectionChannelsRequestSDKType, QueryConnectionChannelsResponse, QueryConnectionChannelsResponseSDKType, QueryChannelClientStateRequest, QueryChannelClientStateRequestSDKType, QueryChannelClientStateResponse, QueryChannelClientStateResponseSDKType, QueryChannelConsensusStateRequest, QueryChannelConsensusStateRequestSDKType, QueryChannelConsensusStateResponse, QueryChannelConsensusStateResponseSDKType, QueryPacketCommitmentRequest, QueryPacketCommitmentRequestSDKType, QueryPacketCommitmentResponse, QueryPacketCommitmentResponseSDKType, QueryPacketCommitmentsRequest, QueryPacketCommitmentsRequestSDKType, QueryPacketCommitmentsResponse, QueryPacketCommitmentsResponseSDKType, QueryPacketReceiptRequest, QueryPacketReceiptRequestSDKType, QueryPacketReceiptResponse, QueryPacketReceiptResponseSDKType, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementRequestSDKType, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementResponseSDKType, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsRequestSDKType, QueryPacketAcknowledgementsResponse, QueryPacketAcknowledgementsResponseSDKType, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsRequestSDKType, QueryUnreceivedPacketsResponse, QueryUnreceivedPacketsResponseSDKType, QueryUnreceivedAcksRequest, QueryUnreceivedAcksRequestSDKType, QueryUnreceivedAcksResponse, QueryUnreceivedAcksResponseSDKType, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveRequestSDKType, QueryNextSequenceReceiveResponse, QueryNextSequenceReceiveResponseSDKType } from "./query";
export const createGetChannel = (clientResolver?: RpcResolver) => buildQuery<QueryChannelRequest, QueryChannelResponse>({
  encode: QueryChannelRequest.encode,
  decode: QueryChannelResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "Channel",
  clientResolver,
  deps: [QueryChannelRequest, QueryChannelResponse]
});
export const createGetChannels = (clientResolver?: RpcResolver) => buildQuery<QueryChannelsRequest, QueryChannelsResponse>({
  encode: QueryChannelsRequest.encode,
  decode: QueryChannelsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "Channels",
  clientResolver,
  deps: [QueryChannelsRequest, QueryChannelsResponse]
});
export const createGetConnectionChannels = (clientResolver?: RpcResolver) => buildQuery<QueryConnectionChannelsRequest, QueryConnectionChannelsResponse>({
  encode: QueryConnectionChannelsRequest.encode,
  decode: QueryConnectionChannelsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "ConnectionChannels",
  clientResolver,
  deps: [QueryConnectionChannelsRequest, QueryConnectionChannelsResponse]
});
export const createGetChannelClientState = (clientResolver?: RpcResolver) => buildQuery<QueryChannelClientStateRequest, QueryChannelClientStateResponse>({
  encode: QueryChannelClientStateRequest.encode,
  decode: QueryChannelClientStateResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "ChannelClientState",
  clientResolver,
  deps: [QueryChannelClientStateRequest, QueryChannelClientStateResponse]
});
export const createGetChannelConsensusState = (clientResolver?: RpcResolver) => buildQuery<QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse>({
  encode: QueryChannelConsensusStateRequest.encode,
  decode: QueryChannelConsensusStateResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "ChannelConsensusState",
  clientResolver,
  deps: [QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse]
});
export const createGetPacketCommitment = (clientResolver?: RpcResolver) => buildQuery<QueryPacketCommitmentRequest, QueryPacketCommitmentResponse>({
  encode: QueryPacketCommitmentRequest.encode,
  decode: QueryPacketCommitmentResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketCommitment",
  clientResolver,
  deps: [QueryPacketCommitmentRequest, QueryPacketCommitmentResponse]
});
export const createGetPacketCommitments = (clientResolver?: RpcResolver) => buildQuery<QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse>({
  encode: QueryPacketCommitmentsRequest.encode,
  decode: QueryPacketCommitmentsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketCommitments",
  clientResolver,
  deps: [QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse]
});
export const createGetPacketReceipt = (clientResolver?: RpcResolver) => buildQuery<QueryPacketReceiptRequest, QueryPacketReceiptResponse>({
  encode: QueryPacketReceiptRequest.encode,
  decode: QueryPacketReceiptResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketReceipt",
  clientResolver,
  deps: [QueryPacketReceiptRequest, QueryPacketReceiptResponse]
});
export const createGetPacketAcknowledgement = (clientResolver?: RpcResolver) => buildQuery<QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse>({
  encode: QueryPacketAcknowledgementRequest.encode,
  decode: QueryPacketAcknowledgementResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketAcknowledgement",
  clientResolver,
  deps: [QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse]
});
export const createGetPacketAcknowledgements = (clientResolver?: RpcResolver) => buildQuery<QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse>({
  encode: QueryPacketAcknowledgementsRequest.encode,
  decode: QueryPacketAcknowledgementsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketAcknowledgements",
  clientResolver,
  deps: [QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse]
});
export const createGetUnreceivedPackets = (clientResolver?: RpcResolver) => buildQuery<QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse>({
  encode: QueryUnreceivedPacketsRequest.encode,
  decode: QueryUnreceivedPacketsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "UnreceivedPackets",
  clientResolver,
  deps: [QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse]
});
export const createGetUnreceivedAcks = (clientResolver?: RpcResolver) => buildQuery<QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse>({
  encode: QueryUnreceivedAcksRequest.encode,
  decode: QueryUnreceivedAcksResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "UnreceivedAcks",
  clientResolver,
  deps: [QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse]
});
export const createGetNextSequenceReceive = (clientResolver?: RpcResolver) => buildQuery<QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse>({
  encode: QueryNextSequenceReceiveRequest.encode,
  decode: QueryNextSequenceReceiveResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "NextSequenceReceive",
  clientResolver,
  deps: [QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse]
});