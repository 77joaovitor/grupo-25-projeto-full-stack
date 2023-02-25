import { PropsButton } from "../../../interfaces/component.interface"
import { ButtonType, ButtonLink } from "./style"

export const Button = ({
    children, 
    className, 
    id, 
    defaultChecked, 
    onClick, 
    type,
    as
}: PropsButton): JSX.Element => {
    return (
      <>  { 
            as === "a" ?
                <ButtonLink 
                    href={`#${id}`}
                >
                    {children}
                </ButtonLink>
            :
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
            </ButtonType>}
        </>
    )
}