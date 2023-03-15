import { useEffect } from "react";
import { Footer } from "../../components/Footer";
import FormRegister from "../../components/FormRegister";
import Header from "../../components/Header";
import { ContainerMain, ContainerRegister } from "./style";


export const Register = (): JSX.Element => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
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