import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoMdClose } from "react-icons/io";
import { BoxContent, Container, FormCreate, BoxType, BoxTitle, BoxButton, BoxVehicleInformation } from "./style";
import { Button, ButtonModal } from "../../Button";
import { AnnouncementContext } from "../../../contexts";
import { AnnouncementRequest } from "../../../interfaces/announcement.interface";
import { AnnouncementRequestSchema } from "../../../schema/announcement.schema";
import { InputModalAnnouncement } from "../../Input/Modal/inputCreateAnnouncement";

export const CreateAnnouncement = (): JSX.Element => {
    const { 
        createAnnouncement, 
        isOpenModalCreateAnnouncement, 
        setIsOpenModalCreateAnnouncement,
        setAnnouncementType,
        setVehicleType,
        setInputs,
        inputs, 
        vehicleType
    } = AnnouncementContext();
    
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm<AnnouncementRequest>({
        resolver: yupResolver(AnnouncementRequestSchema),
    });
    
    setIsOpenModalCreateAnnouncement(true)
    
    let count: number = 1;

    // const generatorInput = (num: number) => {
    //     const list = []
    //     for(let i =0; i <= num; i++){
    //         list.push(
    //             <InputModalAnnouncement
    //                 errors={errors}
    //                 register={register}
    //                 name={'galleryImages'}
    //                 id={`galleryImages_${i+1}`}
    //                 key={`vehicleGalleryImage_${i+1}`}
    //                 label={`${i+1}º Imagem da galeria`}
    //                 placeholder={"https://image.com"}
    //                 type={"text"}
    //             />
    //         )
    //     }
    //     console.log(num)
    //     return (
    //         list.map((element) => {
    //             return element
    //         })
    //     )
    // }

    // setInputs(generatorInput(1))
    // useEffect(() =>{
    // }, [, count])
    // console.log(count)

    return (
        <>
            { isOpenModalCreateAnnouncement && 
                <Container
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // exit={{ opacity: 0 }}
                    // transition={{ duration: 1 }}
                    // onClick={() => setIsOpenModalCreateAnnouncement(!isOpenModalCreateAnnouncement)}
                >
                    <FormCreate
                        onSubmit={
                            handleSubmit(createAnnouncement)
                        }
                        onClick={(e) =>  e.stopPropagation()}
                    >
                        <BoxContent>
                            <BoxTitle>
                                <h3>Criar anuncio</h3> 
                                <ButtonModal
                                    type="button"
                                    onClick={() => setIsOpenModalCreateAnnouncement(!isOpenModalCreateAnnouncement)}
                                >
                                    <IoMdClose />
                                </ButtonModal>
                            </BoxTitle>

                            <BoxType>
                                <label htmlFor="announcementType">Tipo de anuncio</label>
                                <BoxButton>
                                    <Button
                                        className="announcementTypeSale"
                                        id="announcementTypeSale"
                                        type="button"
                                        defaultChecked={true}
                                        onClick={() => {
                                            setAnnouncementType("sale")
                                        }}
                                    >
                                        Venda
                                    </Button>
                                    <Button
                                        className="announcementTypeRent"
                                        id="announcementTypeRent"
                                        type="button"
                                        onClick={() => {
                                            setAnnouncementType("rent")
                                        }}                                    
                                    >
                                        Leilão
                                    </Button>
                                </BoxButton>
                            </BoxType>
                            <label >Informações do veículo</label>

                            <InputModalAnnouncement
                                errors={errors}
                                register={register}
                                name={'title'}
                                id={"AnnouncementTitle"}
                                key={"AnnouncementTitle"}
                                label={"Título"}
                                placeholder={"Digitar o Título"}
                                type={"text"}
                            />
                            <BoxVehicleInformation>
                                <div className="inf">
                                    <InputModalAnnouncement
                                        errors={errors}
                                        register={register}
                                        name={'year'}
                                        id={"vehicleYear"}
                                        key={"vehicleYear"}
                                        label={"Ano"}
                                        placeholder={"Digitar ano"}
                                        type={"text"}
                                    />
                                    <InputModalAnnouncement
                                        errors={errors}
                                        register={register}
                                        name={'mileage'}
                                        id={"vehicleMileage"}
                                        key={"vehicleMileage"}
                                        label={"Quilometragem"}
                                        placeholder={"0"}
                                        type={"number"}
                                    />
                                </div>
                                <InputModalAnnouncement
                                    errors={errors}
                                    register={register}
                                    name={'price'}
                                    id={"vehiclePrice"}
                                    key={"vehiclePrice"}
                                    label={"Preço"}
                                    placeholder={"Digitar preço"}
                                    type={"number"}
                                />
                            </BoxVehicleInformation>

                            <InputModalAnnouncement
                                textarea={true} 
                                errors={errors}
                                register={register}
                                name={'description'}
                                id={"announcementDescription"}
                                key={"announcementDescription"}
                                label={"Descrição"}
                                placeholder={"Digitar descrição"}
                            />

                            <BoxType>
                                <label htmlFor="announcementType">Tipo de veículo</label>
                                <BoxButton>
                                    <Button
                                        className="vehicleTypeCar"
                                        id="vehicleTypeCar"
                                        type="button"
                                        defaultChecked={true}
                                        onClick={() => {
                                            setVehicleType("car")
                                        }}
                                    >
                                        Carro
                                    </Button>
                                    <Button
                                        className="vehicleTypeMotorcycle"
                                        id="vehicleTypeMotorcycle"
                                        type="button"
                                        onClick={() => {
                                            setVehicleType("motorcycle")
                                        }}                                    
                                    >
                                        Moto
                                    </Button>
                                </BoxButton>

                        
                            </BoxType>
                                <InputModalAnnouncement
                                    errors={errors}
                                    register={register}
                                    name={'coverImage'}
                                    id={"vehicleCoverImage"}
                                    key={"vehicleCoverImage"}
                                    label={"Imagem da galeria"}
                                    placeholder={"https://image.com"}
                                    type={"text"}
                                />
                                    <InputModalAnnouncement
                                    errors={errors}
                                    register={register}
                                    name={'galleryImages'}
                                    id={`galleryImages_1`}
                                    key={`vehicleGalleryImage_1`}
                                    label={`1º Imagem da galeria`}
                                    placeholder={"https://image.com"}
                                    type={"text"}
                                />
                                    <InputModalAnnouncement
                                    errors={errors}
                                    register={register}
                                    name={'galleryImages'}
                                    id={`galleryImages_2`}
                                    key={`vehicleGalleryImage_2`}
                                    label={`2º Imagem da galeria`}
                                    placeholder={"https://image.com"}
                                    type={"text"}
                                />
                                <Button 
                                    className="add_image"
                                    type="button"
                                    onClick={(e: Event) => {
                                        // e.preventDefault()
                                        count +1
                                    }}
                                >
                                    Adicionar campo para imagem da galeria
                                </Button>

                                <BoxButton>
                                    <Button
                                        className="cancel_btn"
                                        type="button"
                                        onClick={() => {
                                        }}
                                    >
                                        Cancelar
                                    </Button>
                                    <Button
                                        className="create_btn"
                                        type="submit"                                  
                                    >
                                        Criar anuncio
                                    </Button>
                                </BoxButton>

                            
                        </BoxContent>

                    </FormCreate>
                </Container >
            }        
        </>
    )
}