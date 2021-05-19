import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { StyledMenu } from "./styles";

const Menu = (props) => {
  const { menu } = props;

  const [pathName, setPathName] = useState("/");

  useEffect(() => {
    setPathName(window.location.pathname);
  }, [setPathName]);

  return (
    <StyledMenu vertical fluid>
      {menu &&
        menu.map((item, key) => (
          <StyledMenu.Item
            as={Link}
            key={key}
            name={item.name}
            active={pathName === item.code}
            to={item.code}
            onClick={() => setPathName(item.code)}
          />
        ))}
    </StyledMenu>
  );
};

const mapStateToProps = (state) => {
  return {
    menu: [
      { name: "Test1", code: "/test1" },
      { name: "Test2", code: "/test2" },
      { name: "Test3", code: "/test3" },
      { name: "Test4", code: "/test4" },
      { name: "Test5", code: "/test5" },
      { name: "Test6", code: "/test6" },
      { name: "Test7", code: "/test7" },
      { name: "Test8", code: "/test8" },
    ],
    // menu: state.userAccessReducer?.menu.sort((a, b) =>
    //   a.key > b.key ? 1 : b.key > a.key ? -1 : 0
    // ),
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
