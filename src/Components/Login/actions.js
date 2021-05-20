import axios from "axios";
import { URI_BACKEND } from "../../config/envs";
import { setCookie } from "../../utils/cookie";

class Actions {
  instance = axios.create({
    baseURL: `${URI_BACKEND}`,
    headers: {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    },
  });

  post = async (updateToast, updateUser, setFormOpen, paylod) => {
    console.log("paylod", paylod);
    await this.instance
      .post(`/api/Authenticate`, paylod)
      .then((x) => {
        updateUser(x.data.businessName);
        setCookie("businessName", x.data.businessName, 1);
        setCookie("tokenType", x.data.tokenType, 1);
        setCookie("tokenAccess", x.data.tokenAccess, 1);

        setFormOpen(false);
      })
      .catch((e) => {
        updateToast("Login failed", e.message, "danger");
      })
      .finally(() => {});
  };
}

export default Actions;
