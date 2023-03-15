import { useEffect } from "react"
import { Footer } from "../../components/Footer"
import { FormLogin } from "../../components/FormLogin"
import Header from "../../components/Header"
import { ContainerMain, ContainerSession } from "./style"

export const Login = (): JSX.Element => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <ContainerSession>
            <Header />
            <ContainerMain
                id="home"
            >
                <FormLogin />
            </ContainerMain>
            <Footer />
        </ContainerSession>
    )
}