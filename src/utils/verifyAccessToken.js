import jwt from "jsonwebtoken";
import { NAME, SEED } from "../config/envs";

const VerifyAccessToken = () => {
  return new Promise((resolve, reject) => {
    let tokenAccess = localStorage.getItem(`${NAME}/tokenAccess`);

    if (tokenAccess) {
      jwt.verify(
        tokenAccess,
        SEED,
        { audience: "Audience", issuer: "Issuer" },
        (err, _decoded) => {
          if (err) {
            console.log("err", err);
            localStorage.clear();
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
