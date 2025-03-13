import { FileDescriptorProto, FileDescriptorProtoSDKType } from "../../../google/protobuf/descriptor";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { FileDescriptorsRequest, FileDescriptorsRequestSDKType, FileDescriptorsResponse, FileDescriptorsResponseSDKType } from "./reflection";
export const createGetFileDescriptors = (clientResolver?: RpcResolver) => buildQuery<FileDescriptorsRequest, FileDescriptorsResponse>({
  encode: FileDescriptorsRequest.encode,
  decode: FileDescriptorsResponse.decode,
  service: "cosmos.reflection.v1.ReflectionService",
  method: "FileDescriptors",
  clientResolver,
  deps: [FileDescriptorsRequest, FileDescriptorsResponse]
});