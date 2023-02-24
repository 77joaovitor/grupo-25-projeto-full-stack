import { ReactNode } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { AnnouncementRequest } from "./announcement.interface";

export interface PropsButton {
    children: ReactNode;
    id?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
    className?: string;
    defaultChecked?: boolean;
}

export interface PropsInputAnnouncement {
  id?: string;
  value?: string;
  label?: string;
  errors: FieldErrors<AnnouncementRequest>
  file?: boolean;
  textarea?: boolean;
type?: 'text' | 'number' | 'textarea' | 'file' | 'button' | 'checkbox' | 'password' | 'file';
  onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
  register: UseFormRegister<AnnouncementRequest>;
  // reset: UseFormReset<ContactRequest>
  // isSubmitSuccessful?: boolean;
  name:
    | 'title'
    | 'description'
    | 'price'
    | 'year'
    | 'mileage'
    | 'coverImage'
    | 'type'
    | 'galleryImages'
  placeholder?: string;
}
  