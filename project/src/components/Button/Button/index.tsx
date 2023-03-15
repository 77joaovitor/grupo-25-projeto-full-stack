import { PropsButton } from "../../../interfaces/component.interface"
import { ButtonLink, ButtonType } from "./style"

export const Button = ({
    children,
    className,
    id,
    defaultChecked,
    onClick,
    type,
    disabled,
    as
}: PropsButton): JSX.Element => {
    return (
        <>  {
            as === "a" ?
                <ButtonLink
                    onClick={onClick}
                    className={className}
                    href={`#${id}`}
                >
                    {children}
                </ButtonLink>
                :
                <ButtonType
                    disabled={disabled}
                    id={id}
                    className={className}
                    type={type}
                    onClick={onClick}
                    // defaultChecked
                    // de
                    autoFocus={defaultChecked}
                    // defaultChecked={defaultChecked}
                >
                    {children}
                </ButtonType>}
        </>
    )
}