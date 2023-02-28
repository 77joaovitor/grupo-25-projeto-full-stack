import { AxiosError } from "axios";
import { JwtPayload } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";
import { AnnouncementRequest, AnnouncementResponse, UpdateAnnouncementRequest } from "../../interfaces/announcement.interface";
import { AnnouncementProviderData, Props } from "../../interfaces/contexts.interface";
import { api } from "../../util/api";
import { getToken, logout } from "../session/auth";
import jwt_decode from "jwt-decode";
import { UserContext } from "../user/userContext";

const Context = createContext<AnnouncementProviderData>(
  {} as AnnouncementProviderData
);

export const AnnouncementProvider = ({ children }: Props) => {

  const [idDetailAnoucements, setIdDetailAnoucements] = useState(0);
  const [detailAnoucements, setDetailAnoucements] = useState(
    {} as AnnouncementResponse
  );
	const [announcement, setAnnouncement] = useState<AnnouncementResponse>({} as AnnouncementResponse);
	const [isOpenModalCreateAnnouncement, setIsOpenModalCreateAnnouncement] = useState<boolean>(false);
	const [isOpenModalUpdateAnnouncement, setIsOpenModalUpdateAnnouncement] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [announcementType, setAnnouncementType] = useState<string>("");
	const [vehicleType, setVehicleType] = useState<string>("");
	const [inputs, setInputs] = useState<JSX.Element>({} as JSX.Element)
	const [announcementsCars, setAnnouncementsCars] = useState<AnnouncementResponse[]>([])
	const [announcementsMotorcycle, setAnnouncementsMotorcycle] = useState<AnnouncementResponse[]>([])
	const [allAnnouncementByAdvertiser, setAllAnnouncementByAdvertiser] = useState<AnnouncementResponse[]>([])
	const [allAnnouncements, setAllAnnouncements] = useState<AnnouncementResponse[]>([])
	const [reload, setReload] = useState<boolean>(false);
	const [isAnnouncementPublished, setIsAnnouncementPublished] = useState<boolean>(false)
	const [isOpenModalDeleteAnnouncement, setIsOpenModalDeleteAnnouncement] = useState<boolean>(false);
	const { user, setUser, getUser } = UserContext();

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
					galleryImages: data.galleryImages,

				},
			});
			
			setAnnouncement(response.data);
			setReload(!reload)

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
	const updateAnnouncement = async (data: UpdateAnnouncementRequest) => {

		setIsLoading(true);

		try {
			
			const response = await api.post(`/announcements/${detailAnoucements.id}`, {
				...data,
				type: announcementType,
				published: isAnnouncementPublished,
				vehicle: {
					type: vehicleType,
					price: data.price,
					year: data.year,
					mileage: data.mileage,
					coverImage: data.coverImage,
					galleryImages: data.galleryImages,

				},
			});
			
			setAnnouncement(response.data);
			setReload(!reload)

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

	const getAnnouncements = async () => {
		try {
			const announcementId = localStorage.getItem('announcementId');
			const response = await api.get(`/announcements/`);

			// const responseOne = await api.get(`/announcements/${announcementId}`);


			// console.log(responseOne.data);
			
			if(announcementId) {

				const find = response.data.find((elem: AnnouncementResponse) => {
					return elem.id = announcementId
				})

				console.log( find);

				// setTimeout(() => {
					setDetailAnoucements(find)

				// },  10000)
				
			}
			
			setAllAnnouncements(response.data)

			// const announcementsByCars = response.data.filter((element: AnnouncementResponse) => {
			// 	return element.vehicle.type === 'car'
			// })
			// const announcementsByMotorcycle = response.data.filter((element: AnnouncementResponse) => {
			// 	return element.vehicle.type === 'motorcycle'
			// })
			// setAnnouncementsCars(announcementsByCars)
			// setAnnouncementsMotorcycle(announcementsByMotorcycle)

		} catch (error) {
			if (error instanceof AxiosError) {
				console.log(error);
				
			}
		}
	}



	const deleteAnnouncement = async (announcementId: string) => {
		try {
			await api.delete(`/announcements/${announcementId}`);
			setReload(!reload)

		} catch (error) {
			if (error instanceof AxiosError) {
				console.log(error);
				
			}	
		}
	}

	const getAllAnnouncementByAdvertiser = (advertiserId: string) => {
		try {
			const allAnnouncementByAdvertiserId = allAnnouncements.filter((element) => {
				return element.advertiser.id === advertiserId
			})
			setAllAnnouncementByAdvertiser(allAnnouncementByAdvertiserId)

		} catch (error) {
			
		}
	}
	
	useEffect(() => {
		getAnnouncements();

		let decoded: JwtPayload = {
			exp: 1,
			iat: 1,
			sub: 'error',
		};

		const token = getToken();
		
		if (token) {
			decoded = jwt_decode(token!);
		};

		if (decoded.sub?.length! > 5){
			getAllAnnouncementByAdvertiser(decoded.sub!)
			getUser(decoded.sub!);
		} 

		
	}, [, reload])

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
			setIsAnnouncementPublished,
			isAnnouncementPublished,
			detailAnoucements,
			setDetailAnoucements,
			getAllAnnouncementByAdvertiser,
			allAnnouncementByAdvertiser,
			isOpenModalUpdateAnnouncement,
			setIsOpenModalUpdateAnnouncement,
			updateAnnouncement,
			deleteAnnouncement,
			isOpenModalDeleteAnnouncement,
			setIsOpenModalDeleteAnnouncement,
			allAnnouncements,
			reload, 
			
			setReload,
			}}>
			{children}
		</Context.Provider>
	);
};

export const AnnouncementContext = () => useContext(Context);
