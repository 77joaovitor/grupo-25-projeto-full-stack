import { AxiosError } from "axios";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { IUserContext, Props } from "../../interfaces/contexts.interface";
import { UserResponse } from "../../interfaces/user.interface";
import { api } from "../../util/api";

export const Context = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<boolean>(false);
  const [user, setUser] = useState<UserResponse>({} as UserResponse)
  
  const getUser = async (id: string) => {
    try {
      const response = await api.get(`/users/${id}/`)
      setUser(response.data)
    } catch (error) {
      if(error instanceof AxiosError){
        console.log(error);
        
      }
    }
  }

  return (
    <Context.Provider value={{
      user, 
      setUser,
      auth, 
      setAuth,
      getUser,
    }}>
      {children}
    </Context.Provider>
  );
};

export default UserProvider;

export const UserContext = () => useContext(Context)