import { PropsButton } from "../../../interfaces/component.interface"
import { ContainerButton } from "./style";

export const ButtonModal = ({ children, id, type, onClick, className }: PropsButton): JSX.Element => {
    return (
        <ContainerButton>
			<button id={id} className={className} type={type} onClick={onClick}>
				{children}
			</button>
		</ContainerButton>
    )
}