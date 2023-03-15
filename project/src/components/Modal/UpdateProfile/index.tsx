import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { SessionContext } from "../../../context";
import { UserContext } from "../../../context/user/userContext";
import { UserUpdateRequest } from "../../../interfaces/user.interface";
import { userUpdateSchema } from "../../../schema/user.schema";
import { Button, ButtonModal } from "../../Button";
import { InputModalProfile } from "../../Input/Profile/inputUpdateProfile";
import { BoxTitle } from "./style";
import { BoxButton, BoxContentForm, ContainerProfileModal, FormUpdate } from "./style";


export const UpdateModalProfile = (): JSX.Element => {
    const { setIsModalUpdateProfile, isModalUpdateProfile, user, updateProfile } = UserContext();
    const { showPassword, setShowPassword } = SessionContext();
    
    const { handleSubmit, register, setValue, formState: {errors} } = useForm<UserUpdateRequest>({
        resolver: yupResolver(userUpdateSchema)
    })

    return (
        <>
            {
                isModalUpdateProfile &&
                <ContainerProfileModal
                    onClick={() => setIsModalUpdateProfile(!isModalUpdateProfile)}
                >
                    {/* <BoxContentForm> */}
                    <BoxContentForm
                        onClick={(e) =>  e.stopPropagation()}
                    >
                        <BoxTitle 
                            onClick={(e) =>  e.stopPropagation()}
                        >
                            <h3>Editar perfil</h3>
                            
                                <ButtonModal
                                    type="button"
                                    className="btn_close"
                                    onClick={() => setIsModalUpdateProfile(!isModalUpdateProfile)}
                                >
                                    <IoMdClose />
                                </ButtonModal>
                            
                        </BoxTitle>
                        <FormUpdate
                            onClick={(e) => e.stopPropagation()}
                            onSubmit={
                                handleSubmit(updateProfile)
                            }
                            action=""
                        >
                           

                            <span className="info">Informações pessoais</span>

                            <InputModalProfile
                                label="Nome"
                                key={user?.id + user?.name}
                                register={register}
                                name='name'
                                type="text"
                                value={user?.name}
                                errors={errors}
                            />

                            <InputModalProfile
                                label="Email"
                                key={user?.id + user?.email}
                                register={register}
                                name='email'
                                type="email"
                                value={user?.email}
                                errors={errors}
                            />

                            <InputModalProfile
                                label="CPF"
                                key={user?.id + user?.cpf}
                                register={register}
                                name='cpf'
                                type="text"
                                value={user?.cpf}
                                setValue={setValue}
                                errors={errors}
                            />

                            <InputModalProfile
                                label="Celular"
                                key={user?.id + user?.phone}
                                register={register}
                                name='phone'
                                type="text"
                                value={user?.phone}
                                errors={errors}
                            />

                            <InputModalProfile
                                label="Data de nascimento"
                                key={user?.id + user?.birthdate?.toString()}
                                register={register}
                                name='birthdate'
                                type="text"
                                value={new Date(user?.birthdate).toLocaleDateString()}
                                errors={errors}
                            />

                            <InputModalProfile
                                label="Descrição"
                                key={user?.id + user?.description}
                                register={register}
                                name='description'
                                textarea={true}
                                value={user?.description}
                                errors={errors}
                            />

                            <BoxButton>
                                <Button
                                    onClick={
                                        () => setIsModalUpdateProfile(!isModalUpdateProfile)
                                    }
                                    className="btn_cancel"
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    className="btn_save"
                                >
                                    Salvar alterações
                                </Button>
                            </BoxButton>
                        </FormUpdate>
                    </BoxContentForm>
                    {/* </BoxContentForm> */}
                </ContainerProfileModal>
            }
        </>
    )
}