import styled from "styled-components";
import { Grid, Image, Segment } from "semantic-ui-react";
import Colors from "../../Commons/colors";

export const StyledWrapper = styled(Segment)`
  padding: ${({ withRole }) =>
    withRole ? "0.3rem 0.8rem " : "0.6rem 0.8rem"} !important;
  margin: 0 !important;
  color: rgba(0, 0, 0, 0.6) !important;
  border-width: ${({ flatUser }) => (flatUser ? "0px" : "1px")} !important;

  &:hover {
    background: ${({ flatUser }) =>
      flatUser ? "transparent" : Colors.ligthBackground} !important;
  }
`;

export const StyledUsername = styled.p`
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: ${({ withRole }) => withRole && " 0 0 -0.358rem 0"};
`;

export const StyledRoleWrapper = styled.span`
  color: ${Colors.primary};
  font-size: 0.76rem;
  letter-spacing: 0.0199999rem;
  margin-right: -1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StyledImageColumn = styled(Grid.Column)`
  order: ${({ pictureLeft }) => (pictureLeft ? "-1" : "1")}!important;
  padding: 0px !important;
`;

export const StyledImg = styled(Image)`
  margin: 0px 10px;
`;

export const StyledDiv = styled.div`
  margin: 0px 10px;
  background-color: ${Colors.primary};
  color: #fff;
  font-size: 1em;
  text-transform: uppercase;
  padding: 0.5rem 0;
  border-radius: 50%;
  text-align: center;
  line-height: 1em;
  width: 30px;
  height: 30px;
`;
