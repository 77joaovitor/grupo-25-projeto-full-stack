import { ReactNode } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { AnnouncementRequest } from "./announcement.interface";

export interface PropsButton {
    children: ReactNode;
    id?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
    className?: string;
}

export interface PropsInputAnnouncement {
    id?: string;
    label?: string;
    errors: FieldErrors<AnnouncementRequest>
    file?: boolean;
    textarea?: boolean;
    type?: 'text' | 'textarea' | 'file' | 'button' | 'checkbox' | 'password' | 'file';
    onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
    register?: UseFormRegister<AnnouncementRequest>;
    // reset: UseFormReset<ContactRequest>
    // isSubmitSuccessful?: boolean;
    name?:
      | 'title'
      | 'description'
      | 'price'
      | 'year'
      | 'mileage'
      | 'coverImage'
    placeholder?: string;
  }
  