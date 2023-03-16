import { yupResolver } from "@hookform/resolvers/yup";
import { AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { SessionContext } from "../../../context";
import { UserContext } from "../../../context/user/userContext";
import { UserUpdateRequest } from "../../../interfaces/user.interface";
import { userUpdateSchema } from "../../../schema/user.schema";
import { Button, ButtonModal } from "../../Button";
import { InputModalProfile } from "../../Input/Profile/inputUpdateProfile";
import { BoxButton, BoxContentForm, BoxTitle, ContainerProfileModal, FormUpdate } from "./style";


export const UpdateModalProfile = (): JSX.Element => {
    const { setIsModalUpdateProfile, isModalUpdateProfile, user, updateProfile } = UserContext();
    const { showPassword, setShowPassword } = SessionContext();

    const { handleSubmit, register, setValue, formState: { errors } } = useForm<UserUpdateRequest>({
        resolver: yupResolver(userUpdateSchema)
    })

    return (
        <AnimatePresence>
            {
                isModalUpdateProfile &&
                <ContainerProfileModal
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .5 }}

                    onClick={() => setIsModalUpdateProfile(!isModalUpdateProfile)}
                >
                    <BoxContentForm
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.5 }}
                        animate={{
                            scale: 1,
                            transition: {
                                type: "spring",
                                stiffness: 30
                            }
                        }}
                        exit={{
                            scale: 0.5,
                            transition: {
                                type: "spring",
                                stiffness: 30
                            }
                        }}

                    >
                        <BoxTitle
                            onClick={(e) => e.stopPropagation()}
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
        </AnimatePresence>
    )
}