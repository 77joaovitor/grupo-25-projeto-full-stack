import { useForm } from "react-hook-form";
import { AnnouncementContext } from "../../context";
import { RequestComment } from "../../interfaces/announcement.interface";
import { Button } from "../Button";
import InitialLetterName from "../InitialLetterName";
import { InputUserComment } from "../Input/Comment";
import { BoxFormComment } from "./style";


export const FormComment = (): JSX.Element => {
    const { detailAnoucements, getAllAnnouncementByAdvertiser, createComment } =
    AnnouncementContext();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<RequestComment>({
        // resolver: yupResolver(userSessionRequestSchema),
      });
    return (
        <BoxFormComment
            onSubmit={
                handleSubmit(createComment)
            }
        >
             <div className="peapleComents-peap">
                  <InitialLetterName
                    name={detailAnoucements?.advertiser?.name[0]}
                  />
                  <h4>{detailAnoucements?.advertiser?.name}</h4>
                </div>
                <div className="input">
                  <InputUserComment
                        register={register}
                        name={'body'}
                        textarea={true}
                        
                        placeholder="Digite algo"
                    />
                  <Button type="submit" className="comentButton">Comentar</Button>
                </div>
        </BoxFormComment>
    )
}