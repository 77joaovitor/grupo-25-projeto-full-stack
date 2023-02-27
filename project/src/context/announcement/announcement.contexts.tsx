import { AxiosError } from "axios";
import { JwtPayload } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";
import {
  AnnouncementRequest,
  AnnouncementResponse,
} from "../../interfaces/announcement.interface";
import {
  AnnouncementProviderData,
  Props,
} from "../../interfaces/contexts.interface";
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
  const [announcement, setAnnouncement] = useState<AnnouncementResponse>(
    {} as AnnouncementResponse
  );
  const [isOpenModalCreateAnnouncement, setIsOpenModalCreateAnnouncement] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [announcementType, setAnnouncementType] = useState<string>("");
  const [vehicleType, setVehicleType] = useState<string>("");
  const [inputs, setInputs] = useState<JSX.Element>({} as JSX.Element);
  const [announcementsCars, setAnnouncementsCars] = useState<
    AnnouncementResponse[]
  >([]);
  const [announcementsMotorcycle, setAnnouncementsMotorcycle] = useState<
    AnnouncementResponse[]
  >([]);
  const [allAnnouncementByAdvertiser, setAllAnnouncementByAdvertiser] =
    useState<AnnouncementResponse[]>([]);
  const [allAnnouncements, setAllAnnouncements] = useState<
    AnnouncementResponse[]
  >([]);
  const [reload, setReload] = useState<boolean>(false);
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
        },
      });

      setAnnouncement(response.data);

      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    } catch (error) {
      if (error instanceof AxiosError) {
        error.response?.status === 500 &&
          setTimeout(() => {
            logout();
            // navigate('/error', {replace: true});
          }, 5000);
      }
    }
  };

  const getAllAnnouncements = async () => {
    try {
      const response = await api.get("/announcements/");

      setAllAnnouncements(response.data);

      const announcementsByCars = response.data.filter(
        (element: AnnouncementResponse) => {
          return element.vehicle.type === "car";
        }
      );
      const announcementsByMotorcycle = response.data.filter(
        (element: AnnouncementResponse) => {
          return element.vehicle.type === "motorcycle";
        }
      );
      setAnnouncementsCars(announcementsByCars);
      setAnnouncementsMotorcycle(announcementsByMotorcycle);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  };

  const getAllAnnouncementByAdvertiser = (advertiserId: string) => {
    try {
      const allAnnouncementByAdvertiser = allAnnouncements.filter((element) => {
        return element.advertiser.id === advertiserId;
      });
      setAllAnnouncementByAdvertiser(allAnnouncementByAdvertiser);
    } catch (error) {}
  };

  useEffect(() => {
    let decoded: JwtPayload = {
      exp: 1,
      iat: 1,
      sub: "error",
    };
    const token = getToken();

    if (token) {
      decoded = jwt_decode(token!);
    }
    getUser(decoded.sub!);
    getAllAnnouncements();
  }, [reload]);

  return (
    <Context.Provider
      value={{
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
        detailAnoucements,
        setDetailAnoucements,
        getAllAnnouncementByAdvertiser,
        allAnnouncementByAdvertiser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const AnnouncementContext = () => useContext(Context);
