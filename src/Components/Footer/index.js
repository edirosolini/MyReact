// Dependencies
import React from "react";
import { NAME, VERSION } from "../../config/envs";
import { StyledSegment } from "./style";

const Footer = () => {
  let copyright = `${NAME} - CopyRight &copy; ${VERSION}`;

  return (
    <StyledSegment>
      <p dangerouslySetInnerHTML={{ __html: copyright }} />
    </StyledSegment>
  );
};

export default Footer;
