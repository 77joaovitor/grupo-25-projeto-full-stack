import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { UserContext } from "../../context/user/userContext";
import { UserSessionRequest } from "../../interfaces/user.interface";
import { recoverySchema } from "../../schema/user.schema";
import { Button } from "../Button";
import { InputUserSession } from "../Input/Session/inputSession";
import { FormSubmitEmail } from "./style";


export const SubmitEmail = () => {
    const { setIsOpenRecovery, isOpenRecovery, submitEmail } = UserContext();

    const { register, handleSubmit, formState: { errors } } = useForm<UserSessionRequest>({
        resolver: yupResolver(recoverySchema)
    });

    return (
        <>
            {!isOpenRecovery &&                   
                <FormSubmitEmail onSubmit={handleSubmit(submitEmail)}>
                    <h2>Recuperar senha</h2>

                    <InputUserSession
                        placeholder="Digite seu e-mail!"
                        label="Email"
                        errors={errors}
                        register={register}
                        name="email"
                        type="email"

                    />
                    <Button type="submit">Enviar</Button>
                </FormSubmitEmail>
            }
        </>
    )
}