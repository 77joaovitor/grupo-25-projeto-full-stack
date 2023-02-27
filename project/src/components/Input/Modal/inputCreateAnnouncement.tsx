import { BsExclamationCircle } from "react-icons/bs";
import { PropsInputAnnouncement } from "../../../interfaces/component.interface";
import { ContainerInput } from "./style";

export const InputModalAnnouncement = ({
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
}: PropsInputAnnouncement): JSX.Element => {
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
										{...register(`galleryImages.${inputGallery!}.imageUrl` as const, {
											required: true
										})}
											type={type}
											id={id}
											placeholder={placeholder}
									/>
									:
									<input
										{...register(name)}
										type={type}
										name={name}
										id={id}
										placeholder={placeholder}
										onChange={
											(e) => e.target.value
										}
									/>
							}
						</div>
				}
			</ContainerInput>
		</>
	)
}