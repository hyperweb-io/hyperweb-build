import { Permissions, PermissionsSDKType } from "./types";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgAuthorizeCircuitBreaker, MsgAuthorizeCircuitBreakerSDKType, MsgAuthorizeCircuitBreakerResponse, MsgAuthorizeCircuitBreakerResponseSDKType, MsgTripCircuitBreaker, MsgTripCircuitBreakerSDKType, MsgTripCircuitBreakerResponse, MsgTripCircuitBreakerResponseSDKType, MsgResetCircuitBreaker, MsgResetCircuitBreakerSDKType, MsgResetCircuitBreakerResponse, MsgResetCircuitBreakerResponseSDKType } from "./tx";
export const createAuthorizeCircuitBreaker = (clientResolver?: SigningClientResolver) => buildTx<MsgAuthorizeCircuitBreaker>({
  clientResolver,
  typeUrl: MsgAuthorizeCircuitBreaker.typeUrl,
  encoders: toEncoders(MsgAuthorizeCircuitBreaker),
  converters: toConverters(MsgAuthorizeCircuitBreaker),
  deps: [MsgAuthorizeCircuitBreaker]
});
export const createTripCircuitBreaker = (clientResolver?: SigningClientResolver) => buildTx<MsgTripCircuitBreaker>({
  clientResolver,
  typeUrl: MsgTripCircuitBreaker.typeUrl,
  encoders: toEncoders(MsgTripCircuitBreaker),
  converters: toConverters(MsgTripCircuitBreaker),
  deps: [MsgTripCircuitBreaker]
});
export const createResetCircuitBreaker = (clientResolver?: SigningClientResolver) => buildTx<MsgResetCircuitBreaker>({
  clientResolver,
  typeUrl: MsgResetCircuitBreaker.typeUrl,
  encoders: toEncoders(MsgResetCircuitBreaker),
  converters: toConverters(MsgResetCircuitBreaker),
  deps: [MsgResetCircuitBreaker]
});