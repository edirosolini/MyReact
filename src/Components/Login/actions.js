import axios from "axios";
import { NAME, URI_BACKEND } from "../../config/envs";

class Actions {
  instance = axios.create({
    baseURL: `${URI_BACKEND}`,
    headers: {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    },
  });

  post = async (updateToast, setFormOpen, setData, paylod) => {
    await this.instance
      .post(`/api/Users/Authenticate`, paylod)
      .then((x) => {
        localStorage.setItem(`${NAME}/tokenType`, x.data.tokenType);
        localStorage.setItem(`${NAME}/tokenAccess`, x.data.tokenAccess);
        localStorage.setItem(`${NAME}/businessName`, x.data.businessName);

        setData(x.data.tokenType, x.data.tokenAccess, x.data.businessName);

        updateToast("Login success", null, "success");

        setFormOpen(false);
      })
      .catch((e) => {
        setData(null, null, null);

        updateToast(
          "Login failed",
          "Wrong username or password. Please retry.",
          "warning"
        );

        setFormOpen(true);
      })
      .finally(() => {});
  };
}

export default Actions;
