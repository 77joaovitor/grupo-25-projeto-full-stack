import { Container, BoxTitle } from '../style';
import { ButtonModal, Button } from '../../Button';
import { BoxButton , BoxContent} from './style'
import { IoMdClose } from 'react-icons/io';
import { AnnouncementContext } from '../../../context';

export const DeleteAnnouncement = (): JSX.Element => {
    const {
        isOpenModalDeleteAnnouncement,
        setIsOpenModalDeleteAnnouncement, 
        deleteAnnouncement, 
        detailAnoucements,
    } = AnnouncementContext();
    
    return (
        <>
            {
                isOpenModalDeleteAnnouncement &&
                <Container
                    onClick={
                        () => setIsOpenModalDeleteAnnouncement(!isOpenModalDeleteAnnouncement)
                    }
                >
                    <BoxContent>

                        <BoxTitle>
                            <h2>Excluir anúncio</h2>
                            <ButtonModal
                            className='btn'
                                type="button"
                                onClick={
                                    () => setIsOpenModalDeleteAnnouncement(!isOpenModalDeleteAnnouncement)
                                }
                            >
                                <IoMdClose />
                            </ButtonModal>
                        </BoxTitle>

                        <h3>Tem certeza que deseja remover este anúncio?</h3>
                        <p>
                            Essa ação não pode ser desfeita.
                            Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.
                        </p>

                        <BoxButton>
                            <Button
                                className="cancel_btn"
                                type="button"
                                onClick={
                                    () => setIsOpenModalDeleteAnnouncement(!isOpenModalDeleteAnnouncement)
                                }

                            >
                                Cancelar
                            </Button>
                            <Button
                                className="delete_btn"
                                type="button"
                                onClick={
                                    () => deleteAnnouncement(detailAnoucements?.id)
                                }

                            >
                                Sim, excluir anúncio
                            </Button>
                        </BoxButton>
                    </BoxContent>

                </Container>
            }
        </>
    )   
}