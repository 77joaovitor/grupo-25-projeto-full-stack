import { yupResolver } from "@hookform/resolvers/yup";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { TfiTrash } from 'react-icons/tfi';
import { AnnouncementContext } from "../../../context";
import { AnnouncementRequest, UpdateAnnouncementRequest } from "../../../interfaces/announcement.interface";
import { AnnouncementRequestSchema } from "../../../schema/announcement.schema";
import { Button, ButtonModal } from "../../Button";
import { Container } from '../style'
import { BoxButton, BoxContent, BoxTitle, BoxType, BoxVehicleInformation, FormCreate } from "./style";
import { InputModalUpdateAnnouncement } from "../../Input/Modal/inputUpdateAnnouncement";

export const UpdateAnnouncement = (): JSX.Element => {
    const {
        updateAnnouncement,
        isOpenModalUpdateAnnouncement,
        setIsOpenModalUpdateAnnouncement,
        setAnnouncementType,
        setVehicleType,
        setIsAnnouncementPublished,
        detailAnoucements,
        isOpenModalDeleteAnnouncement, 
        setIsOpenModalDeleteAnnouncement,
    } = AnnouncementContext();
    
    const { register, handleSubmit, control, formState: { errors, isSubmitSuccessful }, reset } = useForm<UpdateAnnouncementRequest>({
        resolver: yupResolver(AnnouncementRequestSchema), defaultValues: {
            galleryImages: [
                {
                    imageUrl: ''
                }
            ]
        },
        mode: "onBlur",
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "galleryImages",
    });

    return (
        <>
            {isOpenModalUpdateAnnouncement &&
                <Container
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // exit={{ opacity: 0 }}
                    // transition={{ duration: 1 }}
                    onClick={() => setIsOpenModalUpdateAnnouncement(!isOpenModalUpdateAnnouncement)}
                >
                    <FormCreate
                        onSubmit={handleSubmit(updateAnnouncement)}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <BoxContent>
                            <BoxTitle>
                                <h3>Editar anúncio</h3>
                                <ButtonModal
                                    type="button"
                                    onClick={() => setIsOpenModalUpdateAnnouncement(!isOpenModalUpdateAnnouncement)}
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
                                        defaultChecked={detailAnoucements.type === "sale" && true}
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
                                        defaultChecked={detailAnoucements.type === "rent" && true}
                                        onClick={() => {
                                            setAnnouncementType("rent")
                                        }}
                                    >
                                        Leilão
                                    </Button>
                                </BoxButton>
                            </BoxType>
                            <label >Informações do veículo</label>

                            <InputModalUpdateAnnouncement
                                errors={errors}
                                register={register}
                                name={'title'}
                                id={"AnnouncementTitle"}
                                key={"AnnouncementTitle"}
                                label={"Título"}
                                placeholder={detailAnoucements.title}
                                type={"text"}
                            />
                            <BoxVehicleInformation>
                                <div className="inf">
                                    <InputModalUpdateAnnouncement
                                        errors={errors}
                                        register={register}
                                        name={'year'}
                                        id={"vehicleYear"}
                                        key={"vehicleYear"}
                                        label={"Ano"}
                                        placeholder={detailAnoucements.vehicle.year.toString()}
                                        type={"text"}
                                    />
                                    <InputModalUpdateAnnouncement
                                        errors={errors}
                                        register={register}
                                        name={'mileage'}
                                        id={"vehicleMileage"}
                                        key={"vehicleMileage"}
                                        label={"Quilometragem"}
                                        placeholder={detailAnoucements.vehicle.mileage.toString()}
                                        type={"number"}
                                    />
                                </div>
                                <InputModalUpdateAnnouncement
                                    errors={errors}
                                    register={register}
                                    name={'price'}
                                    id={"vehiclePrice"}
                                    key={"vehiclePrice"}
                                    label={"Preço"}
                                    placeholder={detailAnoucements.vehicle.price.toString()}
                                    type={"number"}
                                />
                            </BoxVehicleInformation>

                            <InputModalUpdateAnnouncement
                                textarea={true}
                                errors={errors}
                                register={register}
                                name={'description'}
                                id={"announcementDescription"}
                                key={"announcementDescription"}
                                label={"Descrição"}
                                placeholder={detailAnoucements.description}
                            />

                            <BoxType>
                                <label htmlFor="announcementType">Tipo de veículo</label>
                                <BoxButton>
                                    <Button
                                        className="vehicleTypeCar"
                                        id="vehicleTypeCar"
                                        type="button"
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

                            <BoxType>
                                <label htmlFor="announcementType">Publicado</label>
                                <BoxButton>
                                    <Button
                                        className="announcementPublished"
                                        id="announcementPublished"
                                        type="button"
                                        onClick={() => {
                                            setIsAnnouncementPublished(true)
                                        }}
                                        >
                                        Sim
                                    </Button>
                                    <Button
                                        className="announcementTypeRent"
                                        id="announcementTypeRent"
                                        type="button"
                                        defaultChecked={!detailAnoucements.isActive && true}
                                        onClick={() => {
                                            setIsAnnouncementPublished(false)
                                        }}
                                    >
                                        Não
                                    </Button>
                                </BoxButton>
                            </BoxType>
                            <InputModalUpdateAnnouncement
                                errors={errors}
                                register={register}
                                name={'coverImage'}
                                id={"vehicleCoverImage"}
                                key={"vehicleCoverImage"}
                                label={"Imagem da capa"}
                                placeholder={"https://image.com"}
                                type={"text"}
                            />

                        {
                            fields.map((field, index) => {
                                return (
                                    <div className="button_del_input" 
                                    key={`${field.id}`}

                                    >
                                        <ButtonModal type="button" onClick={() => remove(index)}>
                                            <TfiTrash size={12} className="svg" />
                                        </ButtonModal>
                                        <InputModalUpdateAnnouncement 
                                            register={register}
                                            name={'galleryImages'}
                                            errors={errors}
                                            file={true}
                                            inputGallery={index}
                                            key={field.id}
                                            id={field.id}
                                            label={`${index + 1}º Imagem da galeria`}
                                            placeholder={"https://image.com"}
                                        />
                        
                                    </div>
                                )})
                        }

                            <Button
                                className="add_image"
                                type="button"
                                onClick={() =>
                                    fields.length <= 5 && append({
                                        imageUrl: '',
                                    })
                                }
                            >
                                Adicionar campo para imagem da galeria
                            </Button>

                            <BoxButton>
                                <Button
                                    className="cancel_btn"
                                    type="button"
                                    onClick={() => {
                                        setIsOpenModalUpdateAnnouncement(!isOpenModalUpdateAnnouncement)
                                        setIsOpenModalDeleteAnnouncement(!isOpenModalDeleteAnnouncement)
                                    }}
                                >
                                    Excluir anúncio
                                </Button>
                                <Button
                                    className="create_btn"
                                    type="submit"
                                >
                                    Salvar alterações
                                </Button>
                            </BoxButton>
                        </BoxContent>
                    </FormCreate>
                </Container >
            }
        </>
    )
}