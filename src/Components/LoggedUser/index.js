//Dependencies
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import {
  StyledWrapper,
  StyledUsername,
  StyledRoleWrapper,
  StyledImageColumn,
  StyledImg,
  StyledDiv,
} from "./styles";

const LoggedUser = (props) => {
  const {
    businessName,
    rolePosition,
    userImg,
    pictureLeft,
    flatUser,
    compacted,
  } = props;

  const getInitials = () => {
    if (businessName) {
      const firstName = String(businessName).split(" ")[0];
      const lastName = String(businessName).split(" ")[1];
      return `${firstName?.charAt(0)}${lastName?.charAt(0)}`;
    } else {
      return ``;
    }
  };

  return (
    <StyledWrapper
      compact
      floated={flatUser ? "left" : "right"}
      size="large"
      flatUser={flatUser}
      withRole={rolePosition}
    >
      <Grid>
        <Grid.Row>
          {!compacted && (
            <Grid.Column
              width={11}
              verticalAlign="middle"
              style={{ padding: "0px 0px 0px 10px" }}
            >
              <StyledUsername withRole={rolePosition}>
                {businessName}
              </StyledUsername>
              {rolePosition && (
                <StyledRoleWrapper>
                  {rolePosition}
                  {flatUser ? "" : " DEPARTMENT"}
                </StyledRoleWrapper>
              )}
            </Grid.Column>
          )}
          <StyledImageColumn
            width={compacted ? 16 : 5}
            verticalAlign="middle"
            pictureLeft={pictureLeft}
          >
            {userImg ? (
              <StyledImg src={userImg} circular size="mini" />
            ) : (
              <StyledDiv>{getInitials(businessName)}</StyledDiv>
            )}
          </StyledImageColumn>
        </Grid.Row>
      </Grid>
    </StyledWrapper>
  );
};

LoggedUser.propTypes = {
  businessName: PropTypes.string,
  userImg: PropTypes.string,
  rolePosition: PropTypes.string,
  pictureLeft: PropTypes.bool,
  flatUser: PropTypes.bool,
  compacted: PropTypes.bool,
};

LoggedUser.defaultProps = {
  businessName: "",
  userImg: "",
  rolePosition: "",
  pictureLeft: false,
  flatUser: false,
  compacted: false,
};

const mapStateToProps = (state) => {
  return {
    businessName: state.user?.businessName,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoggedUser);
