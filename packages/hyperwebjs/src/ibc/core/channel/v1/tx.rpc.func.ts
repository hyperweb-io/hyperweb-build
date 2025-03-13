import { Channel, ChannelSDKType, Packet, PacketSDKType } from "./channel";
import { Height, HeightSDKType } from "../../client/v1/client";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgChannelOpenInit, MsgChannelOpenInitSDKType, MsgChannelOpenInitResponse, MsgChannelOpenInitResponseSDKType, MsgChannelOpenTry, MsgChannelOpenTrySDKType, MsgChannelOpenTryResponse, MsgChannelOpenTryResponseSDKType, MsgChannelOpenAck, MsgChannelOpenAckSDKType, MsgChannelOpenAckResponse, MsgChannelOpenAckResponseSDKType, MsgChannelOpenConfirm, MsgChannelOpenConfirmSDKType, MsgChannelOpenConfirmResponse, MsgChannelOpenConfirmResponseSDKType, MsgChannelCloseInit, MsgChannelCloseInitSDKType, MsgChannelCloseInitResponse, MsgChannelCloseInitResponseSDKType, MsgChannelCloseConfirm, MsgChannelCloseConfirmSDKType, MsgChannelCloseConfirmResponse, MsgChannelCloseConfirmResponseSDKType, MsgRecvPacket, MsgRecvPacketSDKType, MsgRecvPacketResponse, MsgRecvPacketResponseSDKType, MsgTimeout, MsgTimeoutSDKType, MsgTimeoutResponse, MsgTimeoutResponseSDKType, MsgTimeoutOnClose, MsgTimeoutOnCloseSDKType, MsgTimeoutOnCloseResponse, MsgTimeoutOnCloseResponseSDKType, MsgAcknowledgement, MsgAcknowledgementSDKType, MsgAcknowledgementResponse, MsgAcknowledgementResponseSDKType } from "./tx";
export const createChannelOpenInit = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelOpenInit>({
  clientResolver,
  typeUrl: MsgChannelOpenInit.typeUrl,
  encoders: toEncoders(MsgChannelOpenInit),
  converters: toConverters(MsgChannelOpenInit),
  deps: [MsgChannelOpenInit]
});
export const createChannelOpenTry = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelOpenTry>({
  clientResolver,
  typeUrl: MsgChannelOpenTry.typeUrl,
  encoders: toEncoders(MsgChannelOpenTry),
  converters: toConverters(MsgChannelOpenTry),
  deps: [MsgChannelOpenTry]
});
export const createChannelOpenAck = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelOpenAck>({
  clientResolver,
  typeUrl: MsgChannelOpenAck.typeUrl,
  encoders: toEncoders(MsgChannelOpenAck),
  converters: toConverters(MsgChannelOpenAck),
  deps: [MsgChannelOpenAck]
});
export const createChannelOpenConfirm = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelOpenConfirm>({
  clientResolver,
  typeUrl: MsgChannelOpenConfirm.typeUrl,
  encoders: toEncoders(MsgChannelOpenConfirm),
  converters: toConverters(MsgChannelOpenConfirm),
  deps: [MsgChannelOpenConfirm]
});
export const createChannelCloseInit = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelCloseInit>({
  clientResolver,
  typeUrl: MsgChannelCloseInit.typeUrl,
  encoders: toEncoders(MsgChannelCloseInit),
  converters: toConverters(MsgChannelCloseInit),
  deps: [MsgChannelCloseInit]
});
export const createChannelCloseConfirm = (clientResolver?: SigningClientResolver) => buildTx<MsgChannelCloseConfirm>({
  clientResolver,
  typeUrl: MsgChannelCloseConfirm.typeUrl,
  encoders: toEncoders(MsgChannelCloseConfirm),
  converters: toConverters(MsgChannelCloseConfirm),
  deps: [MsgChannelCloseConfirm]
});
export const createRecvPacket = (clientResolver?: SigningClientResolver) => buildTx<MsgRecvPacket>({
  clientResolver,
  typeUrl: MsgRecvPacket.typeUrl,
  encoders: toEncoders(MsgRecvPacket),
  converters: toConverters(MsgRecvPacket),
  deps: [MsgRecvPacket]
});
export const createTimeout = (clientResolver?: SigningClientResolver) => buildTx<MsgTimeout>({
  clientResolver,
  typeUrl: MsgTimeout.typeUrl,
  encoders: toEncoders(MsgTimeout),
  converters: toConverters(MsgTimeout),
  deps: [MsgTimeout]
});
export const createTimeoutOnClose = (clientResolver?: SigningClientResolver) => buildTx<MsgTimeoutOnClose>({
  clientResolver,
  typeUrl: MsgTimeoutOnClose.typeUrl,
  encoders: toEncoders(MsgTimeoutOnClose),
  converters: toConverters(MsgTimeoutOnClose),
  deps: [MsgTimeoutOnClose]
});
export const createAcknowledgement = (clientResolver?: SigningClientResolver) => buildTx<MsgAcknowledgement>({
  clientResolver,
  typeUrl: MsgAcknowledgement.typeUrl,
  encoders: toEncoders(MsgAcknowledgement),
  converters: toConverters(MsgAcknowledgement),
  deps: [MsgAcknowledgement]
});