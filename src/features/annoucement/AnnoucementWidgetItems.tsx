import React from "react";
import AnnouncementItem from "./announcementItem";
import {IAnnouncementItemProps} from "./AnnouncementModels";

const AnnouncementWidgetItems = () => {
    const announcement1: IAnnouncementItemProps ={link:"abc/com", linkText: "Contacting your organisation administrators", authorDetails:"by Standards Australia - on 17/09"}
    const announcement2: IAnnouncementItemProps ={link:"abc/com", linkText: "Getting started with SA Enterprise platform", authorDetails:"by Standards Australia - on 17/20"}
    const announcement3: IAnnouncementItemProps ={link:"abc/com", linkText: "Welcome to SA Enterprise", authorDetails:"by Standards Australia - on 17/20"}
    const announcements: Array<IAnnouncementItemProps> = [announcement1, announcement2, announcement3]

    return (
        <>
            {announcements.map((x, index) =><AnnouncementItem key={index} {...x}/>)}
        </>
    );
};



export default AnnouncementWidgetItems;