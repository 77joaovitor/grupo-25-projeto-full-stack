import InputMask from "react-input-mask";
import { PropsInputCep } from "../../../interfaces/component.interface";

export const InputVerify = ({ register, name, type, value, onBlur, placeholder }: PropsInputCep) => {
    
	if (type === 'cpf') {

		return (

			<InputMask
				{...register(name)}
				mask={'999.999.999-99'}
				// name={name}
				name={name}
				placeholder={placeholder}
			/>	
		)
	}
	if (type === 'zipCode') {
		return (

			<InputMask
				{...register(name)}
				mask={'99999-999'}
				onBlur={
					(event: React.FocusEvent<HTMLInputElement, Element>) => {
						onBlur(event?.target?.value)
					}
				}
				name={name}
				placeholder={placeholder}
			/>
		)
	}

	else if (type === 'phone') {
		return (

			<InputMask
				{...register(name)}
				mask={'(99) 9 9999-9999'}
				name={name}
				placeholder={placeholder}
			/>
		)
	}
	else {
		return (

			<InputMask

				{...register(name)}
				mask={"99/99/9999"}
				placeholder={placeholder}
				name={name}
				defaultValue={value}
			/>
		)
	}
}