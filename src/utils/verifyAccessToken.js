import jwt from "jsonwebtoken";
import { SEED } from "../config/envs";

const VerifyAccessToken = (tokenAccess) => {
  return new Promise((resolve, reject) => {
    if (tokenAccess) {
      jwt.verify(
        tokenAccess,
        SEED,
        { audience: "Audience", issuer: "Issuer" },
        (err, _decoded) => {
          if (err) {
            reject(err);
          }
          resolve();
        }
      );
    } else {
      reject();
    }
  });
};

export default VerifyAccessToken;
