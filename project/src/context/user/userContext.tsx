import { AxiosError } from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IUserContext, Props } from "../../interfaces/contexts.interface";
import {
  AddressRequest,
  UserRegisterRequest,
  UserResponse,
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
  const [userAdvertiser, setUserAdvertiser] = useState<UserResponse>(
    {} as UserResponse
  );

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
      console.log(data);

      const response = await api.post("/users/", {
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

      setTimeout(() => {
        setIsLoading(false);
        setReload(!reload);
        navigate("/login");
      }, 500);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error("Algo deu errado!", {
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
            setIsLoading(false);

            logout();
            navigate("/error", { replace: true });
          }, 5000);
      }
    }
  };

  const updateProfile = async (data: UserUpdateRequest) => {
    try {
      // setIsLoading(true);

      const response = await api.patch(`users/${user.id}`, {
        ...data,
      });

      setTimeout(() => {
        // setIsLoading(false);
        setIsModalUpdateProfile(!isModalUpdateProfile);
        setUser(response.data);
        setReload(!reload);
      }, 500);
    } catch (error) {
      if (error instanceof AxiosError) {
        error.response?.status === 500 &&
          setTimeout(() => {
            logout();
            navigate("/error", { replace: true });
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
      setUser(response.data);
      console.log(response.data);

      setTimeout(() => {
        setIsLoading(false);
        setUser(response.data);
        setIsModalUpdateAddress(!isModalUpdateAddress);
        setReload(!reload);
      }, 500);
    } catch (error) {
      if (error instanceof AxiosError) {
        error.response?.status === 500 &&
          setTimeout(() => {
            logout();
            navigate("/error", { replace: true });
          }, 5000);
      }
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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default UserProvider;

export const UserContext = () => useContext(Context);
