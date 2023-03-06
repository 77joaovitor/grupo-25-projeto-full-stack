import { Container, BoxTitle } from '../style';
import { ButtonModal, Button } from '../../Button';
import { BoxButton , BoxContent} from '../UpdateProfile/style'
import { IoMdClose } from 'react-icons/io';
import { AnnouncementContext } from '../../../context';

export const ModalSuccessAnnouncement = (): JSX.Element => {
    const {
        isModalSuccessCreate,
        setIsModalSuccessCreate
    } = AnnouncementContext();
    
    return (
        <>
            {
                isModalSuccessCreate &&
                <Container
                    onClick={
                        () => setIsModalSuccessCreate(!isModalSuccessCreate)
                    }
                >
                    <BoxContent>

                        <BoxTitle>
                            <h2>Sucesso</h2>
                            <ButtonModal
                            className='btn'
                                type="button"
                                onClick={
                                    () => setIsModalSuccessCreate(!isModalSuccessCreate)
                                }
                            >
                                <IoMdClose />
                            </ButtonModal>
                        </BoxTitle>

                        <h3>Seu anuncio foi criado com sucesso com sucesso!</h3>
                        <p>
                            Agora você poderá ver seus negócios crescendo em grande escala
                        </p>

                    </BoxContent>

                </Container>
            }
        </>
    )   
}