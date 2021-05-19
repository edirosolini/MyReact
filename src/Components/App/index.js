// Dependencies
import Content from "../Content";
import Footer from "../Footer";
import React from "react";
import { StyledContainer } from "./styles";
import { Grid } from "semantic-ui-react";
import Header from "../Header";
import Menu from "../Menu";
import LoggedUser from "../LoggedUser";
import Login from "../Login";
import Toast from "../Toast";

const App = (props) => {
  const { children } = props;

  return (
    <StyledContainer>
      <Toast />
      <Login />
      <Grid columns={2}>
        <Grid.Row stretched>
          <Grid.Column width={3}>
            <Header />
            <Menu />
            <LoggedUser />
          </Grid.Column>
          <Grid.Column width={13}>
            <Content body={children} />
            <Footer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </StyledContainer>
  );
};

export default App;
