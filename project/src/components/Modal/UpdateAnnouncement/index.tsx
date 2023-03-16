import { yupResolver } from "@hookform/resolvers/yup";
import { AnimatePresence } from "framer-motion";
import { useFieldArray, useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { TfiTrash } from 'react-icons/tfi';
import { AnnouncementContext } from "../../../context";
import { UpdateAnnouncementRequest } from "../../../interfaces/announcement.interface";
import { AnnouncementRequestSchema } from "../../../schema/announcement.schema";
import { Button, ButtonModal } from "../../Button";
import { InputModalUpdateAnnouncement } from "../../Input/Modal/inputUpdateAnnouncement";
import { BoxContentForm, BoxTitle, Container } from '../style';
import { BoxButton, BoxContent, BoxType, BoxVehicleInformation, FormCreate } from "./style";

export const UpdateAnnouncement = (): JSX.Element => {
    const {
        updateAnnouncement,
        isOpenModalUpdateAnnouncement,
        setIsOpenModalUpdateAnnouncement,
        setAnnouncementType,
        setVehicleType,
        setIsAnnouncementPublished,
        detailAnoucements,
        vehicleType,
        announcementType,
        isAnnouncementPublished,
        isOpenModalDeleteAnnouncement,
        setIsOpenModalDeleteAnnouncement,
    } = AnnouncementContext();

    const { register, handleSubmit, control, formState: { errors, isSubmitSuccessful }, reset } = useForm<UpdateAnnouncementRequest>({
        resolver: yupResolver(AnnouncementRequestSchema), defaultValues: {
            galleryImages: [
                {
                    imageUrl: detailAnoucements?.vehicle?.galleryImages[0].imageUrl
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
        <AnimatePresence>
            {isOpenModalUpdateAnnouncement &&
                <Container
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .5 }}
                    onClick={() => setIsOpenModalUpdateAnnouncement(!isOpenModalUpdateAnnouncement)}
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
                            <h3>Editar anúncio</h3>
                            <ButtonModal
                                type="button"
                                onClick={() => setIsOpenModalUpdateAnnouncement(!isOpenModalUpdateAnnouncement)}
                            >
                                <IoMdClose />
                            </ButtonModal>
                        </BoxTitle>

                        <FormCreate
                            onSubmit={handleSubmit(updateAnnouncement)}
                        >
                            <BoxContent>


                                <BoxType>
                                    <label htmlFor="announcementType" className="label">Tipo de anuncio</label>
                                    <BoxButton>
                                        <Button
                                            className={announcementType === "sale" ? "buttonBlue" : "buttonBlue"}
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
                                            disabled={true}

                                            defaultChecked={detailAnoucements.type === "rent" && true}
                                            onClick={() => {
                                                setAnnouncementType("rent")
                                            }}
                                        >
                                            Leilão
                                        </Button>
                                    </BoxButton>
                                </BoxType>
                                <label className="label">Informações do veículo</label>

                                <InputModalUpdateAnnouncement
                                    errors={errors}
                                    register={register}
                                    name={'title'}
                                    id={"AnnouncementTitle"}
                                    key={"AnnouncementTitle"}
                                    label={"Título"}
                                    value={detailAnoucements.title}
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
                                            value={detailAnoucements.vehicle.year.toString()}
                                            type={"text"}
                                        />
                                        <InputModalUpdateAnnouncement
                                            errors={errors}
                                            register={register}
                                            name={'mileage'}
                                            id={"vehicleMileage"}
                                            key={"vehicleMileage"}
                                            label={"Quilometragem"}
                                            value={detailAnoucements.vehicle.mileage.toString()}
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
                                        value={detailAnoucements.vehicle.price.toString()}
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
                                    value={detailAnoucements.description}
                                />

                                <BoxType>
                                    <label htmlFor="announcementType" >Tipo de veículo</label>
                                    <BoxButton>
                                        <Button
                                            className={vehicleType === detailAnoucements.vehicle.type ? "buttonBlue" : "buttonWhite"}
                                            id="vehicleTypeCar"
                                            type="button"
                                            onClick={() => {
                                                setVehicleType("car")
                                            }}
                                        >
                                            Carro
                                        </Button>
                                        <Button
                                            className={vehicleType !== detailAnoucements.vehicle.type ? "buttonBlue" : "buttonWhite"}
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
                                            className={detailAnoucements.isActive === isAnnouncementPublished ? "buttonBlue" : "buttonWhite"}
                                            id="announcementPublished"
                                            type="button"
                                            onClick={() => {
                                                setIsAnnouncementPublished(true)
                                            }}
                                        // defaultChecked={detailAnoucements.isActive === isAnnouncementPublished === true ? true : false }
                                        >
                                            Sim
                                        </Button>
                                        <Button
                                            className={detailAnoucements.isActive === !isAnnouncementPublished ? "buttonBlue" : "buttonWhite"}
                                            id="announcementTypeRent"
                                            type="button"
                                            // defaultChecked={detailAnoucements.isActive === isAnnouncementPublished === false ? true : false}
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
                                    value={detailAnoucements?.vehicle?.coverImage}
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
                                                    value={""}
                                                />

                                            </div>
                                        )
                                    })
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
                    </BoxContentForm>
                </Container >
            }
        </AnimatePresence>
    )
}