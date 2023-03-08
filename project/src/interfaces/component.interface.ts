import { ReactNode } from "react";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import {
  AnnouncementRequest,
  AnnouncementResponse,
  UpdateAnnouncementRequest,
} from "./announcement.interface";
import {
  AddressRequest,
  UserRegisterRequest,
  UserSessionRequest,
  UserUpdateRequest,
} from "./user.interface";

export interface PropsButton {
  children: ReactNode;
  id?: string;
  type?: "button" | "submit" | "reset" | undefined;
  as?: "a";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
  className?: string;
  defaultChecked?: boolean;
}

export interface PropsInputAnnouncement {
  id?: string;
  inputGallery?: number;
  value?: string;
  label?: string;
  errors: FieldErrors<AnnouncementRequest>;
  file?: boolean;
  textarea?: boolean;
  type?:
    | "text"
    | "number"
    | "textarea"
    | "file"
    | "button"
    | "checkbox"
    | "password"
    | "file";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
  register: UseFormRegister<AnnouncementRequest>;
  name:
    | "title"
    | "description"
    | "price"
    | "year"
    | "mileage"
    | "coverImage"
    | "type"
    | "galleryImages";
  // | `galleryImages.${string}.imageUrl`
  placeholder?: string;
  defaultValue?: string;
}

export interface PropsInputSession {
  id?: string;
  inputGallery?: number;
  value?: string;
  label?: string;
  errors: FieldErrors<UserSessionRequest>;
  file?: boolean;
  textarea?: boolean;
  type?:
    | "text"
    | "email"
    | "number"
    | "textarea"
    | "file"
    | "button"
    | "checkbox"
    | "password"
    | "file";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
  register: UseFormRegister<UserSessionRequest>;
  name: "email" | "password";
  placeholder?: string;
  defaultValue?: string;
}
export interface PropsInputProfile {
  id?: string;
  setValue?: UseFormSetValue<UserUpdateRequest>
  inputGallery?: number;
  value?: string;
  label?: string;
  errors?: FieldErrors<UserUpdateRequest>;
  file?: boolean;
  textarea?: boolean;
  type?:
    | "text"
    | "email"
    | "number"
    | "textarea"
    | "file"
    | "button"
    | "checkbox"
    | "password"
    | "file";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
  register: UseFormRegister<UserUpdateRequest>;
  name:
    | "email"
    | "password"
    | "name"
    | "cpf"
    | "phone"
    | "birthdate"
    | "description";

  placeholder?: string;
  defaultValue?: string;
}
export interface PropsInputAddress {
  id?: string;
  inputGallery?: number;
  value?: string;
  label?: string;
  errors?: FieldErrors<AddressRequest>;
  file?: boolean;
  textarea?: boolean;
  type?:
    | "text"
    | "email"
    | "number"
    | "textarea"
    | "file"
    | "button"
    | "checkbox"
    | "password"
    | "file";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
  register: UseFormRegister<AddressRequest>;
  name: "zipCode" | "number" | "city" | "road" | "complement" | "state";

  placeholder?: string;
  defaultValue?: string;
}

export interface PropsInputUpdateAnnouncement {
  id?: string;
  inputGallery?: number;
  value?: string;
  label?: string;
  errors: FieldErrors<AnnouncementRequest>;
  file?: boolean;
  textarea?: boolean;
  type?:
    | "text"
    | "number"
    | "textarea"
    | "file"
    | "button"
    | "checkbox"
    | "password"
    | "file";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
  register: UseFormRegister<UpdateAnnouncementRequest>;
  name:
    | "title"
    | "description"
    | "price"
    | "year"
    | "mileage"
    | "coverImage"
    | "type"
    | "galleryImages";
  // | `galleryImages.${string}.imageUrl`
  placeholder?: string;
  defaultValue?: string;
}

export interface PropsInputUser {
  id?: string;
  inputGallery?: number;
  value?: string;
  label?: string;
  errors: FieldErrors<UserRegisterRequest>;
  file?: boolean;
  textarea?: boolean;
  type?:
    | "text"
    | "number"
    | "textarea"
    | "file"
    | "button"
    | "checkbox"
    | "password"
    | "file";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
  register: UseFormRegister<UserRegisterRequest>;
  name:
    | "name"
    | "email"
    | "cpf"
    | "phone"
    | "birthdate"
    | "description"
    | "zipCode"
    | "state"
    | "city"
    | "road"
    | "number"
    | "complement"
    | "password"
    | "confirmPassword";
  // | `galleryImages.${string}.imageUrl`
  placeholder?: string;
  defaultValue?: string;
}

export interface PropsAnnouncementCard {
  announcement: AnnouncementResponse;
  isAdmPage: boolean;
}
