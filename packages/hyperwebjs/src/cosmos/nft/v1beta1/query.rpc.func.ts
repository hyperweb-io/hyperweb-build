import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { NFT, NFTSDKType, Class, ClassSDKType } from "./nft";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryBalanceRequest, QueryBalanceRequestSDKType, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryOwnerRequest, QueryOwnerRequestSDKType, QueryOwnerResponse, QueryOwnerResponseSDKType, QuerySupplyRequest, QuerySupplyRequestSDKType, QuerySupplyResponse, QuerySupplyResponseSDKType, QueryNFTsRequest, QueryNFTsRequestSDKType, QueryNFTsResponse, QueryNFTsResponseSDKType, QueryNFTRequest, QueryNFTRequestSDKType, QueryNFTResponse, QueryNFTResponseSDKType, QueryClassRequest, QueryClassRequestSDKType, QueryClassResponse, QueryClassResponseSDKType, QueryClassesRequest, QueryClassesRequestSDKType, QueryClassesResponse, QueryClassesResponseSDKType } from "./query";
export const createGetBalance = (clientResolver?: RpcResolver) => buildQuery<QueryBalanceRequest, QueryBalanceResponse>({
  encode: QueryBalanceRequest.encode,
  decode: QueryBalanceResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Balance",
  clientResolver,
  deps: [QueryBalanceRequest, QueryBalanceResponse]
});
export const createGetOwner = (clientResolver?: RpcResolver) => buildQuery<QueryOwnerRequest, QueryOwnerResponse>({
  encode: QueryOwnerRequest.encode,
  decode: QueryOwnerResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Owner",
  clientResolver,
  deps: [QueryOwnerRequest, QueryOwnerResponse]
});
export const createGetSupply = (clientResolver?: RpcResolver) => buildQuery<QuerySupplyRequest, QuerySupplyResponse>({
  encode: QuerySupplyRequest.encode,
  decode: QuerySupplyResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Supply",
  clientResolver,
  deps: [QuerySupplyRequest, QuerySupplyResponse]
});
export const createGetNFTs = (clientResolver?: RpcResolver) => buildQuery<QueryNFTsRequest, QueryNFTsResponse>({
  encode: QueryNFTsRequest.encode,
  decode: QueryNFTsResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "NFTs",
  clientResolver,
  deps: [QueryNFTsRequest, QueryNFTsResponse]
});
export const createGetNFT = (clientResolver?: RpcResolver) => buildQuery<QueryNFTRequest, QueryNFTResponse>({
  encode: QueryNFTRequest.encode,
  decode: QueryNFTResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "NFT",
  clientResolver,
  deps: [QueryNFTRequest, QueryNFTResponse]
});
export const createGetClass = (clientResolver?: RpcResolver) => buildQuery<QueryClassRequest, QueryClassResponse>({
  encode: QueryClassRequest.encode,
  decode: QueryClassResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Class",
  clientResolver,
  deps: [QueryClassRequest, QueryClassResponse]
});
export const createGetClasses = (clientResolver?: RpcResolver) => buildQuery<QueryClassesRequest, QueryClassesResponse>({
  encode: QueryClassesRequest.encode,
  decode: QueryClassesResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Classes",
  clientResolver,
  deps: [QueryClassesRequest, QueryClassesResponse]
});