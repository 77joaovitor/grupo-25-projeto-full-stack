import axios from "axios";
import { useRef } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { PropsInputUser } from "../../../interfaces/component.interface";
import { InputVerify } from "../InputMaskVerify";
import { ContainerInput } from "./style";

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
	defaultValue,
	cep,
	setValue,
}: PropsInputUser): JSX.Element => {
	const inputRef = useRef(null);

	
	const handleCepData = async (eventValue: string) => {
		if (eventValue.length === 9) {
			const response = await axios.get(`https://viacep.com.br/ws/${eventValue}/json/`)
			
			if (response.status === 200) {
				console.log(response.data);
				
				setValue!("city", response.data.localidade);
				setValue!("road", response.data.logradouro);
				setValue!("state", response.data.uf);
				setValue!("zipCode", response.data.cep);
			} else {
				console.log(response.data);
				
				setValue!("city", '');
				setValue!("road", '');
				setValue!("state", '');
				setValue!("zipCode", '');
			}
		}
	}

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
										ref={inputRef}

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
										:
										cep ?
											<InputVerify
												register={register}
												name={name}
												type={name}
												value={value}
												onBlur={handleCepData}
												placeholder={placeholder}


											/>
											:
											<InputVerify
												register={register}
												name={name}
												type={name}
												value={value}
												onBlur={handleCepData}
												placeholder={placeholder}

											/>
							}
						</div>
				}
			</ContainerInput>
		</>
	)
}