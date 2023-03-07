import { Dispatch, ReactNode, SetStateAction } from "react";
import {
  AnnouncementRequest,
  AnnouncementResponse,
  UpdateAnnouncementRequest,
} from "./announcement.interface";
import { AddressRequest, UserRegisterRequest, UserResponse, UserSessionRequest, UserUpdateRequest } from "./user.interface";

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
  setIsAnnouncementPublished: Function;
  isAnnouncementPublished: boolean;
  isOpenModalUpdateAnnouncement: boolean;
  setIsOpenModalUpdateAnnouncement: Function;
  inputs: JSX.Element;
  announcementsCars: AnnouncementResponse[];
  announcementsMotorcycle: AnnouncementResponse[];
  detailAnoucements: AnnouncementResponse;
  setDetailAnoucements: Function;
  getAllAnnouncementByAdvertiser: Function;
  allAnnouncementByAdvertiser: AnnouncementResponse[];
  updateAnnouncement: (data: UpdateAnnouncementRequest) => void;
  deleteAnnouncement: (announcementId: string) => void;
  setIsOpenModalDeleteAnnouncement: Function;
  isOpenModalDeleteAnnouncement: boolean;
  reload: boolean
  allAnnouncements: AnnouncementResponse[]
 setReload: Function;
 isModalSuccessCreate: boolean; 
 setIsModalSuccessCreate: Function;
}

export interface IUserContext {
  auth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
  user: UserResponse;
  setUser: Dispatch<SetStateAction<UserResponse>>;
  getUser: (id: string) => void;
  isLoading: boolean;
  setIsLoading: Function;
  reload: boolean;
  setReload: Function;
  isDropdown: boolean;
  setIsDropDown: Function;
  isModalUpdateProfile: boolean;
  setIsModalUpdateProfile: Function;
  updateProfile: (data: UserUpdateRequest) => void;
  createProfile: (data: UserRegisterRequest) => void;
  updateAddress: (data: AddressRequest) => void;
  isModalUpdateAddress: boolean;
  setIsModalUpdateAddress: Function;
  menuOpen: boolean;
  setMenuOpen: Function;
  isAdvertiser: boolean
  setIsAdvertiser: Function
  userAdvertiser: UserResponse;
  setUserAdvertiser: Function;
}


export interface SessionProviderData {
  createSession: (data: UserSessionRequest) => void;
  logout: () => void;
  showPassword: boolean;
  setShowPassword: Function;
};
