import { Dispatch, ReactNode, SetStateAction } from "react";
import {
  AnnouncementRequest,
  AnnouncementResponse,
} from "./announcement.interface";
import { UserResponse } from "./user.interface";

export interface Props {
  children: ReactNode;
}

export interface AnnouncementProviderData {
  createAnnouncement: (data: AnnouncementRequest) => void;
  setAnnouncement: Function;
  announcement: AnnouncementResponse;
  setIsOpenModalCreateAnnouncement: Function;
  isOpenModalCreateAnnouncement: boolean;
  setAnnouncementType: Function;
  announcementType: string;
  setVehicleType: Function;
  vehicleType: string;
  setInputs: Function;
  inputs: JSX.Element;
  announcementsCars: AnnouncementResponse[];
  announcementsMotorcycle: AnnouncementResponse[];
  detailAnoucements: AnnouncementResponse;
  setDetailAnoucements: Function;
  getAllAnnouncementByAdvertiser: Function;
  allAnnouncementByAdvertiser: AnnouncementResponse[];
}

export interface IUserContext {
  auth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
  user: UserResponse;
  setUser: Dispatch<SetStateAction<UserResponse>>;
  getUser: (id: string) => void;
  createUser: (data: any) => void
}
