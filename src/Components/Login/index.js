//Dependencies
import Actions from "./actions";
import queryString from "query-string";
import React, { useState, useEffect } from "react";
import VerifyAccessToken from "../../utils/verifyAccessToken";
import { Modal, Form, Dimmer, Loader } from "semantic-ui-react";
import { connect } from "react-redux";
import { StyledButton } from "./styles";
import { getCookie, setCookie } from "../../utils/cookie";
import { LOGIN_EXTERNO, URI_BACKEND } from "../../config/envs";

const Login = ({ updateToast, updateUser }) => {
  const [formOpen, setFormOpen] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const funcInterval = () => {
      VerifyAccessToken(getCookie("tokenAccess"))
        .then(() => {
          setFormOpen(false);
          updateUser(getCookie("businessName"));
        })
        .catch(() => {
          setFormOpen(true);
          updateUser(null);
          setCookie("businessName", null, 1);
          setCookie("tokenType", null, 1);
          setCookie("tokenAccess", null, 1);

          if (LOGIN_EXTERNO) {
            window.location.replace(
              `${URI_BACKEND}/Users/LogIn?ReturnUrl=${window.location.href}`
            );
          }
        });
    };
    funcInterval();

    const interval = setInterval(() => {
      funcInterval();
    }, 30000);

    return () => clearInterval(interval);
  }, [updateUser]);

  let businessName =
    queryString.parse(window.location.search).businessName || null;
  let tokenType = queryString.parse(window.location.search).tokenType || null;
  let tokenAccess =
    queryString.parse(window.location.search).tokenAccess || null;

  if (tokenType && tokenAccess) {
    VerifyAccessToken(tokenAccess)
      .then(() => {
        setFormOpen(false);
        updateUser(getCookie(businessName));
        setCookie("businessName", businessName, 1);
        setCookie("tokenType", tokenType, 1);
        setCookie("tokenAccess", tokenAccess, 1);

        window.location.replace("/");
      })
      .catch(() => {
        setFormOpen(true);
        updateUser(null);
        setCookie("businessName", null, 1);
        setCookie("tokenType", null, 1);
        setCookie("tokenAccess", null, 1);
      });
  }

  if (LOGIN_EXTERNO) {
    return (
      <Dimmer active={formOpen}>
        <Loader inverted>LogIn</Loader>
      </Dimmer>
    );
  } else {
    return (
      <Modal
        as={Form}
        onSubmit={async () => {
          const formData = new FormData();
          formData.append("Username", username);
          formData.append("Password", password);
          await new Actions().post(
            updateToast,
            updateUser,
            setFormOpen,
            formData
          );
        }}
        open={formOpen}
        closeOnEscape={false}
        closeOnDimmerClick={false}
      >
        <Modal.Header>Member Login</Modal.Header>
        <Modal.Content>
          <Form.Input
            required
            fluid
            placeholder="Username"
            icon="user"
            iconPosition="left"
            type="email"
            value={username}
            onChange={(e, data) => setUsername(data.value)}
          />
          <Form.Input
            required
            fluid
            placeholder="Password"
            icon="lock"
            iconPosition="left"
            type="password"
            value={password}
            onChange={(e, data) => setPassword(data.value)}
          />
        </Modal.Content>
        <Modal.Actions>
          <StyledButton
            positive
            circular
            type="submit"
            icon="user"
            content="LogIn"
          />
        </Modal.Actions>
      </Modal>
    );
  }
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  updateUser(businessName) {
    dispatch({
      type: "UPDATE_LOGIN",
      businessName,
    });
  },
  updateToast(title, description, typeToast) {
    dispatch({
      type: "UPDATE_TOAST",
      title,
      description,
      typeToast,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
