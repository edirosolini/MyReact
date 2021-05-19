// Dependencies
import React from "react";
import { Icon, Message } from "semantic-ui-react";

const Page404 = () => {
  return (
    <Message icon warning>
      <Icon name="warning circle" loading />
      <Message.Content>
        <Message.Header>Page not found</Message.Header>
        We are fetching that content for you.
      </Message.Content>
    </Message>
  );
};

export default Page404;
