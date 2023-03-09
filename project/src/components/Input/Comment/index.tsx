import { BsExclamationCircle } from "react-icons/bs";
import { PropsInputAnnouncement, PropsInputComment, PropsInputSession } from "../../../interfaces/component.interface";
import { ContainerInput } from "./style";

export const InputUserComment = ({
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
}: PropsInputComment): JSX.Element => {
	// const a = inputGallery! as const
	
	return (
		<>
			<ContainerInput>
				{

					textarea &&
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
						

						
				}
			</ContainerInput>
		</>
	)
}