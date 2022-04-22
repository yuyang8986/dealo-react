import styled from "styled-components";
import {Link} from "react-router-dom";

export const AuthorDetailsP = styled.p`
  font-weight: 500;
  font-size: 0.6875rem;
  line-height: 1rem;
  color: ${(props) => props.theme.colors.greyTextColor};
  margin-bottom: 0;
`
export const AnnouncementLink = styled(Link)`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.31rem;
  color: ${(props) => props.theme.colors.greyTextColor};
  &:hover{
    color: ${(props) => props.theme.colors.greyTextColor};
  }
`

export const AnnouncementItemDivContainer = styled.div`
  margin-bottom: 1.5rem;
`