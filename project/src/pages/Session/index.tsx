import { Footer } from "../../components/Footer"
import { FormLogin } from "../../components/FormLogin"
import Header from "../../components/Header"
import { ContainerMain, ContainerSession } from "./style"

export const Login = (): JSX.Element => {
    return (
        <ContainerSession>
            <Header />
            <ContainerMain>
                <FormLogin />
            </ContainerMain>
            <Footer />
        </ContainerSession>
    )
}