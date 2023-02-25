import { ContainerFooter, ContainerButton } from "./style";
import logo from '../../assets/Motors_shop_footer.svg'
import { Button, ButtonModal } from "../Button";
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'

export const Footer = (): JSX.Element => {
    return (
        <ContainerFooter>
            <h3><img src={logo} alt="Logo" /></h3>
            <span>© 2022 -  Todos os direitos reservados.</span>
           {/* <ContainerButton> */}
           <Button 
                as="a"
                id="home"
            >
                
                <p><MdOutlineKeyboardArrowUp size={20} className="icon"/></p>
            </Button>
           {/* </ContainerButton> */}
        </ContainerFooter>
    )
}