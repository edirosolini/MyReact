import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { NAME } from "../../config/envs";
import { Header as HeaderSemantic, Image } from "semantic-ui-react";

//Assets
import logo from "../../Assets/logo.svg";

const Header = (props) => {
  const { title, subTitle } = props;

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <HeaderSemantic as="h2" icon textAlign="center">
      <Image src={logo} />
      {title}
      <HeaderSemantic.Subheader>{subTitle ?? ``}</HeaderSemantic.Subheader>
    </HeaderSemantic>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

Header.defaultProps = {
  title: NAME,
};

export default Header;
