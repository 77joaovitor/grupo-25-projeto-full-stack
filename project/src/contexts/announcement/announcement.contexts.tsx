import { createContext, useContext, useState } from "react";
import { AnnouncementProviderData, Props } from "../../interfaces/contexts.interface";
import { logout } from "../session/auth";
import { api } from "../../util/api";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { AnnouncementRequest, AnnouncementResponse } from "../../interfaces/announcement.interface";

const Context = createContext<AnnouncementProviderData>({} as AnnouncementProviderData);

export const AnnouncementProvider = ({ children }: Props) => {
    const [announcement, setAnnouncement] = useState<AnnouncementResponse>({} as AnnouncementResponse);
    const [isOpenModalCreateAnnouncement, setIsOpenModalCreateAnnouncement] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [announcementType, setAnnouncementType] = useState<string>("");
    const [vehicleType, setVehicleType] = useState<string>("");
	const [inputs, setInputs] = useState<JSX.Element>({} as JSX.Element)

	// const navigate = useNavigate();

	const createAnnouncement = async (data: AnnouncementRequest) => {
	
		setIsLoading(true);
		
		try {

			const response = await api.post(`/announcements/`, {
				...data, 
                type: announcementType, 
                vehicle: {
                    type: vehicleType,
                    price: data.price,
                    year: data.year,
                    mileage: data.mileage,
                    coverImage: data.coverImage,
                },
			});
            
            setAnnouncement(response.data)

			setTimeout(() => {
				setIsLoading(false);

            }, 500);

		} catch (error) {
			if(error instanceof AxiosError){
				error.response?.status === 500 && setTimeout(() => {
	
					logout()
					// navigate('/error', {replace: true});
	
				}, 5000);
			}
		};
	};

	return (
		<Context.Provider value={{
			createAnnouncement,
            setAnnouncement,
            announcement, 
            setIsOpenModalCreateAnnouncement,
            isOpenModalCreateAnnouncement,
            announcementType, 
            setAnnouncementType,
			setVehicleType,
			vehicleType, 
			setInputs,
			inputs, 
		}}>
			{children}
		</Context.Provider>
	);
};


export const AnnouncementContext = () => useContext(Context)