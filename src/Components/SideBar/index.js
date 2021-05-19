import React from "react";
import { Grid } from "semantic-ui-react";
import Header from "../Header";
import Menu from "../Menu";
import LoggedUser from "../LoggedUser";

const SideBar = () => {
  return (
    <Grid.Column width={3}>
      <Grid.Row>
        <Header subTitle="MegaBase" />
      </Grid.Row>
      <Grid.Row>
        <Menu />
      </Grid.Row>
      <Grid.Row>
        <LoggedUser />
      </Grid.Row>
    </Grid.Column>
  );
};

export default SideBar;
