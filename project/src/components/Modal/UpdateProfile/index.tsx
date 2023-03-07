import { useForm } from "react-hook-form";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { SessionContext } from "../../../context";
import { UserContext } from "../../../context/user/userContext"
import { UserUpdateRequest } from "../../../interfaces/user.interface";
import { Button, ButtonModal } from "../../Button";
import { InputModalProfile } from "../../Input/Profile/inputUpdateProfile";
import { BoxTitle } from "../style";
import { BoxButton, ContainerProfileModal, FormUpdate } from "./style"


export const UpdateModalProfile = (): JSX.Element => {
    const { setIsModalUpdateProfile, isModalUpdateProfile, user, updateProfile } = UserContext();
    const { showPassword, setShowPassword } = SessionContext();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
      };
    const {handleSubmit, register} = useForm<UserUpdateRequest>()

    return (
        <>
            {
                isModalUpdateProfile && 
                    <ContainerProfileModal
                        onClick={() => setIsModalUpdateProfile(!isModalUpdateProfile)}
                        >
                        <FormUpdate
                            onClick={(e) =>  e.stopPropagation()}
                            onSubmit={
                                handleSubmit(updateProfile)
                            }
                        >
                            <BoxTitle>
                                <h3>Editar perfil</h3>
                                <ButtonModal
                                    type="button"
                                    className="btn_close"
                                    onClick={() => setIsModalUpdateProfile(!isModalUpdateProfile)}
                                >
                                    <IoMdClose />
                                </ButtonModal>
                            </BoxTitle>

                            <span className="info">Informações pessoais</span>

                            <InputModalProfile 
                                label="Nome"
                                placeholder={user?.name}
                                key={user?.id+user?.name}
                                register={register}
                                name='name'
                                type="text"
                            />

                            <InputModalProfile 
                                label="Email"
                                placeholder={user?.email}
                                key={user?.id+user?.email}
                                register={register}
                                name='email'
                                type="email"
                            />

                            <InputModalProfile 
                                label="Senha"
                                placeholder={"Sua senha"}
                                key={user?.id+"Sua senha"}
                                register={register}
                                name='password'
                                type={showPassword ? 'text' : 'password'}
                            />

                            <span onClick={handleShowPassword} className='eye'>
                                {showPassword ? 
                                
                                <BsFillEyeFill />:
                                <BsFillEyeSlashFill /> 
                                }
                            </span>

                            <InputModalProfile 
                                label="CPF"
                                placeholder={user?.cpf}
                                key={user?.id+user?.cpf}
                                register={register}
                                name='cpf'
                                type="text"
                            />
                            
                            <InputModalProfile 
                                label="Celular"
                                placeholder={user?.phone}
                                key={user?.id+user?.phone}
                                register={register}
                                name='phone'
                                type="text"
                            />

                            <InputModalProfile 
                                label="Data de nascimento"
                                placeholder={user?.birthdate?.toString()}
                                key={user?.id+user?.birthdate?.toString()}
                                register={register}
                                name='cpf'
                                type="text"
                            />

                            <InputModalProfile 
                                label="Descrição"
                                placeholder={user?.description}
                                key={user?.id+user?.description}
                                register={register}
                                name='description'
                                textarea={true}
                            />

                            <BoxButton>
                                <Button
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
                    </ContainerProfileModal>
            }        
        </>
    )
}