import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface IUserContext {
  auth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
}
interface IContext {
  children: ReactNode;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IContext) => {
  const [auth, setAuth] = useState(false);
  return (
    <UserContext.Provider value={{ auth, setAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
