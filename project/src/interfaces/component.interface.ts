import { ReactNode } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { AnnouncementRequest, AnnouncementResponse, UpdateAnnouncementRequest } from "./announcement.interface";
import { UserSessionRequest } from "./user.interface";

export interface PropsButton {
    children: ReactNode;
    id?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    as?: 'a';
    onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
    className?: string;
    defaultChecked?: boolean;
}

export interface PropsInputAnnouncement {
  id?: string;
  inputGallery?:number
  value?: string;
  label?: string;
  errors: FieldErrors<AnnouncementRequest>
  file?: boolean;
  textarea?: boolean;
  type?: 'text' | 'number' | 'textarea' | 'file' | 'button' | 'checkbox' | 'password' | 'file';
  onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
  register: UseFormRegister<AnnouncementRequest>;
  name:
  | 'title'
    | 'description'
    | 'price'
    | 'year'
    | 'mileage'
    | 'coverImage'
    | 'type'
    | 'galleryImages'
    // | `galleryImages.${string}.imageUrl`
  placeholder?: string;
  defaultValue?: string
}


export interface PropsInputSession {
  id?: string;
  inputGallery?:number
  value?: string;
  label?: string;
  errors: FieldErrors<UserSessionRequest>
  file?: boolean;
  textarea?: boolean;
  type?: 'text' | 'email' | 'number' | 'textarea' | 'file' | 'button' | 'checkbox' | 'password' | 'file';
  onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
  register: UseFormRegister<UserSessionRequest>;
  name:
    |   'email'
    |  'password'
  placeholder?: string;
  defaultValue?: string
}


export interface PropsInputUpdateAnnouncement {
    id?: string;
  inputGallery?:number
  value?: string;
  label?: string;
  errors: FieldErrors<AnnouncementRequest>
  file?: boolean;
  textarea?: boolean;
  type?: 'text' | 'number' | 'textarea' | 'file' | 'button' | 'checkbox' | 'password' | 'file';
  onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
  register:UseFormRegister<UpdateAnnouncementRequest>;
  name:
  | 'title'
    | 'description'
    | 'price'
    | 'year'
    | 'mileage'
    | 'coverImage'
    | 'type'
    | 'galleryImages'
    // | `galleryImages.${string}.imageUrl`
  placeholder?: string;
  defaultValue?: string
}
  
export interface PropsAnnouncementCard {
  announcement: AnnouncementResponse;
}