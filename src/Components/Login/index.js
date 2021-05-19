//Dependencies
import Actions from "./actions";
import React, { useState, useEffect } from "react";
import VerifyAccessToken from "../../utils/verifyAccessToken";
import { Modal, Form } from "semantic-ui-react";
import { NAME } from "../../config/envs";
import { connect } from "react-redux";
import { StyledButton } from "./styles";

const Login = ({ updateLogin, updateToast }) => {
  const [formOpen, setFormOpen] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const validateToken = () => {
      VerifyAccessToken()
        .then(() => {
          let tokenType = localStorage.getItem(`${NAME}/tokenType`);
          let tokenAccess = localStorage.getItem(`${NAME}/tokenAccess`);
          let businessName = localStorage.getItem(`${NAME}/businessName`);

          updateLogin(tokenType, tokenAccess, businessName);

          setFormOpen(false);
        })
        .catch(() => {
          updateLogin(null, null, null, null);
          setFormOpen(true);
        });
    };

    validateToken();

    const interval = setInterval(() => {
      validateToken();
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, [updateLogin]);

  return (
    <Modal
      as={Form}
      onSubmit={async () => {
        const formData = new FormData();
        formData.append("Username", username);
        formData.append("Password", password);
        await new Actions().post(
          updateToast,
          setFormOpen,
          updateLogin,
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
          content="Login"
        />
      </Modal.Actions>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    tokenAccess: state.userModel?.tokenAccess,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateLogin(tokenType, tokenAccess, businessName) {
    dispatch({
      type: "UPDATE_LOGIN",
      tokenType,
      tokenAccess,
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
