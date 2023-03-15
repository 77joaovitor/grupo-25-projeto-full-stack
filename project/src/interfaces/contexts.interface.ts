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
  setIsOpenModalCreateAnnouncement: Function;
  isOpenModalCreateAnnouncement: boolean;
  setAnnouncementType: Function;
  announcementType: string;
  setVehicleType: Function;
  vehicleType: string;
  setIsAnnouncementPublished: Function;
  isAnnouncementPublished: boolean;
  isOpenModalUpdateAnnouncement: boolean;
  setIsOpenModalUpdateAnnouncement: Function;
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
 createComment: (data: any) => void
 allAnnouncementByAdvertiserAdmin: AnnouncementResponse[];
 setAllAnnouncementByAdvertiserAdmin: Function;
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
  isOpenRecovery: boolean;
  setIsOpenRecovery: Function;
  submitEmail: (data: UserSessionRequest) => void;
  submitPass: (data: UserRegisterRequest) => void;
}


export interface SessionProviderData {
  createSession: (data: UserSessionRequest) => void;
  logout: () => void;
  showPassword: boolean;
  setShowPassword: Function;
};
