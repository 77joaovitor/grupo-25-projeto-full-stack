import { yupResolver } from "@hookform/resolvers/yup";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { TfiTrash } from 'react-icons/tfi';
import { AnnouncementContext } from "../../../context";
import { AnnouncementRequest } from "../../../interfaces/announcement.interface";
import { AnnouncementRequestSchema } from "../../../schema/announcement.schema";
import { Button, ButtonModal } from "../../Button";
import { InputModalAnnouncement } from "../../Input/Modal/inputCreateAnnouncement";
import { Container, BoxTitle } from '../style'
import { BoxButton, BoxContent, BoxType, BoxVehicleInformation, FormCreate } from "./style";

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

    const { register, handleSubmit, control, formState: { errors, isSubmitSuccessful }, reset } = useForm<AnnouncementRequest>({
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
            {isOpenModalCreateAnnouncement &&
                <Container
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // exit={{ opacity: 0 }}
                    // transition={{ duration: 1 }}
                    onClick={() => setIsOpenModalCreateAnnouncement(!isOpenModalCreateAnnouncement)}
                >
                    <FormCreate
                        onSubmit={handleSubmit(createAnnouncement)}
                        onClick={(e) => e.stopPropagation()}
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
                                        <InputModalAnnouncement 
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