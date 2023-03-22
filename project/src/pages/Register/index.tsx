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
        <ContainerRegister
        initial={{ opacity: .5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .5 }}
        >
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