import { ReactNode } from "react";
import { AnnouncementRequest, AnnouncementResponse } from "./announcement.interface";

export interface Props {
    children: ReactNode;
};

export interface AnnouncementProviderData{
    createAnnouncement: (data: AnnouncementRequest) => void;
    setAnnouncement: Function;
    announcement: AnnouncementResponse;
    setIsOpenModalCreateAnnouncement: Function;
    isOpenModalCreateAnnouncement: boolean;
    setAnnouncementType: Function
    announcementType: string;
    setVehicleType: Function;
    vehicleType: string;
    setInputs: Function;
    inputs: JSX.Element;

};
