import { AxiosError } from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IUserContext, Props } from "../../interfaces/contexts.interface";
import {
  AddressRequest,
  UserRegisterRequest,
  UserResponse,
  UserSessionRequest,
  UserUpdateRequest,
} from "../../interfaces/user.interface";
import { api } from "../../util/api";
import { logout } from "../session/auth";

export const Context = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<boolean>(false);
  const [user, setUser] = useState<UserResponse>({} as UserResponse);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [reload, setReload] = useState<boolean>(false);
  const [isDropdown, setIsDropDown] = useState<boolean>(false);
  const [isModalUpdateProfile, setIsModalUpdateProfile] =
    useState<boolean>(false);
  const [isModalUpdateAddress, setIsModalUpdateAddress] =
    useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isAdvertiser, setIsAdvertiser] = useState<boolean>(false);
  const [userAdvertiser, setUserAdvertiser] = useState<UserResponse>({} as UserResponse);
  const [isOpenRecovery, setIsOpenRecovery] = useState<boolean>(false)

  const navigate = useNavigate();

  const getUser = async (id: string) => {
    try {
      const response = await api.get(`/users/${id}/`);
      setUser(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  };

  const createProfile = async (data: UserRegisterRequest) => {
    try {
      setIsLoading(true);
    
     
      const response = await api.post('/users/', {
        ...data, 
        address: {
          zipCode: data.zipCode,
          number: data.number,
          city: data.city,
          road: data.road,
          complement: data.complement,
          state: data.state,
        },
        isAdvertiser: isAdvertiser,
      });
      
      
      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setIsLoading(false);
      setTimeout(() => {
        setReload(!reload);
        navigate("/login");
      }, 500);
    } catch (error) {
      if (error instanceof AxiosError) {
        setIsLoading(false);
        error.response?.status === 500 &&
          toast.error("Email já existe.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        error.response?.status === 500 &&
          setTimeout(() => {
  
            logout();
            navigate("/error", { replace: true });
          }, 5000);
      }
    }
  };

  const updateProfile = async (data: UserUpdateRequest) => {
    try {
      setIsLoading(true);
      
      const response = await api.patch(`users/${user.id}`, {
        ...data,
      });
      
      console.log(response.data);
      

      setTimeout( () => {
				
        setIsLoading(false);
        setIsModalUpdateProfile(!isModalUpdateProfile)
        setUser(response.data);
        setReload(!reload);
        
      }, 500);
    } catch (error) {
      if(error instanceof AxiosError){
        setIsLoading(false);
        console.log(error);

				error.response?.status === 500 && setTimeout(() => {
	
					logout()
					navigate('/error', {replace: true});
	
				}, 5000);
			}
    }
  };

  const updateAddress = async (data: AddressRequest) => {
    try {
      setIsLoading(true);
      const response = await api.patch(`users/${user.id}/address`, {
        ...data,
      });
      setUser(response.data)
     
      
      setTimeout( () => {
				
        setIsLoading(false);
        setUser(response.data);
        setIsModalUpdateAddress(!isModalUpdateAddress);
        setReload(!reload);
        
      }, 500);
    } catch (error) {
      if(error instanceof AxiosError){
        setIsLoading(false);
        console.log(error);

				error.response?.status === 500 && setTimeout(() => {
	
					logout()
					navigate('/error', {replace: true});
	
				}, 5000);
			}
    }
  };


  const submitEmail = async (data: UserSessionRequest) => {
    
    try {
      
      setIsLoading(true);      
      
      await api.post("email", {...data});
      
      setIsOpenRecovery(!isOpenRecovery)

      toast.info("Digite o codigo e sua nova senha!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setIsLoading(false);

    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  const submitPass = async (data: UserRegisterRequest) => {
    try {
      setIsLoading(true);      

      const { confirmPassword, email, pin, password, ...newData } = data;
      
      await api.patch("/users/recover", {
        pin,
        password,
      });

      setIsLoading(false);

      toast.success("Digite o codigo e sua nova senha!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      
      setIsOpenRecovery(!isOpenRecovery);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Context.Provider
      value={{
        user,
        setUser,
        auth,
        setAuth,
        getUser,
        isLoading,
        setIsLoading,
        reload,
        setReload,
        isDropdown,
        setIsDropDown,
        isModalUpdateProfile,
        setIsModalUpdateProfile,
        updateProfile,
        createProfile,
        updateAddress,
        isModalUpdateAddress,
        setIsModalUpdateAddress,
        menuOpen,
        setMenuOpen,
        isAdvertiser,
        setIsAdvertiser,
        userAdvertiser,
        setUserAdvertiser,
        isOpenRecovery,
        setIsOpenRecovery,
        submitEmail,
        submitPass,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default UserProvider;

export const UserContext = () => useContext(Context);
