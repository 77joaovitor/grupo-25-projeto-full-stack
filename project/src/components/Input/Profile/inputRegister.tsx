import { BsExclamationCircle } from "react-icons/bs";
import { PropsInputAnnouncement, PropsInputUser } from "../../../interfaces/component.interface";
import { ContainerInput } from "./style";
import InputMask from "react-input-mask";
import { forwardRef, useRef } from "react";

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
	if(type === 'zipCode') {
		return (
			
			<InputMask
				ref={ref}
				{...register(name)}
				mask={'99.999-999'}
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



export const InputRegister = ({
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
	defaultValue
}: PropsInputUser): JSX.Element => {
	// const a = inputGallery! as const
	
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
								value={value}
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
								file ?
									<input
										// {...register(`galleryImages.${inputGallery!}.imageUrl` as const, {
										// 	required: true
										// })}
											type={type}
											id={id}
											placeholder={placeholder}
									/>
									:
					
									name !== "cpf" && name !== "phone" && name !== "birthdate" && name !== "zipCode" ?
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