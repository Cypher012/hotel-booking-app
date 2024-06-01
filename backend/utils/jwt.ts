import { sign, verify, SignOptions } from "jsonwebtoken";
import config from "config";
import { User } from "../src/model/user.model";

export const signJwt = (
  payload: Object,
  keyName = "accessTokenKey" || "refreshTokenKey",
  options?: SignOptions | undefined
) => {
  const secret = config.get<string>(keyName);
  return sign(payload, secret, {
    ...(options && options),
  });
};

export function verifyJwt<T>(
  token: string,
  keyName = "accessTokenKey" || "refreshTokenKey"
): T | null {
  const secret = config.get<string>(keyName);
  try {
    const decoded = verify(token, keyName) as T;
    return decoded;
  } catch (e) {
    return null;
  }
}
