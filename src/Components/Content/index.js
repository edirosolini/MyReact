// Dependencies
import PropTypes from "prop-types";
import React from "react";
import { StyledSegment } from "./styles";

const Content = (props) => {
  const { body } = props;

  return <StyledSegment>{body}</StyledSegment>;
};

Content.propTypes = {
  body: PropTypes.object.isRequired,
};

Content.defaultProps = {};

export default Content;
