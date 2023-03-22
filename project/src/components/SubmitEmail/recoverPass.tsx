import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { toast } from "react-toastify";
import { SessionContext } from "../../context";
import { UserContext } from "../../context/user/userContext";
import { UserRegisterRequest, UserSessionRequest } from "../../interfaces/user.interface";
import { recoveryPasswordSchema, recoverySchema } from "../../schema/user.schema";
import { Button } from "../Button";
import { InputRegister } from "../Input/Profile/inputRegister";
import { FormSubmitEmail } from "./style";


export const RecoverPass = () => {
    const { isOpenRecovery, submitPass } = UserContext();
    const { showPassword, setShowPassword } = SessionContext();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
      };

    const { register, handleSubmit, formState: { errors } } = useForm<UserRegisterRequest>({
        resolver: yupResolver(recoveryPasswordSchema)
    });

    return (
        <>
            {isOpenRecovery &&                   
                <FormSubmitEmail onSubmit={handleSubmit(submitPass)}>
                    <h2>Recuperar senha</h2>

                    <InputRegister
                        label="Código"
                        placeholder="Digite o código recebido"
                        errors={errors}
                        register={register}
                        name="pin"
                        type="number"
                    />

                    <InputRegister 
                        label="Senha"
                        placeholder="Digite a nova senha"
                        errors={errors}
                        register={register}
                        name="password"
                        type={showPassword ? "text" : "password"}
                    />

                    <span onClick={handleShowPassword} className="eye">
                        {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                    </span>


                    <InputRegister 
                        label="Confirmar senha"
                        placeholder="Confirme a nova senha"
                        errors={errors}
                        register={register}
                        name="confirmPassword"
                        type={showPassword ? "text" : "password"}
                    />

                    <span onClick={handleShowPassword} className="eye-2">
                        {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                    </span>

                    <Button type="submit">Enviar</Button>
                </FormSubmitEmail>
            }
        </>
    )
}