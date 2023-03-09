import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { UserContext } from "../../../context/user/userContext"
import { AddressRequest } from "../../../interfaces/user.interface";
import { Button, ButtonModal } from "../../Button";
import { InputModalAddress } from "../../Input/Profile/inputUpdateAddress";
import { BoxTitle } from "../style";
import { BoxButton, BoxInput, ContainerProfileModal, FormUpdate } from "./style"


export const UpdateModalAddress = (): JSX.Element => {
    const { isModalUpdateAddress, setIsModalUpdateAddress, user, updateAddress } = UserContext();

    const {handleSubmit, register} = useForm<AddressRequest>()
    
    return (
        <>
            {
                isModalUpdateAddress && 
                    <ContainerProfileModal
                        onClick={() => setIsModalUpdateAddress(!isModalUpdateAddress)}
                        >
                        <FormUpdate
                            onClick={(e) =>  e.stopPropagation()}
                            onSubmit={
                                handleSubmit(updateAddress)
                            }
                        >
                            <BoxTitle>
                                <h3>Editar endereço</h3>
                                <ButtonModal
                                    type="button"
                                    className="btn_close"
                                    onClick={() => setIsModalUpdateAddress(!isModalUpdateAddress)}
                                >
                                    <IoMdClose />
                                </ButtonModal>
                            </BoxTitle>

                            <span className="info">Informações de endereço</span>

                            <InputModalAddress 
                                label="CEP"
                                value={user?.addresses?.zipCode}
                                key={user?.addresses?.zipCode+user?.id}
                                register={register}
                                name='zipCode'
                                type="text"
                            />

                            <BoxInput>
                                <InputModalAddress 
                                    label="Estado"
                                    value={user?.addresses?.state}
                                    key={user?.addresses?.state+user?.id}
                                    register={register}
                                    name='state'
                                    type="text"
                                />

                                <InputModalAddress 
                                    label="Cidade"
                                    value={user?.addresses?.city}
                                    key={user?.addresses?.city}
                                    register={register}
                                    name='city'
                                    type={'text'}
                                />
                            </BoxInput>

                            <InputModalAddress 
                                label="Rua"
                                value={user?.addresses?.road}
                                key={user?.addresses?.road}
                                register={register}
                                name='road'
                                type="text"
                            />
                            
                           <BoxInput>
                           <InputModalAddress 
                                label="Número"
                                value={user?.addresses?.number}
                                key={user?.addresses?.number}
                                register={register}
                                name='number'
                                type="text"
                            />

                            <InputModalAddress 
                                label="Complemento"
                                value={user?.addresses?.complement}
                                key={user?.addresses?.complement}
                                register={register}
                                name='complement'
                                type="text"
                            />
                           </BoxInput>

                            <BoxButton>
                                <Button
                                    onClick={() => setIsModalUpdateAddress(!isModalUpdateAddress)}
                                    className="btn_cancel"
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    type="submit"
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