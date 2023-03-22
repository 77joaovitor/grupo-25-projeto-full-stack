import { useForm } from "react-hook-form";
import { AnnouncementContext } from "../../context";
import { UserContext } from "../../context/user/userContext";
import { RequestComment } from "../../interfaces/announcement.interface";
import { Button } from "../Button";
import InitialLetterName from "../InitialLetterName";
import { InputUserComment } from "../Input/Comment";
import { BoxFormComment } from "./style";
import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export const FormComment = (): JSX.Element => {
    const { createComment } = AnnouncementContext();
    const { user } = UserContext();
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<RequestComment>();

    return (
      <>
       {
        user && 
        <div className="peapleComents">

          <BoxFormComment
              onSubmit={
                  handleSubmit(createComment)
              }
          >
            {
              user.name ?
                <div className="peapleComents-peap">
                  
                  <InitialLetterName
                    name={user.name  && user?.name[0]}
                  /> 
                    
                  <h4>{user.name && user?.name}</h4>
                   
                </div> 
              :

                <div className="peapleComents-peap">
                  
                  <FaUserCircle /> 
                  <h4>Anônimo</h4>

                </div>
              
            }
            <div className="input">
              <InputUserComment
                    register={register}
                    name={'body'}
                    textarea={true}
                    
                    placeholder="Digite algo"
                />
                {
              user.name ?
                <Button type="submit" className="comentButton">
                  Comentar
                </Button>
              :   
                <Button type="button" className="comentButton"
                  onClick={
                    () => {
                      toast.error("Entre na sua conta para comentar", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                      navigate('/login')
                    }
                  }
                >
                  Comentar
                </Button>
                }
            </div>
          </BoxFormComment>
          </div>

        
        
      }
      </>
    )
}