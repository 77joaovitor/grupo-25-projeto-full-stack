import { forwardRef, useRef } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import InputMask from "react-input-mask";
import { PropsInputProfile } from "../../../interfaces/component.interface";
import { ContainerInput } from "./style";

interface InputMaskProps {
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
	onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
	mask: string;
	name?: string;
  }

const InputVerify = ({register, mask, name, type, value}: any) => {
	const ref = useRef(forwardRef)
	
	if(type === 'cpf') {
		return (
			
			<InputMask
				ref={ref}
				{...register(name)}
				mask={'999.999.999-99'}
				// name={name}
				name={name}
				defaultValue={value}
			/>
		)
	}

	else if(type === 'phone') {
		return (
			
			<InputMask

			ref={ref}
			{...register(name)}
				mask={'(99) 9 9999-9999'}
				// name={name}
				name={name}
				defaultValue={value}
			/>
		)
	}
	else {
		return (
			
			<InputMask

			ref={ref}
			{...register(name)}
				mask={"99/99/9999"}
				// name={name}
				name={name}
				defaultValue={value}
			/>
		)
	}
}	

export const InputModalProfile = ({
	register,
	value,
	label,
	errors,
	file,
	textarea,
	inputGallery,
	id,
	type,
	name,
	placeholder,
	defaultValue,
	setValue,
}: PropsInputProfile): JSX.Element => {

	return (
		<>
			<ContainerInput>
				{

					textarea ?
						<div className="box_description">

							<div
								className="box_label_error">
								<div className="a">

									<label htmlFor={name}>{label}</label>
								</div>
								{

									errors && (
										errors[name!]?.type === 'required' ||
										errors[name!]?.type === 'matches' ||
										errors[name!]?.type === 'max' ||
										errors[name!]?.type === 'min') ? (
										<div className="dropdown">
											<BsExclamationCircle className="svg" />
											<div className="dropdown-content">
												<p>{errors[name!]?.message}</p>
											</div>

										</div>
									) : null
								}
							</div>
							<textarea
								{...register(name)}
								defaultValue={value}
								name={name}
								id={id}
								cols={20}
								rows={10}
								placeholder={placeholder}
							/>
						</div>
						:

						<div className="box_input_error">

							<div
								className="box_label_error">

								<label htmlFor={name}>{label}</label>

								{

									errors && (
										errors[name!]?.type === 'required' ||
										errors[name!]?.type === 'matches' ||
										errors[name!]?.type === 'max' ||
										errors[name!]?.type === 'min') ? (
										<div className="dropdown">
											<BsExclamationCircle className="svg" />
											<div className="dropdown-content">
												<p>{errors[name!]?.message}</p>
											</div>

										</div>
									) : null
								}
							</div>
							{
								name !== "cpf" && name !== "phone" && name !== "birthdate" ?
									<input
										{...register(name)}
										type={type}
										name={name}
										defaultValue={value}

										id={id}
										placeholder={placeholder}
									/>
									: <InputVerify 
										register={register} name={name} type={name} value={value}
									/>


							}
						</div>
				}
			</ContainerInput>
		</>
	)
}