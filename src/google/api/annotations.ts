/* eslint-disable */
import Long from "long";
import _m0 from "@exodus/protobufjs/minimal";

export const protobufPackage = "google.api";

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
