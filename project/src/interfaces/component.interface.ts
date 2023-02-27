import { ReactNode } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { AnnouncementRequest, AnnouncementResponse } from "./announcement.interface";

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
  
export interface PropsAnnouncementCard {
  announcement: AnnouncementResponse;
}