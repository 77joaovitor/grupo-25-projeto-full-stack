import { Footer } from "../../components/Footer";
import FormRegister from "../../components/FormRegister";
import Header from "../../components/Header";
import { ContainerMain, ContainerRegister } from "./style";


export const Register = (): JSX.Element => {
    return (
        <ContainerRegister>
            <Header />
            
            <ContainerMain
                id="home"
            >
                <FormRegister />
            </ContainerMain>

            <Footer />
        </ContainerRegister>
    )

}