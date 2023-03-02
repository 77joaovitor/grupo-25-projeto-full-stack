import { AxiosError, AxiosResponse } from 'axios';
import { createContext, useContext } from 'react';
import { api } from '../../util/api';
import { UserSessionRequest } from '../../interfaces/user.interface';
import { Props, SessionProviderData } from '../../interfaces/contexts.interface';
import { login } from './auth';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../user/userContext';


const Context = createContext<SessionProviderData>({} as SessionProviderData)

export const SessionProvider = ({ children }: Props) => {
	const navigate = useNavigate();
	const { setReload, reload, setIsLoading } = UserContext();


	const createSession = async (data: UserSessionRequest) => {

		try {
			setIsLoading(true);

			const response: AxiosResponse<any, any> = await api.post('/login/', {
				...data
			});
			
			setTimeout( () => {
				
				const {access_token: token} = response.data;
	
				if (api.defaults.headers != null) {
					api.defaults.headers.common.Authorization =  `Bearer ${token}` 
				};
				
				login(token);
				
				setIsLoading(false);

				setReload(!reload);	

				navigate('/', { replace: true });

			}, 500);

		} catch (error) {
			if (error instanceof AxiosError) {
				setIsLoading(false);

				error.response?.status === 500 && setTimeout(() => {
	
					navigate('/error', {replace: true});
	
				}, 1000);			
			};
		};
	};

	const logout = () => {
		localStorage.removeItem('TOKEN_KEY');
		navigate('/', { replace: true });
	};

	return (
		<Context.Provider value={{
			createSession,
			logout,
		}}>
			{children}
		</Context.Provider>
	);
};


export const SessionContext = () => useContext(Context);