import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoMdClose } from "react-icons/io";
import { BoxContent, Container, FormCreate } from "./style";
import { ButtonModal } from "../../Button";
import { AnnouncementContext } from "../../../contexts";
import { AnnouncementRequest } from "../../../interfaces/announcement.interface";
import { AnnouncementRequestSchema } from "../../../schema/announcement.schema";
import { InputModalAnnouncement } from "../../Input/Modal/inputCreateAnnouncement";

export const CreateAnnouncement = (): JSX.Element => {
    const { 
        createAnnouncement, 
        isOpenModalCreateAnnouncement, 
        setIsOpenModalCreateAnnouncement,
        setAnnouncement,
    } = AnnouncementContext();

    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm<AnnouncementRequest>({
        resolver: yupResolver(AnnouncementRequestSchema),
    });

    return (
        <>
            { isOpenModalCreateAnnouncement && 
                <Container
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    onClick={() => setIsOpenModalCreateAnnouncement(!isOpenModalCreateAnnouncement)}
                >
                    {/* <BoxContent> */}
                        <FormCreate
                            onSubmit={
                                handleSubmit(createAnnouncement)
                            }
                            onClick={(e) =>  e.stopPropagation()}
                        >
                            <BoxContent>
                                <h3>Criar anuncio</h3> 
                                <ButtonModal
                                    type="button"
                                    onClick={() => setIsOpenModalCreateAnnouncement(!isOpenModalCreateAnnouncement)}
                                >
                                    <IoMdClose />
                                </ButtonModal>

                                <InputModalAnnouncement
                                    register={register}
                                    errors={errors}
                                    id=""
                                    label="Tipo de anuncio"
                                    type="button"
                                    onClick={() => {
                                        setAnnouncement("sale")
                                    }}

                                />
                                <InputModalAnnouncement
                                    register={register}
                                    errors={errors}
                                    id=""
                                    type="button"
                                    onClick={() => {
                                        setAnnouncement("rent")
                                    }}
                                />
                                
                            </BoxContent>

                        </FormCreate>
                    {/* </BoxContent> */}
                </Container >
            }        
        </>
    )
}