import { PropsButton } from "../../../interfaces/component.interface"
import { ButtonType } from "./style"
export const Button = ({children, className, id, defaultChecked, onClick, type}: PropsButton): JSX.Element => {
    return (
        <ButtonType
            id={id}
            className={className} 
            type={type} 
            onClick={onClick}
            // defaultChecked
            // de
            autoFocus={defaultChecked}
        >
            {children}
        </ButtonType>
    )
}