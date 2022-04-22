import React from "react";
import {IAnnouncementItemProps} from "../AnnouncementModels";
import * as Styled from "./StyledAnnouncementItem";

const AnnouncementItem = ({link, linkText, authorDetails}: IAnnouncementItemProps) => {
  return (
    <Styled.AnnouncementItemDivContainer>
        <Styled.AnnouncementLink to={link}>{linkText}</Styled.AnnouncementLink>
        <Styled.AuthorDetailsP>{authorDetails}</Styled.AuthorDetailsP>
    </Styled.AnnouncementItemDivContainer>
  );
};

export default AnnouncementItem;