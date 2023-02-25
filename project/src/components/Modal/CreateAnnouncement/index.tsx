import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { AnnouncementContext } from "../../../context";
import { AnnouncementRequest } from "../../../interfaces/announcement.interface";
import { AnnouncementRequestSchema } from "../../../schema/announcement.schema";
import { Button, ButtonModal } from "../../Button";
import { InputModalAnnouncement } from "../../Input/Modal/inputCreateAnnouncement";
import { BoxButton, BoxContent, BoxTitle, BoxType, BoxVehicleInformation, Container, FormCreate } from "./style";

type FormValues = {
    cart: {
        url: string;
    }[];
};

//   const Total = ({ control }: { control: Control<FormValues> }) => {
//     const formValues = useWatch({
//       name: "cart",
//       control
//     });
//     const total = formValues.reduce(
//       (acc, current) => acc + (current.price || 0) * (current.quantity || 0),
//       0
//     );
//     return <p>Total Amount: {total}</p>;
//   };

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

    const [indexes, setIndexes] = useState<number[]>([]);
    const [counter, setCounter] = useState<number>(1);

    const addFriend = (e: Event) => {
        e.preventDefault()
        setIndexes(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    };


    const { register, handleSubmit, control, formState: { errors, isSubmitSuccessful }, reset } = useForm<AnnouncementRequest>({
        resolver: yupResolver(AnnouncementRequestSchema),
    });

    // const { fields, append, remove } = useFieldArray<AnnouncementRequest, never, "id">({
    //     name: "cart",
    //     control
    //   });


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
                        onSubmit={
                            handleSubmit((data) => console.log(data)
                            )
                        }
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
                                indexes.map(index => {
                                    return (
                                        <InputModalAnnouncement
                                            errors={errors}
                                            register={register}
                                            name={'galleryImages'}
                                            id={`galleryImages_${index}`}
                                            key={`vehicleGalleryImage_${index}`}
                                            label={`${index}º Imagem da galeria`}
                                            placeholder={"https://image.com"}
                                            type={"text"}
                                        />
                                    )
                                })
                            }

                            <Button
                                className="add_image"
                                type="button"
                                onClick={addFriend}
                            >
                                Adicionar campo para imagem da galeria
                            </Button>

                            {/* </BoxButton> */}

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