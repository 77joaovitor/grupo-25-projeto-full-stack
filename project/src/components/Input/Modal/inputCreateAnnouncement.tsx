import { AnnouncementContext } from "../../../contexts"
import { PropsInputAnnouncement } from "../../../interfaces/component.interface"
import { ContainerInput } from "./style"
import { BsExclamationCircle } from "react-icons/bs";

export const InputModalAnnouncement = ({
    register,
	label,
	errors,
	file,
    textarea,
	id,
	type,
	name,
	placeholder,
}: PropsInputAnnouncement): JSX.Element =>{
    const { announcementType } = AnnouncementContext()
    return (
        <>
			<ContainerInput>	
				{ 
				
                textarea ?
                    <div className="box_input_error">

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
                            {...register!(name!)}
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
						<input
							{...register!(name!)}
							type={type}
							name={name}
							id={id}
							placeholder={placeholder}
						/>
					</div> 
				}
			</ContainerInput>
		</>
    )
}