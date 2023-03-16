import { AnimatePresence } from "framer-motion"
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
    as,
    
    variants
}: PropsButton): JSX.Element => {
    return (
        <AnimatePresence>  {
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
                    variants={variants}
                    autoFocus={defaultChecked}
                    // defaultChecked={defaultChecked}
                >
                    {children}
                </ButtonType>}
        </AnimatePresence>
    )
}