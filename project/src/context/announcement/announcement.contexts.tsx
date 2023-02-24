import { AxiosError } from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AnnouncementRequest, AnnouncementResponse } from "../../interfaces/announcement.interface";
import { AnnouncementProviderData, Props } from "../../interfaces/contexts.interface";
import { api } from "../../util/api";
import { logout } from "../session/auth";

const Context = createContext<AnnouncementProviderData>({} as AnnouncementProviderData);

export const AnnouncementProvider = ({ children }: Props) => {
	const [announcement, setAnnouncement] = useState<AnnouncementResponse>({} as AnnouncementResponse);
	const [isOpenModalCreateAnnouncement, setIsOpenModalCreateAnnouncement] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [announcementType, setAnnouncementType] = useState<string>("");
	const [vehicleType, setVehicleType] = useState<string>("");
	const [inputs, setInputs] = useState<JSX.Element>({} as JSX.Element)
	const [announcementsCars, setAnnouncementsCars] = useState<AnnouncementResponse[]>([])
	const [announcementsMotorcycle, setAnnouncementsMotorcycle] = useState<AnnouncementResponse[]>([])
	const [reload, setReload] = useState<boolean>(false)

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
			if (error instanceof AxiosError) {
				error.response?.status === 500 && setTimeout(() => {

					logout()
					// navigate('/error', {replace: true});

				}, 5000);
			}
		};
	};

	const getAllAnnouncements = async () => {
		try {
			const response = await api.get("/announcements/")
			
			const announcementsByCars = response.data.filter((element: AnnouncementResponse) => {
				return element.vehicle.type === 'car'
			})
			const announcementsByMotorcycle = response.data.filter((element: AnnouncementResponse) => {
				return element.vehicle.type === 'motorcycle'
			})

			setAnnouncementsCars(announcementsByCars)
			setAnnouncementsMotorcycle(announcementsByMotorcycle)

		} catch (error) {
			if (error instanceof AxiosError) {
				console.log(error);
				
			}
		}
	}
	
	useEffect(() => {
		getAllAnnouncements();
	}, [reload])

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
			announcementsCars,
			announcementsMotorcycle,
		}}>
			{children}
		</Context.Provider>
	);
};


export const AnnouncementContext = () => useContext(Context)