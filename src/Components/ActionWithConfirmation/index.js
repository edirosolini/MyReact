import Colors from "../../Commons/colors";
import PropTypes from "prop-types";
import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

const ActionWithConfirmation = (props) => {
  const {
    setOpen,
    funcNegative,
    funcPositive,
    open,
    iconHeader,
    header,
    description,
  } = props;

  return (
    <Modal basic open={open} closeOnEscape={false} closeOnDimmerClick={false}>
      <Modal.Header as={Header} icon>
        <Icon name={iconHeader} />
        {header}
      </Modal.Header>
      <Modal.Content>
        <p>{description}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          circular
          basic
          color={Colors.negative}
          icon="close"
          content="No"
          inverted
          onClick={async () => {
            setOpen(false);
            await funcNegative();
          }}
        />
        <Button
          circular
          color={Colors.positive}
          icon="checkmark"
          content="Yes"
          inverted
          onClick={async () => {
            setOpen(false);
            await funcPositive();
          }}
        />
      </Modal.Actions>
    </Modal>
  );
};

ActionWithConfirmation.propTypes = {
  setOpen: PropTypes.func.isRequired,
  funcNegative: PropTypes.func.isRequired,
  funcPositive: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  iconHeader: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string,
};

ActionWithConfirmation.defaultProps = {
  iconHeader: "warning circle",
};

export default ActionWithConfirmation;
